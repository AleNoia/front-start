import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import Link from "@mui/material/Link";
import Logo from "../../assets/images/Logo.svg";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import DarkModeIcon from "@mui/icons-material/DarkMode";
// import theme from "../App/theme";

import { useDispatch, useSelector } from "react-redux";
import { update } from "../../store/ducks/theme";

import useStyles from "./useStyles";

const pages = [
  { name: "Home", link: "/" },
  { name: "Vagas", link: "/vagas" },
];

const ResponsiveAppBar = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const themeType = useSelector((store) => store.theme.type);

  const handleThemeChange = () => {
    const type = themeType === "dark" ? "light" : "dark";
    dispatch(update(type));
  };

  return (
    <AppBar
      position="fixed"
      className={classes.appBar}
      style={{ width: `calc(100vw - 48px)`, margin: "16px", boxShadow: "none" }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <img src={Logo} alt="Logo" />
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ mr: 5, ml: 2, display: { xs: "none", md: "flex" } }}
            >
              Front Start
            </Typography>
          </Box>

          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}
          >
            <img src={Logo} alt="Logo" />
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Link href={page.link} key={page.link} className={classes.links}>
                <Button
                  key={page.link}
                  sx={{ my: 2, mr: 2, color: "white", display: "block" }}
                >
                  {page.name}
                </Button>
              </Link>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            {themeType === "light" ? (
              <Tooltip title="Ativar modo noturno">
                <IconButton
                  onClick={() => {
                    handleThemeChange();
                  }}
                >
                  <DarkModeIcon sx={{ color: "primary.contrastText" }} />
                </IconButton>
              </Tooltip>
            ) : (
              <Tooltip title="Desativar modo noturno">
                <IconButton
                  onClick={() => {
                    handleThemeChange();
                  }}
                >
                  <WbSunnyIcon sx={{ color: "primary.contrastText" }} />
                </IconButton>
              </Tooltip>
            )}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default ResponsiveAppBar;
