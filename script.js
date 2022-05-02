let grid = document.getElementById('grid');
const btnClear = document.getElementById('clear-board');
const btnResize = document.getElementById('btn-grid-size');
let size = 20;
let contLine = 1;
createGrid(size);
function createGrid(size) {
	for (let index = 0; index < size; index += 1) {
		const linePixel = document.createElement('div');
		linePixel.id = 'line-grid' + (index + 1);
		grid.appendChild(linePixel);
		for (let index = 0; index < size; index += 1) {
			const pixel = document.createElement('div');
			pixel.className = 'pixel';
			document.getElementById('line-grid' + contLine).appendChild(pixel);
		}
		contLine += 1;
	}
}
let arrayPixel = document.getElementsByClassName('pixel');
grid.addEventListener('click', function() {
	for (let index = 0; index < arrayPixel.length; index += 1) {
		arrayPixel[index].addEventListener('click', function (event) {
			let pixelClicked = event.target;
			console.log(arrayPixel);
			pixelClicked.style.cssText = 'background-color: ' + document.getElementById('colorPicker').value;
		});
	}
});
btnClear.onclick = function () {
	for (let index = 0; index < arrayPixel.length; index += 1) {
		arrayPixel[index].style.cssText = 'background-color: white';
	}
};
btnResize.onclick = function () {
	size = document.getElementById('size-grid').value;
	grid.innerHTML = '';
	contLine = 1;
	createGrid(size);
	arrayPixel = document.getElementsByClassName('pixel');
	console.log(arrayPixel);
};
