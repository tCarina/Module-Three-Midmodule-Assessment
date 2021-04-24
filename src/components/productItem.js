import React from 'react'

const ProductItem = ({product}) => {
    const { name, price, description, img } = product

    return (
            <li>
                <h3>{name}</h3>
                <p>Price: {price}</p>
                <img src={img} alt='Photo' />
                <p>{description}</p>
            </li>
    )
}

export default ProductItem