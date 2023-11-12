import { useState } from "react";
import { Modal,Form, Button } from "react-bootstrap";
import { toast } from 'react-toastify';

const StoreAdd=(props)=>
{
    const initialState={
        storeName:"",
        storeAddress:""
    }

    const [store, setStore]=useState(initialState);

    const handleChange=(event)=>
    {
        const {name,value}=event.target;
        setStore({...store,[name]:value});
    }

    const handleSubmit=(event)=>
    {    
        event.preventDefault();
        if(!store.storeName)
        {
            toast.error("Store Name is required");
            return;
        }
        props.createStore(store);
        setStore(initialState);
    }

    return (
        <Modal show={true} onHide={props.handleCloseForm} backdrop="static">
            <Modal.Header closeButton>
                <Modal.Title>Add Store</Modal.Title>
            </Modal.Header>
        <Modal.Body>
            <Form>
                <Form.Group style={{margin:"10px"}}>
                    <Form.Label>Store Name:</Form.Label>
                    <Form.Control type="text" name="storeName" onChange={handleChange} value={store.storeName} maxLength={90}></Form.Control>
                </Form.Group>
                <Form.Group style={{margin:"10px"}}>
                    <Form.Label>Address:</Form.Label>
                    <Form.Control as="textarea" name="storeAddress" onChange={handleChange} value={store.storeAddress} maxLength={160}></Form.Control>
                </Form.Group>
            </Form>
        </Modal.Body>
       
            <Modal.Footer>
                <Button variant="secondary" onClick={props.handleCloseForm}>Close</Button>
                <Button variant="primary" onClick={handleSubmit}>Save</Button>
            </Modal.Footer>
       
        </Modal>
    );
}

export default StoreAdd;