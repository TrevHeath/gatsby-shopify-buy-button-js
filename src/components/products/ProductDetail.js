import React, { useLayoutEffect } from 'react'
import ShopifyBuy from "@shopify/buy-button-js"

import { Base64 } from 'js-base64'



const ProductDetail = ({ product }) => {
    useLayoutEffect(() => {
        const client = ShopifyBuy.buildClient({
            domain: process.env.GATSBY_SHOPIFY_DOMAIN,
            storefrontAccessToken: process.env.GATSBY_SHOPIFY_ACCESS_TOKEN
        })
        const ui = ShopifyBuy.UI.init(client)
        const decodded = Base64.decode(product.shopifyId)
        const acutalId = decodded.replace("gid://shopify/Product/", "")
        ui.createComponent("product", {
            id: acutalId,
            node: document.getElementById("button")
        })
    })
    return (
        <div>
            <div id="button"></div>
        </div>
    )
}

export default ProductDetail