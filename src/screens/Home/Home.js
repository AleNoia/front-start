import React from "react";
import useStyles from "./useStyles";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import BrLogo from "../../assets/images/br-logo.svg";

function Home() {
  const classes = useStyles();

  return (
    <>
      <section className={classes.firstSection}>
        <Container maxWidth="xl" style={{ height: "100%" }}>
          <Box className={classes.contentFirstSection}>
            <Stack spacing={2} direction="column" className={classes.text}>
              <Typography variant="h3" component="h1" color="white">
                Front Start
              </Typography>
              <Typography variant="subtitle1" component="p" color="white">
                Um site para você ver as vagas de emprego front-end no Brasil
                consumindo os dados do repositório{" "}
                <Link
                  href="#"
                  className={classes.link}
                  style={{ textDecorationColor: "none" }}
                >
                  Front-End Brasil
                </Link>
                .
              </Typography>
              <Button
                variant="contained"
                className={classes.btnCallToAction}
                size="large"
              >
                Ver vagas
              </Button>
            </Stack>
            <Box className={classes.image}>
              <img src={BrLogo} alt="Logo" />
            </Box>
          </Box>
        </Container>
      </section>
    </>
  );
}
export default Home;
