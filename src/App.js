import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import ActivitiesList from './pages/ActivitiesList';
import CreateActivity from './pages/CreateActivity';
import Activities_StuOrgView from './pages/Activities_StuOrgView';
import Opportunities_BhepaView from './pages/Opportunities_BhepaView';
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
          <Route path='/Activities' element ={<Activities_StuOrgView />} />
          <Route path='/Opportunities' element ={<Opportunities_BhepaView />} />
          <Route path='/InfoHub' element ={<InfoHub />} />
          <Route path='/Feedback' element ={<Feedback />} />
        </Routes>

      <Footer />
    </div>
  );
}

export default App;
