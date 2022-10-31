import * as dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
const app = express();

//routes
app.get('/', (req, res) => {
	res.send('Hello World')
})


//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());


//database
import './config/database'


//server listener
const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
    console.log("Server is running on port", PORT)
})