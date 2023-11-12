import { useState } from "react";
import { Modal, Form, Button } from "react-bootstrap";
import { toast } from 'react-toastify';


const StoreEdit=(props)=>
{
    const [store, setStore]=useState(props.store);
    const handleChange=(event)=>
    {
        const {name, value}=event.target;
        setStore({...store,[name]:value});
    }

    const handleSubmit=(event)=>
    {
        event.preventDefault();

        if(!store.storeName)
        {
         toast.error('Store Name is required!');   
         return;
        }
        props.updateStore(store);
    }

    return (
        <>
        <Modal show={true} onHide={props.handleCloseForm} backdrop={"static"}>
        <Modal.Header closeButton={true}>
            <Modal.Title>Edit Store</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form>
            <Form.Group id='grpStoreName' style={{margin:"10px"}}>
                <Form.Label>Store Name:</Form.Label>
                <Form.Control type="text" value={store.storeName} name="storeName" onChange={handleChange} maxLength={90}></Form.Control>
            </Form.Group>
            <Form.Group id='grpStoreAddress' style={{margin:"10px"}}>
                <Form.Label>Address:</Form.Label>
                <Form.Control as="textarea" value={store.storeAddress} name="storeAddress" onChange={handleChange} maxLength={160}></Form.Control>
            </Form.Group>
        </Form>
        </Modal.Body>
        <Form>
        <Modal.Footer>          
            <Button variant="secondary" onClick={props.handleCloseForm}>Close</Button>
            <Button variant="primary" onClick={handleSubmit}>Save</Button>            
        </Modal.Footer>
        </Form>
        </Modal>
        </>
    );
}
export default StoreEdit;