import "./Projects.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { useEffect, useState } from "react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import adv from "../assets/adv.png";
import doa from "../assets/doa.png";
import fazbem from "../assets/fazbem.png";
import novomercado from "../assets/novo-mercado.png";
import tempo from "../assets/tempo.png";
import liceu from "../assets/liceu.png";
import ricardo from "../assets/ricardo.png";
import globalads from "../assets/globalads.png";
import juliana from "../assets/juliana.png";
import chapet from "../assets/chapet.png";
import secret from "../assets/secret-word.png";

import { EffectCoverflow, Pagination } from "swiper/modules";

function Projects() {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const element = document.getElementById("Projects-scroll");
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
      <div className="Projects" id="Projects">
        <div className={`teste ${isVisible ? "fade-in" : ""}`}>
          <div className="container">
            <div className="row">
              <div className="col-12 text-projects">
                <div className="title-projects">
                  <h3>// MEUS PROJETOS</h3>
                </div>
                <div className="subtitle">
                  <h1>
                    Confira alguns dos meus{" "}
                    <span className="cor6">
                      projetos pessoais e profissionais
                    </span>{" "}
                    que eu <span className="cor7">já realizei</span>...
                  </h1>
                </div>
              </div>
            </div>
          </div>
          <Swiper
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={"auto"}
            coverflowEffect={{
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
            }}
            pagination={true}
            modules={[EffectCoverflow, Pagination]}
            className="mySwiper"
          >
            <SwiperSlide>
              <a href="https://ricardoxsobral.com.br/projetos/secret-word/" target="_blank">
                <img id="Projects-scroll" src={secret} />
              </a>
              <div className="infos">
                <h4>Secrete Word</h4>
                <div className="btns">
                  <a href="https://ricardoxsobral.com.br/projetos/secret-word/" target="_blank">
                    <h5>Acessar</h5>
                  </a>
                  <a
                    href="https://github.com/ricardoxsobral/secret-word"
                    target="_blank"
                  >
                    <h5>GitHub</h5>
                  </a>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <a
                href="https://taori.com.br/cha-pet/"
                target="_blank"
              >
                <img id="Projects-scroll" src={chapet} />
              </a>
              <div className="infos">
                <h4 >Landing Page - Chá-Pet</h4>
                <div className="btns">
                  <a
                    href="https://taori.com.br/cha-pet/"
                    target="_blank"
                  >
                    <h5>Acessar</h5>
                  </a>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <a
                href="https://globalads.pro/"
                target="_blank"
              >
                <img id="Projects-scroll" src={globalads} />
              </a>
              <div className="infos">
                <h4>Global ADS</h4>
                <div className="btns">
                  <a
                    href="https://globalads.pro/"
                    target="_blank"
                  >
                    <h5>Acessar</h5>
                  </a>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <a
                href="https://julianafenix.com/"
                target="_blank"
              >
                <img id="Projects-scroll" src={juliana} />
              </a>
              <div className="infos">
                <h4>Site pessoal - Juliana Fênix</h4>
                <div className="btns">
                  <a
                    href="https://julianafenix.com/"
                    target="_blank"
                  >
                    <h5>Acessar</h5>
                  </a>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <a
                href="https://liceusaopaulo.com.br/concurso-de-bolsas-2024-cadastro/"
                target="_blank"
              >
                <img id="Projects-scroll" src={liceu} />
              </a>
              <div className="infos">
                <h4>Concurso de Bolsas</h4>
                <div className="btns">
                  <a
                    href="https://liceusaopaulo.com.br/concurso-de-bolsas-2024-cadastro/"
                    target="_blank"
                  >
                    <h5>Acessar</h5>
                  </a>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <a href="https://ricardoxsobral.com.br/projetos/portfolio1/" target="_blank">
                <img id="Projects-scroll" src={ricardo} />
              </a>
              <div className="infos">
                <h4>1º Portfólio</h4>
                <div className="btns">
                  <a href="https://ricardoxsobral.com.br/projetos/portfolio1/" target="_blank">
                    <h5>Acessar</h5>
                  </a>
                  <a
                    href="https://github.com/ricardoxsobral/portfolio"
                    target="_blank"
                  >
                    <h5>GitHub</h5>
                  </a>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <a href="https://www.advtavares.com.br/" target="_blank">
                <img id="Projects-scroll" src={adv} />
              </a>
              <div className="infos">
                <h4>MPT ADVOCACIA</h4>
                <div className="btns">
                  <a href="https://www.advtavares.com.br/" target="_blank">
                    <h5>Acessar</h5>
                  </a>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <a href="http://programafazbem.tv.br/" target="_blank">
                <img id="Projects-scroll" src={fazbem} />
              </a>
              <div className="infos">
                <h4>Programa Faz Bem</h4>
                <div className="btns">
                  <a href="http://programafazbem.tv.br/" target="_blank">
                    <h5>Acessar</h5>
                  </a>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <a
                href="https://www.ricardoxsobral.com.br/projetos/DOA/"
                target="_blank"
              >
                <img id="Projects-scroll" src={doa} />
              </a>
              <div className="infos">
                <h4>DOA</h4>
                <div className="btns">
                  <a
                    href="https://www.ricardoxsobral.com.br/projetos/DOA/"
                    target="_blank"
                  >
                    <h5>Acessar</h5>
                  </a>
                  <a
                    href="https://github.com/ricardoxsobral/TCC-DOA"
                    target="_blank"
                  >
                    <h5>GitHub</h5>
                  </a>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <a
                href="https://ricardoxsobral.com.br/projetos/weather-api/"
                target="_blank"
              >
                <img id="Projects-scroll" src={tempo} />
              </a>
              <div className="infos">
                <h4>Weather API</h4>
                <div className="btns">
                  <a
                    href="https://ricardoxsobral.com.br/projetos/weather-api/"
                    target="_blank"
                  >
                    <h5>Acessar</h5>
                  </a>
                  <a
                    href="https://github.com/ricardoxsobral/OpenWeatherAPI/tree/meu-novo-branch"
                    target="_blank"
                  >
                    <h5>GitHub</h5>
                  </a>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  );
}

export default Projects;
