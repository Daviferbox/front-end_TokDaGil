import "../styles/empresa.css";
import Header from "../components/header";
import Footer from "../components/footer";

export default function Empresa() {
  return (
    <>
    <Header />
    <main className="empresa-container">
      <section className="empresa-conteudo">

        <div className="empresa-card">
          <div className="empresa-imagem">
            <div className="empresa-texto-imagem">
              Foto da empresa
            </div>
          </div>
          <p>
            Texto que fala sobre a fundação da empresa
          </p>
        </div>

        <div className="empresa-card">
          <div className="empresa-imagem">
            <div className="empresa-texto-imagem">
              Foto da equipe
            </div>
          </div>
          <p>
            Foto da equipe para os clientes saberem quem irão trabalhar
            nas decorações
          </p>
        </div>

        <div className="empresa-card">
          <div className="empresa-imagem">
            <div className="empresa-texto-imagem">
              Foto da decoradora
            </div>
          </div>
          <p>
            Foto pra saberem quem é a pessoa que cria as decorações
          </p>
        </div>

      </section>
    </main>
    <Footer />
    </>
  );
}
