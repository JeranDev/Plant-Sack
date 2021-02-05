//Redux
import { useDispatch, useSelector } from 'react-redux'
import { searchPlants, loadPlants, addQuery } from '../actions/plantsAction'
//Styling
import styled from 'styled-components'
import { motion } from 'framer-motion'
import { fadeIn, spin } from '../animations'
//Images
import loadingPic from '../images/cute-plant.png'

const Nav = () => {
  //State
  const dispatch = useDispatch()
  const { isLoading, query } = useSelector(state => state.plants)

  const handleInput = e => {
    dispatch(addQuery(e.target.value))
  }

  const handleSubmit = e => {
    e.preventDefault()
    const resetPlants = []
    const resetPage = 1
    const whitelistQuery = query.replace(/[^a-zA-Z-\s]/g, '')
    dispatch(searchPlants(resetPlants, resetPage, whitelistQuery))
  }

  const clearSearched = () => {
    const resetPlants = []
    const resetPage = 1
    dispatch(loadPlants(resetPlants, resetPage))
  }

  return (
    <Header variants={fadeIn} initial='hidden' animate='show'>
      <Logo>
        <h1 onClick={clearSearched}>Plant Sack</h1>
      </Logo>
      <form onSubmit={handleSubmit}>
        <input type='text' onChange={handleInput} value={query} required />
        <button type='submit'>Search</button>
      </form>
      {isLoading && (
        <LoadingPicStyled variants={spin} animate='show' src={loadingPic} />
      )}
    </Header>
  )
}

const Header = styled(motion.div)`
  text-align: center;
  input {
    width: 20vw;
    text-align: center;
    box-shadow: 1px 1px 1px 1px rgba(0, 0, 0, 0.5);
    padding: 1rem 0;
  }
  button {
    color: white;
    background: green;
    padding: 1rem;
    margin: 0.5rem;
    border: none;
    box-shadow: 1px 1px 1px 1px rgba(0, 0, 0, 0.5);
  }
  @media screen and (max-width: 1000px) {
    input {
      width: 50vw;
    }
  }
`

const Logo = styled(motion.div)`
  margin-top: 3rem;
  margin-bottom: 0.5rem;
  h1 {
    font-size: 4rem;
    font-family: 'Sigmar One', cursive;
    cursor: pointer;
    display: inline;
    line-height: 1;
  }
`

const LoadingPicStyled = styled(motion.img)`
  width: 100px;
  height: 100px;
  margin: 1.5rem auto 0 auto;
`

export default Nav
