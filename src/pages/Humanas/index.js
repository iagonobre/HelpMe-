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
        <Link to="/downloads/aviso/?link=https://www.mediafire.com/file/us42p5ph3jr3ofs/FILOSOFIA_E_SOCIOLOGIA.zip/file&page=/downloads/humanas">
          <button>FILOSOFIA E SOCIOLOGIA</button>
        </Link>
        <Link to="/downloads/aviso/?link=https://www.mediafire.com/file/l8ppi35xpvk6nej/GEOGRAFIA_E_GEOPOL%CDTICA.zip/file&page=/downloads/humanas">
          <button>GEOGRAFIA E GEOPOLÍTICA</button>
        </Link>
        <Link to="/downloads/aviso/?link=https://www.mediafire.com/file/i3gj08e6hvyvl4a/HIST%D3RIA.zip/file&page=/downloads/humanas">
          <button>HISTÓRIA</button>
        </Link>
      </Botoes>
    </Container>
  );
}

export default Apostilas;