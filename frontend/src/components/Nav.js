//Styling
import styled from 'styled-components'

const Nav = () => {
  return (
    <Header>
      <h1>PlantDB</h1>
      <input type='text' placeholder='Search For A Plant' />
    </Header>
  )
}

const Header = styled.div`
  text-align: center;
  h1 {
    font-size: 3rem;
    font-family: 'Yellowtail', cursive;
    margin-top: 3rem;
    margin-bottom: 1rem;
  }
  input {
    width: 30vw;
    text-align: center;
  }
`

export default Nav
