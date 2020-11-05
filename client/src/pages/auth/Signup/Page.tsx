/* eslint-disable no-nested-ternary */
import React from "react";
import * as paths from "constants/routesURL";
import {
  Grid,
  Container,
  Fade,
  Typography,
  InputAdornment,
  IconButton,
  Button,
} from "@material-ui/core";
import {
  Visibility,
  VisibilityOff,
  KeyboardArrowRight,
} from "@material-ui/icons";
import { Link } from "react-router-dom";
import { UseFormMethods } from "react-hook-form";
import { HookFormInput } from "components";
import { signupInputs } from "./hookInputs";
import { useStyles } from "../styles";

export interface SignupPageProps {
  handleSubmit: UseFormMethods["handleSubmit"];
  onSubmit: () => void;
  errors: UseFormMethods["errors"];
  register: UseFormMethods["register"];
  watch: UseFormMethods["watch"];
  showPassword: boolean;
  handleClickShowPassword: (id: "password" | "password2") => void;
  handleMouseDownPassword: (e: React.MouseEvent<HTMLButtonElement>) => void;
  showRepeatPassword: boolean;
}

const SignupPage: React.FunctionComponent<SignupPageProps> = ({
  handleSubmit,
  onSubmit,
  errors,
  register,
  showPassword,
  handleClickShowPassword,
  handleMouseDownPassword,
  showRepeatPassword,
  watch,
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
              {signupInputs.map((input) => (
                <HookFormInput
                  key={input.id}
                  register={register}
                  additionalValidation={
                    input.id === "password2"
                      ? {
                          validate: (val: string) => {
                            if (val !== watch("password")) {
                              return "Password should match";
                            }
                          },
                        }
                      : undefined
                  }
                  errors={errors}
                  schema={input}
                  changeableType={
                    (input.id === "password" && showPassword) ||
                    (input.id === "password2" && showRepeatPassword)
                      ? "text"
                      : input.type
                  }
                  inputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        {input.type === "password" && (
                          <IconButton
                            aria-label="toggle password visibility"
                            onClick={() =>
                              handleClickShowPassword(
                                input.id === "password"
                                  ? "password"
                                  : "password2"
                              )
                            }
                            onMouseDown={handleMouseDownPassword}
                            edge="end"
                          >
                            {(input.id === "password" && showPassword) ||
                            (input.id === "password2" && showRepeatPassword) ? (
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
                Continue
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
                Already registered?
                <Link to={paths.LOGIN_PAGE_PATH}>Log in</Link>
              </Typography>
            </div>
          </Grid>
        </Grid>
      </Container>
    </Fade>
  );
};
export default SignupPage;
