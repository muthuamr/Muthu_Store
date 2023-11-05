import {Button, Form, Segment} from "semantic-ui-react";
import React, {useState} from "react";
import {toast} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const CustomerAdd=(props)=>
{
    const initialState=
    {
        customerName: "",
        customerAddress: ""        
    };

    const [customer, setCustomer]=useState(initialState);

    const handleInputChange=(event)=>
    {
        const {name, value}=event.target;
        setCustomer({...customer,[name]:value});
    }

    const handleSubmit=(event)=>
    {
        event.preventDefault();
        if(!customer.customerName)
        {
            toast.error("Please fill in the details!", {
                position:toast.POSITION.TOP_RIGHT
            });
            return;
        }
        props.handleSubmit(customer);
        setCustomer(initialState);
    }

    return (
        <>
        <h1 style={{marginLeft:"30px"}}> Add Customer </h1>
        <Segment clearing style={{marginRight:"30px",marginTop:"30px",margingLeft:"10px"}}>
            <Form onSubmit={handleSubmit} autoComplete="off">
                <Form.Input placeholder="Customer Name" value={customer.customerName} name="customerName" onChange={handleInputChange}></Form.Input>
                <Form.TextArea placeholder="Address" value={customer.customerAddress} name="customerAddress" onChange={handleInputChange}></Form.TextArea>
                <Button floated="right" positive type="submit" content="Submit"/>
                <Button floated="right" type="button" content="Cancel" onClick={()=>props.closeForm()}></Button>
            </Form>
        </Segment>
        </>
    )
}

export default CustomerAdd;