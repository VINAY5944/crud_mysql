import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate, useParams } from 'react-router-dom';
const Update = () => {


    const param=useParams()

    const navigate=useNavigate()


const [detail, setDetail] = useState([]);
const [name,setName]=useState('')
const [email,setEmail]=useState('')
const [clas,setClas]=useState('')



useEffect(() => {
    axios.get(`http://localhost:8081/getone/${param.id}`).then((response) => {
      setDetail(response.data);
    });
  }, []);

console.log(detail);



const submit=(e)=>{
    e.preventDefault();
    axios.put(`http://localhost:8081/update/${param.id}`,{name,email,clas}).then((response) => {
       
      });
    
    navigate('/')
    }




  return (
    <div>

 {detail.map((item,index)=>(
<> 
<Form>
      <Form.Group className="mb-3"   key={index}  >
        <Form.Label>name</Form.Label>
        <Form.Control type="text" placeholder={item.name} value={name}   onChange={(e)=>{setName(e.target.value)}} />
      </Form.Group>

      <Form.Group className="mb-3" >
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder={item.email}   value={email}   onChange={(e)=>{setEmail(e.target.value)}} />
      </Form.Group>



      <Form.Group className="mb-3" >
        <Form.Label>class</Form.Label>
        <Form.Control type="text"placeholder={item.class} value={clas}   onChange={(e)=>{setClas(e.target.value)}} />
      </Form.Group>
      <Button variant="primary" type="submit"  onClick={submit}  >
        Submit
      </Button>
      </Form></>
))}
    



    </div>
  )
}

export default Update