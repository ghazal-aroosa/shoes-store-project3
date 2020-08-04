import React, { useContext } from "react";

// Material ui/core used
import { makeStyles } from "@material-ui/core/styles";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  IconButton,
  Hidden,
} from "@material-ui/core";

// Material icon used
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
//For CSS Work
import clsx from "clsx";


import GlobalContext from "../../state/GlobalContext";

// Router v6 used
import { useNavigate } from "react-router-dom";


const useStyles = makeStyles((theme) => ({
  root: {
    height: "100%",
    position: "relative",

    "&:hover": {
      cursor: "pointer",
    },
  },
  media: {
    height: 300,

    [theme.breakpoints.down("md")]: {
      height: 200,
    },
    [theme.breakpoints.down("xs")]: {
      height: 120,
    },
  },

  cardContent: {
    display: "flex",
    justifyContent: "space-between",

    [theme.breakpoints.only("md")]: {
      flexDirection: "column",
    },
    [theme.breakpoints.only("xs")]: {
      flexDirection: "column",
    },
  },

  h3ResponsiveText: {
    [theme.breakpoints.only("md")]: {
      fontSize: "1rem",
    },
    [theme.breakpoints.only("xs")]: {
      fontSize: "0.9rem",
    },
  },

  btnResponsiveText: {
    [theme.breakpoints.only("xs")]: {
      fontSize: "0.8rem",
    },
  },

  row: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-start",
    width: "100%",
  },
}));

const ProductCard = ({ product }) => {
  const classes = useStyles();
  const { addToCart } = useContext(GlobalContext);
  const navigate = useNavigate();

  function handleAddToCart(e) {
    e.stopPropagation();
    addToCart(product);
  }

  function handleClick(e) {
    console.log(e.target.value);
    navigate(`/products/${product.slug}`);
  }

  return (
    <Card className={classes.root} onClick={handleClick}>
      <CardMedia
        className={classes.media}
        image={product.imageURL}
        title={product.name}
      />
      <CardContent className={classes.cardContent}>
        <div style={{ width: "100%" }}>
          <div className={classes.row}>
            <Typography
              variant="h6"
              component="h3"
              className={classes.h3ResponsiveText}
            >
              {product.name}
            </Typography>
            <Hidden xsDown>
              <Typography
                variant="h6"
                component="h3"
                className={clsx(classes.h3ResponsiveText)}
                align="right"
              >
                ${product.price}
              </Typography>
            </Hidden>
          </div>
          <Typography
            variant="button"
            color="textSecondary"
            component="p"
            className={classes.btnResponsiveText}
          >
            {product.brand}
          </Typography>
          {product.items_left > 0 ? (
            <div className={classes.row} style={{ alignItems: "center" }}>
              <Hidden xsDown>
                <Typography
                  variant="button"
                  color="textSecondary"
                  component="p"
                  className={classes.btnResponsiveText}
                >
                  Items left: <strong>{product.items_left}</strong>
                </Typography>
              </Hidden>
              <Hidden smUp>
                <Typography
                  variant="h4"
                  className={clsx(classes.h3ResponsiveText)}
                  align="right"
                >
                  ${product.price}
                </Typography>
              </Hidden>
              <IconButton color="inherit" onClick={handleAddToCart}>
                <AddShoppingCartIcon />
              </IconButton>
            </div>
          ) : (
            <Typography variant="button" color="error" component="p">
              Out of Stock
            </Typography>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductCard;