import '../styles/NewEntry.css';
import CoffeeBeans from '../assets/coffee_beans.jpg';
import {useState} from 'react';

const NewEntry = () => {

    // Setting initial states for form entries
    const [formData, setFormData] = useState({
        date: "",
        name: "",
        order: "",
        rating: "",
        review: ""
    });

    // Function to build the array of form items
    const handleChange = (event) => {

        const { name, value } = event.target;
        setFormData({
        ...formData,
        [name]: value
        });
    };

    // Function to keep the data in the form fields after clicking the submit button
    const handleSubmit = (event) => {
        event.preventDefault();
        alert("Journal entry saved!");
    };

    // Function for the reset button
    const handleReset = () => {
        setFormData({
            date: "",
            name: "",
            order: "",
            rating: "",
            review: ""
        });
    };

    // Return that prints the HTML and calls the event handler functions
    return (
        <div className="newEntry" style={{backgroundImage: `url(${CoffeeBeans})` }} alt="Coffee beans in a roaster">
            <title>The Coffee Journal - New Entry</title>
            <div className="leftCol">
                <div className= "leftCard">
                    <h2>Create a new journal entry</h2>
                    <form className="entryForm" onSubmit={handleSubmit}>
                        <label htmlFor="date"><strong>Date*: </strong></label>
                        <input type="date" id="date" name="date" value={formData.date} onChange={handleChange} required />
                        <br/>
                        <label htmlFor="name"><strong>Coffee Shop*: </strong></label>
                        <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
                        <br/>
                        <label htmlFor="order"><strong>Order*: </strong></label>
                        <input type="text" id="order" name="order" value={formData.order} onChange={handleChange} required />
                        <br/>
                        <label><strong>Rating: </strong>
                            <input type="radio" id="rating1" name="rating" value="1" onChange={handleChange} />
                            <label htmlFor="rating1" >1</label>
                            <input type="radio" id="rating2" name="rating" value="2" onChange={handleChange} />
                            <label htmlFor="rating2">2</label>
                            <input type="radio" id="rating3" name="rating" value="3" onChange={handleChange} />
                            <label htmlFor="rating3">3</label>
                            <input type="radio" id="rating4" name="rating" value="4" onChange={handleChange} />
                            <label htmlFor="rating4">4</label>
                            <input type="radio" id="rating5" name="rating" value="5" onChange={handleChange} />
                            <label htmlFor="rating5">5</label>
                        </label>
                        <br/>
                        <label htmlFor="review"><strong>Review: </strong></label>
                            <textarea id="review" name="review" value={formData.review} onChange={handleChange} />
                        <br/><br/>
                        <div className="formButtons">
                            <input type="submit" className="submit" />
                            <input type="reset" className="reset" onClick={handleReset}></input>
                        </div>
                    </form>
                </div>
            </div>
            <div className="rightCol">
                <div className="rightCard">
                    <h2>Newest journal entry</h2>
                    <p><strong>Date:</strong> {formData.date}</p>
                    <p><strong>Coffee Shop:</strong> {formData.name}</p>
                    <p><strong>Order:</strong> {formData.order}</p>
                    <p><strong>Rating:</strong> {formData.rating || ("No rating")} / 5</p>
                    <p><strong>Review:</strong> {formData.review || ("No review")}</p>
                </div>
            </div>
        </div>
    );
}

export default NewEntry;
