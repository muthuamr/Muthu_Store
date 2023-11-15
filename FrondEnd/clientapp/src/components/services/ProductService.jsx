import { useEffect, useState } from "react";
import {API_PRODUCT_URL} from '../../App';
import axios from "axios";
import ProductDashboard from "../product/ProductDashboard";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { fetchData } from "../utility/fetchDataAPI";

const ProductService=()=>
{
    const [products, setProducts]=useState([]);
    const [product, setProduct]=useState([]);
    const [loading, setLoading] = useState(true);
   
        useEffect(()=>{
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
            },[]);
       
    const createProduct=(product)=>
    {
        const data={
            productName:product.productName,
            productPrice: product.productPrice
        };

        axios({
            method:"post",
            url:`${API_PRODUCT_URL}/create`,
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
                console.log(`${API_PRODUCT_URL} failed`);
            }
        }).catch((error)=>
        {
            console.log(`${API_PRODUCT_URL} error: ${error}`);
        });
    }

    const updateProduct=(product)=>
    {
        axios({
            url:`${API_PRODUCT_URL}/${product.productId}`,
            method:'PUT',
            data:{
                productId:product.productId,
                productName:product.productName,
                productPrice:product.productPrice
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
                const toUpdateProducts= getUpdatedProducts(product);
                setProducts(toUpdateProducts);
                toast.success(response.data.message);
            }
        }).catch((error)=>
        {
            console.log(error);
        });
    }

    const getUpdatedProducts=(product)=>
        products.map((productItem)=>{
            if(productItem.productId===product.productId)
            {
                return { ...productItem,
                productId: product.productId,
                productName: product.productName,
                productPrice: product.productPrice};
            }
            return productItem;
        });

    const deleteProduct=(product)=>
    {
        axios.delete(`${API_PRODUCT_URL}/${product.productId}`).
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
             {loading ? (
                 <p>Loading...</p>
            ) :(
             <ProductDashboard 
             products={products} 
             product={product} 
             createProduct={createProduct}
             deleteProduct={deleteProduct}
             updateProduct={updateProduct}>
             </ProductDashboard>)}

             <ToastContainer position="top-right"></ToastContainer>
        </>
    )
}

export default ProductService;
  
   