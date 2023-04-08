import express from 'express';
import router from 

const app = express();
const port = 3000;

app.use(express.json());//add uma configuração para aceitar dados do tipo json
app.use(router);


app.listen(port, function(){
    console.log(`API up Porta: ${port}`)
});