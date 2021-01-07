//Styling
import styled from 'styled-components'
import { motion } from 'framer-motion'
//Redux
import { useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
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
          <Detail>
            <h1>
              {plantDetail.data.common_name
                ? plantDetail.data.common_name.toUpperCase()
                : plantDetail.data.scientific_name}
            </h1>
            <h2>{plantDetail.data.scientific_name}</h2>
            <Info>
              {plantDetail.data.family && (
                <p>Family: {plantDetail.data.family.name}</p>
              )}
              {plantDetail.data.observations && (
                <p>Locations: {plantDetail.data.observations}</p>
              )}
              {plantDetail.data.year && (
                <p>Discovered: {plantDetail.data.year}</p>
              )}
            </Info>
            <img
              src={
                plantDetail.data.image_url
                  ? plantDetail.data.image_url
                  : noPlant
              }
              alt={plantDetail.data.common_name}
            />
            {plantDetail.data.main_species.images.leaf && (
              <div>
                <h3>Leaf</h3>
                <img
                  src={plantDetail.data.main_species.images.leaf[0].image_url}
                  alt={plantDetail.data.common_name}
                />
              </div>
            )}
            {plantDetail.data.main_species.images.bark && (
              <div>
                <h3>Bark</h3>
                <img
                  src={plantDetail.data.main_species.images.bark[0].image_url}
                  alt={plantDetail.data.common_name}
                />
              </div>
            )}
            {plantDetail.data.main_species.images.flower && (
              <div>
                <h3>Flower</h3>
                <img
                  src={plantDetail.data.main_species.images.flower[0].image_url}
                  alt={plantDetail.data.common_name}
                />
              </div>
            )}
            {plantDetail.data.main_species.images.habit && (
              <div>
                <h3>Habit</h3>
                <img
                  src={plantDetail.data.main_species.images.habit[0].image_url}
                  alt={plantDetail.data.common_name}
                />
              </div>
            )}
            {plantDetail.data.main_species.images.fruit && (
              <div>
                <h3>Fruit</h3>
                <img
                  src={plantDetail.data.main_species.images.fruit[0].image_url}
                  alt={plantDetail.data.common_name}
                />
              </div>
            )}
          </Detail>
        </CardShadow>
      )}
      {!isLoading && !plantDetail && (
        <CardShadow className='shadow' onClick={exitDetailHandler}>
          <Detail>
            <h1>Plant Data Not Found</h1>
            <img src={noPlant} alt='No Plant Found' />
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
    max-width: 600px;
    max-height: 600px;
    object-fit: cover;
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
  h3 {
    font-size: 2rem;
    margin-top: 2rem;
    margin-bottom: 0.5rem;
  }
  @media screen and (max-width: 1000px) {
    width: 100%;
    h1 {
      font-size: 2rem;
    }
    h2 {
      font-size: 1.5rem;
    }
    img {
      max-width: 100%;
      max-height: 400px;
    }
  }
`

const Info = styled(motion.div)`
  margin-bottom: 2rem;
  font-size: 1.5rem;
  line-height: 1.5;
`

export default PlantDetail
