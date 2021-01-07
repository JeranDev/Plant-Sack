//State
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { useInView } from 'react-intersection-observer'
//Redux
import { useDispatch, useSelector } from 'react-redux'
import { loadPlants } from '../actions/plantsAction'
import { loadMorePlants } from '../actions/moreAction'
//Components
import Plant from '../components/Plant'
import PlantDetail from '../components/PlantDetail'
//Styling
import styled from 'styled-components'

const Home = () => {
  //Get Plant Data
  const { initialPlants, isLoading, pageNumber, noMore } = useSelector(
    state => state.plants
  )

  //Get Current Location
  const location = useLocation()
  let pathId = location.pathname.split('/')[2]

  //useInView
  const { ref, inView } = useInView({ threshold: 0 })

  //Fetch Plants
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(loadPlants())
  }, [dispatch])

  useEffect(() => {
    if (inView) {
      dispatch(loadMorePlants(initialPlants, pageNumber))
    }
  }, [dispatch, initialPlants, pageNumber, inView])

  return (
    <>
      <Container>
        {pathId && <PlantDetail />}
        {initialPlants.map((plant, index) => {
          if (initialPlants.length === index + 1) {
            return (
              <div key={index} ref={ref}>
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
      {isLoading && <Loading>Loading...</Loading>}
      {noMore && <Loading>No More Results!</Loading>}
    </>
  )
}

const Loading = styled.div`
  text-align: center;
  margin: 2rem;
  font-size: 1.5rem;
  font-weight: bold;
`

const Container = styled.div`
  text-align: center;
  margin-top: 2rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
`

export default Home
