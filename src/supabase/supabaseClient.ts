import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://fnoyyqykixbuafxtprcj.supabase.co";
const chaveApi = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZub3l5cXlraXhidWFmeHRwcmNqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Njk2NDE3NjQsImV4cCI6MjA4NTIxNzc2NH0.UwKPsolFsg4S9tP8AyCuYczs7E2g06BTbL8oYL_2TY8";

// Primeiro URL depois a Chave
export const supabase = createClient(supabaseUrl, chaveApi); // Esta função vai retornar um objeto com o nosso banco de dados dentro do supabase