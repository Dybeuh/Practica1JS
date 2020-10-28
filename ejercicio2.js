class Zombi {
    constructor(nombre, puntosVida, potencia) {
        this.nombre = nombre;
        this.puntosVida = puntosVida;
        this.potencia = potencia;
    }

    atacar(objetivo) {
        console.log(`${this.nombre} ataca a ${objetivo} y le causa ${this.potencia} puntos de daño`);
    }
}

class Abominacion extends Zombi {

    ataqueMultiple(objetivo) {
        console.log(`${this.nombre} ataca a ${objetivo} y le causa ${this.potencia} puntos de daño`);
        console.log(`${this.nombre} ataca a ${objetivo} y le causa ${this.potencia} puntos de daño`);
        console.log(`${this.nombre} ataca a ${objetivo} y le causa ${this.potencia} puntos de daño`);
    }
}

abominacion = new Abominacion('Abo1', 500, 30);
abominacion.ataqueMultiple("David")
