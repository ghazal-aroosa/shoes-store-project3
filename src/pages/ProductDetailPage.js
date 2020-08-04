import React, { useState, useContext } from "react";
// React router v6
import { useParams } from "react-router-dom";

// Material ui/core used 
import { Grid, Container, Typography, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

// Material ui/icons used 
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";

// Material ui/lab used 
import Rating from "@material-ui/lab/Rating";



import GlobalContext from "../state/GlobalContext";

const useStyles = makeStyles((theme) => ({
  container: {
    padding: theme.spacing(2),
    flexGrow: 10,
  },
  image: {
    width: "100%",
    height: "auto",
  },
  button: {
    marginTop: theme.spacing(5),
  },
  name: {
    [theme.breakpoints.down("xs")]: {
      fontSize: "1.6rem",
    },
  },
}));

const ProductDetailPage = () => {
  const classes = useStyles();
  const { slug } = useParams();
  const { products, addToCart } = useContext(GlobalContext);
  const [rating] = useState(3.5);
  const product = products.find((p) => p.slug === slug);

  if (!product) return <p>Product not found</p>;

  function handleAddToCart() {
    addToCart(product);
  }

  return (
    <Container className={classes.container}>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <img
            className={classes.image}
            src={product.imageURL}
            alt={product.name}
          />
        </Grid>
        <Grid item xs={12} md={6} container direction="column">
          <Grid item>
            <Typography variant="h4" className={classes.name}>
              {product.name}
            </Typography>
            <Typography variant="h6" color="textSecondary" gutterBottom>
              {product.brand}
            </Typography>
          </Grid>
          <Grid
            item
            container
            justify="center"
            spacing={1}
            style={{ marginTop: 20 }}
          >
            <Grid item xs={6}>
              <Typography variant="button">Price</Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography variant="button"> ${product.price}</Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography variant="button">Items left</Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography variant="button">{product.items_left}</Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography variant="button">Rating</Typography>
            </Grid>
            <Grid item xs={6}>
              <Rating value={rating} precision={0.5} readOnly />
            </Grid>
          </Grid>
          <Grid item container>
            <Button
              variant="contained"
              color="secondary"
              className={classes.button}
              startIcon={<AddShoppingCartIcon />}
              onClick={handleAddToCart}
              disabled={product.items_left <= 0}
              fullWidth
            >
              Add to cart
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default ProductDetailPage;