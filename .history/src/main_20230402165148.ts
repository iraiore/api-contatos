import express from 'express';

const app = express();
const port = 3000;

app.use(rotuer)


app.listen(port, function(){
    console.log(`API up Porta: ${port}`)
});