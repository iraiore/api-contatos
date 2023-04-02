import express from 'express';

const app = express();
const port = 3000;

//Rota principal (/), retornando um arquivo em formato json
app.get('/', function(request, response){
    app.
});

app.listen(port, function(){
    console.log(`API up Porta: ${port}`)
});