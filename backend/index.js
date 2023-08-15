const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

const connectDB = require('./db');
app.use((req,res,next)=>{
    res.setHeader("Access-Control-Allow-Origin","http://localhost:3000");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");

    next();
})
connectDB();


app.use(express.json())

app.use('/api', require("./Routes/CreateUser"));
app.use('/api', require("./Routes/DisplayData"));
app.use('/api', require("./Routes/OrderData"));


//heroku



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})