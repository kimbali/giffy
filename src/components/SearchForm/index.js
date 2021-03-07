import React, { useState } from 'react'
import PropTypes from 'prop-types'

function SearchForm({ onSubmit }) {
    const [keyword, setKeyword] = useState('');

    const handleChange = event => {
        setKeyword(event.target.value)
    }

    const handleSubmit = event => {
        event.preventDefault();
        onSubmit({ keyword })
    }

    return (
        <form onSubmit={handleSubmit} className="search-word-input">
            <input onChange={handleChange} type="text" value={keyword} placeholder="searchForm input" />
            <button>Pushlocation /search/key</button>
        </form>
    )
}

SearchForm.propTypes = {
    onSubmit: PropTypes.func
}

export default React.memo(SearchForm); 

