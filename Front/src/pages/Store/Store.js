import { Product } from "../../components";
import { expenses } from "../../data/carsData";

export const Store = ({ addItemToCart }) => {
  return (
    <div>
      <h2> Those are my cars: </h2>
      {expenses.map((expense) => (
        <Product
          key={expense.id}
          expense={expense}
          addItemToCart={addItemToCart}
        />
      ))}
    </div>
  );
};
