import axios from 'axios'
//import { GIFResponsio } from '../interfaces/gif.responsio';

const apikey = 'Bhb4oP6R743sWGiOpUkud2SrWkdkCsIi';

export const giphyApi = axios.create({
baseURL: 'https://api.giphy.com/v1/gifs',
params: {
    api_key: apikey,
}
});

// giphyApi.get<GIFResponsio>('/random')
// .then(resp => console.log(resp.data.data.images.downsized_large.url))
// .catch(err=> console.log(err))