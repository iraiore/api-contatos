import { Router } from 'express';
import fs from 'fs';

const router = Router();
const ARQUIVO = `${__dirname}/storage/contatos.json`;


let id = 0;
let contatos = Array(); //array para salvar novos contatos

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
    let ok = ture;
    let mensagem = "";

    if (request.body.nome == undefined || request.body.nome == "") {
        if(request.body.nome == "") {
         mensagem = "A propriedade [nome] não deve estar em branco!";
        }
     } else {
         mensagem = "O contato [" + request.body.nome + "] foi salvo com sucesso!";
         ok = true;
     }
     if(ok){
        id++;

        //adiciona o contato na variavel
        contatos.push({id, ...request.body});

        //Escreve no arquivo, salva todos os contatos no arquivo
        fs.writeFileSync(ARQUIVO, JSON.stringify(contatos));
     }

    response.send({
        sucess: ok,
        message: mensagem
    });

    //rota para receber os dados do novo contato
    router.post('/contato', function(request, response){
        console.log(request.body);
    });

    router.get('/contato',function(request, response){
        //carrega dados do arquivo
        loadContatos();

        response.send(contatos);
    })
});

//função que carrega todos os dados na variável global contatos
function loadContatos() {

    //verifica se o arquivo já existe, caso não exista ele cria 
    if (!fs.existsSync(ARQUIVO))
        fs.writeFileSync(ARQUIVO, JSON.stringify([]));
        
     //lê o arquivo e adiciona o conteúdo na variável data
     const data = fs.readFileSync(ARQUIVO);
     
     //converte o conteúdo do arquivo para JSON
     contatos = JSON.parse(data.toString());
}

export default router;