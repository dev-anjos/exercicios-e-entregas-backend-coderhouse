// import ProductManager from "./produtcManager.js";

const ProductManager = require('./produtcManager.js');

const productManager = new ProductManager();

function receberProdutos({ title, description, price, thumbnail, code, stock }) {
  productManager.addProduct({ title, description, price, thumbnail, code, stock });
  return productManager;
}

function searchProduct(code) {
    return productManager.getProductById(code);
}
  

// Exemplo de uso:
receberProdutos({
  title: 'Banana',
  description: 'Banana',
  price: 10.0,
  thumbnail: 'imagemA.png',
  code: '001',
  stock: 10
});

receberProdutos({
    title: 'Laranja',
    description: 'Laranja',
    price: 12.0,
    thumbnail: 'imagemB.png',
    code: '002',
    stock: 15
});

console.log(`Lista completa de produtos: ${JSON.stringify(productManager.products, 0, 2)}`);

console.log('Buscando o produto pelo código ',searchProduct(1));