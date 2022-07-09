class Caja {

    constructor(id) {
        this.id = id; 
        this.billetes = []; 
        this.dineroDisponible = 0; 
    }

    agregaDinero(billete) {
        // Pendiente:
        // 1.- Revisar si la denominacion existe para solo sumar.  
        // 2.- Los billetes deben ordenarse de mayor a menor.
        this.billetes.push(billete); 
        this.dineroDisponible += billete.dineroDisponible();
    }

    reducirDeCaja(retirando) {
        // console.log("En Retirando");
        var r = retirando.billetes;
        // console.log(retirando);
        var i = 0; 
        var retira = r[i];

        for (var b of this.billetes) {
            if (b.denominacion == retira.denominacion) {
                b.cantidad -= retira.cantidad; 
                this.dineroDisponible -= retira.dineroDisponible();
                i ++; 
                if (i < r.length)
                    retira = r[i]; 
                
            }
        }
        

    }

    mostrarDisponible() {
        return "Monto Disponible: $ " + this.dineroDisponible;
    }
    mostrarBilletesDisponibles() {
        var txt = ""; 
        for (var b of this.billetes) {
            if (b.cantidad > 0 )
                txt += "$ " + b.denominacion + " x " + b.cantidad + " billetes. <br />";
        }
        return txt; 
    }

    retirarDinero(dinero) {
        // Regresara un Array de Billete o un String con un mensaje de error.
        if (this.dineroDisponible == 0 ) {
            return "No hay dinero disponible";
        }
        if (dinero > this.dineroDisponible) {
            return "Fondos Insuficientes"; 
        }
        
        var retirando = new Caja("Retirando");
        var porEntregar = dinero; 
        var div, qtyBilletes; 

        for (var b of this.billetes) {
            // console.log(b); 
            div = Math.floor( porEntregar / b.denominacion )
            // console.log(div);
            if (div > b.cantidad) {
                qtyBilletes = b.cantidad; 
            } else {
                qtyBilletes = div; 
            }
            // console.log(qtyBilletes);
            
            retirando.agregaDinero( new Billete(b.denominacion, qtyBilletes)); 
            porEntregar = dinero - retirando.dineroDisponible;

        }

        if (porEntregar > 0 ) {
            return "Denominaciones disponibles insuficientes, intente otra cantidad."
        } else {
            this.reducirDeCaja(retirando);
        }
        
        return retirando; 
    }
}