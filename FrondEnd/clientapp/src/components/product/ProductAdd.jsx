
import Form from 'react-bootstrap/Form';
import { Modal, Button } from 'react-bootstrap';
import { useState } from 'react';

const ProductAdd=(props)=> {
    const [show,setShow]=useState();
    const [update, setUpdate]=useState();
    const [isOpen,setisOpen]=useState(true);
    const [closeModal, setcloseModal]=useState(true);

    const initialState=
    {
        productName:"",
        productPrice:0.00
    };

    const [product, setProduct]=useState(initialState);
    

    const handleChange=(event)=>
    {
        const {name, value}=event.target;
        if(name=="productPrice")
        {
            if (/^-?\d*\.?\d*$/.test(value)) {
                setProduct({...product,[name]:[value]}); 
              }
        }
        else
            setProduct({...product,[name]:[value]});    
    }
   

    const handleSubmit=()=>
    {
        setProduct(initialState);
        props.toastMessage("success","Product Added Successfully");   
    }

    return (
    <Modal show={isOpen} onHide={props.handleCloseAddForm} backdrop="static">
        <Modal.Header closeButton>
            <Modal.Title>Add Product</Modal.Title>
        </Modal.Header>
        <Modal.Body>           
            <Form.Group >
                <Form.Label>Product Name: </Form.Label>
                <Form.Control as="textarea" name='productName' onChange={handleChange} value={product.productName}/>                
                <br></br>
                <Form.Label>Product Price: </Form.Label>
                <Form.Control type="text" name="productPrice" onChange={handleChange} value={product.productPrice}/>  
                {/* <Form.Control placeholder="Product Name" value={product.productName} name="productName" onChange={handleChange}></Form.Control>        */}
            </Form.Group>
          
        </Modal.Body>
        <Modal.Footer>
        <Button variant="secondary" onClick={props.handleCloseAddForm}>
          Close
        </Button>
            <Button variant="primary" type="submit" onClick={() => handleSubmit()}>
                Submit
            </Button>
        </Modal.Footer>
        </Modal>
    );
}

export default ProductAdd;