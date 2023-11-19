import { useState } from "react";
import ConfirmationModal from "../utility/ConfirmationModal";
import ProductTable from "./ProductTable";
import ProductAdd from "./ProductAdd";
import ProductEdit from "./ProductEdit";
import Pagination from "../utility/Pagination";

const ProductDashboard=(props)=>
{
    const [showConfirmation, setShowConfirmation]=useState(false);
    const [showAddForm,setshowAddForm]=useState(false);
    const [showEditForm, setShowEditForm]=useState(false);
    const [product, setProduct]=useState([]);
   
    //Pagination
    const [currentPage,setCurrentPage]=useState(1);
    const [itemsPerPage, setItemsPerPage]=useState(10);

    const indexOfLastItem=currentPage*itemsPerPage;
    const indexofFirstItem=indexOfLastItem-itemsPerPage;
    const currentProductsForPage=props.products?props.products.slice(indexofFirstItem, indexOfLastItem):[];

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

    const handleCloseForm=()=>{
        setshowAddForm(false);
        setShowEditForm(false);
    }

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

    const handleShowEditForm=(product)=>
    {
        setShowEditForm(true);
        setProduct(product);
    }

    const handleShowAddForm=()=>
    {
        setshowAddForm(true);
    }
    return(
        <>
             <ProductTable products={currentProductsForPage} handleOpenDelete={handleOpenDelete} handleShowAddForm={handleShowAddForm} handleShowEditForm={handleShowEditForm}></ProductTable>
             {showAddForm && <ProductAdd handleCloseForm={handleCloseForm} createProduct={props.createProduct}></ProductAdd>}
             {showEditForm && <ProductEdit handleCloseForm={handleCloseForm} product={product} updateProduct={props.updateProduct}> </ProductEdit>}
            
             <ConfirmationModal
                show={showConfirmation}
                onHide={handleCancelDelete}
                onConfirm={handleConfirmDelete}       
                title="Confirm Delete"
                message="Are you sure you want to delete this item?"
                product={props.product}/>

            <Pagination itemsPerPage={itemsPerPage}
            currentPage={currentPage}
            totalItems={props.products.length}
            onPageChange={handlePageChange}
            onItemsPerPageChange={handleItemsPerPageChange}
            />          
        </>
    )
}

export default ProductDashboard;