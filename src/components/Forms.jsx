import { useEffect, useState } from "react"
import Error from "./Error"
import styled from "@emotion/styled"
import useSelectCurrency from "../hooks/useSelectCurrency"
import { currency } from "../data/currency"

const InputSubmit = styled.input`
  background-color: #9497FF;
  border-radius: 5px;
  border: none;
  color: #FFF;
  font-family: 'lato',sans-serif;
  font-size: 20px;
  font-weight: 700;
  padding: 10px;
  text-transform: uppercase;
  transition: background-color .3s ease;
  width: 100%;
  margin-top: 30px;
  &:hover{
    background-color: #7A7DFE;
    cursor: pointer;
  }
`

const Forms = ({setCoins}) => {

  const [cryptos, setCryptos] = useState([])
  const [error, setError] = useState(false)
  const [countryCoin,SelectCurrency] = useSelectCurrency('Choose a Currency',currency)
  const [cryptoCoin,SelectCrypto] = useSelectCurrency('Choose a Crypto',cryptos)


  const getCryptos = async () =>{
    const url = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD'
    
    const res = await (await fetch(url)).json()
    const array = res.Data.map( obj => ({
      id: obj.CoinInfo.Name,
      cName: obj.CoinInfo.FullName
    }))
    setCryptos(array)
  }
  useEffect(() => {
    getCryptos()
  }, [])
  
  const handleSubmit = e =>{
    e.preventDefault()

    if([countryCoin,cryptoCoin].includes('')){
      setError(true)
      return
    }
    setError(false)
    setCoins({countryCoin,cryptoCoin})
  }

  return (
    <form
    onSubmit={handleSubmit}
    >
      {error && <Error>All fields are required</Error>}

      <SelectCurrency />
      <SelectCrypto />

      <InputSubmit 
        type="submit" 
        value="Search Value" 
      />
    </form>
  )
}

export default Forms