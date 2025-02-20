const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const path = require('path')

const connectDB = require('./db');
app.use((req,res,next)=>{
    res.setHeader("Access-Control-Allow-Origin","https://gofoods-4n6u.onrender.com");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");

    next();
})
connectDB(); 


app.use(express.json())

app.use('/api', require("./Routes/CreateUser"));
app.use('/api', require("./Routes/DisplayData"));
app.use('/api', require("./Routes/OrderData"));

app.use(express.static(path.join(__dirname,'./frontend/build')))
app.get('*', function(req,res){
  res.sendFile(path.join(__dirname, './frontend/build/index.html'))
})




app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})







