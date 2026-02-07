import "./Footer.css";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-brand">
          <h3>Davi Fernandes da Silva</h3>
          <p>
            Desenvolvimento de soluções web modernas, focadas em desempenho,
            usabilidade e resultados.
          </p>
        </div>

        <div className="footer-links">
          <h4>Links</h4>
          <ul>
            <li><a href="#">Início</a></li>
            <li><a href="#">Projetos</a></li>
            <li><a href="#">Sobre</a></li>
            <li><a href="#">Contato</a></li>
          </ul>
        </div>

        <div className="footer-contact">
          <h4>Contato</h4>
          <p>Email: [EMAIL_ADDRESS]</p>
          <p>WhatsApp: (11) 99999-9999</p>
        </div>

      </div>

      <div className="footer-bottom">
        <p>© {year} Davi Fernandes da Silva • Todos os direitos reservados</p>
      </div>
    </footer>
  );
};

export default Footer;
