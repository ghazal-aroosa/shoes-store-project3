import React, { useContext } from "react";
// Other Component 
import CartItemCard from "./CartItemCard";
// Material ui/core used
import { Typography } from "@material-ui/core";

import GlobalContext from "../../state/GlobalContext";
const CartItemList = () => {
  const { cart } = useContext(GlobalContext);

  return (
    <>
      {cart.length > 0 ? (
        cart.map((product) => (
          <CartItemCard key={product.id} product={product} />
        ))
      ) : (
        <div style={{ width: "100%" }}>
          <Typography color="error" variant="h5">
           Add Cart. Its Empty
          </Typography>
        </div>
      )}
    </>
  );
};

export default CartItemList;