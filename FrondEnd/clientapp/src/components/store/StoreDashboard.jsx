import StoreAdd from "./StoreAdd";
import StoreTable from "./StoreTable";
import StoreEdit from "./StoreEdit";
import { useState } from "react";
import ConfirmationModal from "../utility/ConfirmationModal";
import Pagination from "../utility/Pagination";

const StoreDashboard=(props)=>
{
    const [showEditForm, setShowEditForm]=useState(false);
    const [showAddForm, setshowAddForm]=useState(false);
    const [store, setStore]=useState([]);
    const [showConfirmation, setShowConfirmation]=useState(false);

    const [currentPage,setCurrentPage]=useState(1);
    const [itemsPerPage,setItemsPerPage]=useState(10);

    const indexOfLastItem=currentPage*itemsPerPage;
    const indexofFirstItem=indexOfLastItem-itemsPerPage;
    const currentStoresforPage=props.stores?props.stores.slice(indexofFirstItem,indexOfLastItem):[];
    const handlePageChange=(pageNumber)=>
    {
        setCurrentPage(pageNumber);
    }

    const handleItemsPerPageChange=(newItemsPerPage)=>
    {
        setItemsPerPage(newItemsPerPage);
        setCurrentPage(1);
    }
    const handleCloseForm=()=>
    {
        setShowEditForm(false);
        setshowAddForm(false);
    }
    const handleCancelDelete=()=>
    {
        setShowConfirmation(false);
    }

    const handleConfirmDelete=()=>
    {
        props.deleteStore(store);
        setShowConfirmation(false);
    }

    const handleShowEditForm=(store)=>
    {
        setShowEditForm(true);
        setStore(store);
    }
    const handleOpenDelete=(store)=>
    {
        setStore(store);
        setShowConfirmation(true);
    }

    const handleShowAddForm=()=>
    {
        setshowAddForm(true);
    }

    return(
        <>        
        <StoreTable stores={currentStoresforPage} 
        handleShowEditForm={handleShowEditForm}
        handleOpenDelete={handleOpenDelete}
        handleShowAddForm={handleShowAddForm}>
        </StoreTable>

        <ConfirmationModal
                show={showConfirmation}
                onHide={handleCancelDelete}
                onConfirm={handleConfirmDelete}       
                title="Confirm Delete"
                message="Are you sure you want to delete this item?"
                product={props.product}/>

        {showAddForm && (<StoreAdd 
        handleCloseForm={handleCloseForm} 
        createStore={props.createStore}>            
        </StoreAdd>)}
        
        {showEditForm && (<StoreEdit store={store} 
        handleCloseForm={handleCloseForm} 
        updateStore={props.updateStore}
        deleteStore={props.deleteStore}>            
        </StoreEdit>)}

        <Pagination itemsPerPage={itemsPerPage}
            currentPage={currentPage}
            totalItems={props.stores.length}
            onPageChange={handlePageChange}
            onItemsPerPageChange={handleItemsPerPageChange}
            />          
        
        </>
    );
}
export default StoreDashboard;