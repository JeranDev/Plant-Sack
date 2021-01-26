import { createGlobalStyle } from 'styled-components'
import burlap from '../images/burlap.jpeg'

const burlapBackground = `url(${burlap})`

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    scroll-behavior: smooth;
  }
  html {
    background: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), ${burlapBackground};
  }
  body {
    font-family: 'Merriweather', serif;
  }
  a {
    text-decoration: none;
  }
`

export default GlobalStyles
