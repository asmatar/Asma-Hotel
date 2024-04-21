import { createClerkSupabaseClient } from "./supabaseClient";

export const getHotels = async () => {
  const supabase = await createClerkSupabaseClient();
  const { data, error } = await supabase.from("hotel").select("*");
  if (error) {
    console.error(error);
    return [];
  }
  return data;
};
