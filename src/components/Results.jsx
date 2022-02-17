import styled from "@emotion/styled"

const Contain = styled.div`
    color: #FFF;
    font-family: 'Lato', sans-serif;
    display:flex;
    align-items:center;
    gap: 1rem;
    margin-top:30px;
`
const Text = styled.p`
    font-size: 18px;
    span{
        font-weight:700;
    }
`
const Price = styled.p`
    font-size: 24px;
    span{
        font-weight:700;
    }
`
const Image = styled.img`
    display:block;
    width:120px;
`

const Results = ({results}) => {

    const { PRICE, HIGHDAY, LOWDAY, CHANGEPCT24HOUR, IMAGEURL, LASTUPDATE} = results

  return (
    <Contain>
        <Image 
            src={`https://cryptocompare.com/${IMAGEURL}`} 
            alt="Crypto logo" />
        <div>
            <Price>Price: <span>{PRICE}</span></Price>
            <Text>Highger price today: <span>{HIGHDAY}</span></Text>
            <Text>Lower price today: <span>{LOWDAY}</span></Text>
            <Text>Change last 24 hours: <span>{CHANGEPCT24HOUR}</span></Text>
            <Text>Last update: <span>{LASTUPDATE}</span></Text>
        </div>
    </Contain>
  )
}

export default Results