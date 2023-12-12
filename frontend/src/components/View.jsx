import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import axios from "axios";
import { Link } from "react-router-dom";
const View = () => {
  const [detail, setDetail] = useState([]);
  const [del,setDel]=useState('')

  useEffect(() => {
    axios.get("http://localhost:8081").then((response) => {
      setDetail(response.data);
    });
  }, [detail]);


  const handledelete=(e)=>{

setDel(e)
axios.delete(`http://localhost:8081/delete/${e}`).then((response) => {
      
    });

  }

  console.log(del);
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
                <td>
                  {" "}
                  <Button variant="danger"  value={item.id}   onClick={(e)=>{handledelete(e.target.value)}}  >Delete</Button>{" "}
                </td>
                <td>
                  {" "}
                  <Link to={`/update/${item.id}`}>
                    {" "}
                    <Button variant="info">Update</Button>{" "}
                  </Link>
                </td>
                <td>
                  {" "}
                  <Link to={`/single/${item.id}`}>
                    {" "}
                    <Button variant="primary">View</Button>{" "}
                  </Link>
                </td>
              </tr>
            </>
          ))}
          <Link to={`/add`}>
            {" "}
            <Button variant="success">Add</Button>{" "}
          </Link>
        </tbody>
      </Table>
    </div>
  );
};

export default View;
