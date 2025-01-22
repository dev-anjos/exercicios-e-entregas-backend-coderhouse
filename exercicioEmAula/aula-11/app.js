const express = require('express');
const _dirname = require('./utils');
const handlebars = require('express-handlebars');
const viewsRouter = require('./routes/views.routes');
const socketio = require('socket.io');
const http = require('http');

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const server = http.createServer(app);

// // servidor para sockets dentro do servidor http
// const socketServer = new Server(server);

const io = socketio(server);

// configurações dos templates
app.engine('handlebars', handlebars.engine());
app.set('views', _dirname + '/views');
app.set('view engine', 'handlebars');

// static
app.use(express.static(_dirname + '/public'));

app.use('/', viewsRouter);

// Array para armazenar as mensagens enviadas pelos usuários
let messages = [];

io.on('connection', (socket) => {
    console.log('Novo usuário conectado');
    socket.on('message', (data) => {
        messages.push(data);
        socketServer.emit('message', messages);
    });

    socket.on('disconnect', () => {
        console.log('Usuário desconectado');
        messages = [];
    });
})

server.listen(8080, () => {
    console.log('Servidor rodando na porta 8080');
})