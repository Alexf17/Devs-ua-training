import axios from 'axios'

export default class PictureService {
  constructor() {
    this.name = ""
    this.letter = ""
    this.id = 0
    
          
  }
  async fetchById() {
    axios.defaults.baseURL = 'https://www.thecocktaildb.com/api/json/v1/1'
      try {
        const response = await axios.get(`lookup.php?i=${this.id}`)
          return response
          console.log(response)
      } catch (error) {
        console.log(error)
    }
  }
  async fetchByName() {
    axios.defaults.baseURL = 'https://www.thecocktaildb.com/api/json/v1/1'
      try {
        const response = await axios.get(`search.php?s=${this.name}`)
          return response
          console.log(response)
      } catch (error) {
        console.log(error)
    }
  }
  async fetchByLetter() {
    axios.defaults.baseURL = 'https://www.thecocktaildb.com/api/json/v1/1'
      try {
        const response = await axios.get(`search.php?f=${this.letter}`)
          return response
          console.log(response)
      } catch (error) {
        console.log(error)
    }
  }


}