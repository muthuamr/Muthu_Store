import { Header, Image, Input, Label, Table } from 'semantic-ui-react'
import { Button, Icon, Modal,Form, Select } from 'semantic-ui-react'
import React from 'react'
import { Dropdown } from 'react-bootstrap';
import { useState } from 'react';

const SaleAdd=(props)=>
{
    const [open, setOpen] = React.useState(false);
    const [products, setProducts]=useState(props.products);
    const [customers, setCustomers]=useState(props.customers); 
    const [stores, setStores]=useState(props.stores);
    const [selectedOption, setSelectedOption] = useState(null);
    const [selectedCustomerOption, setSelectedCustomerOption] = useState(null);
    const [selectedStoreOption, setSelectedStoreOption] = useState(null);

      const handleProductSearchChange = (_, { searchQuery }) => {
        const filteredOptions = props.products.filter(option =>
          option.productName.toLowerCase().includes(searchQuery.toLowerCase())
        );
        setProducts(filteredOptions);
      };
    
      const handleProductDropdownChange = (_, { value }) => {
        setSelectedOption(value);
      };

      const handleProductDropdownOpen = () => {
        // Reload all items when the dropdown is opened without searching
        setProducts(props.products);
      };


      const handleCustomerSearchChange = (_, { searchQuery }) => {
        const filteredOptions = props.customers.filter(option =>
          option.customerName.toLowerCase().includes(searchQuery.toLowerCase())
        );
        setCustomers(filteredOptions);
      };
    
      const handleCustomerDropdownChange = (_, { value }) => {
        setSelectedCustomerOption(value);
      };

      const handleCustomerDropdownOpen = () => {
        // Reload all items when the dropdown is opened without searching
        setCustomers(props.customers);
      };

      const handleStoreSearchChange = (_, { searchQuery }) => {
        const filteredOptions = props.stores.filter(option =>
          option.storeName.toLowerCase().includes(searchQuery.toLowerCase())
        );
        setStores(filteredOptions);
      };
    
      const handleStoreDropdownChange = (_, { value }) => {
        setSelectedStoreOption(value);
      };

      const handleStoreDropdownOpen = () => {
        // Reload all items when the dropdown is opened without searching
        setStores(props.stores);
      };
      
    return(
        <>
         <Modal
            open={true}
            onClose={() => setOpen(false)}
            onOpen={() => setOpen(true)}
            //   backdrop="static"
        >
      <Modal.Header>Sale Add</Modal.Header>      
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
            value={selectedOption}
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
            value={selectedCustomerOption}
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
            value={selectedStoreOption}
            onSearchChange={handleStoreSearchChange}
            onChange={handleStoreDropdownChange}
            onOpen={handleStoreDropdownOpen}
            placeholder='Select a store'
          />
          </Form>
        </Modal.Description>
        {/* <Form.Group>
      <label>welcome: </label>
        <Input type='text' value="text"></Input>
        </Form.Group> */}
        {/* <Image size='medium' src='/images/wireframe/image.png' wrapped /> */}
       
        {/* <Modal.Description>
          <p>
            This is an example of expanded content that will cause the modal's
            dimmer to scroll.

          </p>

          
        </Modal.Description> */}
      </Modal.Content>
      <Modal.Actions>
        <Button onClick={() => setOpen(false)} primary>
          Proceed <Icon name='chevron right' />
        </Button>
      </Modal.Actions>
    </Modal>
        </>
    )
}

export default SaleAdd;