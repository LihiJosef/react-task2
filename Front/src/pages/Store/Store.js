import { Item } from "../../components";
import { Link } from "react-router-dom";
import { useStyles } from "./Store.style";
import { ShoppingCart } from "@mui/icons-material";
import { AppBar, Grid, IconButton, Toolbar, Typography } from "@mui/material";

export const Store = ({ addItemToCart, items }) => {
  const classes = useStyles();

  return (
    <>
      <AppBar position="sticky">
        <Toolbar>
          <Typography variant="h5" sx={{ flexGrow: 1 }}>
            Store
          </Typography>
          <Link to={"cart"}>
            <IconButton>
              <ShoppingCart />
            </IconButton>
          </Link>
        </Toolbar>
      </AppBar>

      <Grid
        container
        spacing={4}
        className={classes.gridContainer}
        justify="center"
      >
        {items.map((item) => (
          <Grid key={item._id} item xs={12} sm={6} md={4}>
            <Item item={item} addItemToCart={addItemToCart} />
          </Grid>
        ))}
      </Grid>
    </>
  );
};
