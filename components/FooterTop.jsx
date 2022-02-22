import {
    Box,
    Container,
    Grid,
    Input,
    List,
    ListItem,
    ListItemText,
    Typography,
  } from "@mui/material";
  import React from "react";
  import FacebookIcon from "@mui/icons-material/Facebook";
  import TwitterIcon from "@mui/icons-material/Twitter";
  import LinkedInIcon from "@mui/icons-material/LinkedIn";
  import YouTubeIcon from "@mui/icons-material/YouTube";
  import { makeStyles } from "@material-ui/core/styles";
  
  const useStyles = makeStyles((theme) => ({
    footerTop: {
      backgroundColor: "#2F333A",
      padding: "40px 0",
      color: "#fff",
    },
    title: {
      fontSize: "18px",
      fontWeight: "500",
      marginBottom: "15px",
    },
    desc: {
      fontSize: "14px",
      lineHeight: "16px",
      letterSpacing: "1px",
    },
    item: {
      transition: "0.5s ease",
      fontSize: "33px",
      "&:hover": {
        color: "rgb(255, 112, 4)",
        marginLeft: "15px",
      },
    },
  }));
  
  const FooterTop = () => {
    const styles = useStyles();
    return (
      <Box className={styles.footerTop}>
        <Container>
          <Grid container spacing={2}>
            <Grid item xs={6} md={3} sx={{ pr: 4 }}>
              <Typography className={styles.title} variant="subtitle2">
                ABOUT US
              </Typography>
              <Typography variant="p" className={styles.desc}>
                Lorem ipsum dolor sit amet cons adipisicing elit sed do eiusm
                tempor incididunt ut labor et dolore magna aliqua. Ut enim ad
                minim veniam, quis nostrud.
              </Typography>
              <Box sx={{ mt: 3 }}>
                <FacebookIcon sx={{mr:1}}></FacebookIcon>
                <TwitterIcon sx={{mr:1}}></TwitterIcon>
                <LinkedInIcon sx={{mr:1}}></LinkedInIcon>
                <YouTubeIcon></YouTubeIcon>
              </Box>
            </Grid>
            <Grid item xs={6} md={3}>
              <Typography className={styles.title} variant="subtitle2">
                INFORMATION
              </Typography>
              <List>
                <ListItem className={styles.item} sx={{ p: 0 }}>
                  <ListItemText>About Us</ListItemText>
                </ListItem>
                <ListItem className={styles.item} sx={{ p: 0 }}>
                  <ListItemText>Nanufactures</ListItemText>
                </ListItem>
                <ListItem className={styles.item} sx={{ p: 0 }}>
                  <ListItemText>Tracking Order</ListItemText>
                </ListItem>
                <ListItem className={styles.item} sx={{ p: 0 }}>
                  <ListItemText>Privacy & Policy</ListItemText>
                </ListItem>
                <ListItem className={styles.item} sx={{ p: 0 }}>
                  <ListItemText>Terms & Conditions</ListItemText>
                </ListItem>
              </List>
            </Grid>
            <Grid item xs={6} md={3}>
              <Typography className={styles.title} variant="subtitle2">
                MY ACCOUNT
              </Typography>
              <List>
                <ListItem className={styles.item} sx={{ p: 0 }}>
                  <ListItemText>Login</ListItemText>
                </ListItem>
                <ListItem className={styles.item} sx={{ p: 0 }}>
                  <ListItemText>My Cart</ListItemText>
                </ListItem>
                <ListItem className={styles.item} sx={{ p: 0 }}>
                  <ListItemText>Wishlist</ListItemText>
                </ListItem>
                <ListItem className={styles.item} sx={{ p: 0 }}>
                  <ListItemText>Compare</ListItemText>
                </ListItem>
                <ListItem className={styles.item} sx={{ p: 0 }}>
                  <ListItemText>My Account</ListItemText>
                </ListItem>
              </List>
            </Grid>
            <Grid item xs={6} md={3}>
              <Typography className={styles.title} variant="subtitle2">
                NEWSLETTER
              </Typography>
              <form action="">
                <Input type="text" placeholder="Enter E-Main Address" />
                <Input type="Subscribe" value="Subscribe" />
              </form>
            </Grid>
          </Grid>
          
        </Container>
      </Box>
    );
  };

  export default FooterTop;