
const fs = require('fs').promises;
const operacoesAssincronas = async() => {

    await fs.writeFile('./exercicioEmAula/aula-3/data/exemploPromises.txt', 'Hello again, Coders! Agora com Pr')
    const resultado = await fs.readFile('./exercicioEmAula/aula-3/data/exemploPromises.txt');
    console.log(resultado);
}

operacoesAssincronas();