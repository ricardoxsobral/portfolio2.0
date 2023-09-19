import React, { useState } from "react";
import logo from "../../src/assets/logo-portfolio.png";
import "./Navbar.css";

function Navbar() {
  const [activeItem, setActiveItem] = useState(null);

  const handleItemClick = (itemName) => {
    setActiveItem(itemName);
  };

  const widht = window.innerWidth;

  const getItemStyle = (itemName) => {
    if (widht <= 768) {
      return {
        color: activeItem === itemName ? "#e7618b" : "#FFF",
      };
    } else if (widht >= 1024) {
      return {
        backgroundColor: activeItem === itemName ? "#61698e" : "#2d313f",
        transition: "background-color 0.7s ease",
        color: "#FFF",
      };
    }
  };

  return (
    <>
      <div className="Navbar">
        <nav className="navbar navbar-expand-lg">
          <div className="container-fluid">
            <a className="navbar-brand logo" href="/">
              <img
                src={logo}
                alt="Logo"
                className="d-inline-block align-text-top"
              ></img>
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav">
                <li className="nav-item" style={getItemStyle("Home")}>
                  <a
                    className="nav-link active"
                    aria-current="page"
                    onClick={() => handleItemClick("Home")}
                    style={getItemStyle("Home")}
                    href="#Banner"
                  >
                    Home
                  </a>
                </li>
                <li className="nav-item" style={getItemStyle("Sobre Mim")}>
                  <a
                    className="nav-link"
                    onClick={() => handleItemClick("Sobre Mim")}
                    style={getItemStyle("Sobre Mim")}
                    href="#Sobre"
                  >
                    Sobre Mim
                  </a>
                </li>
                <li className="nav-item" style={getItemStyle("Carreira")}>
                  <a
                    className="nav-link"
                    onClick={() => handleItemClick("Carreira")}
                    style={getItemStyle("Carreira")}
                    href="#Skills"
                  >
                    Habilidades
                  </a>
                </li>
                <li className="nav-item" style={getItemStyle("Projetos")}>
                  <a
                    className="nav-link"
                    onClick={() => handleItemClick("Projetos")}
                    style={getItemStyle("Projetos")}
                    href="#"
                  >
                    Projetos
                  </a>
                </li>
                <li className="nav-item contato-geral">
                  <a
                    className="nav-link contato"
                    target="_blank"
                    href="https://contate.me/ricardo-sobral"
                  >
                    Contato
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}

export default Navbar;
