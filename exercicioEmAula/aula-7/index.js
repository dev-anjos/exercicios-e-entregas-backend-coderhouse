const express = require('express');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

let users = [];
let products = [];

app.post('/api/users', (req, res) => {
    const user = req.body;
    users.push(user);
    res.status(201).json(user);
})

app.get('/api/users', (req, res) => {
    const user = req.body;
    users.push(user);
    res.status(201).json(user);
})

app.put('/api/users/:id', (req, res) => {
    const { id } = req.params;
    const { nome, password } = req.body;
    const user = users.find(user => user.id === Number(id));
    if (!user) {
        return res.status(404).json({ message: 'Usuário não encontrado' });
    }
    user.nome = nome;
    user.password = password;
    res.status(200).json(user);
})

app.delete('/api/users/:id', (req, res) => {
    const { id } = req.params;
    const { nome, password } = req.body;
    const user = users.find(user => user.id === Number(id));
    if (!user) {
        return res.status(404).json({ message: 'Usuário não encontrado' });
    }
    user.splice()
    res.status(204).json(send);
})

app.listen(8000, () => {
    console.log('Server running on port 8000');
})