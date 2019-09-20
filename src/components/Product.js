import React from 'react'
import Img from "gatsby-image"
import { Link } from "gatsby"

const Product = ({product}) => {
    return (
        <article>
            <Link to={`/products/${product.handle}`}>
                <h3>{product.title}</h3>
            </Link>
            <Img key={product.id} fixed={product.images[0].localFile.childImageSharp.fixed}/>
            <h3>${product.priceRange.maxVariantPrice.amount}</h3>

        </article>
    )
}

export default Product
