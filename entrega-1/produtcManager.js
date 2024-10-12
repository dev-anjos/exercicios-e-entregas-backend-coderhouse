 class ProductManager {

    constructor() {
        this.products = [];
        this.id = 1;
    }

    addProduct({title, description, price, thumbnail, code, stock}) {

        if (!title || !description || !price || !thumbnail || !code || !stock) {
            throw new Error('Todos os campos são obrigatórios.');
        }

        const codeExists = this.products.some(product => product.code === code);
        if (codeExists) {
            throw new Error('O código do produto já existe.');
        }

        const newProduct = {
            id: this.id++,
            title,
            description,
            price,
            thumbnail,
            code,
            stock
        };

        this.products.push(newProduct);
        // console.log(this.products);
    
    }

    getProductById(id) {
        const product = this.products.find(product => product.id === id);
        if (!product) {
            throw new Error('Produto não encontrado.');
        }
        return product;
    }
};

module.exports = ProductManager;


