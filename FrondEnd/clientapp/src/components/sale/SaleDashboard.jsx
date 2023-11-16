import SaleAdd from "./SaleAdd";
import SaleEdit from "./SaleEdit";
import SaleTable from "./SaleTable";
import ConfirmationModal from "../ConfirmationModal";
import { useState } from "react";

const SaleDashboard=(props)=>
{
    const [showConfirmation, setShowConfirmation]=useState(false);

    
    const handleCancelDelete=()=>
    {

    }
    const handleConfirmDelete=()=>
    {

    }
    const handleOpenDelete=()=>
    {
        setShowConfirmation(true);
    }



    return(
        <>
        Welcome Sales Dashboard page

        <ConfirmationModal
                show={showConfirmation}
                onHide={handleCancelDelete}
                onConfirm={handleConfirmDelete}       
                title="Confirm Delete"
                message="Are you sure you want to delete this item?"
                product={props.sale}/>

        <SaleAdd 
        products={props.products} 
        customers={props.customers}
        stores={props.stores} ></SaleAdd>
        <SaleEdit></SaleEdit>
        <SaleTable
        handleOpenDelete={handleOpenDelete}
        sales={props.sales}     
        ></SaleTable>
        </>
    )
}
export default SaleDashboard;