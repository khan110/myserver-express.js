const express = require('express');
const path = require('path')

const app = express();
const PORT = 4000;

app.listen(PORT, (req, res)=>{
    console.log('server is runnig' )
})

app.get ("/", (req,res)=>{
  res.send('<h1>Welcome to Home</h1>')
})



app.get ("/signup", (req,res)=>{
    res.sendFile(path.join(__dirname,'public','signup.html'))
 })

 app.get("/signin", (req,res)=>{
     res.sendFile(path.join(__dirname,'public','signin.html'))
 })