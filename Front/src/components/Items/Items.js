import ExpenseItem from "../ExpenseItem/ExpenseItem";
import { Link } from "react-router-dom";
import { expenses } from "../../data/carsData"


const Items = () => {

    return (
    <div>
      <h2> Those are my cars: </h2>
      {expenses.map(expense => (
         <Link to={`/Car/${expense.id}`}><ExpenseItem key={expense.id} expense={expense} expenses={expenses} /></Link>
      ))}
    </div>
    );
}

export default Items;