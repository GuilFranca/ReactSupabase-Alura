import { useEffect, useState } from "react";
import Card from "../../componentes/Card";
import "./styles.css";
import { buscarPostagens } from "../../supabase/requisicoes";
import { Projeto } from "../../tipagem/Projeto";

export default function PaginaInicial() {

  // Projeto[] -> Tipagem de lista de projeto
  const [postagens, setPostagens] = useState<Projeto[]>([]);

  useEffect(() => {
    buscarPostagens().then((dados) => {
      // console.log(dados);
      setPostagens(dados);
    })
  }, []);

  return (
    <div>
      <ul className="lista-cards">
        {postagens.map((postagem) => (
          <li key={postagem.id}>
            <Card
              id={postagem.id}
              imagemUrl={postagem.imagem}
              titulo={postagem.nome}
              resumo={postagem.descricao}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
