
import Form from 'react-bootstrap/Form';
import { Modal, Button } from 'react-bootstrap';
import { useState } from 'react';
import { toast } from 'react-toastify';


const ProductAdd=(props)=> {
    
    const [isOpen,setisOpen]=useState(true);

    const initialState=
    {
        productName:"",
        productPrice:"0.00"
    };

    const [product, setProduct]=useState(initialState);
    

    const handleChange=(event)=>
    {
        const {name, value}=event.target;
        if(name=="productPrice")
        {
            if (/^-?\d*\.?\d*$/.test(value)) {
                setProduct({...product,[name]:value}); 
              }
        }
        else
            setProduct({...product,[name]:value});    
    }
   

    const handleSubmit=(event)=>
    {
        event.preventDefault();
        if(!product.productName)
        {
            toast.error('Product Name is required!');
            return;
        }
        if(!product.productPrice || product.productPrice<=0)
        {
            toast.error('Product price is required!');
            return;
        }
        if(isNaN(parseFloat(product.productPrice)))
        {
            toast.error('Product price accept integer or decimal values only!');
            return;
        }
        props.createProduct(product);
        setProduct(initialState);
    }

    return (
    <Modal show={isOpen} onHide={props.handleCloseForm} backdrop="static">
        <Modal.Header closeButton>
            <Modal.Title>Add Product</Modal.Title>
        </Modal.Header>
        <Modal.Body>   
            <Form>  
            <Form.Group controlId="formgroup">
                <Form.Label>Product Name: </Form.Label>
                <Form.Control as="textarea" placeholder='E.g. Product Name or Product Description' name='productName' onChange={handleChange} value={product.productName} minLength={1} maxLength={150}/>                
                <br></br>
                <Form.Label>Product Price: </Form.Label>
                <Form.Control type="text" placeholder='Enter Decimal amount' name="productPrice" onChange={handleChange} value={product.productPrice} minLength={1} maxLength={11}/>  
            </Form.Group>
            </Form>    
        </Modal.Body>
        <Form onSubmit={handleSubmit}>  
        <Modal.Footer>       
        <Button variant="secondary" onClick={props.handleCloseForm}>
          Close
        </Button>
            <Button variant="primary" type="submit">
                Submit
            </Button>           
        </Modal.Footer>
        </Form>
        </Modal>
    );
}

export default ProductAdd;