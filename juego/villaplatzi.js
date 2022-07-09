var dc = document.getElementById("miCanvas"); 
var _lienzo = dc.getContext("2d"); 

document.addEventListener("keydown", sigueTeclado); 
var teclas = {
    ARROW_LEFT: 37, 
    ARROW_UP: 38, 
    ARROW_RIGHT: 39,
    ARROW_DOWN: 40 
}; 
var moveFarmer = 10; 

var fondo = {
    url: "images/tile.png", 
    isLoaded: false
};
fondo.imagen = new Image();
fondo.imagen.src = fondo.url; 
fondo.imagen.addEventListener("load", cargaMapa);

var farmer = {
    url: "images/farmer.png", 
    isLoaded: false, 
    x: 0, 
    y: 0 
};
farmer.imagen = new Image();
farmer.imagen.src = farmer.url; 
farmer.imagen.addEventListener("load", cargaFarmer);

var qtyMin = 0, qtyMax = 10;

var vaca = {
    url: "images/vaca.png", 
    isLoaded: false, 
    qty: aleatorio(qtyMin, qtyMax)
};
vaca.imagen = new Image();
vaca.imagen.src = vaca.url;
vaca.imagen.addEventListener("load", cargaVaca);
console.log("Dibujando "+vaca.qty+" vacas.");

var pollo = {
    url: "images/pollo.png", 
    isLoaded: false, 
    qty: aleatorio(qtyMin, qtyMax)
};
pollo.imagen = new Image();
pollo.imagen.src = pollo.url;
pollo.imagen.addEventListener("load", cargaPollo);
console.log("Dibujando "+pollo.qty+" pollos.");

var cerdo = {
    url: "images/cerdo.png", 
    isLoaded: false, 
    qty: aleatorio(qtyMin, qtyMax)
};
cerdo.imagen = new Image();
cerdo.imagen.src = cerdo.url;
cerdo.imagen.addEventListener("load", cargaCerdo);
console.log("Dibujando "+cerdo.qty+" pollos.");

function sigueTeclado(evento) {
    //console.log(evento);
    switch (evento.keyCode){
       case teclas.ARROW_DOWN:
           farmer.y += moveFarmer; 
           break;
       case teclas.ARROW_UP:
           farmer.y -= moveFarmer; 
           break;
       case teclas.ARROW_LEFT:
           farmer.x -= moveFarmer;
           break;
       case teclas.ARROW_RIGHT:
           farmer.x += moveFarmer;
           break;
       default:
           console.log("Tecla Invalida");
    }

    dibuja();
         
}

function cargaMapa() {
    fondo.isLoaded = true; 
    dibuja();
}
function dibuja() {
    var x,y;
    if (fondo.isLoaded)
        _lienzo.drawImage(fondo.imagen, 0, 0); 
    if (farmer.isLoaded)
        _lienzo.drawImage(farmer.imagen, farmer.x, farmer.y); 
    if (vaca.isLoaded)
        for (var i=0; i< vaca.qty; i++) {
            // x = aleatorio(0, 5) * 60; 
            // y = aleatorio(0, 5) * 60; 
            _lienzo.drawImage(vaca.imagen, vaca.x[i], vaca.y[i]); 
        }
    if (pollo.isLoaded)
        for (var i=0; i< pollo.qty; i++) {
            // x = aleatorio(0, 420); 
            // y = aleatorio(0, 420); 
            // x = aleatorio(0, 5) * 60; 
            // y = aleatorio(0, 5) * 60; 
            _lienzo.drawImage(pollo.imagen, pollo.x[i], pollo.y[i]); 
        } 
    if (cerdo.isLoaded)
        for (var i=0; i< cerdo.qty; i++) {
            // x = aleatorio(0, 420); 
            // y = aleatorio(0, 420); 
            // x = aleatorio(0, 5) * 60; 
            // y = aleatorio(0, 5) * 60; 
            _lienzo.drawImage(cerdo.imagen, cerdo.x[i], cerdo.y[i]); 
        }             
}

function cargaFarmer() {
    farmer.isLoaded = true; 
    dibuja();
}
function cargaPollo() {
    pollo.isLoaded = true; 
    pollo.x = []; 
    pollo.y = [];
    for (var i=0; i< pollo.qty; i++) {
        pollo.x[i] = aleatorio(0, 5) * 60; 
        pollo.y[i] = aleatorio(0, 5) * 60; 
    }
    dibuja();
}
function cargaCerdo() {
    cerdo.isLoaded = true; 
    cerdo.x = []; 
    cerdo.y = [];
    for (var i=0; i< cerdo.qty; i++) {
        cerdo.x[i] = aleatorio(0, 5) * 60; 
        cerdo.y[i] = aleatorio(0, 5) * 60; 
    }
    dibuja();
}
function cargaVaca() {
    vaca.isLoaded = true; 
    vaca.x = []; 
    vaca.y = [];
    for (var i=0; i< vaca.qty; i++) {
        vaca.x[i] = aleatorio(0, 5) * 60; 
        vaca.y[i] = aleatorio(0, 5) * 60; 
    }
    dibuja();
}

function aleatorio(vmin, vmax) {
    var res; 
    res = Math.floor( Math.random() * (vmax - vmin +1 ) ) + vmin; 
    return res; 
}