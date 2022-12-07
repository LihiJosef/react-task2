import { CartItem } from "../../components";
import { Paper, Typography, Grid, Button } from "@mui/material";

export const Cart = ({ cartItems, addOrderToDb }) => {
  const totalPrice = cartItems
    .reduce(
      (accumulator, currentValue) =>
        accumulator + parseFloat(currentValue.price),
      0
    )
    .toFixed(3);

  const onClickBuyHandler = () => {
    // Order is array of id's cart items
    const order = cartItems.map((cartItem) => cartItem._id);
    addOrderToDb(order);
  };

  return (
    <Paper
      sx={{
        p: 2,
        margin: "auto",
        maxWidth: 1200,
        flexGrow: 1,
      }}
    >
      {cartItems.map((cartItem, index) => (
        <CartItem key={index} cartItem={cartItem} />
      ))}
      {totalPrice > 0 ? (
        <Grid container spacing={2} sx={{ my: 2 }}>
          <Grid item xs={11}>
            <Typography variant="subtitle1" component="div">
              TotalAmount: {totalPrice}$
            </Typography>
          </Grid>
          <Grid item xs={1}>
            <Button
              variant="contained"
              size="medium"
              onClick={onClickBuyHandler}
            >
              Buy
            </Button>
          </Grid>
        </Grid>
      ) : (
        <Typography variant="subtitle1" component="div">
          Your cart is empty
        </Typography>
      )}
    </Paper>
  );
};
