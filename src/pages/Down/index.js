import React from 'react';
import { Container, Topborder, Text, Botoes } from './styles';
import logo from '../../images/logo.png'
import { IoIosArrowBack } from 'react-icons/io'
import { AiOutlineFileText, AiOutlineDownload } from 'react-icons/ai'
import { FaReact, FaBrain, FaBook, FaPencilAlt } from 'react-icons/fa'
import { Link } from 'react-router-dom'

function Down() {
  return (
    <Container>
      <Topborder>
        <Link to="/">
          <IoIosArrowBack />
          <p>Voltar</p>
        </Link>
        <img src={logo} alt="logo"></img>
      </Topborder>
      <Text>Escolha uma opção abaixo:</Text>
      <Botoes>
        <Link to="/downloads/aviso/?link=https://drive.google.com/drive/folders/1ttj-ZDQT3Uvbm3dAIR40fVB5kYSE9K8m?usp=sharing&page=/downloads/">
          <button>
            <AiOutlineDownload />
            <br />
            DRIVE
          </button>
        </Link>

        <Link to="/downloads/apostilas">
          <button>
            <AiOutlineFileText />
            <br />
              APOSTILAS
          </button>
        </Link>

        <Link to="/downloads/vestibular">
          <button>
            <FaPencilAlt />
            <br />
            VESTIBULAR
          </button>
        </Link>

        <Link to="/downloads/exatas">
          <button>
            <FaReact />
            <br />
          EXATAS
          </button>
        </Link>

        <Link to="/downloads/humanas">
          <button>
            <FaBrain />
            <br />
          HUMANAS
          </button>
        </Link>

        <Link to="/downloads/linguagens">
          <button>
            <FaBook />
            <br />
          LINGUAGENS
          </button>
        </Link>

      </Botoes>
    </Container >
  );
}

export default Down;