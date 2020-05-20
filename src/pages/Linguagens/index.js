import React from 'react';
import { Container, Topborder, Text, Botoes } from './styles';
import logo from '../../images/logo.png'
import { IoIosArrowBack } from 'react-icons/io'
import { Link } from 'react-router-dom'

function Apostilas() {
  return (
    <Container>
      <Topborder>
        <Link to="/downloads">
          <IoIosArrowBack />
          <p>Voltar</p>
        </Link>
        <img src={logo} alt="logo"></img>
      </Topborder>
      <Text>Escolha uma opção abaixo:</Text>
      <Botoes>
        <Link to="/downloads/aviso/?link=https://www.mediafire.com/file/8gff0fjrinm3ff1/PORTUGU%CAS.zip/file&page=/downloads/linguagens">
          <button>PORTUGUÊS</button>
        </Link>
        <Link to="/downloads/aviso/?link=https://www.mediafire.com/file/3vat2iwsu9jq7co/LITERATURA.zip/file&page=/downloads/linguagens">
          <button>LITERATURA</button>
        </Link>
        <Link to="/downloads/aviso/?link=http://www.mediafire.com/file/7ceybce297wnw87/ARTES.zip/file&page=/downloads/linguagens">
          <button>ARTES</button>
        </Link>
        <Link to="/downloads/aviso/?link=https://www.mediafire.com/file/7uix59nkezb3nv6/INGL%CAS_E_ESPANHOL.zip/file&page=/downloads/linguagens">
          <button>INGLÊS E ESPANHOL</button>
        </Link>
      </Botoes>
    </Container>
  );
}

export default Apostilas;