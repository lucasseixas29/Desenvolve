// Pom -----------------------------
function tocaSom(idElementoAudio) {

  document.querySelector(idElementoAudio).play();
}

const listaDeTeclas = document.querySelectorAll('.tecla')

for(let contador = 0; contador<listaDeTeclas.length;contador++){

  const tecla = listaDeTeclas[contador];
  const instrumento = tecla.classList[1];
  const idAudio = `som_${instrumento}`;

    tecla.addEventListener("click", () =>{
      tocaSom(idAudio);
    })
    tecla.onkeydown = ()=> {
      tecla.classList.add(`ativa`);
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