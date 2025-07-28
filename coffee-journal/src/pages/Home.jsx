import {Link} from 'react-router-dom';
import '../styles/Home.css';
import Coffee1 from '../assets/coffee_1.png'
import Button from '../components/Button';

const Home = () => {

    return (
        <div className="home" style={{backgroundImage: `url(${Coffee1})` }} alt="Coffee on a table with spoon">
            <title>The Coffee Journal - Home</title>
            <div className="buttons">
                <div>
                    <Link to='/newentry'>
                        <Button label="Create a new journal entry"></Button>
                    </Link>
                </div>
                <br/><br/>
                <div>
                    <Link to='/journal'>
                        <Button label="View your journal"></Button>
                    </Link>
                </div>
            </div>
                <br/><br/><br/><br/><br/><br/>
            <div className="features">
                <ul>New features coming soon!
                    <li>Locations & hours</li>
                    <li>Personalized favorite coffees and shops</li>
                </ul>
            </div>
        </div>
    );
}

export default Home;
