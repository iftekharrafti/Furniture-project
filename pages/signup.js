import React, { useState } from "react";
import { Box, Button } from "@mui/material";
import TitleContainer from "../components/TitleContainer";
import { makeStyles } from "@material-ui/core/styles";
import Link from "next/link";
import useAuth from "../hooks/useAuth";
import axios from "axios";

const useStyles = makeStyles((theme) => ({
  signup: {
    width: "40%",
    height: "100vh",
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
  fullName: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gridGap: "20px",
    width: "100%",
    marginTop: "20px",
  },
  alreadyAccount: {
    color: "#fff",
    fontSize: "18px",
    fontWeight: "500",
    letterSpacing: "1px",
    borderRadius: "0",
    cursor: "pointer",
    padding: "5px",
    marginTop: "10px",
    color: "rgb(59, 72, 99)",
    backgroundColor: "rgb(235, 235, 235)",
    "&:hover": {
      color: "#fff",
      backgroundColor: "rgb(47, 51, 58)",
    },
  },
}));

const Signup = () => {
  const styles = useStyles();
  const [signUpData, setSignUpData] = useState({});
  const { registerUser } = useAuth();

  const handleBlur = (e) => {
    const field = e.target.name;
    const value = e.target.value;

    const newSignUpData = { ...signUpData };
    newSignUpData[field] = value;
    console.log(newSignUpData);
    setSignUpData(newSignUpData);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (signUpData.password !== signUpData.password2) {
      alert("Password did not match");
      return;
    }
    const newSignUpData = {...signUpData}
    try {
      await axios.post("http://localhost:3000/api/users", newSignUpData);
      await registerUser(signUpData.email, signUpData.password);
      alert("user added successfully");
      
    } catch (err) {
      alert('Something went wrong')
    }
  };

  return (
    <Box>
      <TitleContainer title="Signup" name1="Home" link1="/" name3="Signup" />

      <Box className={styles.signup}>
        <form action="" onSubmit={handleSubmit}>
          {/* Full Name */}
          <Box className={styles.fullName} sx={{ mb: 3 }}>
            <Box className={styles.inputGroup}>
              <label className={styles.label} htmlFor="">
                First Name *
              </label>
              <input
                className={styles.input}
                type="text"
                name="firstName"
                onBlur={handleBlur}
                placeholder="First Name"
                required
              />
            </Box>
            <Box>
              <Box className={styles.inputGroup}>
                <label className={styles.label} htmlFor="">
                  Last Name *
                </label>
                <input
                  className={styles.input}
                  type="text"
                  name="lastName"
                  onBlur={handleBlur}
                  placeholder="Last Name"
                  required
                />
              </Box>
            </Box>
          </Box>
          {/* Email */}
          <Box className={styles.inputGroup}>
            <label className={styles.label} htmlFor="">
              Email *
            </label>
            <input
              className={styles.input}
              type="email"
              placeholder="Enter Your Email"
              name="email"
              onBlur={handleBlur}
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
              name="number"
              onBlur={handleBlur}
              placeholder="Your Number"
              required
            />
          </Box>

          {/* Password */}
          <Box className={styles.inputGroup} sx={{ my: 3 }}>
            <label className={styles.label} htmlFor="">
              Password *
            </label>
            <input
              className={styles.input}
              type="password"
              name="password"
              onBlur={handleBlur}
              placeholder="Password"
              required
            />
          </Box>
          {/* Confirm Password */}
          <Box className={styles.inputGroup} sx={{ my: 3 }}>
            <label className={styles.label} htmlFor="">
              Confirm Password *
            </label>
            <input
              className={styles.input}
              type="password"
              name="password2"
              onBlur={handleBlur}
              placeholder="Password"
              required
            />
          </Box>

          <input
            type="submit"
            value="SIGNUP"
            className={`${styles.input} ${styles.signinBtn}`}
          />
        </form>
        <Box>
          <Link href="/signIn" passHref>
            <Button className={`${styles.input} ${styles.alreadyAccount}`}>
              ALREADY HAVE A ACCOUNT?
            </Button>
          </Link>
        </Box>
      </Box>
    </Box>
  );
};

export default Signup;
