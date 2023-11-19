import { useEffect, useState } from "react";
import SaleDashboard from "../sale/SaleDashboard";
import axios from "axios";
import {API_PRODUCT_URL, API_CUSTOMER_URL,API_STORE_URL,API_SALES_URL} from '../../App';
import { toast, ToastContainer } from "react-toastify";
import { fetchData } from "../utility/fetchDataAPI";

const SaleService=()=>
{
    const [sales, setSales]=useState([]);
    const [loading, setLoading]=useState(true);
    const [products, setProducts]=useState([]);
    const [customers, setCustomers]=useState([]);
    const [stores, setStores]=useState([]);
    
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
            else if (endpoint===API_SALES_URL)
            {
                setSales(result);
            }
          }).catch(error=>{                
            toast.error(error,{POSITION:toast.POSITION.TOP_RIGHT});
          }).finally(()=>{
            setLoading(false);
          })             
    }
    useEffect(()=>
    {
        getList(API_PRODUCT_URL);
        getList(API_CUSTOMER_URL);
        getList(API_STORE_URL); 
        getList(API_SALES_URL);
        
    },[]);

    const createSale=(sale)=>
    {
        const data={
            productId:sale.productId,
            storeId: sale.storeId,
            customerId:sale.customerId
        };

        axios({
            method:"post",
            url:`${API_SALES_URL}/create`,
            data:data,
            config:{
                headers:{
                    Accept:"application/json",
                    "Content-Type":"application/json"
                }
            }
        }).then((response)=>{
            if (response.data.isSuccess)
            {
                console.log(response);
                getList(API_SALES_URL);
                toast.success(response.data.message,{POSITION:toast.POSITION.TOP_RIGHT});
            }
            else
            {
                console.log(`${API_SALES_URL} failed`);
            }
        }).catch((error)=>
        {
            console.log(`${API_SALES_URL} error: ${error}`);
        });
    }

    const updateSale=(sale)=>
    {
        axios({
            url:`${API_SALES_URL}/${sale.salesId}`,
            method:'PUT',
            data:{
                salesId:sale.salesId,
                productId:sale.productId,
                storeId:sale.storeId,
                customerId:sale.customerId
            },
            config:{
                headers:{
                    Accept:"application/json",
                    "Content-Type":"application/json",
                }
            }
        }).then((response)=>{
            if(response.data.isSuccess)
            {
                toast.success(response.data.message);
                getList(API_SALES_URL);
            }
        }).catch((error)=>
        {
            console.log(error);
        });
    }

    const deleteSale=(sale)=>
    {
        axios.delete(`${API_SALES_URL}/${sale.salesId}`).
        then((response)=>
        {
           if(response.data.isSuccess)
           {
            setSales([...sales.filter((x=>x.salesId!==sale.salesId))]);
            toast.success(response.data.message,{POSITION:toast.POSITION.TOP_RIGHT});
           }
           else
           {
            toast.error(response.data.message,{POSITION:toast.POSITION.TOP_RIGHT});
           }
        }).catch((error)=>
        {
            toast.error(error.response.message,{POSITION:toast.POSITION.TOP_RIGHT});
        }); 
        
       
    }

    return(
        <>
         {loading ? (
            <p>Loading...</p>
            ) :(<SaleDashboard 
                sales={sales} 
                products={products} 
                customers={customers}
                stores={stores}
                createSale={createSale}
                updateSale={updateSale}
                deleteSale={deleteSale}
                >
                </SaleDashboard>)}
                <ToastContainer position="top-right"></ToastContainer>
        </>
    )
}

export default SaleService;