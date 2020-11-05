import { createStyles, makeStyles, Theme } from "@material-ui/core";

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    formLabel: {
      color: (props: { isError: boolean }) =>
        props.isError ? theme.palette.error.main : theme.palette.text.secondary,
    },
    checkboxLabel: {
      textTransform: "capitalize",
    },
  })
);
