import "./Projects.css";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import adv from "../assets/adv.png";
import doa from "../assets/doa.png";
import fazbem from "../assets/fazbem.png";
import novomercado from "../assets/novo-mercado.png";
import tempo from "../assets/tempo.png";
import liceu from "../assets/liceu.png";
import ricardo from "../assets/ricardo.png"

import { EffectCoverflow, Pagination } from "swiper/modules";

function Projects() {
  return (
    <>
      <div className="Projects" id="Projects">
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
          effect={"coverflow"}
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
            <a href="https://liceusaopaulo.com.br/concurso-de-bolsas-2024-cadastro/" target="_blank">
              <img src={liceu} />
            </a>
            <div className="infos">
              <h4>Concurso de Bolsas</h4>
              <div className="btns">
                <a href="https://liceusaopaulo.com.br/concurso-de-bolsas-2024-cadastro/" target="_blank">
                  <h5>Acessar</h5>
                </a>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <a href="http://ricardoxsobral.com.br/" target="_blank">
              <img src={ricardo} />
            </a>
            <div className="infos">
              <h4>1º Portfólio</h4>
              <div className="btns">
                <a href="http://ricardoxsobral.com.br/" target="_blank">
                  <h5>Acessar</h5>
                </a>
                <a href="https://github.com/ricardoxsobral/portfolio" target="_blank">
                  <h5>GitHub</h5>
                </a>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <a href="https://www.advtavares.com.br/" target="_blank">
              <img src={adv} />
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
              <img src={fazbem} />
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
          <a href="https://www.ricardoxsobral.com.br/projetos/DOA/" target="_blank">
              <img src={doa} />
            </a>
            <div className="infos">
              <h4>DOA</h4>
              <div className="btns">
                <a href="https://www.ricardoxsobral.com.br/projetos/DOA/" target="_blank">
                  <h5>Acessar</h5>
                </a>
                <a href="https://github.com/ricardoxsobral/TCC-DOA" target="_blank">
                  <h5>GitHub</h5>
                </a>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
          <a href="https://ricardoxsobral.com.br/projetos/novo-mercado/index.php" target="_blank">
              <img src={novomercado} />
            </a>
            <div className="infos">
              <h4>NOVO MERCADO</h4>
              <div className="btns">
                <a href="https://ricardoxsobral.com.br/projetos/novo-mercado/index.php" target="_blank">
                  <h5>Acessar</h5>
                </a>
                <a href="https://github.com/ricardoxsobral/o_novo_mercado" target="_blank">
                  <h5>GitHub</h5>
                </a>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
          <a href="https://ricardoxsobral.com.br/projetos/weather-api/" target="_blank">
              <img src={tempo} />
            </a>
            <div className="infos">
              <h4>Weather API</h4>
              <div className="btns">
                <a href="https://ricardoxsobral.com.br/projetos/weather-api/" target="_blank">
                  <h5>Acessar</h5>
                </a>
                <a href="https://github.com/ricardoxsobral/OpenWeatherAPI/tree/meu-novo-branch" target="_blank">
                  <h5>GitHub</h5>
                </a>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
}

export default Projects;
