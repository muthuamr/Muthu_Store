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
import ProductService from './components/services/ProductService';

export const API_URL = 'https://localhost:7119/api';

function App() {

  return (
    <BrowserRouter>
    <div>
      <NavigationMenu />
      <Routes>
        {/* <Route path="/Customers" element={ <GenericApiComponent endpoint="https://localhost:7119/api/customers" />}></Route> */}
        <Route path="/Customers" element={<CustomerService></CustomerService>} />
         <Route path="/Products" element={<ProductService></ProductService>} />
        {/*<Route path="/Stores" element={<Stores />} />
        <Route path="/Sales" element={<Sales />} /> */}
      </Routes>
    </div>
  </BrowserRouter>
  );
}

export default App;
