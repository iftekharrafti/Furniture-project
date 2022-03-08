import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Image from "next/image";

const useStyles = makeStyles((theme) => ({
  footerBottom: {
    backgroundColor: "#212121",
    padding: "30px 0",
    color: "#fff",
    [theme.breakpoints.down("xs")]:{
      display:'flex',
    justifyContent: 'center',
    }
  },
  write:{
    [theme.breakpoints.down("xs")]:{
      display:'flex',
    justifyContent: 'center',
    }
  },
  img:{
      display:'flex',
      justifyContent: 'flex-end',
      [theme.breakpoints.down("xs")]:{
        display:'flex',
      justifyContent: 'center',
      }
  }
}));

const FooterBottom = () => {
  const styles = useStyles();
  return (
    <Box className={styles.footerBottom}>
      <Container>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6} className={styles.bottomFooter}>
            <Typography className={styles.write} variant="body2">&copy; 2022, Furns. Made with by Raj</Typography>
          </Grid>
          <Grid item xs={12} md={6} className={styles.bottomFooter}>
            <Box className={styles.img}>
              <Image
                src="/img/payment.png"
                alt="Payment"
                width="300"
                height="25"
                objectFit="cover"
              />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default FooterBottom;
