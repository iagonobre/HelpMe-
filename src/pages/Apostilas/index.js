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
        <Link to="/downloads/aviso/?link=https://www.mediafire.com/file/z9ds1n466b7cafb/APOSTILA_BERNOULLI.zip/file&page=/downloads/apostilas">
          <button>APOSTILA BERNOULLI</button>
        </Link>
        <Link to="/downloads/aviso/?link=https://www.mediafire.com/file/cbixirn5qd28wqd/DESCOMPLICA.zip/file&page=/downloads/apostilas">
          <button>APOSTILA DESCOMPLICA</button>
        </Link>
        <Link to="/downloads/apostilas/hexag">
          <button>APOSTILA HEXAG</button>
        </Link>
      </Botoes>
    </Container>
  );
}

export default Apostilas;