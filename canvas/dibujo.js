var d = document.getElementById("dibujito"); 
var lienzo = d.getContext("2d"); 

var _incremento = document.getElementById("txtIncremento");
var _btnCrear = document.getElementById("btnCrear");
_btnCrear.addEventListener("click", pintarXClic);

function pintarXClic() {
    creaCurva("red", _incremento.value, "SE", 0, 250, 150, 100); 
    creaCurva("red", _incremento.value, "SO", 150, 250, 300, 100); 
}

creaLinea("red", 140, 140, 160, 160); 
//creaLinea("red", 100, 10, 250, 50); 
/*
    lienzo.beginPath();
    lienzo.strokeStyle = "red"; 
    lienzo.moveTo(100, 100); 
    lienzo.lineTo(200, 200); 
    lienzo.stroke(); 
    lienzo.closePath();
*/

creaCurva("blue", 10, "NO", 0, 150, 150, 0);
creaCurva("black", 10, "NE", 150, 150, 300, 0); 
creaCurva("black", 10, "SO", 0, 300, 150, 150); 
creaCurva("blue", 10, "SE", 150, 300, 300, 150); 



/*
creaCurva("red", 10, "SE", 50, 250, 150, 50);
creaCurva("red", 10, "SO", 150, 250, 250, 50); 
*/

//creaCurva("black", 10, "SS", 0, 300, 150, 150); 


function creaCurva(color, incremento, orientacion, xi, yi, xs, ys) {
    // orientacion: NE, NO, SE, SO
    var movX, movY; 
    var x1, y1, x2, y2; 
    if (orientacion == "NO") {
        movX = incremento * 1; 
        movY = incremento * -1; 
        x1 = 0; 
        y1 = yi; 
        x2 = 0; 
        y2 = 0;    
    } else if (orientacion == "NE") {
        movX = incremento * 1; 
        movY = incremento * 1; 
        x1 = xi; 
        y1 = 0; 
        x2 = xs; 
        y2 = ys;
    } else if (orientacion == "SO") {
        movX = incremento * 1; 
        movY = incremento * 1; 
        x1 = xi; 
        y1 = ys; 
        x2 = xi; 
        y2 = yi;
    } else if (orientacion == "SE") {
        movX = incremento * 1; 
        movY = incremento * -1; 
        x1 = xi; 
        y1 = yi; 
        x2 = xs; 
        y2 = yi; 
    } else {
        console.log("Error Orientacion Invalida.")
        return 0; 
    } 
    console.log("Movimientos " + movX + ", "+ movY); 
    var MaxIx = (xs - xi) / incremento; 
    //var MaxIy = (ys - yi) / incremento; 
   // if (MaxIx < 0 )
    //    MaxIx = MaxIx * -1; 
    //if (MaxIy < 0 )
    //    MaxIy = MaxIy * -1;     
    var i = 0; 
    
    //console.log("Maximos "+ MaxIx + ", "+ MaxIy);
        
    while (i<=MaxIx) {
        console.log(x1, y1, x2, y2);
        creaLinea(color, x1, y1, x2, y2); 
        //alert('hola');            

        if (orientacion == "NO") {
            y1 = y1 + movY; 
            x2 = x2 + movX; 
        } else if (orientacion == "NE") {
            x1 = x1 + movX; 
            y2 = y2 + movY; 
        } else if (orientacion == "SO") {
            y1 = y1 + movY; 
            x2 = x2 + movX; 
        } else if (orientacion == "SE") {
            x1 = x1 + movX; 
            y2 = y2 + movY; 
        }
        i ++; 
    }
    

}

function creaLinea(color, xi, yi, xf, yf) {
    lienzo.beginPath();
    lienzo.strokeStyle = color; 
    lienzo.moveTo(xi, yi); 
    lienzo.lineTo(xf, yf); 
    lienzo.stroke(); 
    lienzo.closePath();
}