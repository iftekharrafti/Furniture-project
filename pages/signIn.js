import { Box, Button } from "@mui/material";
import React from "react";
import TitleContainer from "../components/TitleContainer";
import { makeStyles } from "@material-ui/core/styles";
import Link from "next/link";
import GoogleIcon from '@mui/icons-material/Google';
import useFirebase from "../hooks/useFirebase";

const useStyles = makeStyles((theme) => ({
  login: {
    width: "40%",
    height: "60vh",
    margin: "50px auto",
    boxShadow: "rgb(0 0 0 / 75%) 0px 0px 16px -1px",
    padding: "40px 30px",
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
  signinBtn: {
    color: "#fff",
    backgroundColor: "rgb(255, 112, 4)",
    fontSize: "18px",
    fontWeight: "500",
    letterSpacing: "1px",
    borderRadius: "0",
    cursor: "pointer",
  },
  createAndGoogle: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gridGap: "20px",
    width: "100%",
    marginTop: "20px",
  },
  button: {
    fontSize: "14px",
    color: "#fff",
    fontWeight: 600,
    padding: "8px 20px",
    fontFamily: "Raleway",
    width: "100%",
  },
  create: {
    backgroundColor: "rgb(47, 51, 58)",
    "&:hover": {
      color: "rgb(59, 72, 99)",
      backgroundColor: "rgb(235, 235, 235)",
    },
  },
  google: {
    color: "rgb(59, 72, 99)",
    backgroundColor: "rgb(235, 235, 235)",
    "&:hover": {
      color: "#fff",
      backgroundColor: "rgb(47, 51, 58)",
    },
  },
}));

const Signin = () => {
  const styles = useStyles();
  const {user, signInWithGoogle} = useFirebase();
  return (
    <Box>
      {/* Login Title */}
      <TitleContainer title="Login" name1="Home" link1="/" name3="Signin" />

      {/* Login Form */}
      <Box className={styles.login}>
        <form action="">
          <Box className={styles.inputGroup}>
            <label className={styles.label} htmlFor="">
              Email *
            </label>
            <input
              className={styles.input}
              type="email"
              name=""
              id=""
              placeholder="Enter Your Email"
              required
            />
          </Box>
          <Box className={styles.inputGroup} sx={{ my: 3 }}>
            <label className={styles.label} htmlFor="">
              Password *
            </label>
            <input
              className={styles.input}
              type="password"
              name=""
              id=""
              placeholder="Your Password"
              required
            />
          </Box>
          <input
            type="submit"
            value="SIGNIN"
            className={`${styles.input} ${styles.signinBtn}`}
          />
        </form>

        {/* Create And Google Sign in */}
        <Box className={styles.createAndGoogle}>
          <Box>
            <Link href="/signup" passHref>
              <Button className={`${styles.create} ${styles.button}`}>
                CREATE A NEW ACCOUNT
              </Button>
            </Link>
          </Box>
          <Box>
            <Button onClick={signInWithGoogle} className={`${styles.google} ${styles.button}`}>
              <GoogleIcon sx={{fontSize:'20px', marginRight:'5px'}} /> GOOGLE
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Signin;
