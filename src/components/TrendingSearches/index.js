import React, { Suspense } from 'react'
import useNearScreen from 'hooks/useNearScreen';

const TrandingSearches = React.lazy(
    () => import('./TrendingSearches')
)

export default function LazyTrending () {
    const {isNearScreen, fromRef} = useNearScreen({ distance: '200px'});

    return <div ref={fromRef}>
        <Suspense fallback={'Estoy cargando usando React LAZY...'}>
            { isNearScreen ? <TrandingSearches /> : null }
        </Suspense>
    </div>
}