import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Link from "next/link";

const useStyles = makeStyles((theme) => ({
  boxLeft: {
    background: "url('/img/saleFurniture.png')",
    backgroundSize: "cover",
    objectFit: "cover",
    cursor: "pointer",
  },
  boxDesc: {
    width: "100%",
    height: "45vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-end",
    justifyContent: "center",
    padding: "0 30px",
  },
  boxRight: {
    background: "url('/img/officeChair.png')",
    backgroundSize: "cover",
    objectFit: "cover",
    cursor: "pointer",
  },
  boxRightDesc: {
    alignItems: "flex-start",
  },
}));

const SaleFurniture = () => {
  const styles = useStyles();
  return (
    <Container sx={{ mb: 5 }}>
      <Grid container spacing={2}>
        {/* Home Furniture */}

        <Link href="/homeFurniture" passHref>
          <Grid item xs={12} md={6}>
            <Box className={styles.boxLeft}>
              <Box className={styles.boxDesc}>
                <Typography className="title3" variant="h5">
                  Sale Furniture <br /> For Summer
                </Typography>
                <Typography variant="p" className="desc">
                  Great Dicounts Here
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Link>

        {/* Office Chair */}
        <Link href="/officeFurniture" passHref>
          <Grid item xs={12} md={6}>
            <Box className={styles.boxRight}>
              <Box className={`${styles.boxDesc} ${styles.boxRightDesc}`}>
                <Typography className="title3" variant="h5">
                  Office Chair <br /> For Best Offer
                </Typography>
                <Typography variant="p" className="desc">
                  Great Dicounts Here
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Link>
      </Grid>
    </Container>
  );
};

export default SaleFurniture;
