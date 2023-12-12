import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';
const Add = () => {

  const navigate=useNavigate()
    const [name,setName]=useState('')
    const [email,setEmail]=useState('')
    const [clas,setClas]=useState('')
    
    
const submit=(e)=>{
e.preventDefault();
axios.post("http://localhost:8081/create",{name,email,clas}).then((response) => {
   
  });

navigate('/')

}




  return (
    <div>


<Form   >
      

<Form.Group className="mb-3"    >
<Form.Label>name</Form.Label>
<Form.Control type="text" placeholder="name"  value={name}   onChange={(e)=>{setName(e.target.value)}} />
</Form.Group>

<Form.Group className="mb-3" >
<Form.Label>Email address</Form.Label>
<Form.Control type="email" placeholder="email"   value={email}   onChange={(e)=>{setEmail(e.target.value)}} />
</Form.Group>



<Form.Group className="mb-3" >
<Form.Label>class</Form.Label>
<Form.Control type="text" placeholder="class" value={clas}   onChange={(e)=>{setClas(e.target.value)}} />
</Form.Group>
<Button variant="primary" type="submit" onClick={submit} >
Submit
</Button>



     
    </Form>








    </div>
  )
}

export default Add