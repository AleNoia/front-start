import { makeStyles } from "@material-ui/core/styles";
// import { alpha } from "@material-ui/core/styles/colorManipulator";

const useStyles = makeStyles(() => {
  return {
    appBar: {
      borderRadius: "8px",
      // backgroundColor: theme.palette.mode === "light" ? "#00A5CF" : "#7AE582",
    },
    links: { textDecoration: "none" },
  };
});

export default useStyles;
