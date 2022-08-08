import { CssBaseline } from "@mui/material";
import { blue, yellow } from "@mui/material/colors";

import { useSelector } from "react-redux";
import {
  responsiveFontSizes,
  createTheme,
  ThemeProvider,
} from "@mui/material/styles";
import NavBar from "./Components/NavBar";
import PageLayout from "./Pages/HomePage/PageLayout";

const lightTheme = responsiveFontSizes(
  createTheme({
    palette: {
      mode: "light",
      primary: { main: blue[700] },
      secondary: { main: "#fff" },
      text: {
        primary: blue[700],
        secondary: "#000",
      },
    },
    components: {
      MuiButton: {
        defaultProps: {
          variant: "primary",
        },
        styleOverrides: {
          root: {
            color: blue[700],
            "&:hover": {
              boxShadow: `0px 2px 2px ${blue[700]}`,
            },
          },
        },
      },
      MuiAppBar: {
        styleOverrides: {
          root: {
            "&:hover": { boxShadow: `0px 4px 7px ${blue[700]}` },
          },
        },
        defaultProps: {
          position: "sticky",
          color: "secondary",
        },
      },
    },
  })
);
const darkTheme = responsiveFontSizes(
  createTheme({
    palette: {
      mode: "dark",
      primary: { main: yellow[700] },
      secondary: { main: "#000" },
      text: {
        primary: yellow[700],
        secondary: "#fff",
      },
    },
    components: {
      MuiButton: {
        defaultProps: {
          variant: "primary",
        },
        styleOverrides: {
          root: {
            color: yellow[700],
            "&:hover": {
              boxShadow: `0px 2px 2px ${yellow[700]}`,
            },
          },
        },
      },
      MuiAppBar: {
        styleOverrides: {
          root: {
            // m: 19,
            "&:hover": { boxShadow: `0px 4px 7px ${yellow[700]}` },
          },
        },
        defaultProps: {
          position: "sticky",
          color: "secondary",
        },
      },
    },
  })
);

function App(props) {
  const theme = useSelector((state) => state.theme.value);
  return (
    <ThemeProvider theme={theme === "dark" ? darkTheme : lightTheme}>
      <CssBaseline />
      <NavBar />
      <PageLayout />
    </ThemeProvider>
  );
}

export default App;
