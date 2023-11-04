import './App.css';
import ConfirmationModal from './components/ConfirmationModal';

import NavBar from './components/NavBar';
import CustomerDashboard from './components/customer/CustomerDashboard';
import CustomerEdit from './components/customer/CustomerEdit';
import PaginationComponent from './components/YourComponent';


// import { BrowserRouter as Router, Route } from 'react-router-dom'
//import {BrowserRouter as Router, Route} from 'react-router-dom'
// import Update from './components/update';
// import Read from './components/read';
// import AppRoutes from './AppRoutes';

function App() {

  const items = Array.from({ length: 50 }, (_, index) => `Item ${index + 1}`);
  const itemsPerPage = 10;

  return (
    <div>
    <NavBar></NavBar>
    
    <CustomerDashboard></CustomerDashboard>   
    
  </div>
  );
}

export default App;
