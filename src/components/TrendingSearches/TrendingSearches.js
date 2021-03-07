import React, { useEffect, useState } from 'react'
import getTrendingTerms from 'services/getTrendingTerms';
import Category from 'components/TrendingSearches/Category';

export default function TrandingSearch() {
    const [trends, setTrends] = useState([]);

    useEffect(() => {
        getTrendingTerms().then(setTrends);
    }, [])

    return (<Category name="Tendencias" options={trends} />)
}