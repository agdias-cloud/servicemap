
const express = require('express');

const recursos = require('./src/routes/recursos');
const cors = require('cors');
const colors = require('colors');
const dotenv = require('dotenv').config();
const port = process.env.PORT;
const connectDB = require('./src/config/db');
connectDB();
const app = express();
app.use(cors())
app.use(express.json());
app.use('/api/v1/recursos', recursos);
app.use('/api/v1/recursos/nome', recursos);
app.use('/api/v1/recursos/id', recursos);


server.listen(port, () => console.log(`Now running on port ${port}`))





