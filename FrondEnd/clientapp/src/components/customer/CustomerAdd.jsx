import {Button, Form, Segment} from "semantic-ui-react";
import React, {useState} from "react";
import {toast} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const CustomerAdd=(props)=>
{
    const initialState=
    {
        title: "",
        movieLanguage: "",
        releaseYear: "",
        ott: ""
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
        if(!customer.title)
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
        <h1 style={{marginLeft:"15px"}}> Add Customer </h1>
        <Segment clearing style={{marginRight:"30px",marginTop:"30px",margingLeft:"10px"}}>
            <Form onSubmit={handleSubmit} autoComplete="off">
                <Form.Input placeholder="Title" value={customer.title} name="title" onChange={handleInputChange}></Form.Input>
                <Form.Input placeholder="Language" value={customer.movieLanguage} name="movieLanguage" onChange={handleInputChange}></Form.Input>
                <Form.Input placeholder="Year" value={customer.releaseYear} name="releaseYear" onChange={handleInputChange}></Form.Input>
                <Form.Input placeholder="OTT" value={customer.ott} name="ott" onChange={handleInputChange}></Form.Input>
                <Button floated="right" positive type="submit" content="Submit"/>
                <Button floated="right" type="button" content="Cancel" onClick={()=>props.closeForm()}></Button>
            </Form>
        </Segment>
        </>
    )
}

export default CustomerAdd;