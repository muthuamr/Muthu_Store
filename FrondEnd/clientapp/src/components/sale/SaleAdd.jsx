import { Header, Image, Input, Label, Table } from 'semantic-ui-react'
import { Button, Icon, Modal,Form, Select } from 'semantic-ui-react'
import React from 'react'
import { Dropdown } from 'react-bootstrap';
import { useState } from 'react';

const SaleAdd=(props)=>
{
    const [open, setOpen] = React.useState(false);
    const [products, setProducts]=useState(props.products);   
      const [selectedOption, setSelectedOption] = useState(null);
      const handleSearchChange = (_, { searchQuery }) => {
        const filteredOptions = props.products.filter(option =>
          option.productName.toLowerCase().includes(searchQuery.toLowerCase())
        );
        setProducts(filteredOptions);
      };
    
      const handleDropdownChange = (_, { value }) => {
        setSelectedOption(value);
      };

      const handleDropdownOpen = () => {
        // Reload all items when the dropdown is opened without searching
        setProducts(props.products);
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
            label='Product Name'
            options={products.map(option=>({
                key: option.productId,
                value: option.productId,
                text: option.productName
            }))}
            value={selectedOption}
            onSearchChange={handleSearchChange}
            onChange={handleDropdownChange}
            onOpen={handleDropdownOpen}
            placeholder='Select a product name'
          />
        
        <Dropdown
        label='Product Name'
          fluid
          search
          selection
          options={products.map(option=>({
            key: option.productId,
            value: option.productId,
            text: option.productName
        }))}
          value={selectedOption}
          onSearchChange={handleSearchChange}
          onChange={handleDropdownChange}
        />
            {/* Add more Form.Field components as needed */}
            {/* ... */}
            <Form.Field
                control={Select}
                label='Product Price'
                options={products.map(option=>({
                    key: option.productId,
                    value: option.productId,
                    text: option.productName
                }))}
                placeholder='Product Price'
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