
const container = document.querySelector('#container');
container.style.cssText = 'border: solid 0.5px';
// Grid base of 16x16
let sizeEvent = document.querySelector("#size")
 // Eventually let user decide size
let cssTextGrid = `grid-template-columns:repeat(${sizeEvent.value}, 1fr [col-start]);\n grid-template-rows:repeat(${sizeEvent.value}, 1fr [row-start])`

let inputSlider = document.querySelector('.slider')


function CreateGrid(size=16){
    var child = container.lastElementChild; 
    while (child) {
        container.removeChild(child);
        child = container.lastElementChild;
    }
    

    for (let i = 0; i < size; i++){
        for (let j = 0; j < size; j++){
            let ndiv = document.createElement('div');
            // let t = i/size;
            container.append(ndiv);
            // ndiv.style.cssText = `grid-column-start: column-start ${j}; grid-row-start: row-start ${i + j};`;
            //ndiv.innerText = 'x';
            //ndiv.style.cssText = `width:${t}`;
            //ndiv.style.cssText = ${width}`;
            ndiv.style.cssText = 'display: inline-block; border: solid black 0.5px; border-top-style:none; border-right-style:none' ;
            
        }
    }  
    // let last = container.lastElementChild;
    // if (last){
    //     last.dispatchEvent(borderEvent);
    // }
    
}




CreateGrid();


sizeEvent.addEventListener("input", e => {
    let size = sizeEvent.value; 
    if (size % 2 != 0 || size > 128 || size == 0){
        sizeEvent.setAttribute("value", "16");
        size = 16;
    }
    cssTextGrid = `grid-template-columns:repeat(${size}, 1fr [col-start]);\n grid-template-rows:repeat(${size}, 1fr [row-start])`;
    container.style.cssText = cssTextGrid;
    CreateGrid(size);
   
})


inputSlider.addEventListener('input', function(){
    inputSlider.style.cssText = `background: ${inputSlider.value}`;
    console.log(inputSlider.value)
})
// Add grid to container
container.style.cssText = cssTextGrid;

