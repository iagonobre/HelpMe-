import React from 'react';
import { Container, Topborder, Text, Botoes, Links } from './styles';
import logo from '../../images/logo.png'
import { IoIosArrowBack } from 'react-icons/io'
import { Link, useLocation } from 'react-router-dom'

function Avisos() {

  function useQuery() {
    return new URLSearchParams(useLocation().search);
  }

  let query = useQuery()
  return (
    <Container>
      <Topborder>
        <Link to="/downloads">
          <IoIosArrowBack />
          <p>Voltar</p>
        </Link>
        <img src={logo} alt="logo"></img>
      </Topborder>
      <Text>
        Confirme os termos para prosseguir!
        <br />
        <p>O conteúdo desse site é puramente EDUCACIONAL, a fim de facilitar o acesso a materiais GRATUITOS espalhados pela internet. Os arquivos aqui presentes podem ser encontrados nos seguintes sites:</p>
        <Links>
          <a href="http://descomplica.com.br/">Descomplica</a><br />
          <a href="http://mesalva.com.br/">Me Salva</a><br />
          <a href="http://cursinhoparamedicina.com.br/hexag-solidario/">Hexag</a><br />
          <a href="http://fisicaonline.com.br/">Física Online por Jaques Braga</a><br />
          <a href="http://materiais.fisicaonline.com.br/1000-de-biologia">Salinha Dopamina</a><br />
          <a href="http://instagram.com/motivanosestudos/">@motivanosestudos</a><br />
          <a href="http://projetomedicina.com.br/">Projeto Medicina</a><br />
          <a href="http://matematicaon.com.br/">Matemática Online por Alisson Marques</a><br />
          <a href="http://instagram.com/reidaquimica/?hl=pt-br">Rei da Química - @reidaquimica</a><br />
          <a href="http://quimicaonline.com.br/">Química Online por Tati e Luana</a><br />
          <a href="http://instagram.com/salinharevolucao/">Salinha Revolução</a><br />
          <a href="http://campsite.bio/lfelpi">Lucas Felpi</a>
        </Links>
      </Text>
      <Botoes>
        <form action={query.get("link")}><button type="submit">Estou ciente!</button></form>
      </Botoes>
    </Container >
  );
}

export default Avisos;