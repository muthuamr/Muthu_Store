

import {  Header, Image,Table,Message,Segment,Container, Button } from 'semantic-ui-react';

const SaleTable=(props)=>
{
    return(
       
    <div>
    <h1>Store List</h1>
    <div className="grid-layout">

    <Container style={{ padding: '5em 0em' }}>
    
    <Message attached='top' content='Sales History' icon='' warning />
      <Table attached inverted>
        <Table.Header>
          <Table.HeaderCell>Product Name</Table.HeaderCell>
          <Table.HeaderCell>Product Price</Table.HeaderCell>
          <Table.HeaderCell>Customer Name</Table.HeaderCell>
          <Table.HeaderCell>Store Name</Table.HeaderCell>
          <Table.HeaderCell>Order Date Time</Table.HeaderCell>
          <Table.HeaderCell>Action</Table.HeaderCell>
        </Table.Header>
        <Table.Body>
        {props.sales.map((sale)=>(
          <Table.Row key={sale.saleId}>
            <Table.Cell>{sale.productName}</Table.Cell>
            <Table.Cell>{sale.productPrice}</Table.Cell>
            <Table.Cell>{sale.customerName}</Table.Cell>
            <Table.Cell>{sale.storeName}</Table.Cell>
            <Table.Cell>{sale.orderDateTime}</Table.Cell>
            <Table.Cell>  
                <div className='ui two buttons'>
                <Button basic color='green'>
                    Edit
                </Button>
                <Button basic color='red'>
                    Delete
                </Button>
                </div>
            </Table.Cell>
          </Table.Row>
        ))}         
        </Table.Body>
      </Table>
      {/* <Segment attached='bottom' inverted>
       
      </Segment> */}
      </Container>


                
                </div>
        </div>    
       
    )

}

export default SaleTable;