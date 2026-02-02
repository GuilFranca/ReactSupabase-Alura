import { useEffect, useState } from "react";
import FormularioProjeto from "../../componentes/FormularioProjeto";
import { Projeto } from "../../tipagem/Projeto";
import { useParams } from "react-router-dom";
import { buscarPostagemPorId } from "../../supabase/requisicoes";

export default function EditarPublicacao() {
  const [projeto, setProjeto] = useState<Projeto>(); // Utilizado para armazenar as informações do objeto projeto
  const {id} = useParams(); // Utilizado para receber o parametro de id

  useEffect(() => { // Com este useEffect carregamos os atributos do objeto da postagem e enviamos para o useState projeto
    if (id) {
      buscarPostagemPorId(id).then((projetoBuscado) => {
        setProjeto(projetoBuscado);
      })
    }
  }, []);

  function atualizarProjeto(projeto: Projeto) {
    console.log("Projeto atualizado:", projeto);
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
