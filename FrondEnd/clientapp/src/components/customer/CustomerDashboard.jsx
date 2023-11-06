import { Grid, Button } from "semantic-ui-react";
import CustomerTable from "./CustomerTable";
import { useEffect, useState } from "react";
import CustomerEdit from "./CustomerEdit";
import "react-toastify/dist/ReactToastify.css";
import Pagination from "../Pagination";
import "../../customer.css";
import CustomerAdd from "./CustomerAdd";

const CUSTOMER_API_BASE_URL="https://localhost:7119/api/customers";

const CustomerDashboard=(props)=>{

    /*Pagination*/
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10; // Set your items per page
  
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentCustomer = props.customers.slice(indexOfFirstItem, indexOfLastItem);
  
    const handlePageChange = (pageNumber) => {
      setCurrentPage(pageNumber);
    };
    //End    
    
    return(
        <>   
              <div style={{marginLeft:"30px"}}>
             <Button positive content="Add Customer" onClick={()=>props.addForm()} />             
             </div>
             <br></br>
            <Grid>            
                <Grid.Column width="10">
                    <CustomerTable customers={props.customers} currentCustomer={currentCustomer} editForm={props.editForm} deleteCustomer={props.deleteCustomer} openDelete={props.openDelete}></CustomerTable>
                </Grid.Column>
                <Grid.Column width="5">
                {props.showAddForm && (<CustomerAdd closeForm={props.closeForm} createCustomer={props.createCustomer}></CustomerAdd>)}
                {props.showEditForm && (<CustomerEdit customer={props.customer} updateCustomer={props.updateCustomer} closeForm={props.closeForm}></CustomerEdit> )}
                </Grid.Column>
            </Grid>   
           
            <Pagination
            currentPage={currentPage}
            totalPages={Math.ceil(props.customers.length / itemsPerPage)}
            onPageChange={handlePageChange}            
            />
            
        </>
    );
}
export default CustomerDashboard;