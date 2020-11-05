import { Container } from 'inversify'
import Config from './config'
import Server from './server'
import Database from './db'

const createContainer = (): Container => {
  const container = new Container()
  container.load(Database)
  container.load(Server)
  container.load(Config)

  return container
}

export { createContainer }
