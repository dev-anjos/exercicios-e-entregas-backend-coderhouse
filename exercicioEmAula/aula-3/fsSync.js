const fs = require('fs')


fs.writeFileSync('./exercicioEmAula/aula-3/data/arquivo.txt', 'Olá Mundo!')

const exist = fs.existsSync('./exercicioEmAula/data/arquivo.txt')