import { Container, Grid, Typography } from "@mui/material";
import React from "react";
import Image from "next/image";
import { makeStyles } from "@material-ui/core/styles";
import Link from "next/link";

const useStyles = makeStyles((theme) => ({
  itemContainer: {
    margin: "60px 0",
    display: "flex",
    justifyContent: "space-between",
  },
  item: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    border: "1px solid black",
    padding: "15px",
    width: "200px",
    height: "200px",
    borderRadius: "50%",
    cursor: "pointer"
  },
}));

const ExtraProduct = () => {
  const styles = useStyles();
  return (
    <Container>
      <Grid container spacing={3} className={styles.itemContainer}>
        <Link href="/homeFurniture" passHref>
          <Grid
            item
            xs={6}
            md={2}
            sx={{ padding: "0" }}
            className={styles.item}
          >
            <Image
              src="/img/bedroom.png"
              alt=""
              width="100vw"
              height="100"
              objectFit="contain"
            />
            <Typography variant="p">Bedoom</Typography>
          </Grid>
        </Link>
        <Link href="/homeFurniture" passHref>
          <Grid
            item
            xs={6}
            md={2}
            sx={{ padding: "0" }}
            className={styles.item}
          >
            <Image
              src="/img/living.png"
              alt=""
              width="100vw"
              height="100"
              objectFit="contain"
            />
            <Typography variant="p">Living</Typography>
          </Grid>
        </Link>
        <Link href="/homeFurniture" passHref>
          <Grid
            item
            xs={6}
            md={2}
            sx={{ padding: "0" }}
            className={styles.item}
          >
            <Image
              src="/img/dining.png"
              alt=""
              width="100vw"
              height="100"
              objectFit="contain"
            />
            <Typography variant="p">Dining</Typography>
          </Grid>
        </Link>
        <Link href="/officeFurniture" passHref>
          <Grid
            item
            xs={6}
            md={2}
            sx={{ padding: "0" }}
            className={styles.item}
          >
            <Image
              src="/img/lounge.png"
              alt=""
              width="100vw"
              height="100"
              objectFit="contain"
            />
            <Typography variant="p">Lounge</Typography>
          </Grid>
        </Link>
        <Link href="/officeFurniture" passHref>
          <Grid
            item
            xs={6}
            md={2}
            sx={{ padding: "0" }}
            className={styles.item}
          >
            <Image
              src="/img/chair.png"
              alt=""
              width="100vw"
              height="100"
              objectFit="contain"
            />
            <Typography variant="p">Office Chair</Typography>
          </Grid>
        </Link>
      </Grid>
    </Container>
  );
};

export default ExtraProduct;
