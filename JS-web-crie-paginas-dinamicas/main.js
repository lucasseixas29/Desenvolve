// Pom -----------------------------
function tocaSom(seletorAudio) {
  const elemento = document.querySelector(seletorAudio);
  
    if(elemento === null) {
      console.log("Elemento não encontrado.")
    } else if(elemento !== null && elemento.localName === "audio") {
        elemento.play()
      } else {
        console.log("Elemento não encontrado ou seletor inválido.")
      }
      
    }


const listaDeTeclas = document.querySelectorAll('.tecla')

for(let contador = 0; contador<listaDeTeclas.length;contador++){

  const tecla = listaDeTeclas[contador];
  const instrumento = tecla.classList[1];
  const idAudio = `som_${instrumento}`;

    tecla.addEventListener("click", () =>{
      tocaSom(idAudio);
    })
    tecla.onkeydown = (evento)=> {
      if(evento.code ==='Space' || evento.code === "Enter") {

        tecla.classList.add(`ativa`);
      }
    }
    tecla.onkeyup = ()=> {
      tecla.classList.remove(`ativa`)
    }
    
}
/*let contador = 0;
while(contador < listaDeTeclas.length) {

  const tecla = listaDeTeclas[contador];

  const instrumento = tecla.classList[1];
  const idAudio = `#som_${instrumento}`;

    tecla.addEventListener("click",()=>{
      tocaSom(idAudio);
    });

    contador++
}
*/