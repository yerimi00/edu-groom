import React, { useState } from "react";
import {
  ThemeProvider,
  createTheme,
  ThemeOptions,
  Theme,
} from "@mui/material/styles";
import { green, purple } from "@mui/material/colors";
import Header from "./components/Header";
import { styled } from "@mui/material/styles";
import Switch, { SwitchProps } from "@mui/material/Switch";
import {
  createStyles,
  FormControlLabel,
  makeStyles,
  Paper,
} from "@mui/material";
import { Height } from "@mui/icons-material";
import Products from "./pages/Products";

const MaterialUISwitch = styled(Switch)(({ theme }) => ({
  width: 62,
  height: 34,
  padding: 7,
  "& .MuiSwitch-switchBase": {
    margin: 1,
    padding: 0,
    transform: "translateX(6px)",
    "&.Mui-checked": {
      color: "#fff",
      transform: "translateX(22px)",
      "& .MuiSwitch-thumb:before": {
        backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
          "#fff"
        )}" d="M4.2 2.5l-.7 1.8-1.8.7 1.8.7.7 1.8.6-1.8L6.7 5l-1.9-.7-.6-1.8zm15 8.3a6.7 6.7 0 11-6.6-6.6 5.8 5.8 0 006.6 6.6z"/></svg>')`,
      },
      "& + .MuiSwitch-track": {
        opacity: 1,
        backgroundColor: "#aab4be",
        ...theme.applyStyles("dark", {
          backgroundColor: "#8796A5",
        }),
      },
    },
  },
  "& .MuiSwitch-thumb": {
    backgroundColor: "#001e3c",
    width: 32,
    height: 32,
    "&::before": {
      content: "''",
      position: "absolute",
      width: "100%",
      height: "100%",
      left: 0,
      top: 0,
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
      backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
        "#fff"
      )}" d="M9.305 1.667V3.75h1.389V1.667h-1.39zm-4.707 1.95l-.982.982L5.09 6.072l.982-.982-1.473-1.473zm10.802 0L13.927 5.09l.982.982 1.473-1.473-.982-.982zM10 5.139a4.872 4.872 0 00-4.862 4.86A4.872 4.872 0 0010 14.862 4.872 4.872 0 0014.86 10 4.872 4.872 0 0010 5.139zm0 1.389A3.462 3.462 0 0113.471 10a3.462 3.462 0 01-3.473 3.472A3.462 3.462 0 016.527 10 3.462 3.462 0 0110 6.528zM1.665 9.305v1.39h2.083v-1.39H1.666zm14.583 0v1.39h2.084v-1.39h-2.084zM5.09 13.928L3.616 15.4l.982.982 1.473-1.473-.982-.982zm9.82 0l-.982.982 1.473 1.473.982-.982-1.473-1.473zM9.305 16.25v2.083h1.389V16.25h-1.39z"/></svg>')`,
    },
    ...theme.applyStyles("dark", {
      backgroundColor: "#003892",
    }),
  },
  "& .MuiSwitch-track": {
    opacity: 1,
    backgroundColor: "#aab4be",
    borderRadius: 20 / 2,
    ...theme.applyStyles("dark", {
      backgroundColor: "#8796A5",
    }),
  },
}));

const useStyles = styled(Paper)(({ theme }) => ({
  height: "100vh",
  width: "100vh",
}));

function App() {
  const [isDark, setIsDark] = useState(false);
  const [themeOption, setThemeOption] = useState<ThemeOptions>({
    palette: {
      mode: "light",
      primary: {
        main: purple[500],
      },
      secondary: {
        main: green[500],
      },
    },
  });

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    checked: boolean
  ) => {
    setIsDark(checked);
    setThemeOption({
      palette: {
        mode: checked ? "dark" : "light",
        primary: {
          main: purple[500],
        },
        secondary: {
          main: green[500],
        },
      },
    });
  };

  console.log("isDark ", isDark);

  const theme = createTheme(themeOption);

  return (
    <ThemeProvider theme={theme}>
      <Header>
        <FormControlLabel
          control={
            <MaterialUISwitch
              sx={{ m: 1 }}
              checked={isDark}
              onChange={handleChange}
            />
          }
          label="DarkMode switch"
        />
      </Header>
      <Products></Products>
    </ThemeProvider>
  );
}

export default App;
