

const path = require('path')


exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions

    const response = await graphql(`
        {
            allShopifyProduct {
                edges {
                    node {
                        id
                        handle
                    }
                }
            }
        }
    `)

    response.data.allShopifyProduct.edges.forEach(edge => {
        createPage({
            path: `/products/${edge.node.handle}`,
            component: path.resolve("./src/templates/ProductPageTemplate.js"),
            context: {
                id: edge.node.id,
                handle: edge.node.handle,
            }
            
        })
    })
}