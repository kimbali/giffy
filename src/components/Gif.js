import React from 'react'
import './Gif.css'
import { Link } from 'wouter';

function Gif({ title, id, url}) {

    if(!url) return null;
    return (
        <Link to={`/gif/${id}`} className="Gif">
            <p>{title}</p>
            <img src={url} alt='Giff'/>
        </Link>
    )
}
// Memo tiene que dar true para que no se renderice otra vez
export default React.memo(Gif, (prevProps, nextProps) => prevProps.id === nextProps.id);
