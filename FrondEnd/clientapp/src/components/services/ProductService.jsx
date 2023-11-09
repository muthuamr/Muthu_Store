import { useEffect, useState } from "react";
import {API_URL} from '../../App';
import axios from "axios";
import ProductDashboard from "../product/ProductDashboard";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ProductService=()=>
{
    const [products, setProducts]=useState([]);
    const [product, setProduct]=useState([]);
    const PRODUCT_API_URL=`${API_URL}/products`;
   

    useEffect(()=>{

        axios.get(PRODUCT_API_URL).then((response)=>{
            if(response.data.isSuccess)
            {
                setProducts(response.data.result);
            }
            else{
                console.log(PRODUCT_API_URL+"failed");
            }
        }).catch((error)=>{
            if(error.response && error.response.status===404)
            {
                toast.error(error.response.message,{POSITION:toast.POSITION.TOP_RIGHT});
            }
            else
            {
                toast.error(error.response.message,{POSITION:toast.POSITION.TOP_RIGHT});
            }
        });
    },[])

    const createProduct=(product)=>
    {
        const data={
            productName:product.productName,
            productPrice: product.productPrice
        };

        axios({
            method:"post",
            url:`${PRODUCT_API_URL}/create`,
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
                data.productId=response.data.result.productId;
                setProducts([...products,data]);
                toast.success(response.data.message,{POSITION:toast.POSITION.TOP_RIGHT});
            }
            else
            {
                console.log(`${PRODUCT_API_URL} failed`);
            }
        }).catch((error)=>
        {
            console.log(`${PRODUCT_API_URL} error: ${error}`);
        });
    }

    const deleteProduct=(product)=>
    {
        axios.delete(`${PRODUCT_API_URL}/${product.productId}`).
        then((response)=>
        {
           if(response.data.isSuccess)
           {
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
        
        setProducts([...products.filter((x=>x.productId!==product.productId))]);
    }

    return(
        <>      
             <ProductDashboard 
             products={products} 
             product={product} 
             createProduct={createProduct}
             deleteProduct={deleteProduct}>
             </ProductDashboard>

             <ToastContainer position="top-right"></ToastContainer>
        </>
    )
}

export default ProductService;