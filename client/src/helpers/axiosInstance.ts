import axios from "axios";
import { BASE_API_URL, REFRESH_TOKEN_URL } from "constants/apiURL";
import LocalStorageService, { ACCESS_TOKEN_NAME } from "services/localStorage";
import AuthService from "services/auth";

const axiosInstance = axios.create({
  baseURL: BASE_API_URL,
  timeout: 5000,
  headers: {
    "Content-Type": "application/json",
    accept: "application/json",
  },
});

axiosInstance.interceptors.request.use(
  (response) => {
    const token = LocalStorageService.getAccessToken();

    response.headers.Authorization = token;

    return response;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    const originalRequest = error.config;
    if (error.response) {
      const { status, statusText } = error.response;
      if (status === 401) {
        if (originalRequest.url === REFRESH_TOKEN_URL) {
          return Promise.reject(error);
        }
        if (statusText === "Unauthorized") {
          const refreshToken = LocalStorageService.getRefreshToken();

          if (refreshToken) {
            const tokenParts = AuthService.validateToken(refreshToken);
            const now = Math.ceil(Date.now() / 1000);

            if (tokenParts.exp > now) {
              return axiosInstance
                .post(REFRESH_TOKEN_URL, { refreshToken })
                .then(({ data }) => {
                  localStorage.setItem(ACCESS_TOKEN_NAME, data.token);
                  axiosInstance.defaults.headers.Authorization = data.token;
                  originalRequest.headers.Authorization = data.token;

                  return axiosInstance(originalRequest);
                })
                .catch((err) => {
                  LocalStorageService.removeTokens();
                  return Promise.reject(err);
                });
            }
          }
          LocalStorageService.removeTokens();
          return Promise.reject(error);
        }
      }
      Promise.reject(error);
    }
    if (error.request) {
      return Promise.reject(error);
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
