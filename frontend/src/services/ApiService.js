import axios from "axios"


export const movieApi = async ()=>{
    let movies =  await axios.get('http://localhost:8080/public/moviesList')
    return movies.data;
}