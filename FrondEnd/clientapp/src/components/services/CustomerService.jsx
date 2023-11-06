import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import CustomerDashboard from "../customer/CustomerDashboard";
import { useEffect, useState } from "react";
import ConfirmationModal from '../ConfirmationModal';

const CUSTOMER_API_BASE_URL="https://localhost:7119/api/customers";

const CustomerService=()=>
{
    const [customers, setCustomers]=useState([]);
    const [customer, setCustomer]=useState([]);
    const [showAddForm, setshowAddForm]=useState(false);
    const [showEditForm, setshowEditForm]=useState(false);
    const [showConfirmation, setShowConfirmation] = useState(false);
    
    useEffect(()=>{
        axios.get(CUSTOMER_API_BASE_URL).then((response)=>{
          if(response.data.isSuccess)
          {
              setCustomers(response.data.result);
          }
        });
    },[]);

    const createCustomer=(customer)=>
      {
        const data={
            customerName: customer.customerName,
            customerAddress: customer.customerAddress            
        };

        axios({
            method: "post",
            url: `${CUSTOMER_API_BASE_URL}/create`,
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


      const updateCustomer=(customer)=>
    {
        axios({
            method: "put",
            url: `${CUSTOMER_API_BASE_URL}/${customer.customerId}`,
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
        axios.delete(`${CUSTOMER_API_BASE_URL}/${customer.customerId}`).then(()=>{
            toast.success("Customer deleted successfully", {
                position:toast.POSITION.TOP_RIGHT
            });
        });

        setCustomers([...customers.filter((x)=>x.customerId!==customer.customerId)]);
    }

    const getupdatedCustomers =(customer)=> customers.map((customerItem) => {
        if (customerItem.customerId === customer.customerId) {                    
          return { ...customerItem, customerId: customer.customerId, 
            customerName:customer.customerName, 
            customerAddress:customer.customerAddress};                      
        }
        return customerItem;
      });
    
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

     
    // getCustomers()
    // {
    //     return axios.get(CUSTOMER_API_BASE_URL);
    // }

    // createCustomer(customer)
    // {
    //     return axios.post(CUSTOMER_API_BASE_URL, customer);
    // }

    // updateCustomer(customer)
    // {
    //     return axios.put(CUSTOMER_API_BASE_URL,customer);
    // }

    // deleteCustomer(customerId)
    // {
    //     return axios.delete(CUSTOMER_API_BASE_URL+"/"+customerId);
    // }    

    return(
        <>
        <CustomerDashboard 
            customers={customers}
            showAddForm={showAddForm}
            showEditForm={showEditForm}
            addForm={addForm}
            editForm={editForm}
            customer={customer}
            openDelete={openDelete}
            deleteCustomer={deleteCustomer}
            closeForm={closeForm}
            createCustomer={createCustomer}
            updateCustomer={updateCustomer}>
        </CustomerDashboard>

        <ConfirmationModal
            show={showConfirmation}
            onHide={handleCancelDelete}
            onConfirm={handleConfirmDelete}       
            title="Confirm Delete"
            message="Are you sure you want to delete this item?"
            customer={customer}/>

            <ToastContainer position="top-center"></ToastContainer>  
        </>

    );
}

export default CustomerService;

