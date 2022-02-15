import { useState } from 'react'
import styled from '@emotion/styled'
import CriptoImage from './img/imagen-criptos.png'
import Forms from './components/Forms'

const Container = styled.div`
margin: 0 auto;
max-width: 900px;
width: 90%;
  @media(min-width: 992px){
    column-gap: 2rem;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }
`
const Heading = styled.h1`
  color: #fff;
  font-family: 'lato', sans-serif;
  font-size: 34px;
  font-weight: 700;
  margin-bottom: 50px;
  margin-top: 80px;
  text-align: center;

  &::after{
    background-color: #66A2FE;
    content: '';
    display: block;
    height: 6px;
    margin: 10px auto 0 auto;
    width: 100px;
  }
`
const Image = styled.img`
  display: block;
  margin: 100px auto 0 auto;
  max-width: 400px;
  width: 80%;
`

const App = () =>{
  return (
    <Container>
      <Image
        src={CriptoImage}
        alt="Criptocurrency image"
      />

      <div>
        <Heading>Watch cryptocurrencies values instantly</Heading>
        <Forms/>
      </div>
    </Container>
  )
}

export default App
