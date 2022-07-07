const container = document.querySelector('#container');
// Grid base of 16x16
let size = 16;
// Add grid to container

for (let i = 0; i < size; i++){
    let div = document.createElement('div');
    div.style.cssText = `grid-column:${i+1}/${size}`
    div.style.cssText = `grid-row:${i+1}/${size}`;
    
    div.innerText = 'x';
    container.append(div);
}

container.style.cssText = 'grid-template-columns:repeat(16,1fr)';
container.style.cssText = 'grid-template-rows:repeat(16,1fr)';