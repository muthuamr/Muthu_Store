import { useEffect, useState } from "react";
import StoreDashboard from "../store/StoreDashboard";
import axios from "axios";
import { API_STORE_URL } from "../../App";
import { toast, ToastContainer } from "react-toastify";
import { fetchData } from "../utility/fetchDataAPI";

const StoreService=()=>
{
    const [stores,setStores]=useState([]);
    const [loading, setLoading]=useState(true);

    useEffect(()=>{
        const getStoreList=async ()=>{        
           await fetchData(API_STORE_URL).then((result)=>
            {
                setStores(result);
            }).catch((error)=>
            {
                toast.error(error.response);            
            }).finally(()=>
            {
                setLoading(false);
            });
        }
        getStoreList();
    },[]);

    const createStore=(store)=>
    {
        const data={
            storeName:store.storeName,
            storeAddress:store.storeAddress
        };

        axios(
            {
                method:"post",
                url:`${API_STORE_URL}/create`,
                data:data,
                config:{
                    headers:{
                        Accept:"application/json",
                        "Content-Type":"application/json"
                    }
                }
            }
        ).then((response)=>{
            if(response.data.isSuccess)
            {
                data.storeId=response.data.result.storeId;
                setStores([...stores,data]);
                toast.success(response.data.message);
            }
        }).catch((error)=>{
            console.log(error);
        })
    }
    const updateStore=(store)=>
    {
        const data={
            storeId:store.storeId,
            storeName:store.storeName,
            storeAddress:store.storeAddress
        }
        axios({
            url:`${API_STORE_URL}/${store.storeId}`,
            method:"PUT",
            data:data,
            config:{
                headers:{
                    Accept:"application/json",
                    "Content-Type":"application/json"
                }
            }
        }).then((response)=>{
            if(response.data.isSuccess)
            {
                const toUpdateStore=getUpdatedStores(data);
                setStores(toUpdateStore);
                toast.success(response.data.message);
            }
            else{
                toast.error(response.data.message);
            }
        }).catch((error)=>{
            toast.error(error.response.message)
        })
    }

    const getUpdatedStores=(store)=>
    stores.map((storeItem)=>
    {
        if(store.storeId===storeItem.storeId)
        {
            return {...storeItem, storeId:store.storeId,
                                    storeName:store.storeName,
                                    storeAddress:store.storeAddress};
        }
        return storeItem;
    });

    const deleteStore=(store)=>
    {
        const data={
            storeId:store.storeId
        }
        axios({
            url:`${API_STORE_URL}/${store.storeId}`,
            method:"DELETE"           
        }).then((response)=>{
            if(response.data.isSuccess)
            {
                setStores([...stores.filter((x)=>x.storeId!==store.storeId)]);
                toast.success(response.data.message);
            }
            else if(!response.data.isSuccess)
            {
                toast.error(response.data.message);
            }
            else{
                toast.error(response.data.message);
            }
        }).catch((error)=>
        {
            toast.error(error.response.data);
        });
    }

return(
    <>
    {loading?<p>Loading...</p>:(
        <StoreDashboard 
        stores={stores} 
        createStore={createStore} 
        updateStore={updateStore}
        deleteStore={deleteStore}>
        </StoreDashboard> 
        )}

        <ToastContainer position="top-right"></ToastContainer>
    </>
   
)
}
export default StoreService;