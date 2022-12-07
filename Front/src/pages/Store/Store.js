import { Item, NavigationBar} from "../../components";
import { useStyles } from "./Store.style";
import { Grid } from "@mui/material";


export const Store = ({ addItemToCart, items }) => {
  const classes = useStyles();

  return (
    <>
      <NavigationBar/>
      <Grid
        container
        spacing={4}
        className={classes.gridContainer}
        justify="center"
      >
        {items.map((item) => (
          <Grid key={item._id} item xs={12} sm={6} md={3}>
            <Item item={item} addItemToCart={addItemToCart} />
          </Grid>
        ))}
      </Grid>
    </>
  );
};
