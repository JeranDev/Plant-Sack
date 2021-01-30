//Components
import Home from './pages/Home'
import Nav from './components/Nav'
//Styles
import GlobalStyles from './components/GlobalStyles'
//Router
import { BrowserRouter as Router, Route } from 'react-router-dom'

function App() {
  return (
    <Router>
      <GlobalStyles />
      <Nav />
      <Route path={['/plant/:id', '/']} component={Home} />
    </Router>
  )
}

export default App
