import React from "react";
import { Link } from "react-router-dom";
import * as paths from "constants/routesURL";
import {
  Grid,
  Container,
  Fade,
  Typography,
  InputAdornment,
  IconButton,
  Button,
  TextField,
} from "@material-ui/core";
import {
  Visibility,
  VisibilityOff,
  KeyboardArrowRight,
} from "@material-ui/icons";
import { UseFormMethods } from "react-hook-form";
import { loginInputs } from "./hookInputs";
import { useStyles } from "../styles";

export interface LoginUserPageProps {
  handleSubmit: UseFormMethods["handleSubmit"];
  onSubmit: () => void;
  errors: UseFormMethods["errors"];
  register: UseFormMethods["register"];
  showPassword: boolean;
  handleClickShowPassword: () => void;
  handleMouseDownPassword: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const LoginUserPage: React.FunctionComponent<LoginUserPageProps> = ({
  handleSubmit,
  onSubmit,
  errors,
  register,
  showPassword,
  handleClickShowPassword,
  handleMouseDownPassword,
}) => {
  const classes = useStyles();

  return (
    <Fade in>
      <Container className={classes.container} disableGutters maxWidth="xs">
        <Grid container spacing={1} direction="column">
          <Grid item>
            <div className={classes.formHead}>
              <Typography variant="caption" className={classes.title}>
                Create an account
              </Typography>
            </div>
          </Grid>

          <Grid item>
            <form
              noValidate
              onSubmit={handleSubmit(onSubmit)}
              className={classes.formMiddle}
            >
              {loginInputs
                .filter(
                  (input) => input.id === "email" || input.id === "password"
                )
                .map(({ label, type, id, validation }) => (
                  <TextField
                    key={id}
                    error={!!errors[id]}
                    autoComplete="off"
                    inputRef={register(validation)}
                    label={errors[id] ? errors[id].message : label}
                    type={showPassword ? "text" : type}
                    name={id}
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          {type === "password" && (
                            <IconButton
                              aria-label="toggle password visibility"
                              onClick={handleClickShowPassword}
                              onMouseDown={handleMouseDownPassword}
                              edge="end"
                            >
                              {showPassword ? (
                                <Visibility />
                              ) : (
                                <VisibilityOff />
                              )}
                            </IconButton>
                          )}
                        </InputAdornment>
                      ),
                    }}
                  />
                ))}

              <Button
                type="submit"
                className={classes.submitButton}
                variant="contained"
                endIcon={<KeyboardArrowRight />}
              >
                Log in
              </Button>
            </form>
          </Grid>

          <Grid item>
            <div className={classes.buttons}>
              <Button>Social1</Button>
              <Button>Social2</Button>
              <Button>Social3</Button>
            </div>
          </Grid>

          <Grid item>
            <div className={classes.info}>
              <Typography className={classes.infoParagraph}>
                Don't have an account?
                <Link to={paths.SIGNUP_PAGE_PATH}>Sign up!</Link>
              </Typography>
            </div>
          </Grid>
        </Grid>
      </Container>
    </Fade>
  );
};

export default LoginUserPage;
