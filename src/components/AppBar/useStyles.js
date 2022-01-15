import { makeStyles } from "@material-ui/core/styles";
// import { alpha } from "@material-ui/core/styles/colorManipulator";

const useStyles = makeStyles((theme) => {
  return {
    appBar: {
      borderRadius: theme.shape.borderRadius,
      // backgroundColor: theme.palette.mode === "light" ? "#00A5CF" : "#7AE582",
    },
    links: { textDecoration: "none" },
  };
});

export default useStyles;
