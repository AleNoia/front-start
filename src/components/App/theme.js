import { createTheme, responsiveFontSizes } from "@mui/material/styles";

const theme = (mode) =>
  responsiveFontSizes(
    createTheme({
      overrides: {
        MuiCssBaseline: {
          "@global": {
            "*": {
              "scrollbar-width": "thin",
            },
            "*::-webkit-scrollbar": {
              width: "4px",
              height: "4px",
            },
          },
        },
      },
      palette: {
        mode,
        primary: {
          main: "#00A5CF",
          light: "#6690FF",
          dark: "#004E64",
          contrastText: "#ffffff",
          ...(mode === "dark" && {
            main: "#ffb74d",
          }),
        },
        secondary: {
          main: "#7AE582",
          light: "#9FFFCB",
          dark: "#25A18E",
          contrastText: "#000000",
        },
        warning: {
          main: "#ffb74d",
          light: "#ff9800",
          dark: "#f57c00",
          contrastText: "rgba(0, 0, 0, 0.87)",
        },
        background: {
          paperLight: "#F8F8F8",
        },
      },
      typography: {
        button: {
          textTransform: "none",
        },
        fontSize: 16,
        fontFamily: "'Overpass', 'sans-serif'",
        fontWeightRegular: 400,
      },
      shape: {
        borderRadius: 8,
      },
    })
  );

export default theme;
