import * as React from "react";
// import AppBar from "@mui/material/AppBar";
// import Box from "@mui/material/Box";
// import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
// import Tooltip from "@mui/material/Tooltip";
import Link from "@mui/material/Link";
import IconButton from "@mui/material/IconButton";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
// import Logo from "../../assets/images/Logo.svg";
// import WbSunnyIcon from "@mui/icons-material/WbSunny";
// import DarkModeIcon from "@mui/icons-material/DarkMode";
import Stack from "@mui/material/Stack";
import GitHubIcon from "@mui/icons-material/GitHub";
import TwitterIcon from "@mui/icons-material/Twitter";
// import theme from "../App/theme";

// import { useDispatch, useSelector } from "react-redux";
// import { update } from "../../store/ducks/theme";

import useStyles from "./useStyles";

const Footer = () => {
  const classes = useStyles();
  return (
    <footer className={classes.footer}>
      <Container
        maxWidth="xl"
        style={{ height: "100%" }}
        className={classes.container}
      >
        <Stack spacing={1} direction="column" className={classes.text}>
          <Typography
            variant="subtitle1"
            component="p"
            color="rgba(250,250,250, 0.8)"
          >
            Desenvolvido por
          </Typography>
          <Typography
            variant="h3"
            component="h2"
            color="#fff"
            className={classes.name}
          >
            Igor Noia
          </Typography>
          <Typography
            variant="subtitle1"
            component="p"
            color="rgba(250,250,250, 0.8)"
          >
            2022
          </Typography>
        </Stack>
        <Stack spacing={2} direction="row" className={classes.medias}>
          <Link href="#">
            <IconButton
              className={classes.link}
              aria-label="upload picture"
              component="span"
            >
              <GitHubIcon style={{ color: "#9FFFCB" }} />
            </IconButton>
          </Link>
          <Link href="#">
            <IconButton
              className={classes.link}
              aria-label="upload picture"
              component="span"
            >
              <LinkedInIcon style={{ color: "#9FFFCB" }} />
            </IconButton>
          </Link>
          <Link href="#">
            <IconButton
              className={classes.link}
              aria-label="upload picture"
              component="span"
            >
              <TwitterIcon style={{ color: "#9FFFCB" }} />
            </IconButton>
          </Link>
        </Stack>
      </Container>
    </footer>
  );
};

export default Footer;
