//State
import { useState } from 'react'
//Redux

//Components
import Home from './pages/Home'
import Nav from './components/Nav'
//Styles
import GlobalStyles from './components/GlobalStyles'
//Router
import { Route } from 'react-router-dom'

function App() {
  //State
  const [pageNumber, setPageNumber] = useState(1)
  return (
    <div className='App'>
      <GlobalStyles />
      <Nav pageNumber={pageNumber} setPageNumber={setPageNumber} />
      <Route path={['/plant/:id', '/']}>
        <Home pageNumber={pageNumber} />
      </Route>
    </div>
  )
}

export default App
