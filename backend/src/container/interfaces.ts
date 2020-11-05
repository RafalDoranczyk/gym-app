export interface ConfigInterface {
  port: number
  host: string
}

export const ConfigTypes = {
  Server: Symbol.for('Server'),
  Config: Symbol.for('Config'),
}
