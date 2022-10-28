import React from 'react';

export default function SearchBar({searchWord, onSearchChange}) {
    return (
        <div>
            <input 
            type="text" 
            placeholder='Search using a product type to find new products!' 
            value={searchWord}
            onChange={(e) => onSearchChange(e.target.value)}
            className="searchbar"
            />
        </div>
    )
}