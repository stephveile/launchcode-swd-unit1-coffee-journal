import '../styles/NewEntry.css';
import CoffeeBeans from '../assets/coffee_beans.jpg';
import {useState} from 'react';

const NewEntry = ({onAddEntry}) => {

    const [date, setDate] = useState("")
    const [name, setName] = useState("")
    const [order, setOrder] = useState("")
    const [rating, setRating] = useState("")
    const [review, setReview] = useState("")

    const handleSubmit = (event) => {
        event.preventDefault()
        onAddEntry(date)
        setDate("")
        onAddEntry(name)
        setName("")
        onAddEntry(order)
        setOrder("")
        onAddEntry(rating)
        setRating("")
        onAddEntry(review)
        setReview("")

        console.log(setName)
    }

    // Function for the reset button
    const [blankForm, setBlankForm] = useState(false);

    const formReset = () => {
        setBlankForm(true)
    }

    // Return that prints the HTML and calls the event handler functions
    return (
        <div className="newEntry" style={{backgroundImage: `url(${CoffeeBeans})` }} alt="Coffee beans in a roaster">
            <form onSubmit={handleSubmit} className="entryForm">
                <h2>Create a new journal entry</h2>
                <label htmlFor="date">Date*: </label>
                <input required type="date" id="date" name="date" value={date} onChange={(event) => setDate(event.target.value)}></input>
                <br/>
                <label htmlFor="name">Coffee Shop*: </label>
                <input required type="text" id="name" name="name" value={name} onChange={(event) => setName(event.target.value)}></input>
                <br/>
                <label htmlFor="order">Order*: </label>
                <input required type="text" id="order" name="order" value={order} onChange={(event) => setOrder(event.target.value)}></input>
                <br/>
                <label>Rating: 
                    <input type="radio" id="rating1" name="rating" value={rating} onChange={(event) => setRating(event.target.value)}></input>
                    <label htmlFor="rating1" >1</label>
                    <input type="radio" id="rating2" name="rating" value={rating} onChange={(event) => setRating(event.target.value)}></input>
                    <label htmlFor="rating2">2</label>
                    <input type="radio" id="rating3" name="rating" value={rating} onChange={(event) => setRating(event.target.value)}></input>
                    <label htmlFor="rating3">3</label>
                    <input type="radio" id="rating4" name="rating" value={rating} onChange={(event) => setRating(event.target.value)}></input>
                    <label htmlFor="rating4">4</label>
                    <input type="radio" id="rating5" name="rating" value={rating} onChange={(event) => setRating(event.target.value)}></input>
                    <label htmlFor="rating5">5</label>
                </label>
                <br/>
                <label htmlFor="review">Review: 
                    <textarea id="review" name="review" rows="7" cols="30" value={review} onChange={(event) => setReview(event.target.value)}></textarea>
                </label>
                <br/><br/>
                <div className="formButtons">
                    <input type="submit" className="submit"></input>
                    <input type="reset" className="reset" onClick={formReset}></input>
                </div>
            </form>
        </div>
    );
}

export default NewEntry;
