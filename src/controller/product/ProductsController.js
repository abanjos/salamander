const ProductsController = {
  async create(context) {
    const { createProduct, request } = context

    const createdProduct = await createProduct.execute(request.body)

    return {
      id: createdProduct.id,
      display_name: createdProduct.display_name,
      description: createdProduct.description,
      price: createdProduct.price
    }
  }
}

export { ProductsController }
