import { Router } from 'express';
import { isValidateObjectRequest } from './helpers/validate'; 
import { loadContatos, saveContato } from './helpers/load-data';  

const router = Router();

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


//retornando os dados do request.body no response da rora /contato
router.post('/contato', function (request, response) {
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
    
    response.send({
        sucess: ok,
        message: mensagem
    });

    //rota para receber os dados do novo contato
    router.post('/contato', function (request, response) {
        console.log(request.body);
    });
});

router.get('/contato', function (request, response) {
    //carrega dados do arquivo
    loadContatos();

    response.send(contatos);
})

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