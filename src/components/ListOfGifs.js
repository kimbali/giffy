import React from 'react'
import Gif from './Gif';


export default function ListOfGifs({ gifs }) {

    return <div className="gifs-list">
            { gifs.map(singleGif => 
                    <Gif 
                        key={singleGif.id} 
                        title={singleGif.title} 
                        url={singleGif.url} 
                        id={singleGif.id}
                    />)}
         </div>
}
