import { useEffect } from "react";
import Card from "../../componentes/Card";
import "./styles.css";
import { buscarPostagens } from "../../supabase/requisicoes";

export default function PaginaInicial() {

  useEffect(() => {
   buscarPostagens().then((dados) => {
    console.log(dados);
   }) 
  }, []);

  return (
    <div>
      <ul className="lista-cards">
        <li>
          <Card
            id={"123"}
            imagemUrl={"https://picsum.photos/200/300"}
            titulo={"Título do Card"}
            resumo={"Resumo do Card"}
          />
        </li>
      </ul>
    </div>
  );
}
