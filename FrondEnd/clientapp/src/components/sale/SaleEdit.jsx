
import React from 'react'
import { useState } from 'react';
import { Modal,Form,Button,Icon,Select } from 'semantic-ui-react';
import {toast} from 'react-toastify'

const SaleEdit=(props)=>
{
    const [sale, setSale]=useState(props.sale);
    const [products, setProducts]=useState(props.products);
    const [customers, setCustomers]=useState(props.customers); 
    const [stores, setStores]=useState(props.stores);
    const [open, setOpen] = React.useState(false);

    const handleProductSearchChange = (event) => {
        const filteredOptions = props.products.filter(option =>
          option.productName.toLowerCase().includes(event.target.value.toLowerCase())
        );
        setProducts(filteredOptions);
      };
    
      const handleProductDropdownChange = (_,{value}) => {
        setSale({...sale, productId: value});
      };

      const handleProductDropdownOpen = () => {
        setProducts(props.products);
      };

      const handleStoreSearchChange=(event)=>
      {
        const filteredOptions=props.stores.filter(option=>{
            option.storeName.toLowerCase().includes(event.target.value.toLowerCase())
        });
        setStores(filteredOptions);
      }

      const handleStoreDropdownChange=(_,{value})=>{
        setSale({...sale, storeId:value});
      }

      const handleStoreDropdownOpen=()=>
      {
        setStores(props.stores);
      }

      const handleCustomerSearchChange=(event)=>
      {
        const filteredOptions=props.customers.filter(option=>
            {
             option.customerName.toLowerCase().includes(event.target.value.toLowerCase())
            });
            setCustomers(filteredOptions);
      }

      const handleCustomerDropdownChange=(_,{value})=>
      {
        setSale({...sale,customerId:value});
      }

      const handleCustomerDropdownOpen=()=>
      {
        setCustomers(props.customers);
      }

      const handleSubmit=(event)=>
    {
        event.preventDefault();

        if(!sale.productName)
        {
            toast.error('A product selection is required!');
            return;
        }
        if(!sale.storeName)
        {
            toast.error('A store selection is required!');
            return;
        }
        if(!sale.customerName)
        {
            toast.error('A customer selection is required!');
            return;
        }
        props.updateSale(sale);
    }      

    return(
        <>
           <Modal
            open={true}
            onClose={() => setOpen(false)}
            onOpen={() => setOpen(true)}
            //   backdrop="static"
            >
            <Modal.Header>Edit Sale</Modal.Header>      
            <Modal.Content>
                <Modal.Description>
                <Form>
                <Form.Field
                fluid
                search
                selection
                    control={Select}
                    label='Product'
                    options={products.map(option=>({
                        key: option.productId,
                        value: option.productId,
                        text: option.productName
                    }))}
                    value={sale.productId}
                    onSearchChange={handleProductSearchChange}
                    onChange={handleProductDropdownChange}
                    onOpen={handleProductDropdownOpen}
                    placeholder='Select a product'
            />

            <Form.Field
            fluid
            search
            selection
                control={Select}
                label='Customer'
                options={customers.map(option=>({
                    key: option.customerId,
                    value: option.customerId,
                    text: option.customerName
                }))}
                value={sale.customerId}
                onSearchChange={handleCustomerSearchChange}
                onChange={handleCustomerDropdownChange}
                onOpen={handleCustomerDropdownOpen}
                placeholder='Select a customer'
            />
        
            <Form.Field
            fluid
            search
            selection
                control={Select}
                label='Store'
                options={stores.map(option=>({
                    key: option.storeId,
                    value: option.storeId,
                    text: option.storeName
                }))}
                value={sale.storeId}
                onSearchChange={handleStoreSearchChange}
                onChange={handleStoreDropdownChange}
                onOpen={handleStoreDropdownOpen}
                placeholder='Select a store'
            />
            </Form>
                </Modal.Description>
              </Modal.Content>

              <Modal.Actions>
                <Form>
                <Button variant="secondary" onClick={props.handleCloseForm}>
                  Close
                </Button>
                <Button primary onClick={handleSubmit}>
                  Proceed <Icon name='chevron right' />
                </Button>
                </Form>
              </Modal.Actions>
            </Modal>
        </>
    )
}

export default SaleEdit;