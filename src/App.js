import './App.css';
import Navbar from './components/Navbar';
import NavbarSigned from './components/NavbarSigned';
import Footer from './components/Footer';
import Home from './pages/Home';
import HomeSigned from './pages/HomeSigned';
import ActivitiesStuOrgView from './pages/Activities_StuOrgView';
import Activities from './pages/Activities';
import ActivityDetail from './pages/ActivityDetail';
import Opportunities from './pages/Opportunities';
import OpportunityDetail from './pages/OpportunityDetail';
import InfoHub from './pages/InfoHub';
import Feedback from './pages/Feedback';
import Login from './pages/Login';
import CreateAccount from './pages/CreateAccount';
import { Routes, Route } from 'react-router-dom';
import CreateOpportunity from './pages/CreateOpportunity';
import CreateActivity from './pages/CreateActivity';
import EditActivity from './pages/EditActivity';
import EditOpportunity from './pages/EditOpportunity';


function App() {

  return (
    <div className="App">

      <div>
        <Routes> {/** outside Routes: display for all pages */}
          <Route path='/HomeSigned' element ={<HomeSigned />} />
          <Route path='/CreateOpportunity' element ={<CreateOpportunity />} />
          <Route path='/CreateActivity' element ={<CreateActivity />} />
          <Route path='/EditActivity' element ={<EditActivity />} />
          <Route path='/EditOpportunity' element ={<EditOpportunity />} />
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
    </div>
  );
}

export default App;
