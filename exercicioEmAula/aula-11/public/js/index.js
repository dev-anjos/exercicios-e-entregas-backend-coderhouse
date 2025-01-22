const socket = io();

let user; 
let chatBox = document.getElementById('chatBox');

Swal.fire({
    title: 'Qual o seu nome?',
    input: 'text',
    inputAttributes: {
      autocapitalize: 'off'
    },
    showCancelButton: true,
    confirmButtonText: 'Entrar',
    showLoaderOnConfirm: true
}).then((result) => {
  if (result.isConfirmed) {
    user = result.value;
    socket.emit('newUser', user);
  }
})


chatBox.addEventListener('keyup', (e) => {
    if (e.key === 'Enter') {
        if (chatBox.value.trim().length > 0) {
            socket.emit('message', {user: user, message: chatBox.value });
            chatBox.value = '';
        }
    }
})

socket.on('messagesLogs', (mensagens) => {
  let logs = document.getElementById('messagesLogs');
  let message = '';
  mensagens.forEach(element => {
    mensagens += mensagens + `${element.user} diz: ${element.message} \n`;
  });
  logs.textContent = message;
})