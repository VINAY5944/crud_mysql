const express = require('express');
const mysql = require('mysql');
const cors=require('cors')
const app = express();
app.use(express.json())
app.use(cors())
// Replace these with your MySQL database credentials
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'mysql',
  });



app.get('/',(req,res)=>{
  const sql="SELECT * FROM crud";
  db.query(sql,(err,data)=>{
    if(err) return res.json('error');
    return res.json(data)
  })
})


app.get('/getone/:id',(req,res)=>{
  const param=req.params.id;
 
  const sql = 'SELECT * FROM `crud` WHERE `id` = ?'
  db.query(sql,[param],(err,data)=>{
    if(err) return res.json('error');
    return res.json(data)
  })
})




app.post('/create', (req, res) => {
  const sql = "INSERT INTO `crud` (`name`, `email`, `class`) VALUES (?, ?, ?)";
  const values = [req.body.name, req.body.email, req.body.clas]; 
  db.query(sql, values, (err, data) => {
    if (err) {
      return res.json('error');
    }
    return res.json(data);
  });
});


app.put('/update/:id', (req, res) => {
  const param = req.params.id;
  const sql = "UPDATE `crud` SET name=?, email=?, class=? WHERE id=?";
  const values = [req.body.name, req.body.email, req.body.clas, req.params.id];
  
  db.query(sql, values, (err, data) => {
    if (err) {
      console.error(err);  // Log the error to the console
      return res.json('error');
    }
    return res.json(data);
  });
});

app.delete('/delete/:id', (req, res) => {
  const param = req.params.id;
  const sql = "DELETE FROM `crud`  WHERE id=?";
  const values = [req.params.id];
  
  db.query(sql, values, (err, data) => {
    if (err) {
      console.error(err);  // Log the error to the console
      return res.json('error');
    }
    return res.json(data);
  });
});




const port = 8081;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
