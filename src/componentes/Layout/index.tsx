import { Outlet } from "react-router-dom";
import MenuLateral from "../MenuLateral";
import "./styles.css";

export default function Layout() {
    return (
      <div className="container">
        <MenuLateral />
        <div className="conteudo-principal">
          <Outlet />
        </div>
      </div>
    );
  }