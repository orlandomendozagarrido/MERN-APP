const mongoose = require('mongoose');
const express = require('express');
let cors = require('cors');
const bodyParser = require('body-parser');
const logger = require('morgan');
const Data = require('./data');




const API_PORT = 3001;
const app = express();
app.use(cors());

const router = express.Router();

const dbRoute = 'mongodb://<your-db-username-here>:<your-db-password-here>@ds249583.mlab.com:49583/fullstack_app';


mongoose.connect(dbRoute, { useNewURIParser: true });

let db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error'))

app.use(bod)