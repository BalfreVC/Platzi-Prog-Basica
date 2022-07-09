var imagenes = [];
imagenes["Cauchin"] = "img/cerdo.png";
imagenes["Tocinauro"] = "img/vaca.png";
imagenes["Pokacho"] = "img/pollo.png";

class Pakiman {

    constructor(nombre, vida, ataque) {
        this.nombre = nombre; 
        this.vida = vida; 
        this.ataque = ataque; 
        this.imagen = new Image();
        this.imagen.src = imagenes[this.nombre];
    }
    hablar () {
        alert(this.nombre);
    }
    mostrar() {
        document.write("<p>");
        document.write("<strong>" + this.nombre + "</strong> <br/>");
        document.write("Vida: " + this.vida + "<br />");
        document.write("Ataque: " + this.vida + "<br />");
        document.body.appendChild(this.imagen);
        document.write("</p>");
    }
}

// var cauchin = new Pakiman("Cauchin", 100, 30);
// var pokacho = new Pakiman("Pokacho", 80, 50);
// var tocinauro = new Pakiman("Tocinauro", 120, 50);

var colleccion = []; 
colleccion.push( new Pakiman("Cauchin", 100, 30) ); 
colleccion.push( new Pakiman("Pokacho", 80, 50) ); 
colleccion.push( new Pakiman("Tocinauro", 120, 50) );

for (var i in colleccion) { // Trae el indice
    console.log(i); 
    console.log(colleccion[i]);
    colleccion[i].mostrar();
}
for (var i of colleccion) { // Trae la instancia
    console.log(i); 
    i.mostrar();
    // console.log(colleccion[i]);
}
