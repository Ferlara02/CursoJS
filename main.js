alert("¡Bienvenido al calculador de baldozas!")

//Objeto Tipo baldoza y piso
class pisoYBaldoza {
    constructor(nombre, lado1, lado2, largo, ancho) {
        this.nombre = nombre;
        this.lado1 = lado1;
        this.lado2 = lado2;
        this.largo = largo;
        this.ancho = ancho;
    }
    calcBaldozas() { 
        return ((this.largo * this.ancho * 10000) / (this.lado1 * this.lado2));
    }
}
const arrayCalculos = [];

function calculadoraCantidad() {
    let nombre = prompt("Ingrese el nombre del ambiente (ej: Living): ");
    let lado1 = parseInt(prompt("Ingrese un lado de la baldoza en centímetros: "));
    let lado2 = parseInt(prompt("Ingrese el otro lado de la baldoza en centímetros: "));
    let largo = parseInt(prompt("Ingrese el largo del piso en metros: "));
    let ancho = parseInt(prompt("Ingrese el ancho del piso en metros: "));

    baldozaPersonalizada = new pisoYBaldoza(nombre, lado1, lado2, largo, ancho);
    console.log(baldozaPersonalizada);

    alert("La cantidad de baldozas que necesita para cubrir su " + nombre + " es de: " + baldozaPersonalizada.calcBaldozas());

    arrayCalculos.push(baldozaPersonalizada.calcBaldozas());
}

let opcion = parseInt(prompt("Ingrese la cantidad de pisos que desea calcular: (Por ejemplo, en caso de que quiera calcular el living y comedor con diferentes baldozas cada uno, ingrese 2.) " ));

let sumaBaldozas = 0;

for (let i = 0; i < opcion; i++){
    calculadoraCantidad()
    console.log(arrayCalculos);
    sumaBaldozas += arrayCalculos[i];
}

alert("La cantidad total de baldozas para los " + opcion + " pisos es de: " + sumaBaldozas);
