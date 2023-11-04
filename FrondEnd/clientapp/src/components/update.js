import React,{useEffect, useState} from "react";
import { Button, Checkbox, Form, label } from "semantic-ui-react";
import axios from "axios";

export default function Update()
{
    const [firstName, setFirstName]=useState('');
    const [lastName, setLastName]=useState('');
    const [checkbox, setCheckbox]=useState(false);
    const [id,setID]=useState(null);

    useEffect(()=>{
        setID(localStorage.getItem('ID'));
        setFirstName(localStorage.getItem('First Name'));
        setLastName(localStorage.getItem('Last Name'));
        setCheckbox(localStorage.getItem('Checkbox Value'));
    },[]);

    const updateAPIData=(id)=>
    {
        axios.put(`https://653bc6c9d5d6790f5ec76c17.mockapi.io/fakeData/${id}`,
        {
            firstName,
            lastName,
            checkbox
        })
       
        console.log({firstName});
        
    }
    return(
        <div>
            <Form className="create-form">
                <Form.Field>
                    <label>First Name</label>
                    <input placeholder="First Name" value={firstName} onChange={(e)=>setFirstName(e.target.value)}/>
                </Form.Field>
                <Form.Field>
                    <label>Last Name</label>
                    <input placeholder="Last Name" value={lastName} onChange={(e)=>setLastName(e.target.value)}></input>
                </Form.Field>
                <Form.Field>
                   <Checkbox label='I agree' value={checkbox} onChange={(e)=>setCheckbox(!checkbox)}></Checkbox>
                </Form.Field>
                <Form.Field>
                <Button type='Submit' onClick={updateAPIData}>Update</Button>
                </Form.Field>
            </Form>
        </div>
    )
}