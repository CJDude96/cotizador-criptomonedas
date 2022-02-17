import { useState, useEffect } from 'react'
import styled from '@emotion/styled'
import CriptoImage from './img/imagen-criptos.png'
import Forms from './components/Forms'
import Results from './components/Results'
import Spinner from './components/Spinner'

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

  const [coins, setCoins] = useState({})
  const [results, setResults] = useState({})
  const [loading, setLoading] = useState(false)

  const getCrypto = async ({countryCoin,cryptoCoin}) =>{
    setLoading(true)
    const url =`https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${cryptoCoin}&tsyms=${countryCoin}`
    const res = await (await fetch(url)).json()

    setResults(res.DISPLAY[cryptoCoin][countryCoin])
    
    setLoading(false)
  }
  useEffect(() =>{
    if(Object.keys(coins).length>0){
      getCrypto(coins)
    }
  },[coins])

  return (
    <Container>
      <Image
        src={CriptoImage}
        alt="Criptocurrency image"
      />

      <div>
        <Heading>Watch cryptocurrencies values instantly</Heading>
        <Forms
          setCoins={setCoins}
        />
        {loading && <Spinner/>}
        {results.PRICE && <Results results={results}/>}
      </div>
    </Container>
  )
}

export default App
