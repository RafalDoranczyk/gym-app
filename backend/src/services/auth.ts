import { sign, verify } from 'jsonwebtoken'

export interface TokenInterface {
  id: string
  username: string
  iat: number
  exp: number
}

export interface Tokens {
  // eslint-disable-next-line camelcase
  access_token: string
   // eslint-disable-next-line camelcase
  refresh_token: string
}

export default class AuthService {
  private createToken(id:string, username: string, expiresIn:number):string {
    const token = sign({ id, username }, process.env.JWT_KEY, {
      algorithm: 'HS256',
      expiresIn,
    })

    return token
  }

  // short access token
  private createAccessToken(id: string, username: string):string {
    const token = this.createToken(id, username, +process.env.JWT_ACCESS_TOKEN_EXPIRES_SECONDS)

    return token
  }

  // long access token
  private createRefreshToken(id: string, username:string):string {
    const token = this.createToken(id, username, +process.env.JWT_REFRESH_TOKEN_EXPIRES_SECONDS)

    return token
  }

  public getNewAccessToken(id:string, username:string):string {
    const accessToken = this.createAccessToken(id, username)
    const token = `Bearer ${accessToken}`

    return token
  }

  public getAccessAndRefreshToken(id:string, username:string):string {
    const refreshToken = this.createRefreshToken(id, username)
    const accessToken = this.createAccessToken(id, username)
    const tokens = JSON.stringify({
      access_token:  `Bearer ${accessToken}`,
      refresh_token: `Bearer ${refreshToken}`,
    })

    return tokens
  }

  public verifyToken(token:string): TokenInterface {
    const tokenArray = token.split(' ')

    const verifiedToken = <TokenInterface>verify(tokenArray[1], process.env.JWT_KEY)

    if (verifiedToken) {
      return verifiedToken
    }
  }
}
