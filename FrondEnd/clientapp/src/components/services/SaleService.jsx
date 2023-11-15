import { useEffect, useState } from "react";
import SaleDashboard from "../sale/SaleDashboard";
import axios from "axios";
import { API_URL } from "../../App";
import {API_PRODUCT_URL} from '../../App';
import { toast, ToastContainer } from "react-toastify";
import ThemingLayout from "../sale/ThemingLayout";
import { fetchData } from "../utility/fetchDataAPI";

const SaleService=()=>
{
    const SALE_API_URL=`${API_URL}/sale`;
    const [sales, setShowSales]=useState([]);
    const [loading, setLoading]=useState(true);
    const [products, setProducts]=useState([]);
    
    useEffect(()=>
    {
        const getProductList=async ()=>
        {
          await fetchData(API_PRODUCT_URL).then(result=>{
            setProducts(result);
          }).catch(error=>{                
            toast.error(error,{POSITION:toast.POSITION.TOP_RIGHT});
          }).finally(()=>{
            setLoading(false);
          })             
        };
        getProductList();

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
        {/* <ThemingLayout></ThemingLayout> */}
        <SaleDashboard sales={sales} products={products}></SaleDashboard>
        <p>Welcome Sales Service page</p>
        </>
    )
}

export default SaleService;