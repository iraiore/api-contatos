import { Router } from "express";
import { isValidateObjectRequest } from './helpers/validate'; 
import { loadContatos, saveContato } from './helpers/load-data';  

const router = Router();

router.get('/contato', function (request, response) {
    //carrega dados do arquivo
    const contatos = loadContatos();
    response.send(contatos);

});