import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.React_APP_SUPABASE_URL as string;
const chaveApi = process.env.React_APP_SUPABASE_KEY as string;

// Primeiro URL depois a Chave
export const supabase = createClient(supabaseUrl, chaveApi); // Esta função vai retornar um objeto com o nosso banco de dados dentro do supabase