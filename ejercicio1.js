//Creación clase jugador
class Jugador {
    constructor(nombre, ocupacion, faccion){
        this.nombre = nombre;
        this.ocupacion = ocupacion;
        this.puntosVida = 100;
        this.faccion = faccion;
    }

    toString(){
        console.log(`Nombre: ${this.nombre}, ocupación: ${this.ocupacion}, puntos de vida: ${this.puntosVida}, facción: ${this.faccion}`)
    }
}

a = new Jugador("Fran", "Carpintero", "Legión")
b = new Jugador("David", "Informático", "Teemo")
a.toString()
b.toString()
var listaJugadores = [a, b]
