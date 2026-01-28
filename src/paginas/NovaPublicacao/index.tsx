import FormularioProjeto from "../../componentes/FormularioProjeto";
import { Projeto } from "../../tipagem/Projeto";

export default function NovaPublicacao() {
  function criarProjeto(projeto: Projeto) {
    console.log("Projeto criado:", projeto);
    // Aqui você pode chamar uma API ou salvar no banco
  }

  return (
    <div>
      <FormularioProjeto onSubmit={criarProjeto} />
    </div>
  );
}
