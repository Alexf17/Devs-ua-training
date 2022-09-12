import axios from 'axios'

export default class PictureService {
  constructor() {
    this.searchQuery = "Alcoholic"
  }
  async fetchGallery() {
    axios.defaults.baseURL = 'https://www.thecocktaildb.com/api/json/v1/1'
      try {
        const response = await axios.get(`filter.php?a=${this.searchQuery}`)
          return response
          console.log(response)
      } catch (error) {
        console.log(error)
    }
  }
}