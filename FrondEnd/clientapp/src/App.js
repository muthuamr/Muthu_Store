import './App.css';
import ConfirmationModal from './components/ConfirmationModal';

import NavBar from './components/NavBar';
import CustomerDashboard from './components/customer/CustomerDashboard';

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
