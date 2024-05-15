import "./Sobre.css";
import { useEffect, useState } from "react";
import sobre from "../assets/sobre.png";
import ricardo from "../assets/EuRicardo.png";
import ricardo2 from "../assets/EuRicardo2.png";
import resume from "../assets/resume.pdf";

function Sobre() {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const element = document.getElementById("Sobre-scroll");
      if (element) {
        const elementTop = element.getBoundingClientRect().top;
        setIsVisible(elementTop < window.innerHeight);
      }
    };

    window.addEventListener("scroll", handleScroll);

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div className="Sobre" id="Sobre">
        <div className="container">
          <div className={`row teste ${isVisible ? "fade-in" : ""}`}>
            <div className="col-sm-12 col-md-12 col-lg-6 imgs">
              <img src={sobre} className="img-sobre"></img>
              <img src={ricardo2} className="img-sobre ricardo"></img>
            </div>
            <div className="col-sm-12 col-md-12 col-lg-6 text-sobre">
              <div className="title-sobre">
                <h3>// SOBRE MIM</h3>
              </div>
              <div className="subtitle">
                <h3>
                  <span className="cor6">Eu desenho e codifico</span>{" "}
                  experiências de usuário digitais bem pensadas e{" "}
                  <span className="cor7">
                    adoraria trabalhar com você ou com sua empresa!
                  </span>
                </h3>
              </div>
              <div className="text cor8">
                <p id="Sobre-scroll">
                  Olá, eu sou Ricardo, um jovem de 19 anos apaixonado por
                  tecnologia em busca de me tornar um desenvolvedor web
                  altamente qualificado. Comecei minha jornada adquirindo
                  conhecimento em desenvolvimento de sistemas por meio de um
                  curso técnico. Atualmente, estou cursando Análise e
                  Desenvolvimento de Sistemas, aprofundando meu conhecimento em
                  programação web, desenvolvimento de aplicativos e
                  gerenciamento de projetos
                </p>
                <p>
                  Além da minha paixão pela tecnologia, também sou uma pessoa
                  muito dedicada e comprometida. Acredito que o trabalho em
                  equipe e a comunicação eficaz são fundamentais para o sucesso
                  em qualquer projeto.
                </p>
              </div>
              <div className="curriculo">
                <a href={resume} download="Curriculo-Ricardo">
                  <h1>DOWNLOAD CV</h1>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Sobre;
