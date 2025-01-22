const {Router} = require('express');
const router = Router();
let pets = [];

router.get('/', (req, res) => {
   return res.status(200).json(pets); 
})

router.post('/', (req, res) => {
   try {
    const { name, age } = req.body;
    console.log(req.body);
    pets.push({ name, age });

    res.status(201).json({ message: 'animal cadastrado' });
  
   } catch (error) {
    res.status(500).json({ error: 'Ocorreu um erro' });
   }
})

module.exports = router;