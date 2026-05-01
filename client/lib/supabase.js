import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseKey) {
    throw new Error("Missing Supabase env variables — check your .env.local file");
}

export const supabase = createClient(supabaseUrl, supabaseKey);

export async function createProfile(user) {
  if (!user) {
    console.error("No user provided");
    return;
  }

  const { data, error } = await supabase.from("profiles").insert({
    id: user.id,
    email: user.email,
  });

  if (error) {
    console.error("Supabase insert error:", error);
    return null;
  }

  return data;
}