import React, {useState} from 'react';
import ProductCard from './ProductCard';
import SearchBar from './SearchBar';

export default function SkincareProducts({products, currentUser, reviews, setReviews}) {

    const [searchWord, setSearchWord] = useState('')

    const displayProducts = products.filter((product) => {
        return product.type_of_product.toLowerCase().includes(searchWord.toLowerCase())
    })

    

    return (
        <div>
            <h1>Skincare Products</h1>
            <SearchBar searchWord={searchWord} onSearchChange={setSearchWord}/>
            {displayProducts.map((product) => {
                return (
                    <ProductCard key={product.id} product={product} currentUser={currentUser} reviews={reviews} setReviews={setReviews}/>
                )
            })}
        </div>
    )
}