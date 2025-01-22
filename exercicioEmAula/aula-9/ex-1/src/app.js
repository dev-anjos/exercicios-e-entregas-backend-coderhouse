const express = require('express');
const handlebars = require('express-handlebars');
const _dirname = require('./utils');

const app = express();

app.engine('handlebars', handlebars.engine());

app.set('views', _dirname + '/views');
app.set('view engine', 'handlebars');

app.use(express.static(_dirname + '/public'));

app.get('/', (req, res) => {
    console.log('Hello World');
    const user = [
        {
            name: 'Matheus',
            email: 'Zy3qj@example.com'
        }
    ]
    res.render('index.handlebars', { user })
})

app.listen(8080, () => {
    console.log('Server running on port 8080');
})
