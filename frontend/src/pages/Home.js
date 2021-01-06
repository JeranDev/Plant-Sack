//State
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { useInView } from 'react-intersection-observer'
//Redux
import { useDispatch, useSelector } from 'react-redux'
import { loadPlants } from '../actions/plantsAction'
import { loadMore } from '../actions/moreAction'
//Components
import Plant from '../components/Plant'
import PlantDetail from '../components/PlantDetail'
//Styling
import styled from 'styled-components'

const Home = ({ pageNumber }) => {
  //Get Current Location
  const location = useLocation()
  let pathId = location.pathname.split('/')[2]

  //useInView
  const { ref, inView } = useInView({ threshold: 0.3 })

  //Fetch Plants
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(loadPlants())
  }, [dispatch])

  // useEffect(() => {
  //   dispatch(loadMore(pageNumber))
  //   return () => {}
  // }, [dispatch, pageNumber, inView])

  //Get Plant Data
  const { initialPlants, isLoading } = useSelector(state => state.plants)

  return (
    <>
      <Container>
        {isLoading && <div>Loading...</div>}
        {pathId && <PlantDetail />}
        {initialPlants.map(plant => {
          return (
            <Plant
              key={plant.id}
              id={plant.id}
              commonName={plant.common_name}
              scientificName={plant.scientific_name}
              imageURL={plant.image_url}
            />
          )
        })}
      </Container>
      <div ref={ref} />
    </>
  )
}

const Container = styled.div`
  text-align: center;
  margin-top: 2rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
`

export default Home
