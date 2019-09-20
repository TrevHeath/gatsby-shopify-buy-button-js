import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import ProductListing from "../components/ProductsListing"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <ProductListing />
  </Layout>
)

export default IndexPage
