import Card from "../../componentes/Card";
import "./styles.css";

export default function PaginaInicial() {
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
