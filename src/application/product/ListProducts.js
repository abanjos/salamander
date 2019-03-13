const ListProducts = class ListProducts {
  construct(ProductRepository) {
    this.repository = ProductRepository
  }

  async execute() {
    const { error, value } = await this.repository.getAll()

    if(error)
      return { error, value: null }

    return value
  }
}

export { ListProducts }
