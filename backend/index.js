const express = require('express');
const app = express();
const port = 5000;

const connectDB = require('./db');
app.use((req,res,next)=>{
    res.setHeader("Access-Control-Allow-Origin","http://go-foods-z2vn.vercel.app");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");

    next();
})
connectDB();


app.use(express.json())

app.use('/api', require("./Routes/CreateUser"));
app.use('/api', require("./Routes/DisplayData"));
app.use('/api', require("./Routes/OrderData"));


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})