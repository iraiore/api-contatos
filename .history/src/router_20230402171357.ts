import { Router } from 'express';

const router = Router();

//Rota principal (/), retornando um arquivo em formato json
router.get('/', function(request, response) {
    response.send({
        api_name: 'api-contatos',
        descricao: 'API para gestão de contatos',
        status: 'OK',
    });
});

//rota com as informnações sobre o autor
router.get('/sobre',function(request, response) {
    response.send({
        nome:'Pedro Yago',
        email:'yagoiraiore@gmail.com',
        GitHub: 'github.com/iraiore' 
    });
});



//retornando os dados do request.body no response da rora /contato
router.post('/contato', function(request, response){
    let ok = false;
    let mensagem = "";

    if (request.body.nome == undefined || request.body.nome == "") {
        if(request.body.nome == "") {
         mensagem = "A propriedade [nome] não deve estar em branco!";
        }
     } else {
         mensagem = "O contato [" + request.body.nome + "] foi salvo com sucesso!";
         ok = true;
     }

    response.send({
        sucess: ok,
        message: mensagem
    });
});
export default router;