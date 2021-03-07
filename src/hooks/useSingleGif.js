import useGifs from 'hooks/useGifs';

export default function useSingleGif ({ id }) {
    const { gifs } = useGifs;

    const gifFromCache = gifs.find(singleGif => singleGif.id === id);

    return gifFromCache;
}