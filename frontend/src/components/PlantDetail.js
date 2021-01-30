//Redux
import { useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
//Styling
import styled from 'styled-components'
import { motion } from 'framer-motion'
import { popUp } from '../animations'
//Images
import noPlant from '../images/noPlant.png'

const PlantDetail = () => {
  const history = useHistory()
  //Exit Detail
  const exitDetailHandler = e => {
    const element = e.target
    if (element.classList.contains('shadow')) {
      history.push('/')
    }
  }

  //Data
  const { plantDetail, isLoading } = useSelector(state => state.detail)
  return (
    <>
      {!isLoading && plantDetail && (
        <CardShadow className='shadow' onClick={exitDetailHandler}>
          <Detail variants={popUp} initial='hidden' animate='show'>
            <motion.h1>
              {plantDetail.data.common_name
                ? plantDetail.data.common_name.toUpperCase()
                : plantDetail.data.scientific_name.toUpperCase()}
            </motion.h1>
            <motion.h2>{plantDetail.data.scientific_name}</motion.h2>
            <Info>
              {plantDetail.data.family && (
                <motion.p>Family: {plantDetail.data.family.name}</motion.p>
              )}
              {plantDetail.data.observations && (
                <motion.p>Locations: {plantDetail.data.observations}</motion.p>
              )}
              {plantDetail.data.year && (
                <motion.p>Discovered: {plantDetail.data.year}</motion.p>
              )}
            </Info>
            <motion.img
              src={
                plantDetail.data.image_url
                  ? plantDetail.data.image_url
                  : noPlant
              }
              alt={plantDetail.data.common_name}
            />
            {plantDetail.data.main_species.images.leaf && (
              <motion.div>
                <ImageHeader>Leaf</ImageHeader>
                <motion.img
                  src={plantDetail.data.main_species.images.leaf[0].image_url}
                  alt={plantDetail.data.common_name}
                />
              </motion.div>
            )}
            {plantDetail.data.main_species.images.bark && (
              <motion.div>
                <ImageHeader>Bark</ImageHeader>
                <motion.img
                  src={plantDetail.data.main_species.images.bark[0].image_url}
                  alt={plantDetail.data.common_name}
                />
              </motion.div>
            )}
            {plantDetail.data.main_species.images.flower && (
              <motion.div>
                <ImageHeader>Flower</ImageHeader>
                <motion.img
                  src={plantDetail.data.main_species.images.flower[0].image_url}
                  alt={plantDetail.data.common_name}
                />
              </motion.div>
            )}
            {plantDetail.data.main_species.images.habit && (
              <motion.div>
                <ImageHeader>Habit</ImageHeader>
                <motion.img
                  src={plantDetail.data.main_species.images.habit[0].image_url}
                  alt={plantDetail.data.common_name}
                />
              </motion.div>
            )}
            {plantDetail.data.main_species.images.fruit && (
              <motion.div>
                <ImageHeader>Fruit</ImageHeader>
                <motion.img
                  src={plantDetail.data.main_species.images.fruit[0].image_url}
                  alt={plantDetail.data.common_name}
                />
              </motion.div>
            )}
          </Detail>
        </CardShadow>
      )}
      {!isLoading && !plantDetail && (
        <CardShadow className='shadow' onClick={exitDetailHandler}>
          <Detail variants={popUp} initial='hidden' animate='show'>
            <motion.h1>Plant Data Not Found</motion.h1>
            <motion.img src={noPlant} alt='No Plant Found' />
          </Detail>
        </CardShadow>
      )}
    </>
  )
}

const CardShadow = styled(motion.div)`
  width: 100%;
  min-height: 100vh;
  overflow-y: scroll;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 5;
  @media (max-width: 600px) {
  }
`

const Detail = styled(motion.div)`
  width: 80%;
  border-radius: 1rem;
  padding: 2rem 5rem;
  background: white;
  position: absolute;
  left: 10%;
  z-index: 10;
  color: black;
  img {
    width: 400px;
    height: 400px;
    object-fit: cover;
    margin-bottom: 3rem;
  }
  h1 {
    font-size: 4rem;
    color: green;
    margin-top: 3rem;
  }
  h2 {
    font-size: 3rem;
    margin-bottom: 2rem;
    color: darkgreen;
  }
  @media (max-width: 600px) {
    width: 120%;
    h1 {
      font-size: 1.5rem;
    }
    h2 {
      font-size: 1rem;
    }
    img {
      width: 200px;
      height: 200px;
    }
  }
`

const Info = styled(motion.div)`
  margin-bottom: 2rem;
  font-size: 1.5rem;
  line-height: 1.5;
  h3 {
    font-size: 2rem;
    margin-top: 2rem;
    margin-bottom: 0.5rem;
  }
  @media (max-width: 600px) {
    p {
      font-size: 0.8rem;
    }
  }
`

const ImageHeader = styled(motion.h3)`
  color: green;
  font-size: 3rem;
  @media (max-width: 600px) {
    font-size: 1.5rem;
  }
`

export default PlantDetail
