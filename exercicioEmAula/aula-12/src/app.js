const express = require('express');
const app = express();
const multer = require('multer');
const upload = require('./utils');
const bodyParser = require('body-parser');
const fs = require('fs');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

function saveUser(user) {
    let users = []
    if (fs.existsSync('users.json')) {
        const data = fs.readFileSync('users.json');
        users = JSON.parse(data);
    }
    users.push(user);
    return fs.writeFileSync('users.json', JSON.stringify(user));
    
}

app.post('/uploud' , upload.single('file'), (req, res) => {

    const {nome, sobrenome} = req.body;

    if(!req.file){
        return res.status(400).json({ message: 'Nenhum arquivo enviado' });
    }
    const userDados = { nome, sobrenome, imagem: req.file.filename };
    saveUser(userDados);

    return res.status(200).json({ message: 'Arquivo enviado com sucesso' });
})

app.listen(8080, () => {
    console.log('Servidor rodando na porta 8080');
});
