import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavigationMenu from './components/utility/NavigationMenu';
import CustomerService from './components/services/CustomerService';
import ProductService from './components/services/ProductService';
import StoreService from './components/services/StoreService';
import SaleService from './components/services/SaleService';

export const API_URL = 'https://localhost:7119/api';
export const API_PRODUCT_URL = 'https://localhost:7119/api/products';
export const API_CUSTOMER_URL="https://localhost:7119/api/customers";
export const API_STORE_URL="https://localhost:7119/api/store";
export const API_SALES_URL="https://localhost:7119/api/sale";

function App() {

  return (
    <>
    <BrowserRouter>
    <div>
      <NavigationMenu />
      <Routes>
        <Route path="/Customers" element={<CustomerService></CustomerService>} />
         <Route path="/Products" element={<ProductService></ProductService>} />
         <Route path="/Stores" element={<StoreService></StoreService>} />
         <Route path="/Sales" element={<SaleService></SaleService>}/>
      </Routes>
    </div>
  </BrowserRouter>
  </>
  );
  
}

export default App;
