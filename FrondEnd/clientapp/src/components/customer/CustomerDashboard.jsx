import { Grid, Button } from "semantic-ui-react";
import CustomerTable from "./CustomerTable";
import { useState } from "react";
import CustomerEdit from "./CustomerEdit";
import "react-toastify/dist/ReactToastify.css";
import Pagination from "../Pagination";
import "../../customer.css";
import CustomerAdd from "./CustomerAdd";

const CustomerDashboard=(props)=>{

    /*Pagination*/
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage,setItemsPerPage] = useState(10); // Set the default items per page
  
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentCustomersForPage =props.customer?props.customers.slice(indexOfFirstItem, indexOfLastItem):[];
  
    const handlePageChange = (pageNumber) => {
      setCurrentPage(pageNumber);
    };

    const handleItemsPerPageChange=(newItemsPerPage)=>
    {
        setItemsPerPage(newItemsPerPage);
        setCurrentPage(1);
    }
    //End    
    
    return(
        <>   
            <div style={{marginLeft:"30px"}}>
             <Button positive content="Add Customer" onClick={()=>props.addForm()} />             
             </div>
             <br></br>
            <Grid>            
                <Grid.Column width="10">
                    <CustomerTable customers={props.customers} currentCustomersForPage={currentCustomersForPage} editForm={props.editForm} deleteCustomer={props.deleteCustomer} openDelete={props.openDelete}></CustomerTable>
                </Grid.Column>
                <Grid.Column width="5">
                {props.showAddForm && (<CustomerAdd closeForm={props.closeForm} createCustomer={props.createCustomer}></CustomerAdd>)}
                {props.showEditForm && (<CustomerEdit customer={props.customer} updateCustomer={props.updateCustomer} closeForm={props.closeForm}></CustomerEdit> )}
                </Grid.Column>
            </Grid>   
           
            <Pagination
            itemsPerPage={itemsPerPage}
            currentPage={currentPage}
            totalItems={props.customers.length}
            onPageChange={handlePageChange}            
            onItemsPerPageChange={handleItemsPerPageChange}
            />
            
        </>
    );
}
export default CustomerDashboard;