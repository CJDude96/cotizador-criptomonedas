import '../styles/Spinner.css'
import styled from '@emotion/styled'

const Box = styled.div`
    display:flex;
    align-items:center;
    width:100%;
    margin-top: 50px;
    justify-content: center;
`

const Spinner = () => {
  return (
    <Box>    
        <div className="sk-chase">
            <div className="sk-chase-dot"></div>
            <div className="sk-chase-dot"></div>
            <div className="sk-chase-dot"></div>
            <div className="sk-chase-dot"></div>
            <div className="sk-chase-dot"></div>
            <div className="sk-chase-dot"></div>
        </div>
    </Box>
  )
}

export default Spinner