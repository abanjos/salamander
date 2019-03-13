import { sequelize } from '../src/infra/database/models'

after(async () => {
  await sequelize.close()
})
