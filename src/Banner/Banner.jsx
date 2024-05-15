import "./Banner.css";
import { useState, useEffect } from "react";

function Banner() {
  const [animate, setAnimate] = useState(true);

  useEffect(() => {

    setAnimate(true);
    const animationTimeout = setTimeout(() => {
      setAnimate(false);
    }, 1000);

    return () => clearTimeout(animationTimeout);
  }, []);

  return (
    <>
      <div className="Banner" id="Banner">
        <div className="container-fluid">
          <div className={`banner-content ${animate ? "slide-right" : ""}`}>
            <div className="row bg-banner">
              <div className="linhas">
                <div className="coluna1">
                  <p className="numeral">1</p>
                </div>
                <div className="coluna2">
                  <p className="cor1">//Hello World!</p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="linhas">
                <div className="coluna1">
                  <p className="numeral">2</p>
                </div>
                <div className="coluna2">
                  <p className="cor2">
                    Eu sou Ricardo <span className="cor3">=</span>{" "}
                    <span className="cor5">&lt;</span>
                    <span className="cor4">desenvolvedor web</span>
                    <span className="cor5">/&gt;;</span>
                  </p>
                </div>
              </div>
            </div>
            <div className="row bg-banner">
              <div className="linhas">
                <div className="coluna1">
                  <p className="numeral">3</p>
                </div>
                <div className="coluna2">
                  <p className="cor2">
                    Apaixonado por <span className="cor5">código</span>{" "}
                    <span className="cor3">
                      = true<span className="cor5">;</span>
                    </span>
                  </p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="linhas">
                <div className="coluna1">
                  <p className="numeral">4</p>
                </div>
                <div className="coluna2">
                  <p className="cor3">
                    Constantemente <span className="cor2">estudando</span>{" "}
                    <span className="cor5">(</span>
                    <span className="cor4">!</span>
                    <span className="cor5">);</span>
                  </p>
                </div>
              </div>
            </div>
            <div className="row bg-banner easter">
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Banner;
