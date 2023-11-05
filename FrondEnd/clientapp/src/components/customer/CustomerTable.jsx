import { Fragment } from "react";
import {Table,Button} from "semantic-ui-react";
import "../../index.css";

const CustomerTable=(props)=>{

    return(
    <Fragment>
        <h1 style={{marginLeft:"30px"}}>Customers List</h1>
        <Table celled style={{
          marginLeft: "30px",
          marginTop: "30px",
          width: "1100px",
          border: "1px solid black",
        }}
      >
            <Table.Header>
                <Table.Row>
                    <Table.HeaderCell>Customer Name</Table.HeaderCell>
                    <Table.HeaderCell>Address</Table.HeaderCell>                    
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
    </Fragment>
    );

}
export default CustomerTable;