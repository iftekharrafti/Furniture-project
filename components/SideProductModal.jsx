import { Box, Button, Divider, Drawer, Grid, Typography } from "@mui/material";
import React, { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import { makeStyles } from "@material-ui/core/styles";
import { useSelector } from "react-redux";
import Image from "next/image";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import { useDispatch } from "react-redux";
import { addProductQuantity, removeProduct } from "../redux/cartSlice";
import Link from "next/link";

const useStyles = makeStyles((theme) => ({
  top: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  title: {
    fontSize: "24px",
  },
  addToCart: {
    display: "flex",
    alignItems: "center",
    margin: "20px 0",
    width: "100px",
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
    padding: "5px",
    "&:focus": {
      outline: "none",
    },
  },
  bottom: {
    backgroundColor: "#FF7004",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    position: "fixed",
    bottom: 0,
    right: "30px",
    width: "350px",
    height: "50px",
    margin: "15px 10px",
    padding: "10px",
    margin: "10px auto",
    cursor: "pointer",
    "&:hover": {
      backgroundColor: "#2F333A",
    },
  },
  middleCart: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "80vh",
    flexDirection: "column",
  },
  middleProduct: {
    display: "grid",
    gridTemplateColumns: "150px 200px 50px",
    width: "300px",
    position: "relative",
    margin: "20px 0",
  },
  middleTitle: {
    fontSize: "16px",
  },
  bottomDesc: {
    fontSize: "20px",
    color: "#fff",
  },
  button: {
    backgroundColor: "#fff",
    color: "#FF7004",

    "&:hover": {
      backgroundColor: "#fff",
      color: "#FF7004",
    },
  },
}));

const SideProductModal = ({ drawer, toggleDrawer }) => {
  const styles = useStyles();
  const dispatch = useDispatch();
  const products = useSelector((state) => state.cart.cartProducts);
  const total = useSelector((state) => state.cart.total);
  const productQuantity = useSelector((state) => state.cart.specificQuantity);

  const handleRemove = (id) => {
    dispatch(removeProduct(id));
  };
  const [quantity, setQuantity] = useState(1);
  const [cartItems, setCartItems] = useState(products);

  const increase = (id) => {
    dispatch(addProductQuantity(id))
  };

  const decrease = (id) => {
    setQuantity(quantity - 1);
  };

  return (
    <Box>
      <Drawer
        anchor={`right`}
        open={drawer}
        onClose={toggleDrawer(false)}
        sx={{ width: "30vw" }}
      >
        <Box sx={{ width: 400, padding: "15px 10px" }}>
          {/* Top */}
          <Box className={styles.top}>
            <Box>
              <Typography variant="body2" className={`title3 ${styles.title}`}>
                Cart
              </Typography>
            </Box>
            <Box>
              <CloseIcon
                onClick={toggleDrawer(false)}
                sx={{ cursor: "pointer" }}
              />
            </Box>
          </Box>
          <Divider />

          {/* Middle */}
          {products.length === 0 ? (
            <Box className={styles.middleCart}>
              <LocalMallIcon
                sx={{ color: "#FF7004", fontSize: "70px", mb: 1 }}
              />
              <Typography variant="h5">There are no products!</Typography>
            </Box>
          ) : (
            products.map((product) => (
              <Box key={product._id} className={styles.middleProduct}>
                <Box>
                  <Image
                    src={product.img}
                    alt=""
                    width="140"
                    height="120"
                    objectFit="cover"
                  />
                </Box>
                <Box sx={{ ml: 1.5 }}>
                  <Typography
                    variant="h5"
                    className={`title3 ${styles.middleTitle}`}
                  >
                    {" "}
                    {product.title}
                  </Typography>
                  <Typography variant="body2">
                     {productQuantity} * ${product.prices[0]}
                    </Typography>
                  <Box className={styles.addToCart}>
                    <Box className={styles.inputGroup}>
                      <button
                        className={styles.button}
                        onClick={() => decrease(product._id)}
                      >
                        -
                      </button>
                      <input
                        onChange={(e) => setQuantity(e.target.value)}
                        type="number"
                        value={productQuantity}
                        className={`inputNumber ${styles.inputCount}`}
                      />
                      <button
                        className={styles.button}
                        onClick={() => increase(product._id)}
                      >
                        +
                      </button>
                    </Box>
                  </Box>
                </Box>
                <Box sx={{ ml: 1.5 }}>
                  <CloseIcon
                    onClick={() => handleRemove(product._id)}
                    sx={{ cursor: "pointer" }}
                  />
                </Box>
              </Box>
            ))
          )}

          {/* Bottom */}
          <Link href="/cart" passHref>
            <Box className={styles.bottom}>
              <Typography
                variant="body2"
                className={`title3 ${styles.bottomDesc}`}
              >
                View Cart
              </Typography>
              <Button className={styles.button}>${total}</Button>
            </Box>
          </Link>
        </Box>
      </Drawer>
    </Box>
  );
};

export default SideProductModal;
