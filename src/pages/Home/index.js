import React, { useCallback } from 'react';
import { useLocation } from 'wouter';
import ListOfGifs from '../../components/ListOfGifs';
import SearchForm from 'components/SearchForm';
import useGifs from '../../hooks/useGifs';
import './Home.css';

export default function Home() {
    const { loading, gifs } = useGifs()
    const [, pushLocation] = useLocation()  

    const handleSubmit = useCallback(({ keyword }) => {
        pushLocation(`/search/${keyword}`)
    }, [ pushLocation ]) 

    return (
        <>
            <SearchForm onSubmit={handleSubmit}/>
            <ListOfGifs gifs={gifs} loading={loading}/>
        </>
    )
}
