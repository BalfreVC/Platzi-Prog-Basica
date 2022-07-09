// Creando caja
var caja = new Caja("Caja 1"); 
caja.agregaDinero( new Billete(50, 3) ); 
caja.agregaDinero( new Billete(20, 2) );
caja.agregaDinero( new Billete(10, 2) );  

var b = document.getElementById("btnExtraer");
b.addEventListener("click", extraerDinero); 

var msg = document.getElementById("msg"); 
var msgDisponible = document.getElementById("msgDisponible");

actualizarDisponible(msgDisponible, caja);

function actualizarDisponible(htmlTag, objCaja) {
    // console.log("In Act Disp", htmlTag);
    // console.log(objCaja); 
    htmlTag.innerHTML = objCaja.mostrarDisponible(); 
    htmlTag.innerHTML += "<br />" + objCaja.mostrarBilletesDisponibles();
}

function extraerDinero() {
    var inDinero = document.getElementById("txtDinero");
    var dinero = parseInt(inDinero.value); 
    
    //console.log(caja);

    console.log("Retirar: " + dinero); 
    console.log("Disponible: " + caja.dineroDisponible );
    
    var res = caja.retirarDinero(dinero);
    // console.log(res);
    
    if ( typeof res === "object" ) {
        // console.log("Listo para entrar");
        actualizarDisponible(msg, res);
    } else {
        msg.innerHTML = res;
    }

    // console.log(res);
    
    // console.log(caja);
    actualizarDisponible(msgDisponible, caja);
    console.log("Fin");
}

