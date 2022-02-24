import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Box,
  Breadcrumbs,
  Container,
  Link,
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
              <Typography variant="h5">There are no products in your cart!</Typography>
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
                        <Image
                          src={product.img}
                          alt=""
                          width="150"
                          height="100"
                          objectFit="cover"
                        />
                      </StyledTableCell>
                      <StyledTableCell align="left">
                        {product.title}
                      </StyledTableCell>
                      <StyledTableCell align="left">
                        ${product.prices[0]}
                      </StyledTableCell>
                      <StyledTableCell align="left">
                        ${product.prices[0]}
                      </StyledTableCell>
                      <StyledTableCell align="left">
                        <Button
                          className={styles.button}
                          onClick={() =>
                            handleCartClick(product.prices[0], product)
                          }
                        >
                          Add to Cart
                        </Button>
                      </StyledTableCell>
                      <StyledTableCell align="middle">
                        <CancelOutlinedIcon
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
