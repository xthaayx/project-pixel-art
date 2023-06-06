/* eslint-disable no-loop-func */
console.log('teste');
function quadro() {
  // criando coluna
  for (let index = 0; index < 5; index += 1) {
    const divPai = document.querySelector('#pixel-board');
    const criandoPixel = document.createElement('div');
    divPai.appendChild(criandoPixel);
    // criando linha
    for (let index2 = 0; index2 < 5; index2 += 1) {
      const divLinha = document.createElement('div');
      divLinha.className = 'pixel';

      divPai.appendChild(divLinha);
    }
  }
}
quadro();

// crie variavel que puxa o id da paleta
const selecionaColor = document.querySelector('#color-palette');
let cor = 'black';

function mudarCor() {
  // criei um evento de click na paleta
  selecionaColor.addEventListener('click', (event) => {
    const corSelecionada = document.querySelector('.selected');
    // encremento de remove e add
    corSelecionada.classList.remove('selected');
    event.target.classList.add('selected');
    cor = event.target.id;
  });
}
mudarCor();

// //função adc cor no pixel
function corNoPixel() {
  const pixelArt = document.querySelectorAll('.pixel');
  for (let indexCor = 0; indexCor < pixelArt.length; indexCor += 1) {
    pixelArt[indexCor].addEventListener('click', () => {
      pixelArt[indexCor].style.backgroundColor = cor;
    });
  }
}
corNoPixel();

// função de limpar
function clear() {
  // variavel que puxa a classe pixel
  const pixel = document.getElementsByClassName('pixel');
  for (let index = 0; index < pixel.length; index += 1) {
    pixel[index].style.backgroundColor = 'white';
  }
}
// variavel que puxa o id do botão para adc o evento de click
const clearPixel = document.getElementById('clear-board');
clearPixel.addEventListener('click', clear);
