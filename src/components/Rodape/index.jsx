import React from 'react';
import "./styles.css";
import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';

// Rodape component definition
const Rodape = ({ mensagem }) => {
  return (
    <footer className="rodape">
      <p>{mensagem}</p>
      <p></p>
      <ul className="social_list">
        <li>
          <a href="https://www.linkedin.com/in/milla-christy-matheus/" title="Perfil LinkedIn">
            <FaLinkedin />
          </a>
        </li>
        <li>
          <a href="https://github.com/MillaChristy" title="Repositório GitHub">
            <FaGithub />
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com/milla.chriss/" title="Perfil Instagram">
            <FaInstagram />
          </a>
        </li>
      </ul>
    </footer>
  );
};


export default Rodape;