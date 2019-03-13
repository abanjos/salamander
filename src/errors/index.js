import { ApplicationErrorFactory } from './ApplicationErrorFactory'
import { RecordNotFound } from './RecordNotFoundError'
import { ValidationError } from './ValidationError'

const errors = [
  RecordNotFound,
  ValidationError
]

const AppErrorFactory = new ApplicationErrorFactory(errors)

export { AppErrorFactory as ApplicationErrorFactory, errors as ApplicationErrors }
