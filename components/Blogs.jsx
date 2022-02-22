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
    fetch("http://localhost:3000/api/blog")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);

  return (
    <Box>
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
              <Grid item xs={6} md={4} key={blog._id}>
                <Card sx={{ maxWidth: 345 }} className={styles.newsCard}>
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
                      <Button className="btn" size="small">
                        Read More
                      </Button>
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
