import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
const Single = () => {

    const param=useParams()

    const navigate=useNavigate()
const [detail, setDetail] = useState([]);

    useEffect(() => {
        axios.get(`http://localhost:8081/getone/${param.id}`).then((response) => {
          setDetail(response.data);
        });
      }, []);

console.log(detail);
  return (
    <div>

<Table responsive="sm">
        <thead>
          <tr>
            <th>#</th>
            <th>name</th>
            <th>email</th>
            <th>class</th>
          </tr>
        </thead>
        <tbody>
          {detail.map((item, index) => (
            <>
              <tr key={index}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>{item.class}</td>
               
              </tr>
            </>
          ))}
        
            {" "}
            <Button variant="success"  onClick={()=>{navigate(-1)}} >back</Button>{" "}
       
        </tbody>
      </Table>



    </div>
  )
}

export default Single