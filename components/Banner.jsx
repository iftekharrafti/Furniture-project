import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper";
import { Box, Button, Container, Grid, Typography } from "@mui/material";
import Image from "next/image";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    bannerContainer:{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height:'90vh',
    }, 
    subTitle:{
        fontSize: '24px',
        fontWeight: 500,
        color:'rgb(71, 71, 71);',
        fontFamily: "'Raleway', sans-serif"
    },
    title:{
        fontSize: '50px',
        fontWeight: 600,
        lineHeight: '80px',
        fontFamily: "'Raleway', sans-serif"
    },
    desc:{
        fontSize: '16px',
        lineHeight: '25px',
        margin:'35px 0',
    },
    button:{
        display:'block', 
        marginTop: '20px',
        backgroundColor: 'rgb(255, 112, 4)',
        padding:'10px 25px',
        color:'white',
        borderRadius: '0',
        transition: '0.5s ease-in-out',
        '&:hover':{
            backgroundColor:'black',
            color:'rgb(255, 112, 4)'
        }
    }
}))

const Banner = () => {
    const styles = useStyles()
  return (
    <Box>
      <Swiper style={{ height: "90vh", backgroundColor:'#E7E7E7'}}
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <Container>
            <Grid container spacing={2} className={styles.bannerContainer}>
              <Grid item xs={6} sx={{paddingRight: '30px'}}>
                <Typography className={styles.subTitle} variant="h4">New Products</Typography>
                <Typography variant="h2" className={styles.title}>
                  Flexible Chair
                </Typography>
                <Typography variant="p" className={styles.desc}>
                  Torem ipsum dolor sit amet, consectetur adipiscing elit. tempor incididunt ut labore et dolore magna
                </Typography>
                <Button className={styles.button} >Shop Now</Button>
              </Grid>
              <Grid item xs={6}>
                <Image src="/img/slider1.png" alt="" width={500} height={400} />
              </Grid>
            </Grid>
          </Container>
        </SwiperSlide>
        <SwiperSlide>
          <Container>
            <Grid container spacing={2} className={styles.bannerContainer}>
              <Grid item xs={6} sx={{paddingRight: '30px'}}>
                <Typography className={styles.subTitle} variant="h4">Best Seller</Typography>
                <Typography variant="h2" className={styles.title}>
                  Creative Sofa
                </Typography>
                <Typography variant="p" className={styles.desc}>
                  Torem ipsum dolor sit amet, consectetur adipiscing elit. tempor incididunt ut labore et dolore magna
                </Typography>
                <Button className={styles.button} >Shop Now</Button>
              </Grid>
              <Grid item xs={6}>
                <Image src="/img/slider2.png" alt="" width={500} height={400} />
              </Grid>
            </Grid>
          </Container>
        </SwiperSlide>
      </Swiper>
    </Box>
  );
};

export default Banner;
