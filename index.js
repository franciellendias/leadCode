const express = require('express');
const axios = require('axios');

const app = express();

app.get('/', async function (req, res) {
    const response = await axios.get('https://viacep.com.br/ws/88130500/json/');
    const cep = response.data;

     res.json(cep);
  
});

app.listen(3000, () => {
  console.log('Servidor rodando na porta 3000');
});

