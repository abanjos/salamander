
const ProductsController = {
  async create(context) {
    const { createProduct, request } = context

    const { error, value } = await createProduct.execute(request.body)

    if(error)
      throw error

    // response serializing
    const data = {
      id: value.id,
      display_name: value.display_name,
      description: value.description,
      price: value.price / 100
    }

    return data
  },

  async getAll(context) {
    const { ListProducts, request } = context

    const { error, value } = await ListProducts.execute(request.body)

    if(error)
      throw error

    const data = value.map((product) => {
      return {
        id: product.id,
        display_name: product.display_name,
        description: product.description,
        price: product.price / 100
      }
    })

    return data
  }


}

export { ProductsController }
