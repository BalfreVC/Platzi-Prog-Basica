var d = document.getElementById("miCanvas"); 
var _lienzo = d.getContext("2d"); 
var _inDotSize = document.getElementById("inDotSize");
_inDotSize.valueAsNumber = 1;

// Listeners 
document.addEventListener("keydown", sigueTeclado); 
d.addEventListener("mousedown", iniciaPintaMouse); 
d.addEventListener("mouseup", finPintaMouse); 
d.addEventListener("mousemove", pintaMouse); 
document.getElementById("inColor").addEventListener("change", cambioColor);

console.log(_inDotSize);

var enableMousePainting = false; 
var colorLinea = "blue";
var pInicial = { x: 149, y: 149}; 
var pFinal = { x: 151, y:151 };
var moveFarmer = 2; 
var teclas = {
    ARROW_LEFT: 37, 
    ARROW_UP: 38, 
    ARROW_RIGHT: 39,
    ARROW_DOWN: 40 
}; 

creaLinea(colorLinea, pInicial.x, pInicial.y, pFinal.x, pFinal.y, _lienzo);
pInicial.x = pFinal.x; 
pInicial.y = pFinal.y; 

function cambioColor(evento){
    console.log(evento);
    console.log(evento.target.value);
    colorLinea = evento.target.value;
}
function finPintaMouse(evento) {
    // console.log("finPintaMouse");
    // console.log(evento);
    enableMousePainting = false; 
}
function iniciaPintaMouse(evento) {
    // console.log("iniciaPintaMouse");
    // console.log(evento);
    enableMousePainting = true; 
    pInicial.x = evento.layerX - d.offsetLeft; 
    pInicial.y = evento.layerY - d.offsetTop; 
}
function pintaMouse(evento) {
    if (enableMousePainting) {
        // console.log("pintaMouse");
        // console.log(evento);
        
        pFinal.x = evento.layerX - d.offsetLeft; 
        pFinal.y = evento.layerY - d.offsetTop; 
        creaLinea(colorLinea, pInicial.x, pInicial.y, pFinal.x, pFinal.y, _lienzo);
        pInicial.x = pFinal.x; 
        pInicial.y = pFinal.y; 
    }
        
}

function sigueTeclado(evento) {
     //console.log(evento);
     switch (evento.keyCode){
        case teclas.ARROW_DOWN:
            pFinal.y += moveFarmer; 
            break;
        case teclas.ARROW_UP:
            pFinal.y -= moveFarmer; 
            break;
        case teclas.ARROW_LEFT:
            pFinal.x -= moveFarmer;
            break;
        case teclas.ARROW_RIGHT:
            pFinal.x += moveFarmer;
            break;
        default:
            console.log("Tecla Invalida");
     }
          
     creaLinea(colorLinea, pInicial.x, pInicial.y, pFinal.x, pFinal.y, _lienzo);
     pInicial.x = pFinal.x; 
     pInicial.y = pFinal.y;      
     //console.log(pInicial, pFinal);
}

function creaLinea(color, xi, yi, xf, yf, lienzo) {
    lienzo.beginPath();
    lienzo.strokeStyle = color; 
    lienzo.moveTo(xi, yi); 
    lienzo.lineTo(xf, yf); 
    lienzo.lineWidth = _inDotSize.valueAsNumber ; 
    lienzo.stroke(); 
    lienzo.closePath();
}