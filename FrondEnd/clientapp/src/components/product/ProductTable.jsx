import { Segment, Table, TableCell, TableHeader, TableRow,Button, TableBody } from "semantic-ui-react";

const ProductTable=(props)=>
{
    return(
        <>
        <Button style={{marginLeft:"30px"}} positive onClick={()=>props.handleShowAddForm()}>Add Product</Button>
        <h1 style={{marginLeft:"30px"}} >Products List</h1>
        <div className="grid-layout">
        <Segment>
            <Table>
            <Table.Header>
                <Table.Row>
                    <Table.HeaderCell>Product Description</Table.HeaderCell>
                    <Table.HeaderCell>Product Price</Table.HeaderCell>
                    <Table.HeaderCell>Actions</Table.HeaderCell>
                </Table.Row>
                </Table.Header>
                <TableBody>
                {props.products.map((product)=>(                
                <TableRow key={product.productId}>
                    <TableCell>{product.productName}</TableCell>
                    <TableCell>{product.productPrice}</TableCell>
                    <TableCell>
                    {/* <Button positive onClick={()=>props.handleShowEditForm(product)}>Edit</Button>
                    <Button negative onClick={()=>props.handleOpenDelete(product)}>Delete</Button> */}
                    <div className='ui two buttons'>
                        <Button basic color='green' onClick={()=>{props.handleShowEditForm(product)}}>
                            Edit
                        </Button>
                        <Button basic color='red' onClick={()=>{props.handleOpenDelete(product)}}>
                            Delete
                        </Button>
                    </div>
                    </TableCell>                               
                </TableRow>
                ))}
                </TableBody>
            </Table>
        </Segment>
        </div>
        </>
    )
}

export default ProductTable;