import SaleAdd from "./SaleAdd";
import SaleEdit from "./SaleEdit";
import SaleTable from "./SaleTable";
import ConfirmationModal from "../ConfirmationModal";
import { useState } from "react";
import Pagination from "../Pagination";

const SaleDashboard=(props)=>
{
    const [showConfirmation, setShowConfirmation]=useState(false);
    const [showAddForm,setshowAddForm]=useState(false);
    const [showEditForm, setShowEditForm]=useState(false);
    const [sale, setSale]=useState([]);

    //Pagination
    const [currentPage,setCurrentPage]=useState(1);
    const [itemsPerPage, setItemsPerPage]=useState(10);

    const indexOfLastItem=currentPage*itemsPerPage;
    const indexofFirstItem=indexOfLastItem-itemsPerPage;
    const currentSalesForPage=props.sales?props.sales.slice(indexofFirstItem, indexOfLastItem):[];

    const handlePageChange=(pageNumber)=>
    {
        setCurrentPage(pageNumber);
    }

    const handleItemsPerPageChange=(newItemsPerPage)=>
    {
        setItemsPerPage(newItemsPerPage);
        setCurrentPage(1);
    }
    //Pagination end

    const handleCancelDelete=()=>
    {
        setShowConfirmation(false);
    }
    const handleConfirmDelete=()=>
    {
        props.deleteSale(sale);
        setShowConfirmation(false);
    }
    const handleOpenDelete=(sale)=>
    {
        setShowConfirmation(true);
        setSale(sale);
    }
    const handleShowAddForm=()=>
    {
        setshowAddForm(true);
    }
    const handleCloseForm=()=>
    {
        setshowAddForm(false);
        setShowEditForm(false);
    }
    const handleShowEditForm=(sale)=>
    {
        setShowEditForm(true);
        setSale(sale);
    }

    return(
        <>
        <ConfirmationModal
        show={showConfirmation}
        onHide={handleCancelDelete}
        onConfirm={handleConfirmDelete}       
        title="Confirm Delete"
        message="Are you sure you want to delete this item?"
        product={props.sale}/>

       {showAddForm && <SaleAdd 
        products={props.products} 
        customers={props.customers}
        stores={props.stores}
        createSale={props.createSale}
        handleCloseForm={handleCloseForm} >            
        </SaleAdd>
        }

        {showEditForm &&
            <SaleEdit 
            products={props.products} 
            customers={props.customers}
            stores={props.stores}
            updateSale={props.updateSale}
            sale={sale}
            handleCloseForm={handleCloseForm}            
            ></SaleEdit>
        }
        <SaleTable
        handleOpenDelete={handleOpenDelete}
        sales={currentSalesForPage}
        handleShowAddForm={handleShowAddForm}
        handleShowEditForm={handleShowEditForm}     
        ></SaleTable>

        <Pagination itemsPerPage={itemsPerPage}
        currentPage={currentPage}
        totalItems={props.sales.length}
        onPageChange={handlePageChange}
        onItemsPerPageChange={handleItemsPerPageChange}
        />          
        </>
        
    )
}
export default SaleDashboard;