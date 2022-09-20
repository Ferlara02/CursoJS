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
//

const resultados = document.getElementById("resultados");


//Funciones

function calculaCantidad() {
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
function buscaBaldozas() {
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
    calculaCantidad()
    //sumaBaldozas += arrayCalculos[i];
    totalBaldozas = arrayBaldozas.reduce((acumulador, elemento) => acumulador + elemento.cantidad, 0);
}

if (opcion != 1){
    alert("La cantidad total de baldozas para los " + opcion + " pisos es de: " + totalBaldozas);
}else alert("La cantidad total de baldozas para: " + baldozaPersonalizada.nombre + " es de: " + totalBaldozas);

// buscar 
let deseaBuscar = (prompt("Desea buscar alguno de los cálculos realizados? Ingrese si o no: ")).toLowerCase();

if (deseaBuscar == "si"){
    buscaBaldozas();
    alert("Gracias por utilizar nuestro calculador!");
}


//DOM
const contenedorBaldozas = document.getElementById("contenedorBaldozas");

arrayBaldozas.forEach(pisoYBaldoza => {
    let div = document.createElement("div");
    div.innerHTML = `<h4 class="baldoza"> ${(pisoYBaldoza.nombre).toUpperCase()} </h4>
                    <p>Cantidad de baldozas: ${(pisoYBaldoza.cantidad).toFixed(1)} </p>
                    <p>Tamaño baldoza: ${pisoYBaldoza.lado1}cm X ${pisoYBaldoza.lado2}cm.</p>
                    <p>Área del ambiente: ${pisoYBaldoza.ancho * pisoYBaldoza.largo}m² </p>

                    <button class="btnCarrito">Agregar al carrito </button>`;

    contenedorBaldozas.appendChild(div);
})