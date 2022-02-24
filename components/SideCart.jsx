import React, { useState } from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Box, Button, Typography } from "@mui/material";
import { makeStyles } from "@material-ui/core/styles";
import { useSelector } from 'react-redux'
import SideProductModal from "./SideProductModal";

const useStyles = makeStyles((theme) => ({
  sideCart: {
    width: "100%",
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "flex-start",
    cursor: "pointer",
  },
  sideCartContainer:{
    width: "80px",
    height: "100px",
    backgroundColor: "#2F333A",
    display: "flex",
    flexDirection: "column",
    position: "fixed",
    zIndex: 999,
    justifyContent: "center",
    alignItems: "center",
    padding:'10px 0',
    borderRadius: '10px 0 0 10px',
    boxShadow: "rgb(0 0 0 / 75%) 0px 0px 16px -1px"
  },
  cartDesc:{
    color: "white",
    marginTop: "8px",
  },
  button:{
    backgroundColor:'#fff',
    color:'rgb(255, 112, 4)',
    padding:0,
    marginTop: '8px',
    '&:hover':{
      backgroundColor:'#fff',
    color:'rgb(255, 112, 4)',
    }
  }
}));

const SideCart = () => {
  const styles = useStyles();
  const [drawer, setDrawer] = useState(false);

  const quantity = useSelector(state => state.cart.quantity) 
  const total = useSelector(state => state.cart.total) 

  const toggleDrawer = (open) => (event) => {
    setDrawer(open)
  }

  return (
    <Box className={styles.sideCart}>
      <Box className={styles.sideCartContainer} onClick={toggleDrawer(true)}>
        <ShoppingCartIcon sx={{color:'rgb(255, 112, 4)'}}></ShoppingCartIcon>
        <Typography variant="p" className={`desc ${styles.cartDesc}`}>
          {quantity} items
        </Typography>
        <Button className={styles.button}>${total}</Button>
      </Box>
      <SideProductModal toggleDrawer={toggleDrawer} drawer={drawer} />
    </Box>
  );
};

export default SideCart;
