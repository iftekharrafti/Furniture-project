import { Box, Breadcrumbs, Container, Grid, Typography } from "@mui/material";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Image from "next/image";
import Link from "next/link";

const useStyles = makeStyles((theme) => ({
  titleContainer: {
    padding: "30px 0",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F4F5F8",
  },
}));

const About = () => {
  const styles = useStyles();
  return (
    <Box>
      <Box className={styles.titleContainer}>
        <Typography variant="h4" className="title">
          ABOUT US
        </Typography> 
        <Breadcrumbs  aria-label="breadcrumb">
          <Link underline="hover" color="inherit" href="/">
            Home
          </Link>
          <Link underline="hover" color="inherit" href="/about">
            About
          </Link>
        </Breadcrumbs>
      </Box>
      <Container>
        <Box>
          <Typography variant="h4" className="title3" sx={{ py: 4 }}>
            Furns is a global furniture destination for somethings. We sell
            cutting-edge furniture and offer a wide variety of fashion-related
            content.
          </Typography>
        </Box>
        <Box>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <Image
                src="/img/stores.png"
                alt=""
                width="500px"
                height="400px"
                objectFit="cover"
              />
              <Typography
                variant="h4"
                className="title2"
                sx={{ fontWeight: 600, my: 3 }}
              >
                OUR STORES
              </Typography>
              <Typography
                variant="h4"
                className="desc"
                style={{ lineHeight: "25px", marginBottom: "65px" }}
              >
                Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse. Lorem ipsum dolor sit
                amet conse ctetur adipisicing elit, sed do eiusmod tempor.
              </Typography>
            </Grid>
            <Grid item xs={12} md={6}>
              <Image
                src="/img/mission.png"
                alt=""
                width="500px"
                height="400px"
                objectFit="cover"
              />
              <Typography
                variant="h4"
                className="title2"
                sx={{ fontWeight: 600, my: 3 }}
              >
                OUR MISSION
              </Typography>
              <Typography
                variant="h4"
                className="desc"
                style={{ lineHeight: "25px", marginBottom: "45px" }}
              >
                Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse. Lorem ipsum dolor sit
                amet conse ctetur adipisicing elit, sed do eiusmod tempor.
              </Typography>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default About;
