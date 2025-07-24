import '../styles/Journal.css';
import Coffee3 from '../assets/coffee_3.jpg';
import {useState} from 'react';
import NewEntry from './NewEntry';


const Journal = () => {

    const [prevOrders, setPrevOrders] = useState([
        {
            id: "1",
            date: "2025-07-19",
            name: "Blueprint Coffee",
            order: "Iced Vanilla Latte",
            rating: "4",
            review: "Good flavor, but a little too sweet"
        },
        {
            id: "2",
            date: "2025-07-21",
            name: "Sump Coffee",
            order: "Iced Americano",
            rating: "3",
            review: "Really strong"
        }
    ])

    const handleAddOrder = ({date, name, order, rating, review}) => {
        const newOrder = {
            date,
            name,
            order,
            rating,
            review,
            id: self.crypto.randomUUID()
        }
        setPrevOrders([newOrder, ...prevOrders])
        console.log("New entry:", name)
    }

    return (
        <div className="orders" style={{backgroundImage: `url(${Coffee3})` }} alt="Coffee on a table with succulent">
            <h1>This is your order history:</h1>
            <NewEntry onAddEntry={handleAddOrder}/>
        </div>
    )
}

export default Journal;
