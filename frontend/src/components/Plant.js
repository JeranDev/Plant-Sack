//Redux
import { useDispatch } from 'react-redux'
import { loadDetail } from '../actions/detailAction'
import { Link, useHistory } from 'react-router-dom'
//Styling
import styled from 'styled-components'
import { motion } from 'framer-motion'
import { popUp } from '../animations'
//Images
import noPlant from '../images/noPlant.png'

const Plant = ({ id, commonName, scientificName, imageURL }) => {
  //Fix Scrolling
  const history = useHistory()
  if (history.location.pathname === '/') {
    document.body.style.overflow = 'auto'
  } else {
    document.body.style.overflow = 'hidden'
  }

  //Load Detail Handler
  const dispatch = useDispatch()
  const loadDetailHandler = () => {
    dispatch(loadDetail(scientificName))
  }

  return (
    <>
      <Description
        variants={popUp}
        initial='hidden'
        animate='show'
        onClick={loadDetailHandler}
        key={id}
        id={id}
        className='plant'
      >
        <Link to={`/plant/${id}`}>
          <motion.h2>
            {commonName
              ? commonName.toUpperCase()
              : scientificName.toUpperCase()}
          </motion.h2>
          <motion.h3>{scientificName}</motion.h3>
          <motion.img src={imageURL ? imageURL : noPlant} alt={commonName} />
        </Link>
      </Description>
    </>
  )
}

const Description = styled(motion.div)`
  box-shadow: 5px 5px 5px 5px rgba(0, 0, 0, 0.5);
  margin: 1rem 0;
  border-radius: 15px;
  cursor: pointer;
  background: #fff;
  h2 {
    font-size: 1.3rem;
    color: green;
    margin-top: 1rem;
    padding-top: 1rem;
  }
  h3 {
    font-size: 1rem;
    color: darkgreen;
    margin-bottom: 1rem;
  }
  img {
    width: 400px;
    height: 400px;
    object-fit: cover;
    display: block;
    border-radius: 0px 0px 15px 15px;
  }
  @media screen and (max-width: 1000px) {
    img {
      width: 300px;
      height: 300px;
    }
  }
`

export default Plant
