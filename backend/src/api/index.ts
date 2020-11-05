import healthAPI from './health'
import authAPI from './auth'
import ingredientsAPI from './ingredients'
import mealsAPI from './meals'
import foodDaysAPI from './foodDays'
import measurementsAPI from './measurements'

export const notProtectedRoutes = [
  ...healthAPI,
  ...authAPI,
]

export const protectedRoutes = [
  ...ingredientsAPI,
  ...mealsAPI,
  ...measurementsAPI,
  ...foodDaysAPI,
]
