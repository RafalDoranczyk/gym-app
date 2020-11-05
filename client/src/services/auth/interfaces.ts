import { AxiosResponse } from "axios";

export interface LoginRequest {
  email: string;
  password: string;
}

export interface LoginResponse extends AxiosResponse {
  headers: HeadersAuthorizationInterface;
}

export interface SignupRequest extends LoginRequest {
  username: string;
  password2: string;
}

export interface SignupResponse extends AxiosResponse {
  data: {
    message: string;
  };
  headers: HeadersAuthorizationInterface;
}

export interface HeadersAuthorizationInterface {
  authorization: string;
}

export interface TokensInterface {
  access_token: string;
  refresh_token: string;
}

export interface DecodedTokenInterface {
  id: string;
  username: string;
  iat: number;
  exp: number;
}
