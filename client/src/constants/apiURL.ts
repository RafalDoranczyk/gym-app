export const BASE_API_URL = "http://192.168.1.31:5000/api";
// export const BASE_API_URL = "http://localhost:5000/api";

export const SIGNUP_USER_URL = `${BASE_API_URL}/auth/signup`;
export const LOGIN_USER_URL = `${BASE_API_URL}/auth/login`;
export const REFRESH_TOKEN_URL = `${BASE_API_URL}/auth/refresh`;

export const INGREDIENTS_URL = `${BASE_API_URL}/ingredients`;
export const INGREDIENT_TYPES_URL = `${BASE_API_URL}/ingredients/types`;

export const MEALS_URL = `${BASE_API_URL}/meals`;
export const MEAL_TYPES_URL = `${MEALS_URL}/types`;

export const FOOD_DAYS_URL = `${BASE_API_URL}/food-days`;

export const MEASUREMENTS_URL = `${BASE_API_URL}/measurements`;
