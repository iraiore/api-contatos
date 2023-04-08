import { Router } from "express";
import { isValidateObjectRequest } from './helpers/validate'; 
import { loadContatos, saveContato } from './helpers/load-data';  

const router = Router();

router.get('/', function (request, response) {
    //carrega dados do arquivo
    const contatos = loadContatos();
    response.send(contatos);

});

//retornando os dados do request.body no response da rora /contato
router.post('/', function (request, response) {
    let ok = true;
    let mensagem = "Contato salvo com sucesso!";

    const inputs = [
        {
            name: "nome",
            message:"A propriedade [nome] não deve estar em indefinida/vazio!"
        },
        {
            name: "email",
            message:"A propriedade [email] não deve estar em indefinida/vazio!"            
        }
    ];

    const checkValidate = isValidateObjectRequest(request, inputs)

    if(Array.isArray(checkValidate)){
        ok = false;
        mensagem = checkValidate.join(',');
    }

    if(ok){
        saveContato(request.body)
    }
    
    response.send({
        sucess: ok,
        message: mensagem
    })
});   

export default router;