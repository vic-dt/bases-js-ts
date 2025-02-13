import { GIFResponsio } from "../interfaces/gif.responsio";
import { giphyApi } from "./10-axios";

export const obtineImago = async()=>{
    try{
    const resp = await giphyApi.get<GIFResponsio>('/random')
    return resp.data.data.images.downsized_large.url;
} catch(error){
    throw 'URL no encontrada'
}
}

obtineImago()
.then( url =>console.log(url))
.catch(error =>console.log(error))

