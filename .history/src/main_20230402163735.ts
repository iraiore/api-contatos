import express from 'express';

const app = express();
const port = 3000;

app.get('/', function(request, response){
    response.send('API contatos rodando...')
});