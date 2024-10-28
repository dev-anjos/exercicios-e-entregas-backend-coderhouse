const fs = require('fs').promises;
const crypto = require('crypto');


const lerArquivo = async() => {
   try {
    const result = await fs.readFile('usuarios.json', 'utf-8');
    const resultParsed = await JSON.parse(result);
    console.log(resultParsed)
   } catch (error) {
    console.log(error);
   }
};


const gravarArquivo =  async(dados) => {
    try {
        const data = JSON.stringify(dados);
        await fs.writeFile('usuarios.json', data);
    } catch (error) {
        console.log(error);
    }
};

const saveUser = async(usuario) => {

    try {

        const listaUsuario = await lerArquivo();
        usuario.password = crypto
            .createHash('sha256')
            .update(usuario.password)
            .digest('hex');
            console.log(usuario.password);
        listaUsuario.push(usuario);
        await gravarArquivo(listaUsuario);
        
    } catch (error) {
        console.log
    }

}

const main = async() => {
    const result = await lerArquivo();
    await saveUser({"name": "juan", "password": "123456"});
}

main()
