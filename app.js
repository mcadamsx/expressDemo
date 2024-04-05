const express = require('express');
const app = express();
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const router = require('./routes/users.route')


dotenv.config();
const port = process.env.PORT
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static('public'));

app.use('/api', router);


mongoose.connect('mongodb://localhost:27017/simple-crud')
.then(()=>{
    console.log('connected to databse');
    app.listen(port, ()=> console.log(`Server running no port ${port}`));
})
.catch(()=>{
    console.error("Failed to connect to databse")
})

