import axios from "axios";
export default class MovieService {
    constructor() {
        this.id = 0;
       }
       async fetchById(){
        axios.defaults.baseURL = 'https://api.themoviedb.org/3';
        const API_KEY = '74bfe718a55ac7916c6e6ad87b15f944';
         try {const response = await axios.get(`/movie/${this.id}?api_key=${API_KEY}&language=en-US`) 
        //  console.log(response); 
         return response;   
            
        } catch (error) {console.error(error);
            
        }
       }
       get filmId(){return this.id

       }

       set filmId(newId){
        this.id = newId;
       }
}


