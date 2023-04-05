async function buscaEndereco(cep) {
    let mensagemErro = document.querySelector("#erro"); 
    mensagemErro.innerHTML = "";

    try {

    

    let consultaCep = await fetch(`https://viacep.com.br/ws/${cep}/json/`)
    let consultaCepConvertida = await consultaCep.json()
    if(consultaCepConvertida.erro) {
        throw Error("CEP não existente!")
    }
    let cidade = document.querySelector("#cidade");
    let logradouro = document.querySelector("#endereco");
    let estado = document.querySelector("#estado");
    let bairro = document.querySelector("#bairro");

    cidade.value = consultaCepConvertida.localidade;
    logradouro.value = consultaCepConvertida.logradouro;
    estado.value = consultaCepConvertida.uf;
    bairro.value = consultaCepConvertida.bairro;

    console.log(consultaCepConvertida)
    return consultaCepConvertida;
    } catch(erro) {
        mensagemErro.innerHTML = `<p>CEP inválido. Tente novamente!
    }
}

let cep = document.querySelector("#cep")
cep.addEventListener("focusout",() => buscaEndereco(cep.value));


/*let ceps = ['01001000', '01001001'];
let conjuntoCeps = ceps.map(valores => buscaEndereco(valores));
Promise.all(conjuntoCeps).then(respostas => console.log(respostas));*/


/*let consultaCep = fetch('https://viacep.com.br/ws/01001000/json/')
.then((response)=>response.json())
.then((r) => {
if(r.erro) {
    throw Error("este cep não existe")
} else {
    console.log(r)
}

})
.catch(erro => console.log(erro))
.finally(mensagem => console.log("Processamento concluído"))
console.log(consultaCep)
*/