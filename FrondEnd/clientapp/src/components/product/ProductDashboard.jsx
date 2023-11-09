import { useState } from "react";
import ConfirmationModal from "../ConfirmationModal";
import ProductTable from "./ProductTable";
import { ToastContainer, toast } from "react-toastify";
import ProductAdd from "./ProductAdd";

const ProductDashboard=(props)=>
{
    const [showConfirmation, setShowConfirmation]=useState(false);
    const [showAddForm,setshowAddForm]=useState(false);
   
    const handleCloseAddForm=()=>{setshowAddForm(false);}

    const handleCancelDelete=()=>
    {
        setShowConfirmation(false);
    }

    const handleConfirmDelete=()=>
    {
        setShowConfirmation(false);
        toastMessage("success","Deleted successfully");
    }

    const handleOpenDelete=()=>
    {
        setShowConfirmation(true);
    }

    const toastMessage=(messageType,message)=>
    {
        if(messageType=="success")
        {
            toast.success(message,{position:toast.POSITION.TOP_RIGHT});
        }
        else if(messageType=="fail")
        {
            toast.error(message,{position:toast.POSITION.TOP_RIGHT});
        }
    }
    const handleShowAddForm=()=>
    {
        setshowAddForm(true);
    }
    return(
        <>
             <ProductTable products={props.products} handleOpenDelete={handleOpenDelete} handleShowAddForm={handleShowAddForm}></ProductTable>
             {showAddForm && <ProductAdd toastMessage={toastMessage} handleCloseAddForm={handleCloseAddForm}></ProductAdd>}

             <ConfirmationModal
                show={showConfirmation}
                onHide={handleCancelDelete}
                onConfirm={handleConfirmDelete}       
                title="Confirm Delete"
                message="Are you sure you want to delete this item?"
                product={props.product}/>

                <ToastContainer position="top-centere"></ToastContainer>
        </>
    )
}

export default ProductDashboard;