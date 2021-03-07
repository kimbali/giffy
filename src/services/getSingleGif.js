
import { API_KEY, API_URL } from './settings'

const fromApiResponseToGifs = apiResponse => {
    const { data } = apiResponse;
    const { title, id, images: { downsized_medium: { url }} } = data;
    return { url, title, id};
}

export default function getSingleGif ({ id }) {
    return fetch(`${API_URL}/gifs/${id}?api_key=${API_KEY}`)
    .then(res => res.json())
    .then(fromApiResponseToGifs)
}