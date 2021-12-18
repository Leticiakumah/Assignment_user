const { request, response } = require('express');
const express = require('express');
const app = express();
require('dotenv').config();
const PORT = process.env.PORT|| 3000;
//importing mongoose
const mongoose = require('mongoose');
const { required } = require('nodemon/lib/config');
//importing todoController
const usercontroller = require('./controller/usercontroller');

app.use(express.json());
app.get('/',(request,response)=>{
    response.status(200).json({message:"Hello welcome to my todo API"});
});

app.post('/user',usercontroller.addUser);
app.get('/user',usercontroller.getAllUser);
app.patch('/user/:userId',usercontroller.updateById);
app.delete('/user/:userId',usercontroller.deleteById);
app.get('/user/:userId',usercontroller.getUserById);

//listining to request on localhost port 5000
app.listen(PORT,() => {
    console.log("My server is Up and running on port",PORT);
    //connecting to the database
    mongoose.connect(process.env.DB_URL)
    .then(function(){
        console.log("Database is connected");
    })
    //console.log("Database is not connected",error);
    .catch(function(error){
        console.log(`Database is not connected, ${error}`);
            // console.log('Database is not connected', error.message);
    });
});