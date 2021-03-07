import React from 'react';
import { Link } from 'wouter';
import './Categorias.css';

export default function Category({ name = 'Categorias', options = []}) {
    return (
        <div className="categorias">
            <h3>{name}</h3>
            <ul>
                {
                    options.map(singleOption => 
                        <li key={`category-${singleOption}`}><Link to={`/search/${singleOption}`}>{singleOption}</Link></li>
                    )
                }
            </ul>
        </div>
    )
}
