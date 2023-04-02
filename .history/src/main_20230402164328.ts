import express from 'express';

const app = express();
const port = 3000;

//Rota principal (/), retornando um arquivo em formato json
app.get('/', function(request, response){
    response.send({
        api_name: 'api-contatos',
        descricao
    });
});

app.listen(port, function(){
    console.log(`API up Porta: ${port}`)
});