import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Home from './pages/Home';
import NewEntry from './pages/NewEntry';
import Journal from './pages/Journal';


function App() {

  return (
    <div className="App">
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/newentry" element={<NewEntry />} />
          <Route path="/journal" element={<Journal />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
