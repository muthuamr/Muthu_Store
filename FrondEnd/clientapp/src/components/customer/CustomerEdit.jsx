import {Button, Form, Segment} from "semantic-ui-react";
import React, {useState} from "react";
import { useEffect } from "react";

const CustomerEdit=(props)=>
{
    const [customer, setCustomer]=useState(props.customer);

    //To update the customer value
    useEffect(() => {
        setCustomer(props.customer);
      }, [props.customer]);
    

    const handleSubmit=(event)=>
    {
        event.preventDefault();
        props.handleEditCustomer(customer);       
    }

    const handleInputChange=(event)=>
    {
        const {name, value}=event.target;
        setCustomer({...customer,[name]:value});
    }
    
return (
    <>
   <h1 style={{ marginLeft: "15px" }}>Edit Customer</h1>
      <Segment
        clearing
        style={{ marginRight: "30px", marginTop: "30px", marginLeft: "10px" }}
      >
        <Form onSubmit={handleSubmit} autoComplete="off">
            <Form.Input placeholder="Customer Name" value={customer.customerName} name="customerName" onChange={handleInputChange}></Form.Input>
            <Form.TextArea placeholder="Address" value={customer.customerAddress} name="customerAddress" onChange={handleInputChange}></Form.TextArea>
            <Button floated="right" positive type="submit" content="Submit"></Button>
            <Button floated="right" negative type="button" content="Cancel" onClick={()=>props.closeForm()}></Button>
        </Form>
    </Segment>
    
    </>
);
}
export default CustomerEdit;