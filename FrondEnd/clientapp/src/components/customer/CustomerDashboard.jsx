import { Grid, Button } from "semantic-ui-react";
import CustomerTable from "./CustomerTable";
import { useEffect, useState } from "react";
import axios from "axios";
import CustomerEdit from "./CustomerEdit";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ConfirmationModal from '../ConfirmationModal';
import Pagination from "../Pagination";
import "../../customer.css";
import CustomerAdd from "./CustomerAdd";
import {v4 as uuid} from "uuid";


const CustomerDashboard=()=>{
    const [customers, setCustomers]=useState([]);
    const [customer, setCustomer]=useState([]);
    const [showAddForm, setshowAddForm]=useState(false);
    const [showEditForm, setshowEditForm]=useState(false);
    const [showConfirmation, setShowConfirmation] = useState(false);

    /*Pagination*/
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10; // Set your items per page
    //const data = Array.from({ length: 100 }, (_, index) => `Item ${index + 1}`);
  
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentCustomer = customers.slice(indexOfFirstItem, indexOfLastItem);
  
    const handlePageChange = (pageNumber) => {
      setCurrentPage(pageNumber);
    };
    //End
    
    useEffect(()=>{
        axios.get("https://localhost:7119/api/customers").then((response)=>{
          if(response.data.isSuccess)
          {
              setCustomers(response.data.result);
          }
        });
    },[]);

   const editForm=(customer)=>
    {
        setCustomer("");
        setshowAddForm(false);
        setshowEditForm(true);
        setCustomer(customer);
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
        setCustomer("");
    }

    const getupdatedCustomers =(customer)=> customers.map((customerItem) => {
      if (customerItem.customerId === customer.customerId) {                    
        return { ...customerItem, customerId: customer.customerId, 
          customerName:customer.customerName, 
          customerAddress:customer.customerAddress};                      
      }
      return customerItem;
    });

    const handleEditCustomer=(customer)=>
    {
        axios({
            method: "put",
            url: `https://localhost:7119/api/customers/${customer.customerId}`,
            data: {
              customerId: customer.customerId,
              customerName: customer.customerName,
              customerAddress: customer.customerAddress
            },
            config: {
              headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
              },
            },
          })
            .then((response) => {             
                
               const updatedCustomers= getupdatedCustomers(customer)
               setCustomers(updatedCustomers);                

              console.log(response);
              toast.success("Customer updated successfully", {
                position: toast.POSITION.TOP_RIGHT,
              });
            })
            .catch((error) => {
              console.log("the error has occured: " + error);
            });
        
    }

    const deleteCustomer=()=>
    {
        setCustomer("");
        axios.delete(`https://localhost:7119/api/customers/${customer.customerId}`).then(()=>{
            toast.success("Customer deleted successfully", {
                position:toast.POSITION.TOP_RIGHT
            });
        });

        setCustomers([...customers.filter((x)=>x.customerId!==customer.customerId)]);
    }

    const openDelete=(customer)=>
    {
        setCustomer(customer);
        setShowConfirmation(true);
    }

      const handleConfirmDelete = () => {
        // Perform the delete operation
        // Close the confirmation modal
        setShowConfirmation(false);
        deleteCustomer();
      };
    
      const handleCancelDelete = () => {
        // Close the confirmation modal
        setShowConfirmation(false);
      };

      const handleSubmit=(customer)=>
      {
        const data={
            customerName: customer.customerName,
            customerAddress: customer.customerAddress            
        };

        axios({
            method: "post",
            url: "https://localhost:7119/api/customers/create",
            data: data,
            config:{
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json"                
                }
            }
        }).then((response)=>{
            if(response.data.isSuccess)
            {
              console.log(response);
              data.customerId=response.data.result.customerId;
              setCustomers([...customers,data]);
              toast.success("Customer added successfully",{
                  position:toast.POSITION.TOP_RIGHT
              });
          }
          else
          {
            console.log("The API failed"+response);
          }
         
        }).catch((error)=>{
            console.log("The error has occured: "+error);
        });
        
      }
    return(
        <>   
              <div style={{marginLeft:"30px"}}>
             <Button positive content="Add Customer" onClick={()=>addForm()} />
             
             </div>
             <br></br>
            <Grid>            
                <Grid.Column width="10">
                    <CustomerTable customers={customers} currentCustomer={currentCustomer} editForm={editForm} deleteCustomer={deleteCustomer} openDelete={openDelete}></CustomerTable>
                </Grid.Column>
                <Grid.Column width="6">
                {showAddForm && (<CustomerAdd closeForm={closeForm} handleSubmit={handleSubmit}></CustomerAdd>)}
                {showEditForm && (<CustomerEdit customer={customer} handleEditCustomer={handleEditCustomer} closeForm={closeForm}></CustomerEdit> )}
                </Grid.Column>
            </Grid>   
            <ToastContainer position="top-center"></ToastContainer>    
           
            <ConfirmationModal
            show={showConfirmation}
            onHide={handleCancelDelete}
            onConfirm={handleConfirmDelete}       
            title="Confirm Delete"
            message="Are you sure you want to delete this item?"
            customer={customer}/>
            <br></br>

            <Pagination
            currentPage={currentPage}
            totalPages={Math.ceil(customers.length / itemsPerPage)}
            onPageChange={handlePageChange}
      />
        </>
    );
}
export default CustomerDashboard;