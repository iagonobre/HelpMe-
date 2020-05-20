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
        <form target="_blank" action="https://www.mediafire.com/file/us42p5ph3jr3ofs/FILOSOFIA_E_SOCIOLOGIA.zip/file"><button type="submit">FILOSOFIA E SOCIOLOGIA</button></form>
        <form target="_blank" action="https://www.mediafire.com/file/l8ppi35xpvk6nej/GEOGRAFIA_E_GEOPOL%CDTICA.zip/file"><button type="submit">GEOGRAFIA E GEOPOLÍTICA</button></form>
        <form target="_blank" action="https://www.mediafire.com/file/i3gj08e6hvyvl4a/HIST%D3RIA.zip/file"><button type="submit">HISTÓRIA</button></form>
      </Botoes>
    </Container>
  );
}

export default Apostilas;