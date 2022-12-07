import React, { useState, useEffect }from "react";
import { Box, Container, Grid, Typography } from "@mui/material";
import DashboardSidebar from "../../components/DashboardSidebar";
import TitleContainer from "../../components/TitleContainer";
import { makeStyles } from "@material-ui/core/styles";
import useAuth from "../../hooks/useAuth";

const useStyles = makeStyles((theme) => ({
  title: {
    paddingBottom: "10px",
    marginBottom: "25px",
    borderBottom: "1px dashed rgb(235, 235, 235)",
  },
  inputGroup: {
    display: "flex",
    flexDirection: "column",
  },
  label: {
    color: "rgb(33, 33, 33)",
    fontSize: "16px",
    fontWeight: 600,
    fontFamily: "Open Sans",
    marginBottom: "8px",
  },
  input: {
    width: "100%",
    padding: "12px 15px",
    border: "1px solid rgb(235, 235, 235)",
    borderRadius: "3px",
    fontSize: "14px",
    fontFamily: "Open Sans",
    transition: "all 0.4s ease 0s",
    "$:focus": {
      border: "1px solid rgb(235, 235, 235)",
    },
  },
  fullName: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gridGap: "20px",
    width: "100%",
    marginTop: "20px",
    [theme.breakpoints.down("xs")]: {
      display: "grid",
      gridTemplateColumns: "1fr",
    },
  },
}));

const Settings = () => {
  const styles = useStyles();
  const [users, setUsers] = useState()
  const {user} = useAuth();

    useEffect(() =>{
        fetch(`${process.env.NEXT_PUBLIC_URL}/api/users`)
        .then(res => res.json())
        .then(totalUsers => {
            const newUser = totalUsers.filter(totalUser => totalUser.email === user.email)
            console.log(newUser)
            setUsers(newUser[0])
        })
    },[user.email])

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
                  Settings
                </Typography>
                <Typography variant="h2" className={`title2`}>
                  Personal Info
                </Typography>
                <form action="" >
                  {/* Full Name */}
                  <Box className={styles.fullName} sx={{ mb: 3 }}>
                    <Box className={styles.inputGroup}>
                      <label className={styles.label} htmlFor="">
                        First Name 
                      </label>
                      <input
                        className={styles.input}
                        type="text"
                        name="firstName"
                        value={users?.firstName}
                        required
                      />
                    </Box>
                    <Box>
                      <Box className={styles.inputGroup}>
                        <label className={styles.label} htmlFor="">
                          Last Name 
                        </label>
                        <input
                          className={styles.input}
                          type="text"
                          name="lastName"
                          value={users?.lastName}
                          required
                        />
                      </Box>
                    </Box>
                  </Box>
                  {/* Display Name */}
                  <Box className={styles.inputGroup} sx={{ mb: 3 }}>
                    <label className={styles.label} htmlFor="">
                      Display Name 
                    </label>
                    <input
                      className={styles.input}
                      type="text"
                      value={`${users?.firstName} ${users?.lastName}`}
                      name="email"
                      required
                    />
                  </Box>
                  {/* Email */}
                  <Box className={styles.inputGroup}>
                    <label className={styles.label} htmlFor="">
                      Email 
                    </label>
                    <input
                      className={styles.input}
                      type="email"
                      value={users?.email}
                      name="email"
                      required
                    />
                  </Box>

                  {/* Number */}
                  <Box className={styles.inputGroup} sx={{ my: 3 }}>
                    <label className={styles.label} htmlFor="">
                      Phone *
                    </label>
                    <input
                      className={styles.input}
                      type="text"
                      name="phone"
                      value={users?.phone}
                      required
                    />
                  </Box>

                  {/* Password */}
                  <Box className={styles.inputGroup} sx={{ my: 3 }}>
                    <label className={styles.label} htmlFor="">
                      Password 
                    </label>
                    <input
                      className={styles.input}
                      type="password"
                      name="password"
                      placeholder="Password"
                      required
                    />
                  </Box>
                  {/* Confirm Password */}
                  <Box className={styles.inputGroup} sx={{ my: 3 }}>
                    <label className={styles.label} htmlFor="">
                      Confirm Password 
                    </label>
                    <input
                      className={styles.input}
                      type="password"
                      name="password2"
                      placeholder="Password"
                      required
                    />
                  </Box>

                  <input
                    type="submit"
                    value="SAVE CHANGES"
                    className={`${styles.input}`}
                  />
                </form>
              </Container>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Settings;
