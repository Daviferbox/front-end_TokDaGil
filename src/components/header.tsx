import "./header.css";
import { useNavigate } from "react-router-dom";

export default function Header() {

  const navigate = useNavigate();

  const handleNavigateEmpresa = () => {
  navigate("/Empresa");
 }

 const handleNavigateHome = () => {
  navigate("/Home");
 }

  return (
    <header className="teste">
      <div className="Fundo">
        <div className="nome">Tok da Gil</div>
        <div className="botoes">
        <div onClick={handleNavigateHome}>Menu</div>    
        <div onClick={handleNavigateEmpresa}>Empresa</div>
        <div>Decorações</div>
        <div>Contato</div>
        </div>
      </div>
    </header>
  );
}
