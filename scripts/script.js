
const container = document.querySelector('#container');
container.style.cssText = 'border: solid 0.5px';
// Grid base of 16x16
let sizeEvent = document.querySelector("#size")
 // Eventually let user decide size
let cssTextGrid = `grid-template-columns:repeat(${sizeEvent.value}, 1fr [col-start]);\n grid-template-rows:repeat(${sizeEvent.value}, 1fr [row-start])`

let inputSlider = document.querySelector('.slider')

let nodeColor = document.querySelector('#colorSelector');
let newColorSelected = nodeColor.value;

const toggleBackgroundButton = document.querySelector("#toggleBackground");
const toggleBordersButton = document.querySelector("#toggleBorders");
let backgroundOn = true;
let bordersOn = true;

toggleBackgroundButton.addEventListener("click", function(){
    if (backgroundOn)
    {
        backgroundOn = false;
        ToggleBackground();
    }
    else{
        backgroundOn = true;
        ToggleBackground();
    }
  
})
toggleBordersButton.addEventListener("click", function(){
    if (bordersOn){
        ToggleBorders();
        bordersOn = false;
    }
    else{
        ToggleBorders();
        bordersOn = true;
    }
    
})

function ToggleBorders(){
    let ndiv = Array.prototype.slice.call(container.children);
    if (bordersOn){
        ndiv.forEach((n)=>{
            n.style.cssText += 'border: none';   
        })
    }
    else{
        ndiv.forEach((n) =>{
            // if (getComputedStyle(n).backgroundColor != 'rgba(255, 255, 255, 0)')
            // {
            //     n.style.cssText += 'border: solid 0.1px rgba(210, 204, 196,1);'
            // }
            container.style.border = 'solid 0.1px rgba(210, 204, 196,1); '
            
            n.style.cssText += 'border: solid 0.1px rgba(210, 204, 196, 1);border-top-style: none; border-right-style:none;'
            
        })
    }
}

function ToggleBackground(){
    let ndiv = Array.prototype.slice.call(container.children);
    let currSize = parseInt(size.value)
    let cont = 0;
    if (backgroundOn){
        if (currSize % 2 == 0)
        {
            for (let i = 0 ; i < ndiv.length; i ++){
                if (i % currSize == 0){
                    cont += 1;
                }
                if (cont % 2 == 0){
                    if (i % 2 != 0 ){
                        
                        if (getComputedStyle( ndiv[i]).backgroundColor == "rgba(0, 0, 0, 0)")
                        {
                            ndiv[i].style.backgroundColor = "rgba(0, 0, 0, 0.1)"
                            ndiv[i].setAttribute('class', 'changeColor');
                            
                        }
                    }
                }
                else {
                    if (i % 2 == 0 ){
                        if (getComputedStyle( ndiv[i]).backgroundColor == "rgba(0, 0, 0, 0)")
                        {
                            
                            ndiv[i].style.backgroundColor = "rgba(0, 0, 0, 0.1)"
                            ndiv[i].setAttribute('class', 'changeColor');
                            
                        }
                    }
                }
            }
        }
        else {
            for (let i = 0 ; i < ndiv.length; i ++){
                
                
                if (i % 2 != 0 ){
                    
                    if (getComputedStyle( ndiv[i]).backgroundColor == "rgba(0, 0, 0, 0)")
                    {
                        
                        ndiv[i].style.backgroundColor = "rgba(0, 0, 0, 0.1)"
                        ndiv[i].setAttribute('class', 'changeColor');
                        
                    }
                }
                
            }
        }   
    }
    else{    
        
        ndiv.forEach((n) =>{
            
            
            if (getComputedStyle(n).backgroundColor == "rgba(0, 0, 0, 0.1)" || getComputedStyle(n).backgroundColor == "rgba(0, 0, 0, 0)")
            {
                
                n.style.backgroundColor = "rgba(0, 0, 0, 0)"
                n.setAttribute('class', 'changeColor');
                
            }
            
        })    
    
    }

}


function CreateGrid(size=16){
    var child = container.lastElementChild; 
    while (child) {
        container.removeChild(child);
        child = container.lastElementChild;
    }
        for (let i = 0; i < size; i++){
            for (let j = 0; j < size; j++){

                if ((j % 2 == 0 && i % 2 == 0) || (j % 2 != 0 && i % 2 != 0))
                {
                    let ndiv = document.createElement('div');
                    // let t = i/size;
                    container.append(ndiv);
                    
                    ndiv.style.cssText = 'display: inline-block; border: solid 0.1px rgba(210, 204, 196, 1); ';
                    ndiv.style.backgroundColor = "rgba(0, 0, 0, 0.1)"
                    ndiv.setAttribute('class', 'changeColor');
                    
                }
                
                else 
                {
                    
                    let ndiv = document.createElement('div');
                    // let t = i/size;
                    container.append(ndiv);
                    
                    ndiv.style.cssText = 'display: inline-block; border: solid 0.1px rgba(210, 204, 196, 1); ';
                    ndiv.setAttribute('class', 'changeColor');
                }
            
            }
        }

    
    GetNewNodes();
 
}

nodeColor.addEventListener("change", (event) =>{
    newColorSelected = event.target.value;
    //GetNewNodes();

})


CreateGrid();


sizeEvent.addEventListener("input", e => {
    let size = sizeEvent.value; 
    if (size > 100 || size == 0){
        sizeEvent.setAttribute("value", "16");
        size = 16;
    }
    cssTextGrid = `grid-template-columns:repeat(${size}, 1fr [col-start]);\n grid-template-rows:repeat(${size}, 1fr [row-start])`;
    container.style.cssText = cssTextGrid;
    CreateGrid(size);
   
})


inputSlider.addEventListener('input', function(){
    sizeEvent.value = inputSlider.value;
    let size = sizeEvent.value; 
    cssTextGrid = `grid-template-columns:repeat(${size}, 1fr [col-start]);\n grid-template-rows:repeat(${size}, 1fr [row-start])`;
    container.style.cssText = cssTextGrid;
    CreateGrid(size);
});
let mouseClickDown = false;
function GetNewNodes(){
    (container.childNodes).forEach(cell => {
        cell.addEventListener('mousedown', () =>{ 
            // mouseover
            mouseClickDown = true;    
            cell.style.backgroundColor = newColorSelected;
            if (bordersOn){
                cell.style.border = "solid 0.1px rgba(210, 204, 196,1)";
            }
            cell.style.borderTopStyle = "none";
            cell.style.borderRightStyle = "none";        
        })
        cell.addEventListener('mouseup', ()=>{mouseClickDown = false})
        cell.addEventListener('dblclick', () => {mouseClickDown = false})
        cell.addEventListener('mousemove', () => {
            if (mouseClickDown)
            {
                cell.style.backgroundColor = newColorSelected;
                if (bordersOn){
                    cell.style.border = "solid 0.1px rgba(210, 204, 196,1)";
                }
                cell.style.borderTopStyle = "none";
                cell.style.borderRightStyle = "none";
            }
        })
    });
   
}
    // Add grid to container
container.style.cssText = cssTextGrid;

// TODO:

// Add reset button
// Fix outer borders

// Box shade on grid


// Organize elements 
// Credits (my discord)
// Fix border after toggling it and colouring again