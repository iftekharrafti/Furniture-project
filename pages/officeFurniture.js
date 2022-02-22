import {
    Box,
    Breadcrumbs,
    Container,
    FormControl,
    Grid,
    Link,
    MenuItem,
    Select,
    Typography,
  } from "@mui/material";
  import React, { useState, useEffect } from "react";
  import { makeStyles } from "@material-ui/core/styles";
  import ProductCart from "../components/ProductCart";
  
  const useStyles = makeStyles((theme) => ({
    titleContainer: {
      padding: "30px 0",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#F4F5F8",
    },
    sortContainer: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      backgroundColor: "#EBEBEB",
      margin: "50px 0 30px 0",
      padding: "10px",
    },
    sortInputDesc: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
  }));
  
  const OfficeFurniture = () => {
    const styles = useStyles();
    const [sort, setSort] = useState("");
    const [products, setProducts] = useState([]);
  
    useEffect(() => {
      fetch("http://localhost:3000/api/product")
        .then((res) => res.json())
        .then((products) => {
          const officeFurniture = products.filter(
            (product) => product.category === "loung" || product.category === "officeTable" || product.category === "officeChair"
          );
          setProducts(officeFurniture);
        });
    }, []);
  
    const handleSortChange = (event) => {
      setSort(event.target.value);
    };
    return (
      <Box>
        <Box className={styles.titleContainer}>
          <Typography variant="h4" className="title">
            Office Furniture
          </Typography>
          <Breadcrumbs aria-label="breadcrumb">
            <Link underline="hover" color="inherit" href="/">
              Home
            </Link>
            <Link underline="hover" color="inherit" href="/collection">
              Collection
            </Link>
            <Link underline="hover" color="inherit" href="/collection">
              Office Collection
            </Link>
          </Breadcrumbs>
        </Box>
        {/* Product count and product sort */}
        <Container>
          <Box className={styles.sortContainer}>
            <Box>
              <Typography className="desc" variant="body2">
                Showing {products.length} products
              </Typography>
            </Box>
            <Box className={styles.sortInputDesc}>
              <Typography className="desc" variant="body2">
                <b>Sort by</b>
              </Typography>
              <Box className={styles.color}>
                <FormControl sx={{ minWidth: 200 }}>
                  <Select
                    sx={{ height: "45px", backgroundColor: "#fff", ml: 2 }}
                    value={sort}
                    onChange={handleSortChange}
                    displayEmpty
                    inputProps={{ "aria-label": "Without label" }}
                  >
                    <MenuItem value="">Relevance</MenuItem>
                    <MenuItem value={10}>Name (A - Z)</MenuItem>
                    <MenuItem value={11}>Name (Z - A)</MenuItem>
                    <MenuItem value={12}>Price (Low - High)</MenuItem>
                    <MenuItem value={13}>Price (High - Low)</MenuItem>
                  </Select>
                </FormControl>
              </Box>
            </Box>
          </Box>
  
          {/* <Box> */}
            <Grid container spacing={2}>
                {products.map(product => <ProductCart key={product._id} product={product}/>)}
            </Grid>
          {/* </Box> */}
        </Container>
      </Box>
    );
  };
  
  export default OfficeFurniture;
  