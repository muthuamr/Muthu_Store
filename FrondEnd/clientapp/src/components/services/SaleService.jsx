import { useEffect, useState } from "react";
import SaleDashboard from "../sale/SaleDashboard";
import axios from "axios";
import { API_URL } from "../../App";
import {API_PRODUCT_URL, API_CUSTOMER_URL,API_STORE_URL} from '../../App';
import { toast, ToastContainer } from "react-toastify";
import ThemingLayout from "../sale/ThemingLayout";
import { fetchData } from "../utility/fetchDataAPI";

const SaleService=()=>
{
    const SALE_API_URL=`${API_URL}/sale`;
    const [sales, setShowSales]=useState([]);
    const [loading, setLoading]=useState(true);
    const [products, setProducts]=useState([]);
    const [customers, setCustomers]=useState([]);
    const [stores, setStores]=useState([]);
    
    useEffect(()=>
    {
        const getList=async (endpoint)=>
        {
          await fetchData(endpoint).then(result=>{
            if (endpoint===API_PRODUCT_URL)
            {
                setProducts(result);
            }
            else if (endpoint===API_CUSTOMER_URL)
            {
                setCustomers(result);
            }
            else if (endpoint===API_STORE_URL)
            {
                setStores(result);
            }
          }).catch(error=>{                
            toast.error(error,{POSITION:toast.POSITION.TOP_RIGHT});
          }).finally(()=>{
            setLoading(false);
          })             
        };
        getList(API_PRODUCT_URL);
        getList(API_CUSTOMER_URL);
        getList(API_STORE_URL);
       

        axios(
            {
               url:`${SALE_API_URL}`,
               method:"GET"
            }
        ).then((response)=>{
            if(response.data.isSuccess)
            {
                setShowSales(response.data.result);
                toast.success(response.data.message);
            }
            else{
                toast.error(response.data.message);
            }
        });
    },[]);

    return(
        <>
         {loading ? (
            <p>Loading...</p>
            ) :(<SaleDashboard 
                sales={sales} 
                products={products} 
                customers={customers}
                stores={stores}>
                </SaleDashboard>)}
        {/* <ThemingLayout></ThemingLayout> */}
        
        
        <p>Welcome Sales Service page</p>
        </>
    )
}

export default SaleService;