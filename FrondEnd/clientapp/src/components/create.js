import React, { useState } from 'react'
import { Button, Checkbox, Form } from 'semantic-ui-react'
import axios from 'axios'
import Read from './read'


export default function Create()
{
    const [firstName, setFirstName]=useState('');
    const [lastName, setLastName]=useState('');
    const [checkbox, setCheckbox]=useState(false);

    const postData = () => {
        console.log(firstName);
        console.log(lastName);
        console.log(checkbox);

       axios.post('https://653bc6c9d5d6790f5ec76c17.mockapi.io/fakeData', {
        firstName,
        lastName,
        checkbox
       }).then(()=>{return(<Read></Read>)})
    }

    const getData=()=>
    {
        axios.get(`https://653bc6c9d5d6790f5ec76c17.mockapi.io/fakeData`)
    }

    return(
     <div>
        <Form className='create-form'>
            <Form.Field>
                <label>First Name</label>
                <input placeholder='First Name' onChange={(e)=>setFirstName(e.target.value)}></input>
            </Form.Field>
            <Form.Field>
                <label>Last Name</label>
                <input placeholder='Last Name' onChange={(e)=>setLastName(e.target.value)}></input>
            </Form.Field>
            <Form.Field>
                <Checkbox label='I agree to the Terms and Conditions' onChange={(e)=>setCheckbox(!checkbox)}></Checkbox>        
            </Form.Field>
            
            <Button type='submit' onClick={postData}>Submit</Button>
            
        </Form>

        </div>
    )
}

   
