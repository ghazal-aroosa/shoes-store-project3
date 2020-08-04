import React, { useContext } from "react";

// Material ui/core used
import { makeStyles } from "@material-ui/core/styles";
import { Typography, IconButton } from "@material-ui/core";
// Material ui/icon used
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
// React router v6
import { useNavigate } from "react-router-dom";

import GlobalContext from "../../state/GlobalContext";

const useStyles = makeStyles((theme) => ({
  root: {
    position: "relative",
  },
  icon: {
    color: theme.palette.primary.contrastText,
  },
  dot: {
    position: "absolute",
    top: 0,
    right: 0,
    backgroundColor: theme.palette.error.main,
    borderRadius: "50%",
    width: 18,
    height: 18,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  cartItemText: {
    color: theme.palette.common.white,
    fontSize: "0.85rem",
    fontWeight: "bold",
  },
}));

const CartButton = () => {
  const classes = useStyles();
  const navigate = useNavigate();
  const { cart } = useContext(GlobalContext);

  const items = cart.map((p) => p.items);
  let numOfItems = 0;
  if (items.length) numOfItems = items.reduce((a, b) => a + b);

  return (
    <IconButton onClick={() => navigate("cart")} className={classes.root}>
      {numOfItems > 0 && (
        <div className={classes.dot}>
          <Typography className={classes.cartItemText}>{numOfItems}</Typography>
        </div>
      )}
      <ShoppingCartIcon className={classes.icon} />
    </IconButton>
  );
};

export default CartButton;