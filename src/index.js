import axios from 'axios'
class PictureService {
  constructor() {
    this.searchQuery = "margarita"
  }
  
  async fetchGallery() {
    axios.defaults.baseURL = 'https://www.thecocktaildb.com/api/json/v1/1'
      try {
        const response = await axios.get(`search.php?s=${this.searchQuery}`)
          return response
          console.log(response)
      } catch (error) {
        console.log(error)
    }
     
  }

}

const pictureService = new PictureService()

async function search() {
    const responspictureService = await pictureService.fetchGallery()
    console.log(responspictureService)
}

console.log(search())