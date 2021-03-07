import React, { useEffect, useRef, useCallback } from 'react'
import ListOfGifs from 'components/ListOfGifs'
import useGifs from 'hooks/useGifs'
import useNearScreen from 'hooks/useNearScreen';
import debounce from 'just-debounce-it';

export default function SearchResults({ params}) {
  const { keyword } = params;
  const { loading, gifs, setPage } = useGifs({ keyword })
  const externalRef = useRef()
  const { isNearScreen } = useNearScreen({ 
    externalRef: loading ? null : externalRef, 
    once: false
  })

  console.log('isNearScreen: ', isNearScreen);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const debounceHandleNextPage = useCallback(debounce(
    () => setPage(prevPage => prevPage + 1), 1000), 
  []);

  useEffect(() => {
    if (isNearScreen) debounceHandleNextPage();
  }, [debounceHandleNextPage, isNearScreen])

  return (
    <>
      {
        loading 
        ? <p>Loading</p> 
        : <>
            <h3>{decodeURI(keyword)}</h3>
            <ListOfGifs gifs={gifs}/>
            <div id="visor" ref={externalRef}></div>
          </>
      }
    </>
  )
}
