import { Projeto } from "../tipagem/Projeto";
import { supabase } from "./supabaseClient";

export function buscarPostagens() {
    // .from("nome-tabela") Define qual tabela será selecionada
    // .select("coluna") Define quais colunas serão retornadas "*" -> todas
    // Desse return será retornado uma promisse como um fetch (assync)
    return supabase
        .from("Publicação")
        .select("*")
        .then(({ data, error }) => {
            if (error) {
                console.error("Erro ao buscar postagens ❌", error.message);
                return [];
            }

            return data;
        });
}

// Tipamos o que vamos enviar com a tipagem Projeto para padronizar o que pode ser enviado
export function criarPostagem(postagem: Projeto) {
    // insert -> método de inserção de publicação no supabase
    return supabase
        .from("Publicação")
        .insert([postagem]) // Envia o objeto postagem para o banco de dados
        .then(({data, error}) => {
            if (error) {
                console.log("Erro ao criar uma nova postagem ❌", error.message);
                return null; // Nada será retornado além do erro.
            }

            return data;
        });
}