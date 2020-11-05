import React, { useEffect, useMemo, useState } from "react";
import {
  MuiThemeProvider,
  CssBaseline,
  createMuiTheme,
} from "@material-ui/core";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import Luxon from "@date-io/luxon";
import { blue, red } from "@material-ui/core/colors";
import localStorageService from "services/localStorage";
import authService from "services/auth";
import { useDispatch } from "react-redux";
import { ThemeProvider as StyledThemeProvider } from "styled-components";
import { authNav, notAuthNav } from "constants/navData";
import { Spinner, Snackbar, MainNavigation } from "./components";
import AppRouter from "./pages/router";
import { useStyles } from "./styles";
import { actions, useSelector } from "./store";

declare module "@material-ui/core/styles/createPalette" {
  interface Palette {
    carbs: {
      light: string;
      normal: string;
    };
    protein: {
      light: string;
      normal: string;
    };
    fat: {
      light: string;
      normal: string;
    };
  }
  interface PaletteOptions {
    carbs: {
      light: string;
      normal: string;
    };
    protein: {
      light: string;
      normal: string;
    };
    fat: {
      light: string;
      normal: string;
    };
  }
}

const App: React.FunctionComponent = () => {
  const { isLoading } = useSelector((state) => state.loading);
  const { isLoggedIn } = useSelector((state) => state.auth);
  const [darkMode, setDarkMode] = useState(false);
  const classes = useStyles();
  const dispatch = useDispatch();

  useEffect(() => {
    const token = localStorageService.getAccessToken();
    if (token) {
      const validateToken = authService.validateToken(token);
      dispatch(actions.handleUserLoggedIn(validateToken));
    }
  }, [dispatch]);

  const handleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const handleLogout = () => {
    dispatch(actions.handleUserLoggedIn(null));
  };

  const theme = useMemo(
    () =>
      createMuiTheme({
        palette: {
          primary: blue,
          secondary: red,
          type: darkMode ? "light" : "dark",
          carbs: {
            light: "#c51162",
            normal: "#890b44",
          },
          protein: {
            light: "#6200ea",
            normal: "#4400a3",
          },
          fat: {
            light: "#00c853",
            normal: "#008c3a",
          },
        },
        overrides: {
          MuiCssBaseline: {
            "@global": {
              body: {
                "&::-webkit-scrollbar": {
                  width: "6px",
                  height: "6px",
                },
                "&::-webkit-scrollbar-button": {
                  width: "6px",
                  height: "6px",
                },
                "&::-webkit-scrollbar-thumb ": {
                  background: red[900],
                  border: `0px none ${red[900]}`,
                  borderRadius: "50px",
                },
              },
            },
          },
        },
      }),
    [darkMode]
  );

  return (
    <MuiThemeProvider theme={theme}>
      <StyledThemeProvider theme={theme}>
        <MuiPickersUtilsProvider utils={Luxon}>
          <CssBaseline />

          <div className={classes.wrapper}>
            {isLoading && <Spinner />}
            <MainNavigation
              onLogout={handleLogout}
              data={isLoggedIn ? authNav : notAuthNav}
              darkMode={darkMode}
              handleDarkMode={handleDarkMode}
            />
            <Snackbar />
            <AppRouter />
          </div>
        </MuiPickersUtilsProvider>
      </StyledThemeProvider>
    </MuiThemeProvider>
  );
};

export default App;
