import { ApplicationError } from './ApplicationError'

const ERR_RECORD_NOT_FOUND = 'ERR_RECORD_NOT_FOUND'

const RecordNotFound = class RecordNotFound extends ApplicationError {
  constructor(message, context) {
    super(ERR_RECORD_NOT_FOUND, message, context)
  }
}

export { RecordNotFound }
