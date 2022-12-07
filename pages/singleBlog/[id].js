import React from "react";
import { Box, Breadcrumbs, Container, Grid, Typography } from "@mui/material";
import Link from "next/link";
import { makeStyles } from "@material-ui/core/styles";
import Image from "next/image";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import TwitterIcon from "@mui/icons-material/Twitter";
import PinterestIcon from "@mui/icons-material/Pinterest";
import axios from "axios";

const useStyles = makeStyles((theme) => ({
  titleContainer: {
    padding: "30px 0",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F4F5F8",
  },
  blogContainer: {
    width: "70vw",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    margin: "60px auto",
  },
  blogSpan: {
    fontSize: "14px",
    fontWeight: 500,
    marginRight: "20px",
  },
  hr: {
    borderBottm: "1px solid rgb(235, 235, 235)",
    width: "100%",
  },
  bottom: {
    display: "flex",
    justifyContent: "space-between",
    marginTop: '10px'
  },
  bottomIcon:{
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  }
}));

const SingleBlog = ({blog}) => {
    console.log('top data', blog);
  const styles = useStyles();
  return (
    <Box>
      <Box className={styles.titleContainer}>
        <Typography variant="h4" className="title">
          EIUMOD TEMPOR INCIDIDUNT LABORE
        </Typography>
        <Breadcrumbs aria-label="breadcrumb">
          <Link underline="hover" color="inherit" href="/">
            Home
          </Link>
          <Link underline="hover" color="inherit" href="/about">
            Blog
          </Link>
          <Link underline="hover" color="inherit" href="/about">
            Blog
          </Link>
        </Breadcrumbs>
      </Box>
      <Container>
        <Box className={styles.blogContainer}>
          <Image
            src="/img/news.png"
            alt="News"
            width="800px"
            height="400px"
            className={styles.blogImg}
          />
          <Box sx={{ mt: 2 }}>
            <Typography className={styles.blogSpan} variant="span">
              By {blog.author}
            </Typography>
            <Typography className={styles.blogSpan} variant="span">
              {blog.date}
            </Typography>
          </Box>
          <Typography variant="h4" className="title" sx={{ mt: 2, mb: 0 }}>
            {blog.title}
          </Typography>
          <Typography className="desc" variant="p" sx={{ mt: 2 }}>
            {blog.desc}
          </Typography>
          <hr className={styles.hr} />
          <Box className={styles.bottom}>
            <Box>
              <Typography variant="p">
                <b>Tags: </b> {blog.tags.map(blog => <span key={blog._id}>{blog}, </span>)}
              </Typography>
            </Box>
            <Box className={styles.bottomIcon}>
              <Typography variant="p">
                <b>Share: </b>
              </Typography>
              <Box>
                <FacebookOutlinedIcon sx={{fontSize:'18px', marginRight:'5px'}} />
                <TwitterIcon sx={{fontSize:'18px', marginRight:'5px'}} />
                <PinterestIcon sx={{fontSize:'18px'}} />
              </Box>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default SingleBlog;


export async function getServerSideProps({params}) {

    const res = await axios.get(`${process.env.NEXT_PUBLIC_URL}/api/blog/${params.id}`)

    return {
      props: {
        blog: res.data
      },
    }
  }