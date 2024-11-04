const express = require('express');
const fakeUsers = require('./fakeUsers');
const app = express();

app.get('/bemvindo', (req, res) => {
    const htmlResponse = `
    <html>
        <body>
            <h1 style="color: red">Bem vindo!</h1>
        </body>
    </html>
    `
    res.send(htmlResponse);
})

app.get('/', (req, res) => {
    res.send('sem nada!');
})
app.get('/user', (req, res) => {
    res.json(fakeUsers);
})

app.get('/user/search' , (req, res) => {
    const { name } = req.query;
    console.log(req.query);

    const filteredUsers = fakeUsers.filter(user => user.name.includes(name));
    if (!filteredUsers) {
        res.status(404).json({ message: 'Usuário não encontrado' });
    } 
    return res.status(200).json({message: 'Usuário encontrado', filteredUsers});
})

app.get('/user/:id', (req, res) => {
    const { id } = req.params;

    console.log(id, typeof id); 
    const user = fakeUsers.find(user => user.id === Number(id));
   
    if (!user) {
        res.status(404).json({ message: 'Usuário não encontrado' });
    } 

    return res.status(200).json(user);
})



module.exports = app;