import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";
import DashboardSidebar from "../../components/DashboardSidebar";
import TitleContainer from "../../components/TitleContainer";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  title: {
    paddingBottom: "10px",
    marginBottom: "25px",
    borderBottom: "1px dashed rgb(235, 235, 235)",
  },
}));

const Orders = () => {
  const styles = useStyles();
  return (
    <Box>
      <TitleContainer
        title="DASHBOARD"
        name1="Home"
        link1="/"
        name3="Account"
      />
      <Container>
        <Grid container spacing={4} sx={{ my: 5 }}>
          <Grid item xs={12} md={3}>
            <DashboardSidebar />
          </Grid>
          <Grid item xs={12} md={9}>
            <Box
              sx={{ border: "1px solid rgb(235, 235, 235)", padding: "30px" }}
            >
              <Container>
                <Typography variant="h2" className={`title3 ${styles.title}`}>
                  Orders
                </Typography>
                <Typography variant="body2" className="desc">
                  You have no order
                </Typography>
              </Container>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Orders;
