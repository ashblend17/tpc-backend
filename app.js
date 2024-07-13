// app file to manage all routes and inits


const express = require('express');
const cors = require('cors');

require('dotenv').config();


const app = express();


app.use(cors());
app.use(express.json());





const db = mongoose.connect(process.env.mongo_string)
.then(() => {console.log('connected to db')})
.catch((err) => {console.log(err)});
