const {Router} = require('express');

const router = Router();

let users = [];

router.get('/', (req, res) => {
   return res.status(200).json(users); 
})

router.post('/', (req, res) => {
   try {
    const { name, email } = req.body;
    console.log(req.body);
    users.push({ name, email });

    res.status(201).json({ message: 'Usário criado com sucesso' });
  
   } catch (error) {
    res.status(500).json({ error: 'Ocorreu um erro' });
   }
})

module.exports = router;