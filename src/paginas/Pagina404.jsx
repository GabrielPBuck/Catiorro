// eslint-disable-next-line no-unused-vars
import React from "react";
import "../assets/css/base/404.css";
import logo from '../assets/img/logo.png'
const Pagina404 = () => {
  return (
    <main className="container flex flex--centro flex--coluna main404">
      <img
        className="catiorrinho-imagem"
        src={logo}
        alt="Ilustração Catiorinho"
      />
      <p className="naoencontrado-texto"> 
        Au, au, foi mau! 
        </p>
      <p className="naoencontrado-texto"> 
        Página não encontrada! 
        </p>
    </main>
  );
};

export default Pagina404;
