import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Product from "./Product"


const PRODUCTS_LISTING_QUERY = graphql`
    query ProductsListingQuery {
        allShopifyProduct {
            edges {
                node {
                    id
                    description
                    handle
                    priceRange {
                        maxVariantPrice {
                            amount
                        }
                    }
                    title
                    images {
                        localFile {
                            childImageSharp {
                                fixed(width: 200) {
                                    ...GatsbyImageSharpFixed_withWebp_tracedSVG
                                }
                            }
                        }
                    }
                    variants {
                        sku
                        title
                        price
                    }
                }
            }
        }
    }
`

const ProductListing = () => {
    const { allShopifyProduct } = useStaticQuery(PRODUCTS_LISTING_QUERY)
    return (
        <div>
            {
                allShopifyProduct.edges.map(edge => {
                    return <Product key={edge.node.id} product={edge.node} /> 
                })
            }
        </div>
    )
}

export default ProductListing