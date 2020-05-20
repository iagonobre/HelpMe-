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
        <form target="_blank" action="https://www.mediafire.com/file/8gff0fjrinm3ff1/PORTUGU%CAS.zip/file"><button>PORTUGUÊS</button></form>
        <form target="_blank" action="https://www.mediafire.com/file/3vat2iwsu9jq7co/LITERATURA.zip/file"><button>LITERATURA</button></form>
        <form target="_blank" action="http://www.mediafire.com/file/7ceybce297wnw87/ARTES.zip/file"><button>ARTES</button></form>
        <form target="_blank" action="https://www.mediafire.com/file/7uix59nkezb3nv6/INGL%CAS_E_ESPANHOL.zip/file"><button>INGLÊS E ESPANHOL</button></form>
      </Botoes>
    </Container>
  );
}

export default Apostilas;