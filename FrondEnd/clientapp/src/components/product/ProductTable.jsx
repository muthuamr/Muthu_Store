import { Segment, Table, TableCell, TableHeader, TableRow,Button, TableBody } from "semantic-ui-react";

const ProductTable=(props)=>
{
    return(
        <>
        <Button positive onClick={()=>props.handleShowAddForm()}>Add Product</Button>
        <h1>Products List</h1>
        <Segment>
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableCell>Product Description</TableCell>
                        <TableCell>Product Price</TableCell>
                        <TableCell>Actions</TableCell>
                    </TableRow>
                </TableHeader>
                <TableBody>
                {props.products.map((product)=>(                
                <TableRow key={product.productId}>
                    <TableCell>{product.productDescription}</TableCell>
                    <TableCell>{product.productPrice}</TableCell>
                    <TableCell><Button positive onClick={()=>props.handleShowAddForm()}>Edit</Button>
                    <Button negative onClick={()=>props.handleOpenDelete()}>Delete</Button></TableCell>                                  
                </TableRow>
                ))}
                </TableBody>
            </Table>
        </Segment>
        </>
    )
}

export default ProductTable;