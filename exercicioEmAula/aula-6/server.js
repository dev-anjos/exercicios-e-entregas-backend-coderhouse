const express = require('express');
const app = require('./app');
const port = 8000;

const serve = express();

app.listen(port, () => {
    console.log('Server running on port 8000');
})
