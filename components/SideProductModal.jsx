import { Box, Button, Divider, Drawer, Grid, Typography } from "@mui/material";
import React from "react";
import CloseIcon from "@mui/icons-material/Close";
import { makeStyles } from "@material-ui/core/styles";
import { useSelector } from "react-redux";
import Image from "next/image";

const useStyles = makeStyles((theme) => ({
  top: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  title: {
    fontSize: "24px",
  },
  bottom: {
    backgroundColor: "#FF7004",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    width: "90%",
    height: "50px",
    margin: "15px 10px",
    padding: "10px",
    margin: "10px auto",
    "&:hover": {
      backgroundColor: "#2F333A",
    },
  },
  middleProduct:{
    display: "grid",
    gridTemplateColumns: "150px 200px 50px",
    width: "300px",
    position: "relative",
    margin:'20px 0'
  },
  middleTitle:{
    fontSize:"16px"
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
  const products = useSelector((state) => state.cart.cartProducts);
  const total = useSelector((state) => state.cart.total);
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
          {products.map((product) => (
            <Box key={product._id} className={styles.middleProduct}>
                <Box>
                    <Image src={product.img} alt="" width="140" height="120" objectFit="cover" />
                </Box>
                <Box sx={{ml:1.5}}>
                    <Typography variant="h5" className={`title3 ${styles.middleTitle}`}> {product.title}</Typography>
                </Box>
                <Box sx={{ml:1.5}}>
                    <CloseIcon />
                </Box>
            </Box>
          ))}

          {/* Bottom */}
          <Box className={styles.bottom}>
            <Typography
              variant="body2"
              className={`title3 ${styles.bottomDesc}`}
            >
              View Cart
            </Typography>
            <Button className={styles.button}>${total}</Button>
          </Box>
        </Box>
      </Drawer>
    </Box>
  );
};

export default SideProductModal;
