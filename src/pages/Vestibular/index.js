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
        <form target="_blank" action="https://www.mediafire.com/file/zbhysktb37sl9yf/CONTE%DADOS_ENEM.pdf/file"><button>CONTEÚDOS - ENEM</button></form>
        <form target="_blank" action="https://www.mediafire.com/file/5kxa5si3k471dxy/Cronograma_@motivanosestudos.pdf/file"><button>CRONOGRAMA - ENEM</button></form>
        <form target="_blank" action="https://www.mediafire.com/file/bhzyh6xdjio9mjv/PROVAS_ENEM.zip/file"><button>PROVAS - ENEM</button></form>
        <form target="_blank" action="https://www.mediafire.com/file/uics49wg814vhgv/QUEST%D5ES_-_ENEM%2C_FUVEST_E_UNICAMP.zip/file"><button>PROVAS - VESTIBULARES</button></form>
        <form target="_blank" action="http://www.mediafire.com/file/cfabcq8b0qe9li9/REDA%25C3%2587%25C3%2583O.zip/file"><button>REDAÇÃO</button></form>
      </Botoes>
    </Container>
  );
}

export default Apostilas;