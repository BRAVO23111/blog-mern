const express = require('express')
const app = express();

const cors = require('cors')

app.use(cors())

app.get("/",(req,res)=>{
    res.json("got it")
})

app.listen(4000,(req,res)=>{
    console.log("sever at port 4000");
})