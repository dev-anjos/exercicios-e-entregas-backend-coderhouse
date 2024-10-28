const fs = require('fs')	

const date = new Date();


fs.writeFile('./exercicioEmAula/aula-3/data/date.txt', date.toString(), (err) => {
    if (err) {
       return  console.log(err)
    }
})