import "./header.css";

export default function Header() {
  return (
    <header className="teste">
      <div className="Fundo">
        <div className="nome">Tok da Gil</div>
        <nav className="botoes">
        <span>Menu</span>    
        <span>Empresa</span>
        <span>Decorações</span>
        <span>Contato</span>
        </nav>
      </div>
    </header>
  );
}
