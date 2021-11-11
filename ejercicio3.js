//Ejercicio 3

class Consumible {
    constructor(nombre) {
        this.nombre = nombre;
    }

    consumir(jugador) {
        console.log(jugador.nombre + " consume " + this.nombre + " y no tiene ningún efecto");
    }
}

let manzana = new Consumible('Manzana');
let ricardo = {
    nombre: 'Ricardo',
    potencia: 1,
    puntosVida: 8,
    maxPuntosVida: 10,
    consumir: function (consumible) {
        consumible.consumir(this);
    }
}

ricardo.consumir(manzana);


class PlantaCurativa extends Consumible {
    constructor(nombre, poder) {
        super(nombre);
        this.poder = poder;
    }

    consumir(jugador) {
        var res = jugador.puntosVida + this.poder
        if (res > jugador.maxPuntosVida){
            res = jugador.maxPuntosVida;
        }
        var diferenciaVida = res - jugador.puntosVida;
        jugador.puntosVida = res
        console.log(jugador.nombre + " consume " + this.nombre + " y recupera " + diferenciaVida +" puntos de vida");
    }
}

hierbaVerde = new PlantaCurativa('Hierba Verde', 10);
ricardo.consumir(hierbaVerde);
