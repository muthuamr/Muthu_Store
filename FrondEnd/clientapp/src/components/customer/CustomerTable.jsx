import { Fragment } from "react";
import {Table,Button} from "semantic-ui-react";
import "../../index.css";


const CustomerTable=(props)=>{
    return(
       <>
        <h1 style={{marginLeft:"30px"}}>Customers List</h1>
        <div className="grid-layout">
        <Table celled style={{
         
         
        }} 
      >
            <Table.Header>
                <Table.Row>
                    <Table.HeaderCell style={{ width: '220px' }}>Customer Name</Table.HeaderCell>
                    <Table.HeaderCell style={{ width: '450px' }}>Address</Table.HeaderCell>                    
                    <Table.HeaderCell>Actions</Table.HeaderCell>
                </Table.Row>
            </Table.Header>
           
            <Table.Body>
                {props.currentCustomer.map((customer)=>(               
                <Table.Row key={customer.customerId}>
                <Table.Cell>{customer.customerName}</Table.Cell>
                <Table.Cell>{customer.customerAddress}</Table.Cell>
                <Table.Cell>
                    <Button positive onClick={()=>props.editForm(customer)}>Edit</Button>
                    <Button negative onClick={()=>props.openDelete(customer)}>Delete</Button>                  
                </Table.Cell>
                </Table.Row>
                 ))}
            </Table.Body>
           
        </Table>     
       
       
  
    </div>
    </>
    );

}
export default CustomerTable;