//Base URL
const base_url = 'https://trefle.io/api/v1/plants/'

//CORS Anywhere
const cors_url = 'https://cors-anywhere.herokuapp.com/'

const apiKey = process.env.REACT_APP_TREFLE_API_KEY
const token = `?token=${apiKey}`

//Fetch Plants
export const plantsURL = () => `${cors_url}${base_url}${token}`

//Plant Details
export const plantDetailURL = scientificName => {
  const plantName = scientificName.split(' ').join('-')
  return `${cors_url}${base_url}${plantName}${token}`
}
