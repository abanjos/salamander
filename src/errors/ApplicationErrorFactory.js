const ApplicationErrorFactory = class ApplicationErrorFactory {
  constructor(errors) {
    if(!(errors instanceof Array)) {
      throw new TypeError('errors is not an array')
    }

    if(errors.length < 1) {
      throw new RangeError('errors should have at least one element')
    }

    this.errors = errors
  }

  createFromCode(code, message, context) {
    const errorClass = this.errors.find((err) => {
      return (new err('')).code === code
    })

    if(errorClass)
      return new errorClass(message, context)
    throw new TypeError(`error with code "${code}" not found`)
  }

  createFromJoi(error) {
    if(error.isJoi && error.name === 'ValidationError') {
      const appError = this.createFromCode('ERR_VALIDATION_ERROR', error.details.message, {})
      return appError
    }
    throw new TypeError('error is not from Joi')
  }
}

export { ApplicationErrorFactory }
