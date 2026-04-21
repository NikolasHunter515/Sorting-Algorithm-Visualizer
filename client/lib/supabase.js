import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY;

await supabase.from("profiles").insert({
  id: user.id,
  email: user.email
});

export const supabase = createClient(supabaseUrl, supabaseKey);