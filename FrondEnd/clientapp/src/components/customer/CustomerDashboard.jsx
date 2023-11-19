import { Grid, Button, Container } from "semantic-ui-react";
import CustomerTable from "./CustomerTable";
import { useState } from "react";
import CustomerEdit from "./CustomerEdit";
import "react-toastify/dist/ReactToastify.css";
import Pagination from "../utility/Pagination";
import "../../customer.css";
import CustomerAdd from "./CustomerAdd";
import ConfirmationModal from '../utility/ConfirmationModal';

const CustomerDashboard=(props)=>{

    const [customer, setCustomer]=useState([]);
    const [showConfirmation, setShowConfirmation] = useState(false);
    const [showAddForm, setshowAddForm]=useState(false);
    const [showEditForm, setshowEditForm]=useState(false);

    /*Pagination*/
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage,setItemsPerPage] = useState(9); // Set the default items per page
    const indexOfLastItem = currentPage * itemsPerPage;
    
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentCustomersForPage =props.customers?props.customers.slice(indexOfFirstItem, indexOfLastItem):[];
    
    const handlePageChange = (pageNumber) => {
      setCurrentPage(pageNumber);
    };

    const handleItemsPerPageChange=(newItemsPerPage)=>
    {
        setItemsPerPage(newItemsPerPage);
        setCurrentPage(1);
    }
    //End    
    
    const handleConfirmDelete = () => {
        // Perform the delete operation
        // Close the confirmation modal
        setShowConfirmation(false);
        props.deleteCustomer(customer);
      };

      const handleCancelDelete = () => {
        // Close the confirmation modal
        setShowConfirmation(false);
      }

      const openDelete=(customer)=>
      {
          setCustomer(customer);
          setShowConfirmation(true);
      }

      const addForm=()=>
      {
          setshowAddForm(true);
          setshowEditForm(false);
      }
   
      const closeForm=()=>
      {
          setshowAddForm(false);
          setshowEditForm(false);
      }

      const editForm=(customer)=>
      {
          setshowAddForm(false);
          setshowEditForm(true);
          setCustomer(customer);
      }

    return(
        <>   
            <Grid>            
                <Grid.Column width="11">
                    <CustomerTable 
                        customers={props.customers} 
                        currentCustomersForPage={currentCustomersForPage} 
                        editForm={editForm} 
                        openDelete={openDelete}
                        addForm= {addForm}
                    >
                    </CustomerTable>
                </Grid.Column>
                
                <Grid.Column width="5">
                <Container style={{ padding: '1em 1em' }}></Container>
                {showAddForm && 
                    (<CustomerAdd 
                        closeForm={closeForm} 
                        createCustomer={props.createCustomer}
                    >
                    </CustomerAdd>)
                }

                {showEditForm && 
                (<CustomerEdit 
                    customer={customer} 
                    updateCustomer={props.updateCustomer} 
                    closeForm={closeForm}
                >                    
                </CustomerEdit>)}
                </Grid.Column>
                
            </Grid>   
           
            <Pagination
            itemsPerPage={itemsPerPage}
            currentPage={currentPage}
            totalItems={props.customers.length}
            onPageChange={handlePageChange}            
            onItemsPerPageChange={handleItemsPerPageChange}
            />

            <ConfirmationModal
            show={showConfirmation}
            onHide={handleCancelDelete}
            onConfirm={handleConfirmDelete}       
            title="Confirm Delete"
            message="Are you sure you want to delete this item?"
            customer={customer}/>            
        </>
    );
}
export default CustomerDashboard;