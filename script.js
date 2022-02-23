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
//cria variavel que puxa o id da paleta
let selecionaColor = document.querySelector ('#color-palette');
let cor = "black"
//cria função pra mudar a cor
function mudarCor(){
    //cria um evento de click na paleta
    selecionaColor.addEventListener('click', function(event){
        let corSelecionada = document.querySelector('.selected');
        //encrementos de remover e adcionar evendo verifica no stackoverflow
        corSelecionada.classList.remove('selected');
        event.target.classList.add('selected');
        cor = event.target.id;
    })
}
mudarCor();

