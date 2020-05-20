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
        <form target="_blank" action="https://www.mediafire.com/file/lnteemac570jt5z/F%CDSICA.zip/file"><button type="submit">FÍSICA</button></form>
        <form target="_blank" action="https://www.mediafire.com/file/kq3f459l268vv4f/BIOLOGIA.zip/file"><button type="submit">BIOLOGIA</button></form>
        <form target="_blank" action="https://www.mediafire.com/file/zk0vpgjuywxmw6s/MATEM%C1TICA.zip/file"><button type="submit">MATEMÁTICA</button></form>
        <form target="_blank" action="https://www.mediafire.com/file/y42omrv56jlgg2t/QU%CDMICA.zip/file"><button type="submit">QUÍMICA</button></form>
      </Botoes>
    </Container>
  );
}

export default Apostilas;