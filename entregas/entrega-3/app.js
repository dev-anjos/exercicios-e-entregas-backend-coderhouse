
const express = require('express');
const productManager = require('./produtcManager.js');
const pm = new productManager
const app = express();

app.get('/products', async (req, res) => {
    
    pm.getProducts().then(products => {
        const limit = req.query.limit;

        if (limit) {
            const limitedProducts = products.slice(0, limit);
            res.json(limitedProducts);
        } else {
            res.json(products);
        }
    })

})

app.get('/products/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const product = await pm.getProductById(id);
        const htmlResponse = `
        <html>
            <body>
                <h1 style="color: red">${product.title}</h1>
                <p>${product.description}</p>
                <p>${product.price}</p>
                <p>${product.thumbnail}</p>
                <p>${product.code}</p>
                <p>${product.stock}</p>
            </body
        </html>
        `
        res.send(htmlResponse);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao obter os produtos' });
    }

})


module.exports = app;