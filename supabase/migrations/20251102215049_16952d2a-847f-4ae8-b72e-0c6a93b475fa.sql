-- Create subscribers table
CREATE TABLE public.subscribers (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  email TEXT NOT NULL UNIQUE,
  phone TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.subscribers ENABLE ROW LEVEL SECURITY;

-- Create policy to allow anyone to insert (public newsletter signup)
CREATE POLICY "Anyone can subscribe" 
ON public.subscribers 
FOR INSERT 
WITH CHECK (true);

-- Create policy to allow anyone to update their own phone number by email
CREATE POLICY "Anyone can update phone by email" 
ON public.subscribers 
FOR UPDATE 
USING (true)
WITH CHECK (true);

-- Create index on email for faster lookups
CREATE INDEX idx_subscribers_email ON public.subscribers(email);

-- Add comment for documentation
COMMENT ON TABLE public.subscribers IS 'Stores newsletter subscribers with optional phone numbers for WhatsApp group';