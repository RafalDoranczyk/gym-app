import axios from "axios";
import { LOGIN_USER_URL, SIGNUP_USER_URL } from "constants/apiURL";
import jwtDecode from "jwt-decode";
import { DecodedTokenInterface } from "services/auth/interfaces";
import LocalStorageService from "services/localStorage";
import * as I from "./interfaces";

const AuthService = () => {
  const parseAndSetTokens = (headers: I.HeadersAuthorizationInterface) => {
    const tokens: I.TokensInterface = JSON.parse(headers.authorization);
    LocalStorageService.setAccessToken(tokens.access_token);
    LocalStorageService.setRefreshToken(tokens.refresh_token);
  };

  const signup = async (payload: I.SignupRequest) => {
    try {
      const { data, headers } = await axios.post<I.SignupResponse>(
        SIGNUP_USER_URL,
        payload
      );

      parseAndSetTokens(headers);

      return data;
    } catch (error) {
      return Promise.reject(error);
    }
  };

  const login = async (payload: I.LoginRequest) => {
    try {
      const data = await axios.post<I.LoginResponse>(LOGIN_USER_URL, payload);

      parseAndSetTokens(data.headers);

      return data;
    } catch (error) {
      return Promise.reject(error);
    }
  };

  const logout = () => {
    LocalStorageService.removeTokens();
  };

  const validateToken = (token: string) => {
    try {
      const validatedToken: DecodedTokenInterface = jwtDecode(token);

      return validatedToken;
    } catch (error) {
      LocalStorageService.removeTokens();

      return error;
    }
  };

  return { signup, login, logout, validateToken };
};

export default AuthService();
