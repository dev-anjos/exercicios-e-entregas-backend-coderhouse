 
const fs = require('fs');

class ProductManager {

    constructor() {
        this.products = [];
        this.path = 'products.json';
        this.id = 1;

    }

    addProduct({title, description, price, thumbnail, code, stock}) {

        if (!title || !description || !price || !thumbnail || !code || !stock)
        {
            throw new Error('Todos os campos são obrigatórios.');
        }

        try {

            const existingProducts = JSON.parse(fs.readFileSync(this.path, 'utf-8'));

            const codeExists = existingProducts.some(product => product.code === code); // some = caso a condicao a direita seja verdadeira retorna true e cai no if 
            if (codeExists)
            {
                throw new Error('O código do produto já existe.');
            }

            //calcula o indice do ultimo id utilizando o legnth -1  e acessa o id, na consta e adicionado +1 ao id calculado
            const lastProductId = existingProducts.length > 0 ? existingProducts[existingProducts.length - 1].id : 0;
            const newProduct = {
                id: lastProductId + 1,
                title,
                description,
                price,
                thumbnail,
                code,
                stock
            };
    
            existingProducts.push(newProduct);
            const productsJson = JSON.stringify(existingProducts, null, 2);
            fs.writeFileSync(this.path, productsJson);
            console.log('Produtos salvos com sucesso!');
        } catch (err) 
        {
            console.error('Erro ao salvar os produtos:', err);
        }
    }

    getProductById(id) {

        const existingProducts = JSON.parse(fs.readFileSync(this.path, 'utf-8'));
        const product = existingProducts.find(product => product.id === id);
        if (!product) 
        {
            throw new Error('Produto não encontrado.');
        }
        return product;
    }

    getProducts(){
        try 
        {
            const existingProducts = JSON.parse(fs.readFileSync(this.path, 'utf-8'));
            return existingProducts;
        } catch (err)
        {
            console.error('Erro ao ler os produtos:', err);
        }
    }

    updateProduct(id, updatedProduct) {
        const existingProducts = JSON.parse(fs.readFileSync(this.path, 'utf-8'));
        const productIndex = existingProducts.findIndex(product => product.id === id);
        if (productIndex === -1)
        {
            throw new Error('Produto não encontrado.');
        }
        existingProducts[productIndex] = { ...existingProducts[productIndex], ...updatedProduct }; //spread operator para junat os objetos
        const productsJson = JSON.stringify(existingProducts, null, 2);
        fs.writeFileSync(this.path, productsJson);
    }

    deleteProduct(id) {
        const existingProducts = JSON.parse(fs.readFileSync(this.path, 'utf-8'));
        const productIndex = existingProducts.findIndex(product => product.id === id);
        if (productIndex === -1)
        {
            throw new Error('Produto não encontrado.');
        }
        existingProducts.splice(productIndex, 1);
        const productsJson = JSON.stringify(existingProducts, null, 2);
        fs.writeFileSync(this.path, productsJson);
    }
};

const productManager = new ProductManager();

// lista de produtos
console.log(`Lista completa de produtos: ${JSON.stringify(productManager.getProducts() , 0, 2)}`);

// adiciona um novo produto
productManager.addProduct({
    title: 'cenoura',
    description: 'cenoura',
    price: 10.0,
    thumbnail: 'imagemA.png',
    code: '005',
    stock: 10
});

//busca por id
console.log(`Produto por id: ${JSON.stringify(productManager.getProductById(3) , 0, 2)}`);

// atualiza o preço
productManager.updateProduct(3, { price: 10000.0});

// deleta o produto
productManager.deleteProduct(4);

console.log(`Lista completa de produtos após deletar o 4: ${JSON.stringify(productManager.getProducts() , 0, 2)}`);

