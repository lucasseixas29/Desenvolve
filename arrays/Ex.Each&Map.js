const numeros = [0,1,2,3,4,5];
const texto = ['Oi', 'tudo', 'bem?']
/*numeros.forEach(x=> {
    if(x % 2 == 0) {
        console.log(x+ " é par");
    } else {
        console.log(x+ " é ímpar");
    }
}) */

/*let dobro = numeros.map(item =>  item = item*2);
console.log(dobro);*/

/*let caps = texto.map(item => item.toUpperCase());
console.log(caps);*/
    


const dimensoes = [
    { altura: 10, comprimento: 20},
    { altura: 2, comprimento: 4},
    { altura: 1, comprimento: 1},
    { altura: 50, comprimento: 50}
  ]

  let  calc = dimensoes.map((item) => item.altura * item.comprimento)
  
  let somaTotal = 0;

  for(let i = 0; i<calc.length; i++) {
    somaTotal += calc[i]
  }

  console.log(somaTotal);