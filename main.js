alert("¡Bienvenido al calculador de baldozas!")

//Objeto: Tipo baldoza y piso
class pisoYBaldoza {
    constructor(nombre, lado1, lado2, largo, ancho, cantidad) {
        this.nombre = nombre;
        this.lado1 = lado1;
        this.lado2 = lado2;
        this.largo = largo;
        this.ancho = ancho;
        this.cantidad = cantidad;
    }
}
//Array
const arrayBaldozas = [];

//Funciones

function calculadoraCantidad() {
    let nombre = (prompt("Ingrese el nombre del ambiente (ej: Living): ")).toLowerCase();
    let lado1 = parseInt(prompt("Ingrese un lado de la baldoza en centímetros: "));
    let lado2 = parseInt(prompt("Ingrese el otro lado de la baldoza en centímetros: "));
    let largo = parseInt(prompt("Ingrese el largo del piso en metros: "));
    let ancho = parseInt(prompt("Ingrese el ancho del piso en metros: "));
    let cantidad = (largo * ancho * 10000) / (lado1 * lado2);

    baldozaPersonalizada = new pisoYBaldoza(nombre, lado1, lado2, largo, ancho, cantidad);
    console.log(baldozaPersonalizada);

    alert("La cantidad de baldozas que necesita para cubrir su " + nombre + " es de: " + baldozaPersonalizada.cantidad);

    arrayBaldozas.push(baldozaPersonalizada);
}
function buscador() {
    let nombreIngresado = (prompt("Ingrese el nombre del ambiente calculado: ")).toLowerCase();
    const buscado = arrayBaldozas.find(pisoYBaldoza => pisoYBaldoza.nombre === nombreIngresado);
    if (buscado != undefined) {
        alert("La cantidad de baldozas para " + buscado.nombre + " es de " + buscado.cantidad);
    }else alert("No se ha encontrado el cálculo ingresado, recargue la página");
}

///EJECUCIÓN

let opcion = parseInt(prompt("Ingrese la cantidad de pisos que desea calcular: (Por ejemplo, en caso de que quiera calcular el living y comedor con diferentes baldozas cada uno, ingrese 2.) " ));

let totalBaldozas;

for (let i = 0; i < opcion; i++){
    calculadoraCantidad()
    //sumaBaldozas += arrayCalculos[i];
    totalBaldozas = arrayBaldozas.reduce((acumulador, elemento) => acumulador + elemento.cantidad, 0);
}

if (opcion != 1){
    alert("La cantidad total de baldozas para los " + opcion + " pisos es de: " + totalBaldozas);
}else alert("La cantidad total de baldozas para: " + baldozaPersonalizada.nombre + " es de: " + totalBaldozas);

// buscar 
let deseaBuscar = (prompt("Desea buscar alguno de los cálculos realizados? Ingrese si o no: ")).toLowerCase();

if (deseaBuscar == "si"){
    buscador();
    alert("Gracias por utilizar nuestro calculador!");
}
