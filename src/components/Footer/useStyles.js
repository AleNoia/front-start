import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => {
  return {
    footer: {
      height: "50vh",
      backgroundImage:
        "linear-gradient(to right top, #00a5cf, #00a0c8, #009ac2, #0095bb, #0090b5)",
    },
    container: {
      height: "100%",
      display: "flex !important",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "16px",
    },
    name: {
      fontWeight: `700 !important`,
    },
    link: { "& > svg": { color: "#fff" } },
  };
});

export default useStyles;
