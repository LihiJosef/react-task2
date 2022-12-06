import './Item.css'
import { useParams } from "react-router-dom";
import { expenses } from "../../data/carsData"

const Item = () => {
    const id = useParams().id;
    const car = expenses.find(currentCar => currentCar.id == id);
    const logo = require(`../../../public/logos/${car.moreImage}.jpg`);

    return (
        <div className='main-div'>
            <table border={1}>
            <tr>
                <td>חנות</td>
                <td>{car.store}</td>
            </tr>
            <tr>
                <td>תמונה נוספת</td>
                <td><img className='img' src={logo}></img></td>
            </tr>
            <tr>
                <td>תיאור</td>
                <td>{car.description}</td>
            </tr>
        </table>
        </div>

    );
}

export default Item;