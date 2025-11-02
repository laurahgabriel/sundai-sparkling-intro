import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2.39.3';

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

interface SubscribeRequest {
  email: string;
  phone?: string;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    console.log("Newsletter subscription request received");

    const { email, phone }: SubscribeRequest = await req.json();
    
    // Validate email format
    if (!email || !email.includes('@')) {
      console.error("Invalid email format:", email);
      return new Response(
        JSON.stringify({ error: "Invalid email address" }),
        {
          status: 400,
          headers: { "Content-Type": "application/json", ...corsHeaders },
        }
      );
    }

    // Sanitize inputs
    const sanitizedEmail = email.trim().toLowerCase();
    const sanitizedPhone = phone?.trim() || null;

    // Initialize Supabase client
    const supabaseUrl = Deno.env.get('SUPABASE_URL')!;
    const supabaseKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!;
    const supabase = createClient(supabaseUrl, supabaseKey);

    console.log("Attempting to subscribe:", sanitizedEmail, phone ? "with phone" : "email only");

    // Try to insert or update the subscriber
    const { data, error } = await supabase
      .from('subscribers')
      .upsert(
        { 
          email: sanitizedEmail, 
          phone: sanitizedPhone 
        },
        { 
          onConflict: 'email',
          ignoreDuplicates: false 
        }
      )
      .select()
      .single();

    if (error) {
      console.error("Database error:", error);
      return new Response(
        JSON.stringify({ 
          error: "Failed to save subscription. Please try again." 
        }),
        {
          status: 500,
          headers: { "Content-Type": "application/json", ...corsHeaders },
        }
      );
    }

    console.log("Successfully subscribed:", sanitizedEmail);

    return new Response(
      JSON.stringify({ 
        success: true,
        message: "Successfully subscribed to newsletter",
        data: {
          email: data.email,
          hasPhone: !!data.phone
        }
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
