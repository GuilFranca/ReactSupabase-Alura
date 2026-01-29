import { supabase } from "./supabaseClient";

export function buscarPostagens() {
    // .from("nome-tabela") Define qual tabela será selecionada
    // .select("coluna") Define quais colunas serão retornadas "*" -> todas
    // Desse return será retornado uma promisse como um fetch (assync)
    return supabase
        .from("postagem")
        .select("*")
        .then(({ data }) => data);
}