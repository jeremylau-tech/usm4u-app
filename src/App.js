import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Activities from './pages/Activities';
import Opportunities from './pages/Opportunities';
import InfoHub from './pages/InfoHub';
import Feedback from './pages/Feedback';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Navbar />
        <Routes> {/** outside Routes: display for all pages */}
          <Route path='/' element ={<Home />} />
          <Route path='/Activities' element ={<Activities />} />
          <Route path='/Opportunities' element ={<Opportunities />} />
          <Route path='/InfoHub' element ={<InfoHub />} />
          <Route path='/Feedback' element ={<Feedback />} />
        </Routes>


      <Footer />
    </div>
  );
}

export default App;
