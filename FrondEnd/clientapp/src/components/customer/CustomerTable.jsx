import { Fragment } from "react";
import {Table,Button, Card, Image,Grid,Container} from "semantic-ui-react";
import "../../index.css";

const CustomerTable=(props)=>{
    return(
       <>
       <Button style={{marginLeft:"30px"}} positive content="Add Customer" onClick={()=>props.addForm()} />  
       <h1 style={{marginLeft:"30px"}}>Customers List</h1>
         <div className="grid-layout">
         <Container style={{ padding: '1em 1em' }}>
            <Card.Group>
            {props.currentCustomersForPage.map((customer)=>(  
                <Card key={customer.customerId}>
                <Card.Content>
                    <Image
                    floated='right'
                    size='mini'
                    src='https://react.semantic-ui.com/images/avatar/large/steve.jpg'
                    />
                    <Card.Header>{customer.customerName}</Card.Header>
                    <Card.Meta></Card.Meta>
                    <Card.Description>
                    Address:<br></br> <strong>{customer.customerAddress}</strong>
                    </Card.Description>
                </Card.Content>
                <Card.Content extra>
                    <div className='ui two buttons'>
                    {/* <Button basic color='green' onClick={()=>props.editForm(customer)}>
                        Edit
                    </Button> */}
                    {/* <Button basic color='red' onClick={()=>props.openDelete(customer)}>
                        Delete
                    </Button> */}
                   <button className="btn btn-primary btn-sm m-1">
                    <i
                        className="bi bi-pencil-square"
                        onClick={() => props.editForm(customer)}
                        style={{ fontSize: "1.3rem" }}
                    ></i>
                    </button>
                    <button className="btn btn-danger btn-sm m-1">
                    <i
                        className="bi bi-trash-fill"
                        onClick={() => props.openDelete(customer)}
                        style={{ fontSize: "1.3rem" }}
                    ></i>
                    </button>
                    </div>
                </Card.Content>
                </Card>
            
            ))}
             
            </Card.Group>
            </Container>
        </div>
    </>
    );

}
export default CustomerTable;