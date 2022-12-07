import {
  Box,
  Container,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Link from "next/link";

const useStyles = makeStyles((theme) => ({
  newsCard: {
    backgroundColor: "#F4F5F8",
  },
  titleContainer: {
    width: "40%",
    margin: "0 auto",
    textAlign: "center",
    [theme.breakpoints.down("xs")]: {
      width: "80%",
    },
  },
  item: {
    [theme.breakpoints.down("xs")]: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      marginBottom: "10px",
      width:"100%"
    },
  },
  button: {
    [theme.breakpoints.down("xs")]: {
      display: "flex",
      justifyContent: "center",
    },
  },
  newsSpan: {
    fontSize: "14px",
    fontWeight: 500,
    marginRight: "20px",
    marginBottom: "15px",
    marginTop: "45px",
  },
}));

const Blogs = () => {
  const styles = useStyles();

  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_URL}/api/blog`)
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);

  return (
    <Box>
      {/* Title Container */}
      <Box className={styles.titleContainer}>
        <Typography className="title" variant="h4">
          Latest News
        </Typography>
        <Typography className="desc" variant="p">
          Torem ipsum dolor sit amet, consectetur adipisicing elitsed do eiusmo
          tempor incididunt ut labore
        </Typography>
      </Box>
      <Box sx={{ my: 5 }}>
        <Container>
          <Grid container spacing={2}>
            {blogs.map((blog) => (
              <Grid item xs={12} sm={6} md={4} key={blog._id} className={styles.item}>
                <Card sx={{ maxWidth: "100%" }} className={styles.newsCard}>
                  <CardMedia
                    component="img"
                    height="160"
                    image={blog.img}
                    alt="green iguana"
                  />
                  <CardContent>
                    <Link href={`/singleBlog/${blog._id}`} passHref>
                      <Typography
                        className="title3"
                        gutterBottom
                        variant="h5"
                        component="div"
                        sx={{ cursor: "pointer" }}
                      >
                        {blog.title.slice(0, 15)}...
                      </Typography>
                    </Link>

                    <Box>
                      <Typography className={styles.newsSpan} variant="span">
                        By {blog.author}
                      </Typography>
                      <Typography className={styles.newsSpan} variant="span">
                        {blog.date}
                      </Typography>
                    </Box>
                    <Typography className="desc" variant="body2" sx={{ mt: 2 }}>
                      {blog.desc.slice(0.15)}...
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Link href={`/singleBlog/${blog._id}`} passHref>
                      <Box className={styles.button}>
                        <Button className={`btn`} size="small">
                          Read More
                        </Button>
                      </Box>
                    </Link>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};

export default Blogs;
