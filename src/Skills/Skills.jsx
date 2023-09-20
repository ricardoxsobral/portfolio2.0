import "./Skills.css";
import html from "../assets/html (1).png";
import css from "../assets/css (1).png";
import js from "../assets/js (2).png";
import boot from "../assets/boot.png";
import react from "../assets/react.png";
import word from "../assets/wordpress.png";
import php from "../assets/php.png";
import sql from "../assets/sql.png";

function Skills() {
  return (
    <>
      <div className="Skills" id="Skills">
        <div className="container">
          <div className="row ">
            <div className="col-12 text-skills">
              <div className="title-skills">
                <h3>// HABILIDADES</h3>
              </div>
              <div className="subtitle">
                <h1>
                  Aqui estão algumas{" "}
                  <span className="cor6">linguagens e frameworks</span> que eu
                  possuo{" "}
                  <span className="cor7">conhecimento e experiência</span>...
                </h1>
              </div>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-3">
              <div className="imgs-skills">
                <div className="html imgs">
                  <img src={html}></img>
                  <p className="cor8">HTML</p>
                </div>
                <div className="react imgs">
                  <img src={react}></img>
                  <p className="cor8">React</p>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-3">
              <div className="imgs-skills">
              <div className="css imgs">
                  <img src={css}></img>
                  <p className="cor8">CSS</p>
                </div>
                <div className="sql imgs">
                  <img src={sql}></img>
                  <p className="cor8">SQL</p>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-3">
              <div className="imgs-skills">
              <div className="js imgs">
                  <img src={js}></img>
                  <p className="cor8">JavaScript</p>
                </div>
                <div className="word imgs">
                  <img src={word}></img>
                  <p className="cor8">Wordpress</p>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-3">
              <div className="imgs-skills">
              <div className="boot imgs">
                  <img src={boot}></img>
                  <p className="cor8">BootsStrap</p>
                </div>
                <div className="php imgs">
                  <img src={php}></img>
                  <p className="cor8">PHP</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr className="cor8"></hr>
      </div>
    </>
  );
}

export default Skills;
