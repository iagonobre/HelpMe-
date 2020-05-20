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
        <form target="_blank" action="https://www.mediafire.com/file/z9ds1n466b7cafb/APOSTILA_BERNOULLI.zip/file"><button>APOSTILA BERNOULLI</button></form>
        <form target="_blank" action="http://www.mediafire.com/file/t9ahw8rkv5pjj88/APOSTILA_HEXAG.zip/file"><button>APOSTILA HEXAG</button></form>
        <form target="_blank" action="https://www.mediafire.com/file/cbixirn5qd28wqd/DESCOMPLICA.zip/file"><button>APOSTILA DESCOMPLICA</button></form>
      </Botoes>
    </Container>
  );
}

export default Apostilas;