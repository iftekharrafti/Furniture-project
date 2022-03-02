import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Box,
  Breadcrumbs,
  Container,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  Table,
  TableBody,
  Button,
} from "@mui/material";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import { useDispatch, useSelector } from "react-redux";
import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined";
import Image from "next/image";
import { addProduct, removeWishlistProduct } from "../redux/cartSlice";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import TitleContainer from "../components/TitleContainer";
import EditIcon from '@mui/icons-material/Edit';
import Link from 'next/link';

const useStyles = makeStyles((theme) => ({
  button: {
    backgroundColor: "#FF7004",
    color: "#FFFFFF",
    fontSize: "12px",
    padding: "5px 8px",
    "&:hover": {
      backgroundColor: "#FF7004",
      color: "#FFFFFF",
    },
  },
  middleCart: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
  addToCart: {
    display: "flex",
    alignItems: "center",
    margin: "20px 0",
    width:"100px"
  },
  inputGroup: {
    border: "1px solid #F3F4F6",
    width: "100px",
    display: "flex",
    marginRight: "15px",
  },
  inputCount: {
    width: "50px",
    border: "1px solid #F3F4F6",
    padding:'5px',
    "&:focus": {
      outline: "none",
    },
  },
}));

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
    textAlign: "center",
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
    textAlign: "center",
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

const Cart = () => {
  const styles = useStyles();
  const products = useSelector((state) => state.cart.cartProducts);
  const total = useSelector((state) => state.cart.total);

  const [price, setPrice] = useState();
  const [quantity, setQuantity] = useState(1);

  const dispatch = useDispatch();

  const handleCartClick = (price, product) => {
    dispatch(addProduct({ ...product, price, quantity }));
  };

  const handleClose = (id) => {
    dispatch(removeWishlistProduct(id));
  };

  return (
    <Box>
      {/* Title Container */}
      <TitleContainer title="Cart" name1="Home" link1="/" name3="Cart" />

      {/* Cart Table */}
      <Box sx={{ py: 8 }}>
        <Container>
          {products.length === 0 ? (
            //   No Product Only Cart
            <Box className={styles.middleCart}>
              <LocalMallIcon
                sx={{ color: "#FF7004", fontSize: "90px", mb: 1 }}
              />
              <Typography variant="h5">
                There are no products in your cart!
              </Typography>
            </Box>
          ) : (
            //   Table Details
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 700 }} aria-label="customized table">
                {/* Table Head */}
                <TableHead>
                  <TableRow>
                    <StyledTableCell>IMAGE</StyledTableCell>
                    <StyledTableCell align="left">PRODUCT NAME</StyledTableCell>
                    <StyledTableCell align="left">UNTIL PRICE</StyledTableCell>
                    <StyledTableCell align="left">QTY</StyledTableCell>
                    <StyledTableCell align="left">SUBTOTAL</StyledTableCell>
                    <StyledTableCell align="left">ACTION</StyledTableCell>
                  </TableRow>
                </TableHead>
                {/* Table Body */}
                {products.map((product) => (
                  <TableBody key={product._id}>
                    <StyledTableRow>
                      <StyledTableCell component="th" scope="row">
                        {/* Image */}
                        <Image
                          src={product.img}
                          alt=""
                          width="150"
                          height="100"
                          objectFit="cover"
                        />
                      </StyledTableCell>
                      {/* Title */}
                      <StyledTableCell align="left">
                        {product.title}
                      </StyledTableCell>
                      <StyledTableCell align="left">
                        ${product.prices[0]}
                      </StyledTableCell>
                      <StyledTableCell align="left">
                        <Box className={styles.addToCart}>
                          <Box className={styles.inputGroup}>
                            <button
                              className={styles.button}
                              onClick={() => setQuantity(quantity - 1)}
                            >
                              -
                            </button>
                            <input
                              onChange={(e) => setQuantity(e.target.value)}
                              type="number"
                              value={quantity}
                              className={`inputNumber ${styles.inputCount}`}
                            />
                            <button
                              className={styles.button}
                              onClick={() => setQuantity(quantity + 1)}
                            >
                              +
                            </button>
                          </Box>
                        </Box>
                      </StyledTableCell>
                      <StyledTableCell align="left">
                        {product.price[0] * quantity}
                      </StyledTableCell>
                      <StyledTableCell align="middle">
                        <Link href={`/singleProduct/${product._id}`}>
                          <EditIcon sx={{mr:2, cursor:"pointer"}} />
                        </Link>
                      
                        <CancelOutlinedIcon sx={{cursor:"pointer"}}
                          onClick={() => handleClose(product._id)}
                        />
                        
                      </StyledTableCell>
                    </StyledTableRow>
                  </TableBody>
                ))}
              </Table>
            </TableContainer>
          )}
        </Container>
      </Box>
    </Box>
  );
};

export default Cart;
