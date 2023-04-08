//função para verificar se os dados entrados pelo post são validos
function isValidateRequest(request: any, inputs: string[]) {
    if(inputs.length == 0)
        return false;

        for(let i = 0; i < inputs.length; i++) {
            if(request.body[inputs[i]] == undefined)
        }
}