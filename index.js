const express = require('express');
const axios = require('axios');

const app = express();

app.get('/', async function (req, res) {
    const response = await axios.get('https://rickandmortyapi.com/api/character');
    const charactersRickAndMorty = response.data;

     res.json(charactersRickAndMorty);
  
});

app.listen(3000, () => {
  console.log('Servidor rodando na porta 3000');
});

