const paletteContainer = document.getElementById('paletteContainer');
const colorValues = ['1','2','3','4','5','6','7','8','9','A','B','C','D','E','F'];
const PALETTE_SIZE = 5;

const createPalette = () => {
  for(let i = 0; i < PALETTE_SIZE; i++) {
    const paletteElement = document.createElement('div');
    paletteElement.classList.add('paletteItem');
    paletteContainer.appendChild(paletteElement);
  }
  updatePalette();
} 

const colorize = (element) => {
  let color = '#';
  for(let i = 0; i < 6; i++) {
    const randomElement = colorValues[Math.floor(Math.random() * colorValues.length)];
    color += randomElement;
  };
  element.style.backgroundColor = color;
  element.innerHTML = `<span class='colorHex'>${color}<span>`

}

const updatePalette = () => {
  for (let i = 0; i < paletteContainer.children.length; i++) {
    colorize(paletteContainer.children[i])

  }
}

createPalette();