
import { API_KEY, API_URL } from './settings'

const fromApiResponseToGifs = apiResponse => {
    const { data = [] } = apiResponse;
    if(Array.isArray(data)) {
        const gifs = data.map(singleGif => {
            const { title, id, images: { downsized_medium: { url }} } = singleGif;
            return { url, title, id};
        })
        return gifs
    }
    return []
}

export default function getGifs ({ limit = 15, keyword = 'Ricky', page = 0} ) {
    // Paginacion, offset = cuantos resultados tienes que saltarte
    const apiURL = `${API_URL}/gifs/search?api_key=${API_KEY}=${keyword}&limit=${limit}&offset=${page * limit}&rating=g&lang=en`
    return fetch(apiURL)
        .then(res => res.json())
        .then(fromApiResponseToGifs)
}