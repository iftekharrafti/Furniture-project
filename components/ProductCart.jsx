import { Box, Button, Container, Grid, Modal, Typography } from "@mui/material";
import Image from "next/image";
import React, { useState } from "react";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import PreviewOutlinedIcon from "@mui/icons-material/PreviewOutlined";
import CompareOutlinedIcon from "@mui/icons-material/CompareOutlined";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import QuickViewModal from "./QuickViewModal";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { addProduct } from "../redux/cartSlice";

const ProductCart = ({ product }) => {
  const [items, setItems] = useState([]);
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleClick = () => {
    dispatch(addProduct({...product}))
  }

  return (
    <Grid item xs={6} md={3}>
      <Box className="productContainer">
        <Link href={`/singleProduct/${product._id}`}>
          <Image
            style={{cursor: "pointer"}}
            className="productImg"
            src={product.img}
            alt=""
            width="250px"
            height="280px"
          />
        </Link>

        {/* Product Title */}

        <Link href={`/singleProduct/${product._id}`}>
          <Typography className="productTitle" variant="subtitle1">
            {product.title}
          </Typography>
        </Link>

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
          <QuickViewModal
            handleClose={handleClose}
            open={open}
            id={product._id}
          />
        </Box>

        {/* Product Compare */}

        <Box className="productCompare">
          <CompareOutlinedIcon />
        </Box>

        {/* Product Discout */}

        <Box className="productDiscount">
          <Typography
            className="shortDesc"
            variant="body2"
            style={{ color: "#fff" }}
          >
            -{product.discount}%
          </Typography>
        </Box>

        {/* product Cart Button */}

        <Box className="productButton">
          <Button className="productButtonDesc" onClick={handleClick}>
            <ShoppingCartIcon /> Add to Cart
          </Button>
        </Box>
      </Box>
    </Grid>
  );
};

export default ProductCart;
