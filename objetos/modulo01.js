const pessoa = {
    nome:"Peter Parker",
    dataNascimento:"25/05/1989",
    carteiraIdentidade:"999362-1",
    email:"peterparker@email.com",
    telefone:"+552711112222",
    cidade:"Cariacica",
    estado:"ES"
 }

 pessoa.cpf = '9993100303';
 const chaves = ['nome', 'dataNascimento', 'carteiraIdentidade', 'email', 'telefone', 'cidade', 'estado', 'cpf'];
 
 console.log(pessoa[chaves[7]]);