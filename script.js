window.onload = function () {
    let size = 5;
    const sectColorPallet = document.getElementById('color-palette')
    createPallet();
    const colorSelected = document.querySelector('#cor1');
    colorSelected.classList.add('selected');
    const allColors = document.querySelectorAll('.color');
    const btnLimpar = document.getElementById('clear-board');
    const sectPixelBoard = document.getElementById('pixel-board');
    let allPixels = [];
    createPixel();
    const inputUser = document.getElementById('input');
    const labelSize = document.createElement('p');
    const inputSize = document.createElement('input');
    const insertButton = document.createElement('button');
    insertButton.innerHTML = 'VQV';
    insertButton.id = 'generate-board';
    inputSize.type = 'number';
    inputSize.min = 1;
    inputSize.id = 'board-size';
    labelSize.innerHTML = 'Digite o tamanho do quadro (Mínimo 5, máximo 50):'
    inputUser.appendChild(labelSize);
    inputUser.appendChild(inputSize);
    inputUser.appendChild(insertButton);
    insertButton.addEventListener('click', function () {
        size = inputSize.value;
        if (size === "") {
            alert('Board inválido!');
        }else if (size < 5) { 
            size = 5;
                sectPixelBoard.innerText = '';
                createPixel();
                alert('Digite um valor entre 5 e 50!');
        } else if (size > 50) {
            size = 50;
                sectPixelBoard.innerText = '';
                createPixel();
                alert('Digite um valor entre 5 e 50!');
        }else {
                sectPixelBoard.innerText = '';
                createPixel();
        }
    });
    document.addEventListener('click', pixelSelect(allPixels));
    function colorSelector(element) {
        const elementSelected = document.querySelector('.selected');
        if (elementSelected.id !== element.id) {
            elementSelected.classList.remove('selected');
            element.classList.add('selected');
        }
    }
    function createPixel() {
        let contLine = 1;
        for (let index = 0; index < size; index += 1) {
            let newDivLine = document.createElement('div');
            newDivLine.id = 'Line' + (index + 1);
            sectPixelBoard.appendChild(newDivLine);
            for (let index = 0; index < size; index += 1) {
                let newDivColun = document.createElement('div');
                let divLine = document.getElementById('Line' + contLine);
                newDivColun.classList.add('pixel');
                divLine.appendChild(newDivColun);
            }
            contLine += 1;
        }
        allPixels = document.querySelectorAll('.pixel');
        document.addEventListener('click', pixelSelect(allPixels));
    }
    function createPallet(){
        for(let index = 0; index < 4; index += 1){
            let newDivPallet = document.createElement('div');
            newDivPallet.id = "cor" + (index + 1);
            sectColorPallet.appendChild(newDivPallet);
            newDivPallet.className = "color";
            let red = Math.floor(Math.random()*255),
                blue = Math.floor(Math.random()*255),
                green = Math.floor(Math.random()*255);
            if(index === 0){
                newDivPallet.style.cssText = 'background-color: rgb(0,0,0)';
            } else {
                newDivPallet.style.cssText = 'background-color: rgb('+red+','+blue+','+green+')';
            }
        }
    }
    for (let index = 0; index < allColors.length; index += 1) {
        allColors[index].addEventListener("click", function (event) {
            let colorClicked = event.target;
            colorSelector(colorClicked);
        });
    }
    function pixelSelect(arrayPixel) {
        for (let index = 0; index < arrayPixel.length; index += 1) {
            arrayPixel[index].addEventListener('click', function (event) {
                let pixelClicked = event.target;
                let color = document.querySelector('.selected');
                pixelClicked.style.cssText = color.style.cssText;
                console.log(event.target);
            });
        }
    }
    btnLimpar.onclick = function () {
        for (let index = 0; index < allPixels.length; index += 1) {
            allPixels[index].style.cssText = '';
        }
    };
}
