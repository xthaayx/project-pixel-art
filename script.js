console.log("teste");
function quadro() {
    //criando coluna
    for (let index = 0; index < 5; index += 1) {
        let divPai = document.querySelector('#pixel-board');
        let criandoPixel = document.createElement('div');
        divPai.appendChild(criandoPixel)[index];
        // console.log("linha");
        //criando linha
        for (let index2 = 0; index2 < 5; index2 +=1 ) {
            let divLinha = document.createElement('div');
            divLinha.className = 'pixel';

            divPai.appendChild(divLinha)[index];
            // console.log("coluna");
        }
    }
}
quadro();

//crie variavel que puxa o id da paleta
let selecionaColor = document.querySelector ('#color-palette');
let cor = "black"

function mudarCor(){
    //criei um evento de click na paleta
    selecionaColor.addEventListener('click', function(event){
        let corSelecionada = document.querySelector('.selected');
        //encremento de remove e add
        corSelecionada.classList.remove('selected');
        event.target.classList.add('selected');
        cor = event.target.id;
    })
}
mudarCor();

// //função adc cor no pixel
  function corNoPixel(){
      let pixelArt = document.querySelectorAll('.pixel');
      for(let indexCor =0; indexCor < pixelArt.length; indexCor +=1){
          pixelArt[indexCor].addEventListener('click', function(e){
              pixelArt[indexCor].style.backgroundColor = cor;
          });
      }
  }
  corNoPixel();

//função de limpar
  function clear() {
     //variavel que puxa a classe pixel 
     let pixel = document.getElementsByClassName('pixel');
      for (let index = 0; index < pixel.length; index += 1) {
        pixel[index].style.backgroundColor = "white";
      }
    }
    //variavel que puxa o id do botão para adc o evento de click
    let clearPixel = document.getElementById('clear-board');
    clearPixel.addEventListener('click', clear); 


    