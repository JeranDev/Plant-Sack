//Base URL
const base_url = 'https://trefle.io/api/v1/plants/'

const apiKey = process.env.REACT_APP_TREFLE_API_KEY
const token = `?token=${apiKey}`

//Fetch Plants
export const plantsURL = () => `${base_url}${token}`

//Plant Details
export const plantDetailURL = scientificName => {
  const plantName = scientificName.split(' ').join('-')
  return `${base_url}${plantName}${token}`
}
