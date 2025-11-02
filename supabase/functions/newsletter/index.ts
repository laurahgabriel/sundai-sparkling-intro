import { serve } from "https://deno.land/std@0.190.0/http/server.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

interface NewsletterRequest {
  email: string;
}

// Function to get Google OAuth token from service account
async function getAccessToken(serviceAccountKey: any): Promise<string> {
  const header = {
    alg: "RS256",
    typ: "JWT",
  };

  const now = Math.floor(Date.now() / 1000);
  const claim = {
    iss: serviceAccountKey.client_email,
    scope: "https://www.googleapis.com/auth/spreadsheets",
    aud: "https://oauth2.googleapis.com/token",
    exp: now + 3600,
    iat: now,
  };

  // Encode header and claim
  const encodedHeader = btoa(JSON.stringify(header)).replace(/=/g, '').replace(/\+/g, '-').replace(/\//g, '_');
  const encodedClaim = btoa(JSON.stringify(claim)).replace(/=/g, '').replace(/\+/g, '-').replace(/\//g, '_');
  const signatureInput = `${encodedHeader}.${encodedClaim}`;

  // Import private key
  const pemHeader = "-----BEGIN PRIVATE KEY-----";
  const pemFooter = "-----END PRIVATE KEY-----";
  const pemContents = serviceAccountKey.private_key.substring(
    pemHeader.length,
    serviceAccountKey.private_key.length - pemFooter.length - 1
  ).trim();

  const binaryDer = Uint8Array.from(atob(pemContents), c => c.charCodeAt(0));

  const key = await crypto.subtle.importKey(
    "pkcs8",
    binaryDer,
    {
      name: "RSASSA-PKCS1-v1_5",
      hash: "SHA-256",
    },
    false,
    ["sign"]
  );

  // Sign the JWT
  const signature = await crypto.subtle.sign(
    "RSASSA-PKCS1-v1_5",
    key,
    new TextEncoder().encode(signatureInput)
  );

  const encodedSignature = btoa(String.fromCharCode(...new Uint8Array(signature)))
    .replace(/=/g, '')
    .replace(/\+/g, '-')
    .replace(/\//g, '_');

  const jwt = `${signatureInput}.${encodedSignature}`;

  // Exchange JWT for access token
  const tokenResponse = await fetch("https://oauth2.googleapis.com/token", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: new URLSearchParams({
      grant_type: "urn:ietf:params:oauth:grant-type:jwt-bearer",
      assertion: jwt,
    }),
  });

  const tokenData = await tokenResponse.json();
  
  if (!tokenResponse.ok) {
    console.error("Token error:", tokenData);
    throw new Error(`Failed to get access token: ${JSON.stringify(tokenData)}`);
  }

  return tokenData.access_token;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    console.log("Newsletter subscription request received");

    const { email }: NewsletterRequest = await req.json();
    
    if (!email || !email.includes('@')) {
      return new Response(
        JSON.stringify({ error: "Invalid email address" }),
        {
          status: 400,
          headers: { "Content-Type": "application/json", ...corsHeaders },
        }
      );
    }

    // Get environment variables
    let serviceAccountKeyStr = Deno.env.get("GOOGLE_SERVICE_ACCOUNT_KEY");
    const spreadsheetId = Deno.env.get("GOOGLE_SPREADSHEET_ID");

    if (!serviceAccountKeyStr || !spreadsheetId) {
      console.error("Missing required environment variables");
      return new Response(
        JSON.stringify({ error: "Server configuration error" }),
        {
          status: 500,
          headers: { "Content-Type": "application/json", ...corsHeaders },
        }
      );
    }

    // Clean up the key string - remove any wrapping quotes or extra whitespace
    serviceAccountKeyStr = serviceAccountKeyStr.trim();
    
    // If the entire JSON is wrapped in quotes, remove them
    if (serviceAccountKeyStr.startsWith('"') && serviceAccountKeyStr.endsWith('"')) {
      serviceAccountKeyStr = serviceAccountKeyStr.slice(1, -1);
      // Unescape any escaped quotes
      serviceAccountKeyStr = serviceAccountKeyStr.replace(/\\"/g, '"');
    }

    let serviceAccountKey;
    try {
      serviceAccountKey = JSON.parse(serviceAccountKeyStr);
    } catch (parseError) {
      console.error("Failed to parse service account key:", parseError);
      console.error("Key starts with:", serviceAccountKeyStr.substring(0, 50));
      return new Response(
        JSON.stringify({ 
          error: "Invalid service account key format. Please ensure you've pasted the complete JSON key from Google Cloud Console." 
        }),
        {
          status: 500,
          headers: { "Content-Type": "application/json", ...corsHeaders },
        }
      );
    }
    
    // Get access token
    console.log("Getting access token...");
    const accessToken = await getAccessToken(serviceAccountKey);
    console.log("Access token obtained");

    // Prepare data to append
    const timestamp = new Date().toISOString();
    const values = [[email, timestamp]];

    // Append to Google Sheet
    console.log("Appending to Google Sheet...");
    const appendUrl = `https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}/values/Newsletter!A:B:append?valueInputOption=USER_ENTERED`;
    
    const appendResponse = await fetch(appendUrl, {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${accessToken}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        values: values,
      }),
    });

    const appendData = await appendResponse.json();
    
    if (!appendResponse.ok) {
      console.error("Google Sheets API error:", appendData);
      throw new Error(`Failed to append to sheet: ${JSON.stringify(appendData)}`);
    }

    console.log("Successfully added email to newsletter:", email);

    return new Response(
      JSON.stringify({ 
        success: true,
        message: "Successfully subscribed to newsletter" 
      }),
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
          ...corsHeaders,
        },
      }
    );
  } catch (error: any) {
    console.error("Error in newsletter function:", error);
    return new Response(
      JSON.stringify({ 
        error: error.message || "Failed to process newsletter subscription" 
      }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
