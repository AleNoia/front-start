import { createTheme, responsiveFontSizes } from "@mui/material/styles";

const theme = (type) =>
  responsiveFontSizes(
    createTheme({
      palette: {
        type,
        primary: {
          main: "#254f5e",
          light: "#527b8b",
          dark: "#002734",
          contrastText: "#ffffff",
        },
        secondary: {
          main: "#4bffae",
          light: "#8affe0",
          dark: "#00cb7e",
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
      overrides: {
        MuiTableRow: {
          root: {
            fontSize: "0.8rem",
          },
        },
        MuiTableCell: {
          sizeSmall: {
            padding: "2px 2px 2px 8px",
          },
        },
        MuiInputBase: {
          input: {
            "&.Mui-disabled": {
              color:
                type === "dark"
                  ? "rgba(255, 255, 255, 0.5)"
                  : "rgba(0, 0, 0, 0.6)",
            },
          },
        },
        MuiInputLabel: {
          root: {
            "&.Mui-focused": {
              color: type === "dark" ? "#ffffff" : "#002734",
            },
          },
        },
        MuiTableBody: {
          root: {
            "& > :nth-of-type(odd)": {
              backgroundColor: type === "dark" ? "#5e5e5e" : "#e8e8e8",
            },
          },
        },
        MuiPickersModal: {
          dialogRoot: {
            "& .MuiDialogActions-root > .MuiButton-root": {
              color: type === "dark" ? "#e8e8e8" : "#002734",
            },
          },
        },
        MuiPickersDay: {
          current: {
            color: "#00cb7e",
          },
        },
      },
    })
  );

export default theme;
