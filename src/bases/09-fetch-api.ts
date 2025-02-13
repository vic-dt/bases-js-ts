import { GIFResponsio } from "../interfaces/gif.responsio";




const apikey = 'Bhb4oP6R743sWGiOpUkud2SrWkdkCsIi';

fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apikey}`)
.then(resp=> resp.json())
.then((body: GIFResponsio)=>{
    console.log(body.data.images.downsized_large.url)})
.catch (err=> console.log( err))

//https://api.giphy.com/v1/gifs/random?api_key=Bhb4oP6R743sWGiOpUkud2SrWkdkCsIi