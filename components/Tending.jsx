import { Container, Grid } from "@mui/material";
import ProductCart from "./ProductCart";
import { useEffect, useState } from "react";

const Tending = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/api/product")
      .then((res) => res.json())
      .then((products) => {
        const tending = products.filter(
          (product) => product.productType === "tending"
        );
        setProducts(tending);
      });
  }, []);
  return (
    <Container>
      <Grid container spacing={2}>
      {products.map((product) => (
          <ProductCart key={product._id} product={product} />
        ))}
      </Grid>
    </Container>
  );
};

export default Tending;
