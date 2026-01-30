import FormularioProjeto from "../../componentes/FormularioProjeto";
import { criarPostagem } from "../../supabase/requisicoes";
import { ProjetoAntesDoSupabase } from "../../tipagem/ProjetoAntesDoSupabase";

export default function NovaPublicacao() {
  function criarProjeto(projeto: ProjetoAntesDoSupabase) {
    criarPostagem(projeto)
    // Aqui você pode chamar uma API ou salvar no banco
  }

  return (
    <div>
      <FormularioProjeto onSubmit={criarProjeto} />
    </div>
  );
}
