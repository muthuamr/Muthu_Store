import { Button, Label, Table, TableHeader } from "semantic-ui-react";
import "../../App.css";
import { Grid, Card, Image, Icon } from 'semantic-ui-react';

const StoreTable=(props)=>
{
    return (
        <>     
       
        <h1 style={{marginLeft:"30px"}}>Store List</h1>
        <Button style={{marginLeft:"30px"}} positive onClick={props.handleShowAddForm}>Add Store</Button>
        
        <div className="grid-layout">
        <div style={{margin:"20px"}}>            
            <Grid stackable columns={5}>
            {props.stores.map((store) => (
                <Grid.Column key={store.storeId} style={{display:"flex"}}>
                <Card>
                   <Card.Content>
                    <Card.Header>{store.storeName}</Card.Header>
                    <Card.Description>{store.storeAddress}</Card.Description>
                    </Card.Content>
                    <Card.Content extra>
                        <div className='ui two buttons'>
                        <Button basic color='green' onClick={()=>props.handleShowEditForm(store)}>Edit</Button>
                        <Button basic color='red' onClick={()=>props.handleOpenDelete(store)}>Delete</Button>
                        </div>
                    </Card.Content>
                </Card>
                </Grid.Column>
            ))}
            </Grid>
        </div>
        </div>
        </>
    );
}

export default StoreTable;