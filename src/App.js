import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import ActivitiesStuOrgView from './pages/Activities_StuOrgView';
import Activities from './pages/Activities';
import ActivityDetail from './pages/ActivityDetail';
import Opportunities from './pages/Opportunities';
import OpportunityDetail from './pages/OpportunityDetail'
import InfoHub from './pages/InfoHub';
import Feedback from './pages/Feedback';
import Login from './pages/Login';
import CreateAccount from './pages/CreateAccount';
import { Routes, Route } from 'react-router-dom';

function App() {

  
  return (
    <div className="App">
      <Navbar />
        <Routes> {/** outside Routes: display for all pages */}
          <Route path='/' element ={<Home />} />
          <Route path='/Activities_StuOrgView' element ={<ActivitiesStuOrgView />} />
          <Route path='/Activities' element ={<Activities />} />
          <Route path='/ActivityDetail' element ={<ActivityDetail />} />
          <Route path='/Opportunities' element ={<Opportunities />} />
          <Route path='/OpportunityDetail' element ={<OpportunityDetail />} />
          <Route path='/InfoHub' element ={<InfoHub />} />
          <Route path='/Feedback' element ={<Feedback />} />
          <Route path='/Login' element ={<Login/>} />
          <Route path='/CreateAccount' element ={<CreateAccount />} />
        </Routes>
      <Footer />
    </div>
  );
}

export default App;
