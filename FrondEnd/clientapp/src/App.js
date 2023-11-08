import './App.css';
// import NavBar from './components/NavBar';
import CustomerDashboard from './components/customer/CustomerDashboard';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/customer/CustomerDashboard';
import About from './components/customer/CustomerDashboard';
import Contact from './components/customer/CustomerDashboard';
import NavigationMenu from './components/NavigationMenu';
import CustomerService from './components/services/CustomerService';
import MyComponent from './components/services/Mycomponent';
import GenericApiComponent from './components/utility/GenericApiComponent';

function App() {

  return (
    <BrowserRouter>
    <div>
      <NavigationMenu />
      <Routes>
        {/* <Route path="/Customers" element={ <GenericApiComponent endpoint="https://localhost:7119/api/customers" />}></Route> */}
        <Route path="/Customers" element={<CustomerService />} />
        {/* <Route path="/Customers" element={<CustomerDashboard />} /> */}
        {/* <Route path="/Products" element={<Products />} />
        <Route path="/Stores" element={<Stores />} />
        <Route path="/Sales" element={<Sales />} /> */}
      </Routes>
    </div>
  </BrowserRouter>
  );
}

export default App;
