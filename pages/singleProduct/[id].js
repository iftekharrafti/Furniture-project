import {
  Box,
  Breadcrumbs,
  Button,
  Container,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";
import Link from "next/link";
import { makeStyles } from "@material-ui/core/styles";
import React, { useRef, useState } from "react";
import ProductDescReview from "../../components/ProductDescReview";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import CompareIcon from "@mui/icons-material/Compare";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import TwitterIcon from "@mui/icons-material/Twitter";
import PinterestIcon from "@mui/icons-material/Pinterest";
import { useDispatch, useSelector } from 'react-redux';
import { addProduct } from '../../redux/cartSlice';

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

// import required modules
import { FreeMode, Navigation, Thumbs } from "swiper";
import Image from "next/image";
import axios from "axios";

const useStyles = makeStyles((theme) => ({
  titleContainer: {
    padding: "30px 0",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F4F5F8",
    marginBottom: "55px",
  },
  addToCart: {
    display: "flex",
    alignItems: "center",
    margin: "20px 0",
  },
  inputGroup: {
    border: "1px solid rgb(255, 112, 4)",
    width: "150px",
    display: "flex",
    marginRight: "15px",
  },
  inputCount: {
    width: "90px",
    border: "1px solid rgb(255, 112, 4)",
    padding:'5px',
    "&:focus": {
      outline: "none",
    },
  },
  button: {
    border: "1px solid rgb(255, 112, 4)",
    width: "30px",
    height: "45px",
    backgroundColor: "transparent",
  },
  whishListCompare: {
    display: "flex",
  },
  wishList: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    cursor: "pointer",
    "&:hover": {
      color: "rgb(255, 112, 4)",
    },
  },
  compare: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginLeft: "10px",
    cursor: "pointer",
    "&:hover": {
      color: "rgb(255, 112, 4)",
    },
  },
  shareIcon: {
    display: "flex",
    marginTop: "10px",
  },
  shareIconSign: {
    fontSize: "18px",
    marginRight: "8px",
    "&:hover": {
      color: "rgb(255, 112, 4)",
    },
  },
}));

const SingleProduct = ({product}) => {
  const styles = useStyles();
  const [quantity, setQuantity] = useState(1);
  const [price, setPrice] = useState(product.prices[0]);
  const [availability, setAvailability] = useState(product.availability)
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(addProduct({...product, price, quantity}))
    setAvailability(availability - quantity)
  }

  return (
    <Box>
      <Box className={styles.titleContainer}>
        <Typography variant="h4" className="title">
          VARIABLE PRODUCT
        </Typography>
        <Breadcrumbs aria-label="breadcrumb">
          <Link underline="hover" color="inherit" href="/">
            Home
          </Link>
          <Link underline="hover" color="inherit" href="/about">
            Product
          </Link>
          <Link underline="hover" color="inherit" href="/about">
            Variable Product
          </Link>
        </Breadcrumbs>
      </Box>
      <Container>
        <Grid container spacing={2}>
          {/* Left Part Swipper Slidder */}
          <Grid item xs={12} sm={12} md={4}>
            <Swiper
              style={{
                "--swiper-navigation-color": "#fff",
                "--swiper-pagination-color": "#fff",
                width: "400px",
              }}
              spaceBetween={10}
              navigation={true}
              thumbs={{ swiper: thumbsSwiper }}
              modules={[FreeMode, Navigation, Thumbs]}
              className="mySwiper2"
            >
              <SwiperSlide>
                <Image
                  src="/img/products/sofa.png"
                  alt=""
                  width="400px"
                  height="500px"
                  objectFit="cover"
                />
              </SwiperSlide>
              <SwiperSlide>
                <Image
                  src="/img/products/sofa2.png"
                  alt=""
                  width="400px"
                  height="500px"
                  objectFit="cover"
                />
              </SwiperSlide>
              <SwiperSlide>
                <Image
                  src="/img/products/sofa3.png"
                  alt=""
                  width="400px"
                  height="500px"
                  objectFit="cover"
                />
              </SwiperSlide>
              <SwiperSlide>
                <Image
                  src="/img/products/sofa4.png"
                  alt=""
                  width="400px"
                  height="500px"
                  objectFit="cover"
                />
              </SwiperSlide>
            </Swiper>
            <Swiper
              onSwiper={setThumbsSwiper}
              spaceBetween={10}
              slidesPerView={4}
              freeMode={true}
              watchSlidesProgress={true}
              modules={[FreeMode, Navigation, Thumbs]}
              className="mySwiper"
            >
              <SwiperSlide style={{ width: "100px" }}>
                <Image
                  src="/img/products/sofa.png"
                  alt=""
                  width="125px"
                  height="80px"
                  objectFit="cover"
                />
              </SwiperSlide>
              <SwiperSlide style={{ width: "100px" }}>
                <Image
                  src="/img/products/sofa2.png"
                  alt=""
                  width="125px"
                  height="80px"
                  objectFit="cover"
                />
              </SwiperSlide>
              <SwiperSlide style={{ width: "100px" }}>
                <Image
                  src="/img/products/sofa3.png"
                  alt=""
                  width="125px"
                  height="80px"
                  objectFit="cover"
                />
              </SwiperSlide>
              <SwiperSlide style={{ width: "100px" }}>
                <Image
                  src="/img/products/sofa4.png"
                  alt=""
                  width="125px"
                  height="80px"
                  objectFit="cover"
                />
              </SwiperSlide>
            </Swiper>
          </Grid>
          {/* Right Part */}
          <Grid item xs={12} sm={12} md={8}>
            <Box sx={{ ml: 5, mb: 5 }}>
              <Typography variant="body1" className="shortDesc">
                <b>SKU:</b>{product.sku[0]}
              </Typography>

              <Typography
                sx={{ my: 0.5 }}
                variant="body1"
                className="shortDesc"
              >
                <b>AVAILABILITY:</b>{availability} in Stock
              </Typography>

              <Typography variant="h4" className="title3">
                {product.title}
              </Typography>

              <Typography sx={{ my: 1 }} variant="h5" className="">
                ${product.prices[0]}
              </Typography>

              <Typography sx={{ mb: 3, mt:1 }} variant="body1" className="shortDesc">
                {product.desc}
              </Typography>

              {/* Add to cart */}

              <Box className={styles.addToCart}>
                <Box className={styles.inputGroup}>
                  <button className={styles.button} onClick={() => setQuantity(quantity - 1)}>-</button>
                  <input
                      onChange={(e) => setQuantity(e.target.value)}
                      type="number"
                      value={quantity}
                      className={`inputNumber ${styles.inputCount}`}
                    />
                  <button className={styles.button} onClick={() => setQuantity(quantity + 1)}>+</button>
                </Box>
                <Button className="btn" onClick={handleClick}>Add To Cart</Button>
              </Box>

              {/* Wishlist and compare */}

              <Box className={styles.whishListCompare}>
                <Box className={styles.wishList}>
                  <FavoriteBorderIcon sx={{ fontSize: "16px", mr: 0.5 }} />
                  <Typography variant="p" className="shortDesc">
                    Add to wishlist
                  </Typography>
                </Box>
                <Box className={styles.compare}>
                  <CompareIcon sx={{ fontSize: "16px", mr: 0.5 }} />
                  <Typography variant="p" className="shortDesc">
                    Add to Compare
                  </Typography>
                </Box>
              </Box>

              {/* Share icon */}
              <Box className={styles.shareIcon}>
                <Typography variant="p">
                  <b>Share: </b>
                </Typography>
                <Box sx={{ ml: 1 }}>
                  <FacebookOutlinedIcon className={styles.shareIconSign} />
                  <TwitterIcon className={styles.shareIconSign} />
                  <PinterestIcon className={styles.shareIconSign} />
                </Box>
              </Box>
            </Box>
          </Grid>
        </Grid>
        {/* Product Descripton Review Review */}
        <Box>
          <ProductDescReview />
        </Box>
      </Container>
    </Box>
  );
};

export default SingleProduct;

export async function getServerSideProps({params}) {

  const res = await axios.get(`${process.env.NEXT_PUBLIC_URL}/api/product/${params.id}`)

  return {
    props: {
      product: res.data
    },
  }
}