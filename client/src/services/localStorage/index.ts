export const ACCESS_TOKEN_NAME = "access_token";
export const REFRESH_TOKEN_NAME = "refresh_token";

const LocalStorageService = () => {
  const setAccessToken = (value: string) => {
    localStorage.setItem(ACCESS_TOKEN_NAME, value);
  };

  const getAccessToken = () => {
    const token = localStorage.getItem(ACCESS_TOKEN_NAME);

    return token || undefined;
  };

  const setRefreshToken = (value: string) => {
    localStorage.setItem(REFRESH_TOKEN_NAME, value);
  };

  const getRefreshToken = () => {
    const token = localStorage.getItem(REFRESH_TOKEN_NAME);

    return token || undefined;
  };

  const removeTokens = () => {
    localStorage.removeItem(ACCESS_TOKEN_NAME);
    localStorage.removeItem(REFRESH_TOKEN_NAME);
  };

  return {
    getAccessToken,
    getRefreshToken,
    setAccessToken,
    setRefreshToken,
    removeTokens,
  };
};

export default LocalStorageService();
