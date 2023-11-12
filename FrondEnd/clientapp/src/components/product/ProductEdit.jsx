import { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { toast } from 'react-toastify';

const ProductEdit=(props)=>
{
    const [product,setProduct]=useState(props.product);

    const handleChange=(event)=>
    {
        const {name,value}=event.target;

        if(name=="productPrice")
        {
            if (/^-?\d*\.?\d*$/.test(value)) {
                setProduct({...product,[name]:value});
            }
        }
        else
        {
            setProduct({...product,[name]:value});
        }
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
        props.updateProduct(product);
    }

    return(
       
       <Modal show={true} onHide={props.handleCloseForm} backdrop="static">
        <Modal.Header closeButton={true}>
            <Modal.Title>Edit Product</Modal.Title>
        </Modal.Header>
       <Modal.Body>
        <Form>
            <div style={{margin:'10px'}}>
            <Form.Group id="frmProdName">
                <Form.Label>Product Name:</Form.Label>
                <Form.Control as="textarea" name='productName' value={product.productName} onChange={handleChange}/>
            </Form.Group>
            </div>
            <div style={{margin:'10px'}}>                
            <Form.Group id="frmProdPrice">
                <Form.Label>Product Price:</Form.Label>
                <Form.Control type="text" name="productPrice" value={product.productPrice} onChange={handleChange}/>
            </Form.Group>
            </div>
        </Form>
       </Modal.Body>
       <Form onSubmit={handleSubmit}>
       <Modal.Footer>       
            <Button variant="secondary" onClick={props.handleCloseForm}>Close</Button>
            <Button variant="primary" onClick={handleSubmit}>Submit</Button>     
       </Modal.Footer>
       </Form>
       </Modal>       
       
    )
}
export default ProductEdit;