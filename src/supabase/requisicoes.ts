import { ProjetoAntesDoSupabase } from "../tipagem/ProjetoAntesDoSupabase";
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
export function criarPostagem(postagem: ProjetoAntesDoSupabase) {
    if (postagem.imagem) {
        return enviarImagem(postagem.imagem).then((urlImagem) => {
            if (!urlImagem) {
                console.error("Não foi possível obter a URL da imagem ❌");
                return null;
            }

            const postagemComImagem = {
                ...postagem, // Pega todos os atributos da postagem e subtitui a imagem que antes era um arquivo para utilizar a URL.
                imagem: urlImagem
            }

            // Agora podemos fazer a requisição para o supabase
            // insert -> método de inserção de publicação no supabase
            return supabase
                .from("Publicação")
                .insert([postagemComImagem]) // Envia o objeto postagem para o banco de dados -> Trocamos postagem por postagemComImagem
                .then(({ data, error }) => {
                    if (error) {
                        console.error("Erro ao criar uma nova postagem ❌", error.message);
                        return null; // Nada será retornado além do erro.
                    }

                    return data;
                });
        });
    }
}

export function enviarImagem(arquivo: File) {
    const nomeUnico = `${Date.now()}-${arquivo.name}`;
    return supabase.storage // O bucket ficar dentro do storage
        .from("imagens")
        .upload(nomeUnico, arquivo)
        .then(({ data, error }) => {
            if (error || !data) {
                console.error("Erro ao enviar a imagem ❌", error.message);
                return null;
            }

            const { publicUrl } = supabase.storage.from("imagens").getPublicUrl(nomeUnico).data;

            return publicUrl;
        }
        );
}