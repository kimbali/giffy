import { useState, useEffect, useContext } from 'react';
import getGifs from '../services/getGifs';
import GifsContext from '../context/GifsContext'

const INITIAL_PAGE = 0;

export default function useGifs({ keyword } = { keyword: null}) {
    const [loading, setLoading] = useState(false);
    const [loadingNextPage, setLoadingNextPage] = useState(false);
    const [page, setPage] = useState(INITIAL_PAGE)
    const {gifs, setGifs} = useContext(GifsContext);
    
    const keywordToUse = keyword || localStorage.getItem('Lastkeyword') || 'water'

    useEffect(() => {
        setLoading(true)
        getGifs({ keyword: keywordToUse })
            .then(gifs => {
                setGifs(gifs)
                setLoading(false)
                localStorage.setItem('Lastkeyword', keywordToUse)
            })
    }, [ keyword, setGifs, keywordToUse ])

    useEffect(() => {
        if(page === INITIAL_PAGE) return
        setLoadingNextPage(true);
        getGifs({ keyword: keywordToUse, page})
            .then(nextGifs => {
                setGifs(prevGifs => prevGifs.concat(nextGifs))
                setLoadingNextPage(false);
            })
    }, [page, keywordToUse, setGifs])
    

    return { loading, gifs, loadingNextPage, setPage }
}
