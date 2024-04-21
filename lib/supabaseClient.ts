import { createClient } from "@supabase/supabase-js";

export const createClerkSupabaseClient = async () => {
  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_KEY!,
  );

  return supabase;
};
