import { Router } from 'express';
import { isValidateObjectRequest } from './helpers/validate'; 
import { loadContatos, saveContato } from './helpers/load-data';  

const router = Router();





    //rota para receber os dados do novo contato
    router.post('/contato', function (request, response) {
        console.log(request.body);
    });




export default router;*/