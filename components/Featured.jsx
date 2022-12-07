import { Box, Container, Grid } from "@mui/material";
import ProductCart from "./ProductCart";
import { useEffect, useState } from "react";

const Featured = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_URL}/api/product`)
      .then((res) => res.json())
      .then((products) => {
        const featured = products.filter(
          (product) => product.productType === "featured"
        );
        setProducts(featured);
      });
  }, []);
  return (
    <Box>
      <Container>
      <Grid container spacing={2}>
        {products.map((product) => (
          <ProductCart key={product._id} product={product} />
        ))}
      </Grid>
    </Container>
    </Box>
  );
};

export default Featured;
