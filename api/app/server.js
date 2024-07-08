const express = require('express');
const app = express();
const dotenv = require('dotenv').config();
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Now listening on port ${port}`))



