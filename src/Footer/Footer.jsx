import "./Footer.css";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";

function Footer() {
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
      <div className="Footer">
        <div className="container">
          <div className="row footer-content">
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
                type="number"
                placeholder="Digite seu telefone de contato"
                onChange={(e) => setTel(e.target.value)}
                value={tel}
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
            <div className="col-sm-12 col-md-4 col-lg-4">
              <div className="topics social-content">
                <div className="title">
                  <h5>Redes Sociais</h5>
                </div>
                <div className="midias-sociais"></div>
              </div>
            </div>
            <div className="col-sm-12 col-md-4 col-lg-4">
              <div className="topics contato">
                <div className="title">
                  <h5>Contato</h5>
                </div>
                <div className="contato-content">
                    <p>+55 (13)9 8855-5587 </p>
                    <p>ricardoxsobral@gmail.com</p>
                    <p></p>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-4 col-lg-4">
              <div className="topics local">
                <div className="title">
                  <h5>Localização</h5>
                </div>
                <div className="midias-sociais"></div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12 footer-copy"></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
