import { Button, Label, Table, TableHeader } from "semantic-ui-react";
import "../../App.css";
import { Grid, Card, Image, Icon } from 'semantic-ui-react';


const StoreTable1=(props)=>
{
    return (
        <>
        <p>Welcome Store Table</p>
        <div>
            <h1>Store List</h1>

             <h2>Card View</h2>
      <div className="card-container">
        {props.stores.map((item, index) => (
          <div key={index} className="card">
            <h3>{item.storeName}</h3>
            <p>{item.storeAddress}</p>
            <button>View Details</button>
          </div>
        ))}

      </div>     

    

    <div>
      <div className="grid-container">
        {props.stores.map((item, index) => (
          <div key={index} className="grid-item">
            {/* <img src={item.imageUrl} alt={item.title} /> */}          
            <h3>{`${item.storeName}`}</h3>
            <p>{item.storeAddress}</p>
            <p><Button>Edit</Button>
            <Button>Delete</Button></p>
          </div>
        ))}
      </div>
    </div>


    <div className="table-container">
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {props.stores.map((item) => (
            <tr key={item.storeId}>
              <td>{item.storeName}</td>
              <td>{item.storeAddress}</td>
             
            </tr>
          ))}
        </tbody>
      </table>
    </div>


    <Grid style={{margin:"10px"}} stackable columns={5}>
      {props.stores.map((item, index) => (
        <Grid.Column key={item.storeId}>
          <Card>
            {/* <Image src={item.imageUrl} wrapped ui={false} /> */}
            <Card.Content>
              <Card.Header>{item.storeName}</Card.Header>
              <Card.Description>{item.storeAddress}</Card.Description>
            </Card.Content>
            <Card.Content extra>
                <Button positive>Edit</Button>
                <Button negative>Delete</Button>
              {/* <Icon name="star" /> */}
              {/* {item.storeAddress} Stars */}
            </Card.Content>
          </Card>
        </Grid.Column>
      ))}
    </Grid>
    </div>
        </>
    );
}

export default StoreTable1;