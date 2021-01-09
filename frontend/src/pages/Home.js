//State
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { useInView } from 'react-intersection-observer'
//Redux
import { useDispatch, useSelector } from 'react-redux'
import { loadPlants, searchPlants } from '../actions/plantsAction'
//Components
import Plant from '../components/Plant'
import PlantDetail from '../components/PlantDetail'
//Styling
import styled from 'styled-components'
import { motion } from 'framer-motion'
import { fadeIn } from '../animations'

const Home = () => {
  //Get Plant Data
  const {
    initialPlants,
    searchedPlants,
    isLoading,
    pageNumber,
    searched,
    query,
    noMore,
  } = useSelector(state => state.plants)

  //Render Initial Plants or Searched Plants
  let plants
  searched ? (plants = searchedPlants) : (plants = initialPlants)

  //Get Current Location
  const location = useLocation()
  let pathId = location.pathname.split('/')[2]

  //useInView
  const [refOne, inViewOne] = useInView({ threshold: 0 })
  const [refTwo, inViewTwo] = useInView({ threshold: 0 })

  //Fetch Plants
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(loadPlants(plants, pageNumber))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch])

  useEffect(() => {
    if (inViewOne) {
      dispatch(loadPlants(plants, pageNumber))
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inViewOne])

  useEffect(() => {
    if (inViewTwo) {
      dispatch(searchPlants(plants, pageNumber, query))
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inViewTwo])

  return (
    <>
      <Container>
        {pathId && <PlantDetail />}
        {plants.map((plant, index) => {
          if (plants.length === index + 1 && !noMore) {
            return (
              <div key={index} ref={searched ? refTwo : refOne}>
                <Plant
                  key={plant.id}
                  id={plant.id}
                  commonName={plant.common_name}
                  scientificName={plant.scientific_name}
                  imageURL={plant.image_url}
                />
              </div>
            )
          } else {
            return (
              <div key={index}>
                <Plant
                  key={plant.id}
                  id={plant.id}
                  commonName={plant.common_name}
                  scientificName={plant.scientific_name}
                  imageURL={plant.image_url}
                />
              </div>
            )
          }
        })}
      </Container>
      {isLoading && (
        <Loading variants={fadeIn} initial='hidden' animate='show'>
          Loading...
        </Loading>
      )}
      {noMore && (
        <Loading variants={fadeIn} initial='hidden' animate='show'>
          No More Results!
        </Loading>
      )}
    </>
  )
}

const Loading = styled(motion.div)`
  text-align: center;
  margin: 2rem;
  font-size: 1.5rem;
  font-weight: bold;
`

const Container = styled(motion.div)`
  text-align: center;
  margin-top: 2rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
`

export default Home
