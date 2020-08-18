import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import ProductDetail from "../components/products/ProductDetail"

const ProductPageTemplate = ({ data }) => {
  console.log(data)
  return (
    <Layout>
      <ProductDetail product={data.shopifyProduct} />
    </Layout>
  )
}

export default ProductPageTemplate

export const data = graphql`
  query ProductLayOutQuery($handle: String!) {
    shopifyProduct(handle: { eq: $handle }) {
      handle
      images {
        localFile {
          childImageSharp {
            fixed(width: 200) {
              ...GatsbyImageSharpFixed_withWebp_tracedSVG
            }
          }
        }
      }
      title
      description
      descriptionHtml
      tags
      id
      shopifyId
      variants {
        sku
        title
        price
        id
      }
    }
  }
`
