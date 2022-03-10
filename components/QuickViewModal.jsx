import {
  Box,
  Breadcrumbs,
  Button,
  Container,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Modal,
  Select,
  Typography,
} from "@mui/material";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import CompareIcon from "@mui/icons-material/Compare";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import TwitterIcon from "@mui/icons-material/Twitter";
import PinterestIcon from "@mui/icons-material/Pinterest";
import CloseIcon from "@mui/icons-material/Close";
import { makeStyles } from "@material-ui/core/styles";

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
  close: {
    position: "absolute",
    top: 0,
    right: 0,
    color: "#fff",
    backgroundColor: "#FF7004",
    width: "30px",
    height: "30px",
    borderRadius: "50%",
    cursor: "pointer",
  },
}));

const QuickViewModal = ({ handleClose, open, id }) => {
  const styles = useStyles();
  const [product, setProduct] = useState({});
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    fetch(`http://localhost:3000/api/product/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [id]);

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "70vw",
    height: "90vh",
    bgcolor: "background.paper",
    boxShadow: 24,
    p: 4,
    overflow: "scroll",
  };

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <Image src={product.img} alt="" width="500" height="500" />
            </Grid>
            <Grid item xs={12} md={6}>
              <Box sx={{ ml: 5, mb: 5 }}>
                <Typography variant="body1" className="shortDesc">
                  <b>SKU:</b> 
                </Typography>

                <Typography
                  sx={{ my: 0.5 }}
                  variant="body1"
                  className="shortDesc"
                >
                  <b>AVAILABILITY:</b>
                  {product.availability} in Stock
                </Typography>

                <Typography
                  id="modal-modal-title"
                  variant="h6"
                  component="h2"
                  className="title3"
                >
                  {product.title}
                </Typography>

                <Typography sx={{ my: 1 }} variant="h5" className="">
                  $ 
                </Typography>

                <Typography
                  id="modal-modal-description"
                  sx={{ mt: 2 }}
                  className="shortDesc"
                >
                  {product.desc}
                </Typography>

                {/* Add to cart */}

                <Box className={styles.addToCart}>
                  <Box className={styles.inputGroup}>
                    <button className={styles.button}>-</button>
                    <input
                      onChange={(e) => setQuantity(e.target.value)}
                      type="number"
                      defaultValue={1}
                      className={styles.inputCount}
                    />
                    <button className={styles.button}>+</button>
                  </Box>
                  <Button className="btn">Add To Cart</Button>
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
            <Box>
              <CloseIcon className={styles.close} onClick={handleClose} />
            </Box>
          </Grid>
        </Box>
      </Modal>
    </div>
  );
};

export default QuickViewModal;
