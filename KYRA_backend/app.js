//Libraries
const express = require('express');
const mongoose = require("mongoose");
const bodyParser = require('body-parser');

//Import Routes
const userRoutes = require('./routes/userRoutes')


//Configuring and applying more middlewares for the app
const app = express();

//Enable CORS - cross origin resource sharing
app.use((req,res,next)=>{
    res.setHeader('Access-Control-Allow-Origin','*');
    res.setHeader('Access-Control-Allow-Methods','GET,POST,DELETE,PUT,PATCH');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
})

//Parse req to JSON
app.use(bodyParser.json());

app.use('/',userRoutes.user);

app.use('/', (error, req,res,next)=>{
    const status = error.status || 500;
    const message = error.message;
    console.log(error)
    res.status(status).json({message:message, statusCode: status});
})
//Connecting DB
mongoose.connect('mongodb://localhost:27017/KYRA').then(res=>{
    console.log("DB Connected");
    app.listen(3000);
}).catch(err=>{
    console.log("Error Connecting to DB");

})
