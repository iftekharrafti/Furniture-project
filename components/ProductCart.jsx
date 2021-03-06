import { Box, Button, Container, Grid, Modal, Typography } from "@mui/material";
import Image from "next/image";
import React, { useState } from "react";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import PreviewOutlinedIcon from "@mui/icons-material/PreviewOutlined";
import CompareOutlinedIcon from "@mui/icons-material/CompareOutlined";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import QuickViewModal from "./QuickViewModal";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { addProduct, addWishlistProduct, addCompareProduct, removeWishlistProduct } from "../redux/cartSlice";
import { ToastContainer, toast } from 'react-toastify';

const ProductCart = ({ product }) => {
  const [items, setItems] = useState([]);
  const [open, setOpen] = useState(false);
  const [price, setPrice] = useState(product.prices[0]);
  const [quantity, setQuantity] = useState(1);
  const [wishList, setWishList] = useState(false)
  const [compare, setCompare] = useState(false)
  const wishListProducts = useSelector(state => state.cart.wishlistProducts)
  const dispatch = useDispatch();

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleCartClick = () => {
    dispatch(addProduct({...product, price, quantity}))
    toast.success(`Successfully Add!`, {
      autoClose: 3000
    });
  }

  const handleWishlistClick = () => {
    dispatch(addWishlistProduct({...product}))
    setWishList(true)
    toast.success(`Added to WishList!`, {
      autoClose: 3000
    });
  }
  const removeWishlist = (id) => {
    dispatch(removeWishlistProduct(id))
    setWishList(false)
    toast.error(`Remove from Wishlist!`, {
      autoClose: 2000
    });
  }

  const handleCompareClick = () => {
    dispatch(addCompareProduct({...product}))
    toast.success(`Added to Compare!`, {
      autoClose: 2000
    });
    setCompare(true)
  }

  return (
    <Grid item xs={6} md={3} sx={{mb:4}}>
      <Box className="productContainer">
        <Link href={`/singleProduct/${product._id}`} passHref>
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

        <Link href={`/singleProduct/${product._id}`} passHref>
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
        {/* Product Wishlist */}

        {
          wishList ? <Box className="productLove" onClick={() =>removeWishlist(product._id)} title="Add to Wishlist">
          <DeleteOutlinedIcon />
        </Box> : <Box className="productLove" onClick={handleWishlistClick} title="Add to Wishlist">
          <FavoriteBorderIcon />
        </Box>
        }
       
        

        {/* Product Quick View */}
        
        <Box className="productQuick" title="Quick View">
          <PreviewOutlinedIcon onClick={handleOpen} />
          <QuickViewModal
            handleClose={handleClose}
            open={open}
            id={product._id}
          />
        </Box>

        {/* Product Compare */}
        {
          compare ? <Box className="productCompare" onClick={handleCompareClick} title="Add to Compare">
          <DeleteOutlinedIcon />
        </Box> : <Box className="productCompare" onClick={handleCompareClick} title="Add to Compare">
          <CompareOutlinedIcon />
        </Box>
        }

        

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
          <Button className="productButtonDesc" onClick={handleCartClick}>
            <ShoppingCartIcon /> Add to Cart
          </Button>
        </Box>
        <ToastContainer />
      </Box>
    </Grid>
  );
};

export default ProductCart;
