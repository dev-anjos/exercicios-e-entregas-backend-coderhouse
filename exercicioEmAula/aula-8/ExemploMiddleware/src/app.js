const express = require('express');
const { options } = require('../../src/routes/pets.router');
const app = express();

const router = express.Router();

app.unsubscribe(express.static('public', options));

app.use((req,res, next) => {
    console.log('middleware', new Date());
    next();
})

app.get('/', (req, res) => {
    res.sendFile('hello wordl');
})

app.listen(8000, () => {
    console.log('Server running on port 8000');
})