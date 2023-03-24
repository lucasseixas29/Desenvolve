// Pom -----------------------------
function tocaSom(idElementoAudio) {

  document.querySelector(idElementoAudio).play();
}

const listaDeTeclas = document.querySelectorAll('.tecla')

/*for(let i = 0; i<listaDeTeclas.length;i++){
    listaDeTeclas[i].addEventListener('click', tocaSomPom);
}*/
let contador = 0;
while(contador < listaDeTeclas.length) {

  const tecla = listaDeTeclas[contador];

  const instrumento = tecla.classList[1];
  const idAudio = `#som_{instrumento}`;

    tecla.addEventListener("click",()=>{
      tocaSom(idAudio);
    });

    contador++

}