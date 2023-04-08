import express from 'express';
from './router';import router 

const app = express();
const port = 3000;

app.use(express.json());//add uma configuração para aceitar dados do tipo json
app.use(router);


app.listen(port, function(){
    console.log(`API up Porta: ${port}`)
});