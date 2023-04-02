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

router.post('/contato', function(request, response){
    console.log(request.body);
});

export default router;