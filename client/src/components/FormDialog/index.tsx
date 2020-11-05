import React from "react";
import {
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  Grid,
} from "@material-ui/core";
import { Cancel, Save } from "@material-ui/icons";
import { actions, useSelector } from "store";
import { useDispatch } from "react-redux";

export interface FormDialogProps {
  title: string;
  onSubmit: () => Promise<void>;
}

const FormDialog: React.FunctionComponent<FormDialogProps> = ({
  title,
  onSubmit,
  children,
}) => {
  const { open } = useSelector((state) => state.root.dialog);
  const dispatch = useDispatch();

  const closeDialog = () => {
    dispatch(actions.handleDialog({ open: false }));
  };

  const asyncSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await onSubmit();
    closeDialog();
  };

  return (
    <Dialog maxWidth="md" open={open}>
      <DialogTitle>{title}</DialogTitle>

      <DialogContent>
        <form noValidate onSubmit={asyncSubmit}>
          <Grid container direction="column" spacing={2}>
            {children}

            <Grid item container justify="space-between">
              <Grid item>
                <Button
                  color="secondary"
                  size="large"
                  startIcon={<Cancel />}
                  onClick={closeDialog}
                >
                  Cancel
                </Button>
              </Grid>
              <Grid item>
                <Button
                  type="submit"
                  color="primary"
                  size="large"
                  startIcon={<Save />}
                >
                  Save
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default FormDialog;
