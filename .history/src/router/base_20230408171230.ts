import { Router } from "express";
import { v4 as uuidv4 } from 'uuid';
import { isValidateObjectRequest } from "../helpers/validate";  

const router = Router();

let contatos = Array

//Rota principal (/), retornando um arquivo em formato json
router.get('/', function (request, response) {
    response.send({
        api_name: 'api-contatos',
        descricao: 'API para gestão de contatos',
        status: 'OK',
    });
});

//rota com as informnações sobre o autor
router.get('/sobre', function (request, response) {
    response.send({
        nome: 'Pedro Yago',
        email: 'yagoiraiore@gmail.com',
        GitHub: 'github.com/iraiore'
    });
});

export default router;