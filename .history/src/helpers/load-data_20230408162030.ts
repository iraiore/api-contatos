import fs from 'fs';

const ARQUIVO = `${__dirname}/../storage/contatos.json`;

let cocntatos = Array();

function loadContatos() {
    console.log(ARQUIVO)

    //Verifica se o arquivo existe, caso não exista ele cria
    if(!fs.existsSync(ARQUIVO))
        fs.writeFileSync(ARQUIVO, JSON.stringify([]));
        
    //Lê o arquivo e adiciona o conteúdo a varivável 'data'
    const data = fs.readFileSync(ARQUIVO)    
}