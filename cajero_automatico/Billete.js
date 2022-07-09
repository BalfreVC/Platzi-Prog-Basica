class Billete {
    
    constructor(denominacion, cantidad) {
        this.denominacion = denominacion; 
        this.cantidad = cantidad;
    }

    dineroDisponible() {
        return this.denominacion * this.cantidad;
    }

}