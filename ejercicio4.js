//Ejercicio 4

let puntuaciones = [
    { nombre: "Pablo", puntuacion: 180 },
    { nombre: "Javier", puntuacion: 270 },
    { nombre: "Raquel", puntuacion: 70 },
    { nombre: "Mario", puntuacion: 310 },
    { nombre: "Miriam", puntuacion: 90 },
    { nombre: "Laura", puntuacion: 210 },
];

function mayorQue100Descendente(listaPuntuaciones){
    var res = [...listaPuntuaciones].filter(getMayores100)
    res.sort(orderByPuntuacion);
    console.log(res)
}

function getMayores100 (item, index, array) {
    return item.puntuacion >= 100;
}

function orderByPuntuacion (a, b){
    if (a.puntuacion > b.puntuacion) return -1;
    if (a.puntuacion == b.puntuacion) return 0;
    if (a.puntuacion < b.puntuacion) return 1;
}

mayorQue100Descendente(puntuaciones);
