import FormularioProjeto from "../../componentes/FormularioProjeto";
import { Projeto } from "../../tipagem/Projeto";

const projetoFake = {
  nome: "React zero to hero",
  descricao: "Descrição existente...",
  imagem: null,
  tags: ["React", "Front-end"],
};

export default function EditarPublicacao() {
  function atualizarProjeto(projeto: Projeto) {
    console.log("Projeto atualizado:", projeto);
  }

  return (
    <div>
      <FormularioProjeto projetoInicial={projetoFake} onSubmit={atualizarProjeto} />
    </div>
  );
}
