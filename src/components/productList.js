import React from 'react'
import './productList.css'
import productData from '../data/productData'
import ProductItem from './productItem'



const ProductList = () => {
    const products = productData.map(product => {
        return <ProductItem key={product.id} product={product}/>
    })
    return(
        <div className="Products">
            <h2>Products</h2>
            <ul>
                {products}
            </ul>
        </div>
    )
}

export default ProductList