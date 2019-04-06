const ApplicationError = class ApplicationError extends Error {
  constructor(code, message, context) {
    super(message)
    this.code = code
    this.context = context
    Error.captureStackTrace(this, this.constructor)
    this.isApplicationError = true
  }
}

export { ApplicationError }
