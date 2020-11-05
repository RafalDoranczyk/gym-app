export interface AuthReducerState {
  readonly isLoggedIn: boolean;
  readonly username: string | undefined;
}
