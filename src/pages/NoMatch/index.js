import React from 'react';
import Book from '../../images/livros.png'
import { Container, Text, Button, Books } from './styles'
import { Link } from 'react-router-dom'
// import { Container } from './styles';

function NoMatch() {
  return (
    <>
      <Container>
        <h1>me</h1><h2>help!</h2>
      </Container>
      <Text>
        <h3>PÁGINA NÃO ENCONTRADA</h3>
      </Text>
      <Button>
        <form>
          <Link to="/"><button type="submit">PÁGINA INICIAL</button></Link>
        </form>
      </Button>
      <Books>
        <img src={Book} alt="livros" />
      </Books>
    </>
  )
}

export default NoMatch;