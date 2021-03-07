import { useContext } from 'react';
import GifsContext from '../context/GifsContext'

// Custom hook que devuelve informacion

export default function useGlobalGifs () {
    const { gifs } = useContext(GifsContext);
    return gifs;
}