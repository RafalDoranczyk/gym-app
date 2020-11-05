import { AlertProps } from "@material-ui/lab";

export interface RequestsReducerState {
  readonly snackbar: Snackbar;
  readonly error: boolean;
  readonly success: boolean;
}

export interface Snackbar {
  readonly open: boolean;
  readonly messageSeverity?: AlertProps["severity"];
  readonly message?: string;
}
