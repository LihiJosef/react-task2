import './ExpenseItem.css'

const ExpenseItem = ({expense: {title, amount, image}}) => {
    const expenseLogo = require(`../../../public/logos/${image}.png`);

    return (
        <div className='expense-item'>
            <div className="expense-item__description"> 
               <h2> {title}</h2>
               <h1> {amount}$</h1>
            </div>
            <div className="expense-item__image-container ">
                <img className="expense-item__image" src={expenseLogo}></img>
            </div>
        </div>
    );
}

export default ExpenseItem;