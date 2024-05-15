import "./Footer.css";
import { useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";
import insta from "../assets/insta.png";
import linkedin from "../assets/linkedin.png";
import github from "../assets/github.png";
import instaHover from "../assets/insta-hover.png";
import githubHover from "../assets/github-hover.png";
import linkedinHover from "../assets/linkedin-hover.png";
import seta from "../assets/seta.png";

function SocialIcon({ defaultImage, hoverImage }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`icon-social ${isHovered ? "hovered" : ""}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img src={isHovered ? hoverImage : defaultImage} alt="Social Icon" />
    </div>
  );
}

function Footer() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const element = document.getElementById("Footer-scroll");
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
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [tel, setTel] = useState("");
  const [message, setMessage] = useState("");

  function sendEmail(e) {
    e.preventDefault();

    const templateParams = {
      from_name: name,
      telefone: tel,
      email: email,
      message: message,
    };

    if (name === "" || email === "" || tel === "" || message === "") {
      Swal.fire({
        icon: "error",
        title: "Erro ao Enviar",
        text: "Um ou mais campos não foram digitados, digite-os",
      });
    } else {
      emailjs
        .send(
          "service_lh3beyg",
          "template_hla43yc",
          templateParams,
          "_LrIkOhwxMtCgFIuk"
        )
        .then((response) => {
          console.log("Email enviado", response.status, response.text);
          setName("");
          setEmail("");
          setTel("");
          setMessage("");

          Swal.fire({
            icon: "success",
            title: "Email Enviado",
            text: "Seu email foi enviado com sucesso!",
          });
        })
        .catch((err) => {
          console.error("Erro ao enviar email", err);

          Swal.fire({
            icon: "error",
            title: "Erro ao Enviar",
            text: "Houve um erro ao enviar o email. Por favor, tente novamente.",
          });
        });
    }
  }

  return (
    <>
      <div className="Footer" id="Contato">
        <div className="container">
          <div
            className={`row footer-content up ${isVisible ? "fade-in" : ""}`}
          >
            <div className="col-12 footer-title">
              <h3>// CONTATO</h3>
            </div>
            <div className="title">
              <h2 className="cor2">
                Quer conversar sobre seu{" "}
                <span className="cor4">projeto Web</span>
                <span className="cor3">?</span> Fique a vontade{" "}
                <span className="cor3">&</span> entre em contato comigo
                <span className="cor3">!</span>
              </h2>
            </div>
            <form className="form" onSubmit={sendEmail}>
              <input
                className="input"
                type="text"
                placeholder="Digite seu nome"
                onChange={(e) => setName(e.target.value)}
                value={name}
              />

              <input
                className="input"
                type="text"
                placeholder="Digite seu email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />

              <input
                className="input"
                type="tel"
                placeholder="Digite seu telefone de contato"
                onChange={(e) => setTel(e.target.value)}
                value={tel}
                id="Footer-scroll"
              />

              <textarea
                className="textarea"
                placeholder="Digite sua mensagem..."
                onChange={(e) => setMessage(e.target.value)}
                value={message}
              />

              <input className="button" type="submit" value="Enviar" />
            </form>
          </div>
          <div className="row footer-content">
            <div className="col-sm-12 col-md-12 col-lg-4">
              <div className="topics social-content">
                <div className="title">
                  <h5>Redes Sociais</h5>
                </div>
                <div className="content midias-sociais">
                  <a href="https://www.instagram.com/sobraiii/" target="_blank">
                    <SocialIcon defaultImage={insta} hoverImage={instaHover} />
                  </a>
                  <a href="https://github.com/ricardoxsobral" target="_blank">
                    <SocialIcon
                      defaultImage={github}
                      hoverImage={githubHover}
                    />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/ricardoxsobral/"
                    target="_blank"
                  >
                    <SocialIcon
                      defaultImage={linkedin}
                      hoverImage={linkedinHover}
                    />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-12 col-lg-4">
              <div className="topics contato">
                <div className="title">
                  <h5>Contato</h5>
                </div>
                <div className="content contato-content">
                  <a href="https://contate.me/ricardo-sobral" target="_blank">
                    <p className="cor2">
                      <span className="cor3">+</span>55 (
                      <span className="cor4">13</span>)9 8855-5587{" "}
                    </p>
                  </a>
                  <a href="mailto:ricardoxsobral@gmail.com" target="_blank">
                    <p className="cor2">
                      <span className="cor5">ricardoxsobral</span>
                      <span className="cor3">@</span>gmail
                      <span className="cor3">.</span>com
                    </p>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-12 col-lg-4">
              <div className="topics local">
                <div className="title">
                  <h5>Localização</h5>
                </div>
                <div className="content local-content">
                  <p className="cor2">
                    São Vicente <span className="cor3">-</span>{" "}
                    <span className="cor4">SP</span>
                  </p>
                  <p className="cor3">Brasil</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid">
          <div className="row">
            <div className="col-12 footer-copy">
              <hr></hr>
              <div className="test">
                <h4>Copyright © 2023 | Portfólio Ricardo - Todos direitos reservados | Ricardo Sobral</h4>
                <div className="to-up">
                  <a href="#Banner">
                    <img src={seta}></img>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
