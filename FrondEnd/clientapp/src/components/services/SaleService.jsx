import { useEffect, useState } from "react";
import SaleDashboard from "../sale/SaleDashboard";
import axios from "axios";
import { API_URL } from "../../App";
import { toast, ToastContainer } from "react-toastify";
import ThemingLayout from "../sale/ThemingLayout";

const SaleService=()=>
{
    const SALE_API_URL=`${API_URL}/sale`;
    const [sales, setShowSales]=useState([]);

    useEffect(()=>
    {
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
        <ThemingLayout></ThemingLayout>
        <SaleDashboard sales={sales}></SaleDashboard>
        <p>Welcome Sales Service page</p>
        </>
    )
}

export default SaleService;