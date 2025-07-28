import '../styles/Journal.css';
import Coffee3 from '../assets/coffee_3.jpg';
import {useState} from 'react';

const journalDatabase = [
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
        },
        {
            id: "3",
            date: "2025-07-24",
            name: "Cafe Dolce",
            order: "Iced Vanilla Latte",
            rating: "5",
            review: "Perfectly sweet with a delicious vanilla bean flavor"
        }
    ];

const Journal = () => {

    const [entryId, setEntryId] = useState("");
    
    const selectedEntry = journalDatabase.find((entry) => entry.id === entryId);

    return (
        <div className="journal" style={{backgroundImage: `url(${Coffee3})` }} alt="Coffee on a table with succulent">
            <title>The Coffee Journal - Journal</title>
            <h1 className="heading">Select a journal entry to view</h1>
            <select className="dropdown" value={entryId} onChange={(event) => setEntryId(event.target.value)}>
                <option value="">Choose an entry</option>
                {journalDatabase.map((entry) => (
                    <option key={entry.id} value={entry.id}>
                        {entry.name} on {entry.date}
                    </option>
                ))}
            </select>

            <div className="entryDisplay">
                {selectedEntry && (
                    <div>
                        <h2>Journal entry:</h2>
                        <p>Date: {selectedEntry.date}</p>
                        <p>Coffee Shop: {selectedEntry.name}</p>
                        <p>Rating: {selectedEntry.rating}</p>
                        <p>Review: {selectedEntry.review}</p>
                    </div>
                ) || "Error: Please choose an entry to display"}
            </div>
        </div>
    );
}

export default Journal;
