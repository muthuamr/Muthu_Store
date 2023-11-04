import { Fragment } from "react";
import {Table,Button} from "semantic-ui-react";
import "../../index.css";
import ModalConfirmation from "../ConfirmationModal";

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
                    <Table.HeaderCell>Title</Table.HeaderCell>
                    <Table.HeaderCell>Language</Table.HeaderCell>
                    <Table.HeaderCell>Year</Table.HeaderCell>
                    <Table.HeaderCell>OTT</Table.HeaderCell>
                    <Table.HeaderCell>Actions</Table.HeaderCell>
                </Table.Row>
            </Table.Header>
            <Table.Body>
                {props.currentCustomer.map((customer)=>(               
                <Table.Row key={customer.id}>
                <Table.Cell>{customer.title}</Table.Cell>
                <Table.Cell>{customer.movieLanguage}</Table.Cell>
                <Table.Cell>{customer.releaseYear}</Table.Cell>
                <Table.Cell>{customer.ott}</Table.Cell>
                <Table.Cell>
                    <Button positive onClick={()=>props.editForm(customer)}>Edit</Button>
                    <Button negative onClick={()=>props.openDelete(customer)}>Delete</Button>

                    {/* <Button onClick={() => {
                        const confirmBox = window.confirm(
                        "Do you really want to delete this Crumb?"
                        )
                        if (confirmBox === true) {
                            props.deleteCustomer(customer.id);
                        }
                    }}>Delete</Button>           */}

                        {/* <Button onClick={() => {
                            <ModalConfirmation></ModalConfirmation>
                        const confirmBox = window.confirm(
                        "Do you really want to delete this Crumb?"
                        )
                        if (confirmBox === true) {
                            props.deleteCustomer(customer.id);
                        }
                    }}>Delete</Button> */}

                </Table.Cell>
                </Table.Row>
                 ))}
            </Table.Body>
        </Table>
    </Fragment>
    );

}
export default CustomerTable;