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
        <Link to="/downloads/aviso/?link=http://www.mediafire.com/file/31az65qdu01oazo/Volume1-Edi%25C3%25A7%25C3%25A3o_2019.zip/file&page=/downloads/apostilas">
          <button>APOSTILA HEXAG - LIVRO 1</button>
        </Link>
        <Link to="/downloads/aviso/?link=http://www.mediafire.com/file/vae5ccegrzlhezs/Volume2_-_Edi%25C3%25A7%25C3%25A3o_2019.zip/file&page=/downloads/apostilas">
          <button>APOSTILA HEXAG - LIVRO 2</button>
        </Link>
        <Link to="/downloads/aviso/?link=http://www.mediafire.com/file/9o7xyjk7hxvq2z8/Volume3_-_Edi%25C3%25A7%25C3%25A3o_2019.zip/file&page=/downloads/apostilas">
          <button>APOSTILA HEXAG - LIVRO 3</button>
        </Link>
        <Link to="/downloads/aviso/?link=http://www.mediafire.com/file/c6w66g80etqbb4s/Volume4-Edi%25C3%25A7%25C3%25A3o_2019.zip/file&page=/downloads/apostilas">
          <button>APOSTILA HEXAG - LIVRO 4</button>
        </Link>
        <Link to="/downloads/aviso/?link=http://www.mediafire.com/file/v4k5b9now7rxqmv/Volume5-Edi%25C3%25A7%25C3%25A3o_2019.zip/file&page=/downloads/apostilas">
          <button>APOSTILA HEXAG - LIVRO 5</button>
        </Link>
        <Link to="/downloads/aviso/?link=http://www.mediafire.com/file/e7nv1egd10i98f0/Volume6-Edi%25C3%25A7%25C3%25A3o_2019.zip/file&page=/downloads/apostilas">
          <button>APOSTILA HEXAG - LIVRO 6</button>
        </Link>
      </Botoes>
    </Container>
  );
}

export default Apostilas;