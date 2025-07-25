import '../styles/NewEntry.css';
import CoffeeBeans from '../assets/coffee_beans.jpg';
import {useState} from 'react';

const NewEntry = () => {

    const [formData, setFormData] = useState({
        date: "",
        name: "",
        order: "",
        rating: "",
        review: ""
    });

    // Function to keep the data in the form fields after clicking the submit button
    const handleSubmit = (event) => {
        event.preventDefault()
    }

    // Function to build the array of form items
    const handleChange = (event) => {
        const {label, value} = event.target;
        setFormData({
            ...formData,
            [label]: value
        });
    }

    // Function for the reset button
    const [blankForm, setBlankForm] = useState(false);

    const formReset = () => {
        setBlankForm(true)
    }

    // Return that prints the HTML and calls the event handler functions
    return (
        <div className="newEntry" style={{backgroundImage: `url(${CoffeeBeans})` }} alt="Coffee beans in a roaster">
            <form className="entryForm" onSubmit={handleSubmit}>
                <h2>Create a new journal entry</h2>
                <label htmlFor="date">Date*: </label>
                <input required type="date" id="date" name="date" value={formData.date} onChange={handleChange}></input>
                <br/>
                <label htmlFor="name">Coffee Shop*: </label>
                <input required type="text" id="name" name="name" value={formData.name} onChange={handleChange}></input>
                <br/>
                <label htmlFor="order">Order*: </label>
                <input required type="text" id="order" name="order" value={formData.order}></input>
                <br/>
                <label>Rating: 
                    <input type="radio" id="rating1" name="rating" value={formData.rating}></input>
                    <label htmlFor="rating1" >1</label>
                    <input type="radio" id="rating2" name="rating" value={formData.rating}></input>
                    <label htmlFor="rating2">2</label>
                    <input type="radio" id="rating3" name="rating" value={formData.rating}></input>
                    <label htmlFor="rating3">3</label>
                    <input type="radio" id="rating4" name="rating" value={formData.rating}></input>
                    <label htmlFor="rating4">4</label>
                    <input type="radio" id="rating5" name="rating" value={formData.rating}></input>
                    <label htmlFor="rating5">5</label>
                </label>
                <br/>
                <label htmlFor="review">Review: 
                    <textarea id="review" name="review" rows="7" cols="30" value={formData.review}></textarea>
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
