// let lines = document.querySelector('.pixel');
// let numeroDeLinhas = 5;
// let criandoLinha = numeroDeLinhas ;

// function quadro(pixel) {
//     for(let index =0; index < lines.length; index +=1) {
//         Linha(lines[index]);
//         criandoLinha +=1;
//     }
// }
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