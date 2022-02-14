import styled from "@emotion/styled"

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

  &:hover{
    background-color: #7A7DFE;
    cursor: pointer;
  }
`

const Forms = () => {
  return (
    <form>
      <InputSubmit 
        type="submit" 
        value="Search Value" 
      />
    </form>
  )
}

export default Forms