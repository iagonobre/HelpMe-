import React from 'react';
import Book from '../../images/livros.png'
import { Container, Text, Par, Button, Books } from './styles'
import { Link } from 'react-router-dom'
// import { Container } from './styles';

function Main() {
  return (
    <>
      <Container>
        <h1>me</h1><h2>help!</h2>
      </Container>
      <Text>
        <h3>+10 MIL QUESTÕES</h3>
      </Text>
      <Par>
        <p>
          apostilas, materiais de estudo, ENEM,
          redação, cronograma, e mais.
        </p>
      </Par>
      <Button>
        <form>
          <Link to="/downloads"><button type="submit">DOWNLOAD</button></Link>
        </form>
      </Button>
      <Books>
        <img src={Book} alt="livros" />
      </Books>
    </>
  )
}

export default Main;