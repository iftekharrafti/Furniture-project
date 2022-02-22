import { Container, Grid } from "@mui/material";
import ProductCart from "./ProductCart";
import { useEffect, useState } from "react";

const OnSale = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/api/product")
      .then((res) => res.json())
      .then((products) => {
        const onSale = products.filter(
          (product) => product.productType === "onSale"
        );
        setProducts(onSale);
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

export default OnSale;
