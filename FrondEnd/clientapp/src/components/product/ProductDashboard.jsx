import { useState } from "react";
import ConfirmationModal from "../ConfirmationModal";
import ProductTable from "./ProductTable";
import ProductAdd from "./ProductAdd";

const ProductDashboard=(props)=>
{
    const [showConfirmation, setShowConfirmation]=useState(false);
    const [showAddForm,setshowAddForm]=useState(false);
    const [product, setProduct]=useState([]);
   
    const handleCloseAddForm=()=>{setshowAddForm(false);}

    const handleCancelDelete=()=>
    {
        setShowConfirmation(false);
    }

    const handleConfirmDelete=()=>
    {
        props.deleteProduct(product);
        setShowConfirmation(false);
    }

    const handleOpenDelete=(product)=>
    {
        setProduct(product);
        setShowConfirmation(true);
    }

    
    const handleShowAddForm=()=>
    {
        setshowAddForm(true);
    }
    return(
        <>
             <ProductTable products={props.products} handleOpenDelete={handleOpenDelete} handleShowAddForm={handleShowAddForm}></ProductTable>
             {showAddForm && <ProductAdd handleCloseAddForm={handleCloseAddForm} createProduct={props.createProduct}></ProductAdd>}

             <ConfirmationModal
                show={showConfirmation}
                onHide={handleCancelDelete}
                onConfirm={handleConfirmDelete}       
                title="Confirm Delete"
                message="Are you sure you want to delete this item?"
                product={props.product}/>
        </>
    )
}

export default ProductDashboard;