export interface RootReducerState {
  readonly dialog: {
    open: boolean;
    data: any;
  };
  readonly isNavigationOpen: boolean;
}
