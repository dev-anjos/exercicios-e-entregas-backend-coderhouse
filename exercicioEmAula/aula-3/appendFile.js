const fs = require('fs')


fs.appendFileSync('./exercicioEmAula/aula-3/data/appendFileSync.txt', 'Olá Mundo!')

fs.writeFileSync('./exercicioEmAula/aula-3/data/appendFileSync.txt', 'Olá Mundo! estou escrevendo no arquivo' )