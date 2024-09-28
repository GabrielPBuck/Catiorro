// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/css/components/Header.css'
import logo from '../assets/img/logo.png'

function Header() {
  return (
    <div className='navbar'>
      <div className='logoSite'>
        <img src={logo} alt="" />
        Site do Cão
      </div>
      <div className='nav-botoes'>               
          <Link to="/" className='nav-link'>Início</Link>
          <Link to="/" className='nav-link'>Entrar</Link>
          <Link to="/" className='nav-link'>Produtos</Link>
          <Link to="/" className='nav-link'>Blog</Link>
          <Link to="/sobre" className='nav-link'>Sobre</Link>
          </div>
    </div>
  );
}

export default Header;