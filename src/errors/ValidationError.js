import { ApplicationError } from './ApplicationError'

const ERR_VALIDATION_ERROR = 'ERR_VALIDATION_ERROR'

const ValidationError = class ValidationError extends ApplicationError {
  constructor(message, context) {
    super(ERR_VALIDATION_ERROR, message, context)
  }
}

export { ValidationError }
