//State
import { useState } from 'react'
//Redux
import { useDispatch, useSelector } from 'react-redux'
import { searchPlants, loadPlants } from '../actions/plantsAction'
//Styling
import styled from 'styled-components'
//Images
import loadingGif from '../images/loading.gif'

const Nav = () => {
  //State
  const dispatch = useDispatch()
  const [textInput, setTextInput] = useState('')
  const { isLoading } = useSelector(state => state.plants)

  const handleInput = e => {
    setTextInput(e.target.value)
  }

  const handleClick = e => {
    e.preventDefault()
    dispatch(searchPlants(textInput))
    setTextInput('')
  }

  const clearSearched = () => {
    dispatch(loadPlants())
  }

  return (
    <Header>
      <h1 onClick={clearSearched}>Plant DB</h1>
      <form>
        <input type='text' value={textInput} onChange={handleInput} />
        <button type='submit' onClick={handleClick}>
          Search
        </button>
      </form>
      {isLoading && <LoadingGifStyled src={loadingGif} />}
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
    cursor: pointer;
  }
  input {
    width: 30vw;
    text-align: center;
    box-shadow: 1px 1px 1px 1px rgba(0, 0, 0, 0.5);
  }
  button {
    color: white;
    background: green;
    padding: 0.5rem;
    border: none;
    margin-left: 0.5rem;
    border-radius: 10%;
    box-shadow: 1px 1px 1px 1px rgba(0, 0, 0, 0.5);
  }
  @media screen and (max-width: 1000px) {
    input {
      width: 50vw;
    }
  }
`

const LoadingGifStyled = styled.img`
  width: 100px;
  height: 100px;
  margin-top: 1rem;
`

export default Nav
