import PictureService from './js/api'


const pictureService = new PictureService()

async function search() {
    const responspictureService = await pictureService.fetchGallery()
    console.log(responspictureService)
}

console.log(search())

