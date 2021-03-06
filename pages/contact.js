import { Box, Breadcrumbs, Container, Grid, Typography } from "@mui/material";
import Link from "next/link";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TitleContainer from "../components/TitleContainer";

const useStyles = makeStyles((theme) => ({
  contactLeft: {
    backgroundColor: "#F5F5F5",
    padding: "50px 30px",
    height: "550px",
  },
  item: {
    display: "grid",
    gridTemplateColumns: "1fr 1.5fr",
    margin: "20px 0 0 0",
  },
  title: {
    fontWeight: "500",
  },
  contactRight: {
    backgroundColor: "#F5F5F5",
    padding: "50px 30px",
    width: "100%",
    height: "550px",
  },
  fullName: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gridGap: "20px",
    width: "100%",
    marginTop: "20px",
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
  sendBtn: {
    backgroundColor: "rgb(255, 112, 4)",
    color: "#fff",
    marginTop: "30px",
    fontSize: "16px",
    fontWeight: "600",
    letterSpacing: "1px",
    cursor: "pointer",
  },
}));

const Contact = () => {
  const styles = useStyles();
  return (
    <Box>
      {/* Contact Heading */}
      <TitleContainer
        title="Contact Us"
        name1="Home"
        link1="/"
        name3="Contact"
      />

      {/* Contact Map */}
      <Container sx={{ my: 5 }}>
        <Box sx={{ my: 5 }}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d943193.7316857057!2d90.58653629622823!3d22.56599006940225!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30ab548206a5df6d%3A0x9385e3213aa6c655!2sNoakhali%20District!5e0!3m2!1sen!2sbd!4v1645635855957!5m2!1sen!2sbd"
            width="600"
            height="450"
            style={{ border: 0, width: "100%", height: "70vh" }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </Box>

        {/* Contact Form */}
        <Box>
          <Grid container spacing={2}>
            {/* Contact Left */}

            <Grid item xs={12} md={4}>
              <Box sx={{ py: 5, px: 3 }} className={styles.contactLeft}>
                <Typography variant="h4" className="title3">
                  Contact Info
                </Typography>
                {/* Phone */}
                <Box className={styles.item}>
                  <Typography variant="h4" className={`title2 ${styles.title}`}>
                    Phone:
                  </Typography>
                  <Box>
                    <Typography variant="body2" className="desc">
                      +0187656465456
                    </Typography>
                    <Typography variant="body2" className="desc">
                      +01876567456456
                    </Typography>
                  </Box>
                </Box>
                <Box className={styles.item}>
                  <Typography variant="h4" className={`title2 ${styles.title}`}>
                    Email:
                  </Typography>
                  <Box>
                    <Typography variant="body2" className="desc">
                      ami@tmi.com
                    </Typography>
                    <Typography variant="body2" className="desc">
                      your@email.com
                    </Typography>
                  </Box>
                </Box>
                <Box className={styles.item}>
                  <Typography variant="h4" className={`title2 ${styles.title}`}>
                    Address:
                  </Typography>
                  <Box>
                    <Typography variant="body2" className="desc">
                      Kabirhat, Noakhali
                    </Typography>
                    <Typography variant="body2" className="desc">
                      street, Crossroad 123
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Grid>

            {/* Contact Right */}

            <Grid item xs={12} md={8}>
              <Box sx={{ py: 5, px: 3 }} className={styles.contactRight}>
                <Typography variant="h4" className="title3">
                  Get In Touch
                </Typography>
                <Box>
                  <form action="">
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
                            placeholder="Last Name"
                            required
                          />
                        </Box>
                      </Box>
                    </Box>
                    {/* Subject */}
                    <Box className={styles.inputGroup} sx={{ mb: 3 }}>
                      <label className={styles.label} htmlFor="">
                        Subject *
                      </label>
                      <input
                        className={styles.input}
                        type="text"
                        placeholder="Subject"
                        name="subject"
                        required
                      />
                    </Box>
                    {/* Message */}
                    <Box className={styles.inputGroup}>
                      <label className={styles.label} htmlFor="">
                        Message *
                      </label>
                      <textarea
                        className={styles.input}
                        placeholder="Message"
                        name=""
                        id=""
                        cols=""
                        rows="6"
                      ></textarea>
                    </Box>
                    <input
                      type="submit"
                      value="SEND MESSAGE"
                      className={`${styles.input} ${styles.sendBtn}`}
                    />
                  </form>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default Contact;
