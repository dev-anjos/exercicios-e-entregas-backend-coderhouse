const express = require('express');
const app = express();
const petRouter = require('./routes/pets.router.js');
const userRouter = require('./routes/users.router.js');

app.use(express.json());

app.use('/api/pets', petRouter);
app.use('/api/users', userRouter);

app.listen(8000, () => {
    console.log('Server running on port 8000');
})
