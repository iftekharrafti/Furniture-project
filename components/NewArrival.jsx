import { Container, Grid } from "@mui/material";
import { useEffect, useState } from "react";
import ProductCart from "./ProductCart";

const NewArrival = () => {
  const [products, setProducts] = useState([])

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_URL}/api/product`)
    .then(res => res.json())
    .then(products => {
      const newArrival = products.filter(product => product.productType === 'arrival')
      setProducts(newArrival);
    })
  },[])

  return (
    <Container>
      <Grid container spacing={2}>
        {
          products.map(product => <ProductCart key={product._id} product={product} />)
        }
      </Grid>
    </Container>
  );
};

export default NewArrival;
