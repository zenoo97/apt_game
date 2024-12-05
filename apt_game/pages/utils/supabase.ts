import { createClient } from '@supabase/supabase-js';


const supabaseUrl = process.env.REACT_APP_SUPABASE_URL;
const supabaseKey = process.env.REACT_APP_SUPABASE_SERVICE_ROLE_KEY;

export const supabase = createClient("https://eybfpwveiudecbntszwv.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImV5YmZwd3ZlaXVkZWNibnRzend2Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTczMzM3MTc4NCwiZXhwIjoyMDQ4OTQ3Nzg0fQ.sUlrkwobbhAIMdQKkQyQmty2I07JQ8CbU08UlKGvaf0");
