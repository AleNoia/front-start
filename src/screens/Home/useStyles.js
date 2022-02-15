import { makeStyles } from "@material-ui/core/styles";
// import { alpha } from "@material-ui/core/styles/colorManipulator";

const appBarHeight = "72px";
const useStyles = makeStyles((theme) => {
  return {
    firstSection: {
      height: "100vh",
      paddingTop: `calc(${appBarHeight} + 16px)`,
      background: "linear-gradient(293.16deg, #9FFFCB 0%, #00A5CF 93.45%)",
    },
    contentFirstSection: {
      height: "100%",
      display: "flex",
      alignItems: "center",
      padding: "16px",
    },
    text: {
      display: "flex",
      flexDirection: "column",
      maxWidth: "773px",
    },
    btnCallToAction: {
      width: "max-content",
      backgroundColor: "#FCEA2B !important",
      color: "#004E64 !important",
      padding: `16px 40px !important`,
      boxShadow: "none !important",
      marginTop: theme.spacing(2),
      lineHeight: "normal !important",
    },
    link: {
      color: "#fff !important",
      borderBottom: "2px solid #fff !important",

      "&:hover": {
        textDecoration: "none",
        borderBottom: "2px solid #fcea2b !important",
        color: "#fcea2b !important",
      },
    },
  };
});

export default useStyles;
