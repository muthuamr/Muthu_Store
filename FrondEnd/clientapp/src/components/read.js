import {Tab, Table, Button} from 'semantic-ui-react'
import React, {useEffect, useState} from "react";
import axios from 'axios';

export default function Read()
{
    const [APIData, setAPIData]=useState([]);

    useEffect(()=>{
        axios.get('https://653bc6c9d5d6790f5ec76c17.mockapi.io/fakeData')
        .then((response)=>{
            setAPIData(response.data);
        })
    },[]);

    const getData=()=>
    {
        axios.get(`https://653bc6c9d5d6790f5ec76c17.mockapi.io/fakeData`).
        then((response)=>{setAPIData(response.data);})
    }

    const onDelete=(id)=>{
        axios.delete(`https://653bc6c9d5d6790f5ec76c17.mockapi.io/fakeData/${id}`).then(()=>{getData();})
    }
    
    const onUpdate=(id)=>
    {
        axios.put(`https://653bc6c9d5d6790f5ec76c17.mockapi.io/fakeData/${id}`,
        {
           
        })
    }

    return(
        <div>
            {getData}
            <Table singleLine>
                <Table.Header>
                <Table.Row>
                    <Table.HeaderCell>First Name</Table.HeaderCell>
                    <Table.HeaderCell>Last Name</Table.HeaderCell>
                    <Table.HeaderCell>Checked</Table.HeaderCell>
                </Table.Row>
                </Table.Header>

                <Table.Body>
                    {APIData.map((data)=>{
                       return( <Table.Row>
                        <Table.Cell>
                            {data.firstName}
                        </Table.Cell>
                        <Table.Cell>
                            {data.lastName}
                        </Table.Cell>
                        <Table.Cell>
                            {data.checkbox?'Checked':'Unchecked'}
                        </Table.Cell>
                        <Table.Cell>                       
                             <Button onClick={()=>onUpdate(data.id)}>Update</Button>              
                        </Table.Cell>
                        <Table.Cell>                       
                             <Button onClick={()=>onDelete(data.id)}>Delete</Button>                
                        </Table.Cell>
                    </Table.Row>
                    )}
                    )}                    
                    
                </Table.Body>
            </Table>
        </div>
    )
}