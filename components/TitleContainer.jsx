import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box, Breadcrumbs, Typography } from "@mui/material";
import Link from "next/link";

const useStyles = makeStyles((theme) => ({
  titleContainer: {
    padding: "50px 0",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F4F5F8",
  },
  title:{
      textTransform:"uppercase"
  },
  name3:{
    fontWeight: "400",
    fontSize: "1rem",
    lineHeight: "1.5",
    letterSpacing: "0.00938em",
    color:"rgba(0, 0, 0, 0.6)"
  }
}));

const TitleContainer = ({ title, name1, link1, name2, link2, name3 }) => {
  const styles = useStyles();
  return (
    <Box className={styles.titleContainer}>
      <Typography variant="h4" className={`title ${styles.title}`}>
        {title}
      </Typography>
      <Breadcrumbs aria-label="breadcrumb">
        <Link underline="hover" color="inherit" href={link1}>
          {name1}
        </Link>
        {link2 && (
          <Link underline="hover" color="inherit" href={link2}>
            {name2}
          </Link>
        )}

        <Typography variant="body2" className={`desc ${styles.name3}`}>
          {name3}
        </Typography>
      </Breadcrumbs>
    </Box>
  );
};

export default TitleContainer;
