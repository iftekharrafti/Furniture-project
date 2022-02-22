import { Box, Button, Container, Grid, Modal, Typography } from "@mui/material";
import Image from "next/image";
import React, { useState } from "react";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import PreviewOutlinedIcon from "@mui/icons-material/PreviewOutlined";
import CompareOutlinedIcon from "@mui/icons-material/CompareOutlined";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { unstable_renderSubtreeIntoContainer } from "react-dom";
import QuickViewModal from "./QuickViewModal";

const ProductCart = ({product}) => {
  const [items, setItems] = useState([])
  const [open, setOpen] = useState(false);
  

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  
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

        {/* Product Title */}

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

        {/* Product Quick View */}

        <Box className="productQuick">
          <PreviewOutlinedIcon onClick={handleOpen} />
          <QuickViewModal handleClose={handleClose} open={open} id={product._id} />
        </Box>

        {/* Product Compare */}

        <Box className="productCompare">
          <CompareOutlinedIcon />
        </Box>

        {/* Product Discout */}

        <Box className="productDiscount">
        <Typography className="shortDesc" variant="body2" style={{color:'#fff'}}>
          -{product.discount}%
        </Typography>
        </Box>

          {/* product Button */}

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
