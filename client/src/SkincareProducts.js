import React, {useState} from 'react';
import ProductCard from './ProductCard';
import SearchBar from './SearchBar';

export default function SkincareProducts({products, currentUser, reviews, setReviews}) {

    const [searchWord, setSearchWord] = useState('')
    const [selectedPrice, setSelectedPrice] = useState("")

    const displayProductsBySearch = products.filter((product) => {
        return product.type_of_product.toLowerCase().includes(searchWord.toLowerCase())
    })

    const displayProducts = selectedPrice === "" ? displayProductsBySearch : displayProductsBySearch.filter(product => {
        return product.price === selectedPrice
    })

    function handlePriceChange(e){
        setSelectedPrice(e.target.value)
    }
    
    return (
        <div>
            <h1 className="products-title">SKINCARE PRODUCTS</h1>
            <select onChange={handlePriceChange} className="price-dropdown">
                <option value="">{" "}-- select a price --{" "}</option>
                <option value="$">$: $1-$10</option>
                <option value="$$">$$: $11-20</option>
                <option value="$$$">$$$: $21+</option>
            </select>
            <SearchBar searchWord={searchWord} onSearchChange={setSearchWord}/>
            {displayProducts.map((product) => {
                return (
                    <ProductCard key={product.id} product={product} currentUser={currentUser} reviews={reviews} setReviews={setReviews}/>
                )
            })}
        </div>
    )
}