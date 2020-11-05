import { ContainerModule } from 'inversify'
import { ConfigTypes } from './interfaces'
import { config } from 'dotenv'

config()

const Config = {
  port: process.env.SERVICE_PORT,
  host: process.env.SERVICE_HOST,
}

export default new ContainerModule((bind) => {
  bind(ConfigTypes.Config).toConstantValue(Config)
})
