import { useEffect, useState } from "react";
import {API_URL} from '../../App';

import axios from "axios";
import ProductDashboard from "../product/ProductDashboard";

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
        });
    },[])

    return(
        <>      
             <ProductDashboard products={products} product={product}></ProductDashboard>
        </>
    )
}

export default ProductService;