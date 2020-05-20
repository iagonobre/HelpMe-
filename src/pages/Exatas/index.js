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
        <Link to="/downloads/aviso/?link=https://www.mediafire.com/file/lnteemac570jt5z/F%CDSICA.zip/file&page=/downloads/exatas">
          <button>FÍSICA</button>
        </Link>
        <Link to="/downloads/aviso/?link=https://www.mediafire.com/file/kq3f459l268vv4f/BIOLOGIA.zip/file&page=/downloads/exatas">
          <button>BIOLOGIA</button>
        </Link>
        <Link to="/downloads/aviso/?link=https://www.mediafire.com/file/zk0vpgjuywxmw6s/MATEM%C1TICA.zip/file&page=/downloads/exatas">
          <button>MATEMÁTICA</button>
        </Link>
        <Link to="/downloads/aviso/?link=https://www.mediafire.com/file/y42omrv56jlgg2t/QU%CDMICA.zip/file&page=/downloads/exatas">
          <button>QUÍMICA</button>
        </Link>
      </Botoes>
    </Container>
  );
}

export default Apostilas;