const productsController = {
    create(context) {
        const { createProduct, request } = context
        const createdProduct = createProduct.execute(request.body)
        return { 
            display_name: createdProduct.display_name,
            description: createdProduct.description,
            price: createdProduct.price
        }
    }
}

export { productsController }