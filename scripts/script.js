const container = document.querySelector('#container');
// Grid base of 16x16
let size = 16;
let cssTextGrid = `grid-template-columns:repeat(${size}, 1fr [col-start]);\n grid-template-rows:repeat(${size}, 1fr [row-start])`
// Add grid to container
container.style.cssText = cssTextGrid;

for (let i = 0; i < size; i++){
    for (let j = 0; j < size; j++){
        let ndiv = document.createElement('div');
        
        container.append(ndiv);
        // ndiv.style.cssText = `grid-column-start: column-start ${j}; grid-row-start: row-start ${i + j};`;
        ndiv.innerText = 'x';
        ndiv.style.cssText = 'display: inline-block; border: solid black 1px;';
        
    }
}
