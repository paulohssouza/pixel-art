const grid = document.getElementById('grid');
let size = 20;
let contLine = 1;
for (let index = 0; index < size; index += 1) {
    const linePixel = document.createElement('div');
    linePixel.id = 'line-grid' + (index + 1);
    grid.appendChild(linePixel);
    for (let index = 0; index < size; index += 1){
        const pixel = document.createElement('div');
        pixel.className = 'pixel';
        document.getElementById('line-grid' + contLine).appendChild(pixel);
    }
    contLine += 1;

}

