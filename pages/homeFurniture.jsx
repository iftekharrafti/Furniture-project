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
import TitleContainer from "../components/TitleContainer";

const useStyles = makeStyles((theme) => ({
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

const HomeFurniture = () => {
  const styles = useStyles();
  const [sort, setSort] = useState("");
  const [sortedProduct, setSortedProduct] = useState([]);
  const [products, setProducts] = useState([]);
  const [sortTrue, setSortTrue] = useState(false);

  useEffect(() => {
    fetch("http://localhost:3000/api/product")
      .then((res) => res.json())
      .then((products) => {
        const homeOffice = products.filter(
          (product) => product.category === "bedRoom" || product.category === "living" || product.category === "dining"
        );
        setProducts(homeOffice);
        console.log('home office',homeOffice)
      });
  }, []);

  const handleSortChange = (event) => {
    setSort(event.target.value);
    
  };

  // Price High To Low Converting
  if(sortedProduct <= 0 ) {
    if(sort === 'priceHighLow' && sortedProduct <= 0){
      const highToLow = products.sort((a,b) => b.prices[0] - a.prices[0])
      setSortedProduct(highToLow)
      setSortTrue(true)
    }
    else if(sort === 'priceLowHigh' && sortedProduct <= 0){
        const lowToHigh = products.sort((a,b) => a.prices[0] - b.prices[0])
      setSortedProduct(lowToHigh)
      setSortTrue(true)
    }
  }

  if(sortTrue){
    console.log('sorted')
    setSortedProduct([])
    if(sort === 'priceHighLow' && sortedProduct <= 0){
      const highToLow = products.sort((a,b) => b.prices[0] - a.prices[0])
      setSortedProduct(highToLow)
      setSortTrue(false)
    }
    else if(sort === 'priceLowHigh' && sortedProduct <= 0){
      const lowToHigh = products.sort((a,b) => a.prices[0] - b.prices[0])
    setSortedProduct(lowToHigh)
    setSortTrue(false)
  }
  
  }


  

  return (
    <Box>
      {/* Title Container */}
      <TitleContainer title="Home Furniture" name1="Home" link1="/" name2="Collection" link2="/" name3="Home Furniture" />

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
                  <MenuItem value="nameLowUp">Name (A - Z)</MenuItem>
                  <MenuItem value="nameUpLow">Name (Z - A)</MenuItem>
                  <MenuItem value="priceLowHigh">Price (Low - High)</MenuItem>
                  <MenuItem value="priceHighLow">Price (High - Low)</MenuItem>
                </Select>
              </FormControl>
            </Box>
          </Box>
        </Box>

        {/* <Box> */}
          {/* <Grid container spacing={2}>
              {products.map(product => <ProductCart key={product._id} product={product} />)}
          </Grid> */}
          {
            sortedProduct.length <= 0 ? <Grid container spacing={2}>
            {products.map(product => <ProductCart key={product._id} product={product} />)} 
        </Grid> : <Grid container spacing={2}>
              {sortedProduct.map(product => <ProductCart key={product._id} product={product} />)}
          </Grid>
          }
        {/* </Box> */}
      </Container>
    </Box>
  );
};

export default HomeFurniture;
