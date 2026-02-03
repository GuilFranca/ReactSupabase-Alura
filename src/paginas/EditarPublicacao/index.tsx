import { useEffect, useState } from "react";
import FormularioProjeto from "../../componentes/FormularioProjeto";
import { Projeto } from "../../tipagem/Projeto";
import { useParams } from "react-router-dom";
import { atualizarPostagem, buscarPostagemPorId, enviarImagem } from "../../supabase/requisicoes";
import { ProjetoAntesDoSupabase } from "../../tipagem/ProjetoAntesDoSupabase";

export default function EditarPublicacao() {
  const [projeto, setProjeto] = useState<Projeto>(); // Utilizado para armazenar as informações do objeto projeto
  const {id} = useParams(); // Utilizado para receber o parametro de id

  useEffect(() => { // Com este useEffect carregamos os atributos do objeto da postagem e enviamos para o useState projeto
    if (id) {
      buscarPostagemPorId(id).then((projetoBuscado) => {
        setProjeto(projetoBuscado);
      })
    }
  }, [id]);

  function atualizarProjeto(projetoEnviado: ProjetoAntesDoSupabase) {
    if (!id || !projeto) return;

    // instanceof verifica a tipagem, nesse caso querendo saber se é um arquivo
    if (projetoEnviado.imagem instanceof File) {
      enviarImagem(projetoEnviado.imagem).then((urlDaImage) => {
        if (!urlDaImage) {
          console.error("Erro ao atualizar a imagem da publicação! ❌");
          return;
        }

        const projetoAtualizado = {
          ...projetoEnviado,
          id,
          imagem: urlDaImage,
        }

        atualizarPostagem(id, projetoAtualizado);
      })
    } else {
      const projetoAtualizado = {
        ...projetoEnviado,
        id,
        imagem: projeto.imagem,
      }

      atualizarPostagem(id, projetoAtualizado);
    }
  }

  return (
    <div>
      {projeto ? ( // Criamos um if para verificar se o objeto projeto foi retornado corretamente, para assim alternar entre carregando projeto ou o projeto em si
      <FormularioProjeto projetoInicial={projeto} onSubmit={atualizarProjeto} />
      ) : (
        <p>Carregando projeto...</p>
      )}
    </div>
  );
}
