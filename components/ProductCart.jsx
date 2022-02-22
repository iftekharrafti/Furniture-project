import { Box, Button, Container, Grid, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import PreviewOutlinedIcon from "@mui/icons-material/PreviewOutlined";
import CompareOutlinedIcon from "@mui/icons-material/CompareOutlined";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const ProductCart = ({product}) => {
  return (
    <Grid item xs={6} md={3}>
      <Box className="productContainer">
        <Image
          className="productImg"
          src={product.img}
          alt=""
          width="250px"
          height="280px"
        />
        <Typography className="productTitle" variant="subtitle1">
          {product.title}
        </Typography>
        
        <Typography
          className="desc"
          variant="subtitle2"
          sx={{ textAlign: "center", fontWeight: 500 }}
        >
          ${product.prices[0]}
        </Typography>
        <Box className="productLove">
          <FavoriteBorderIcon />
        </Box>
        <Box className="productQuick">
          <PreviewOutlinedIcon />
        </Box>
        <Box className="productCompare">
          <CompareOutlinedIcon />
        </Box>
        <Box className="productDiscount">
        <Typography className="shortDesc" variant="body2" style={{color:'#fff'}}>
          -{product.discount}%
        </Typography>
        </Box>
        <Box className="productButton">
          <Button className="productButtonDesc">
            <ShoppingCartIcon /> Add to Cart
          </Button>
        </Box>

      </Box>
    </Grid>
  );
};

export default ProductCart;
