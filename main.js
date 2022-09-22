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

// variables input
let nombre = document.getElementById("nombrePiso");
let lado1 = document.getElementById("lado1");
let lado2 = document.getElementById("lado2");
let largo = document.getElementById("largo");
let ancho = document.getElementById("ancho");

//Funciones
function calculaCantidad() {
    let cantidad = (largo.value * ancho.value * 10000) / (lado1.value * lado2.value);

    baldozaPersonalizada = new pisoYBaldoza(nombre.value, lado1.value, lado2.value, largo.value, ancho.value, cantidad);
    console.log(baldozaPersonalizada);
    
    arrayBaldozas.push(baldozaPersonalizada);
}

//DOM
const contenedorBaldozas = document.getElementById("contenedorBaldozas");

//Formulario con Eventos
const formDatos = document.getElementById("formDatos");

formDatos.addEventListener("submit", (e) => {
    e.preventDefault();
    if(lado1.value.length == 0 || lado2.value.length == 0 || largo.value.length == 0 || ancho.value.length == 0){
        alert("No deje campos vacíos");
    }else {
        calculaCantidad();
        let div = document.createElement("div");
        div.innerHTML = `<h3 class="baldoza"> ${(baldozaPersonalizada.nombre).toUpperCase()} </h3>
                        <p>Cantidad de baldozas: ${(baldozaPersonalizada.cantidad).toFixed(1)} </p>
                        <p>Tamaño baldoza: ${baldozaPersonalizada.lado1}cm X ${baldozaPersonalizada.lado2}cm.</p>
                        <p>Área del ambiente: ${baldozaPersonalizada.ancho * baldozaPersonalizada.largo}m² </p>
        
                        <button class="btnCarrito">Agregar al carrito </button>`;
        contenedorBaldozas.appendChild(div);
        formDatos.reset();
    }
});

//Boton borrar calculos

const btnClear = document.getElementById("btnClear");

btnClear.addEventListener("click", () => {
    contenedorBaldozas.innerHTML = ``;
    console.log(arrayBaldozas);
});

//

//let totalBaldozas;

/* for (let i = 0; i < opcion; i++){
    calculaCantidad()
    //sumaBaldozas += arrayCalculos[i];
    totalBaldozas = arrayBaldozas.reduce((acumulador, elemento) => acumulador + elemento.cantidad, 0);
}*/

/*if (opcion != 1){
    alert("La cantidad total de baldozas para los " + opcion + " pisos es de: " + totalBaldozas);
}else alert("La cantidad total de baldozas para: " + baldozaPersonalizada.nombre + " es de: " + totalBaldozas);

// buscar 
let deseaBuscar = (prompt("Desea buscar alguno de los cálculos realizados? Ingrese si o no: ")).toLowerCase();

if (deseaBuscar == "si"){
    buscaBaldozas();
    alert("Gracias por utilizar nuestro calculador!");
}

*/

/*function buscaBaldozas() {
    let nombreIngresado = (prompt("Ingrese el nombre del ambiente calculado: ")).toLowerCase();
    const buscado = arrayBaldozas.find(pisoYBaldoza => pisoYBaldoza.nombre === nombreIngresado);
    if (buscado != undefined) {
        alert("La cantidad de baldozas para " + buscado.nombre + " es de " + buscado.cantidad);
    }else alert("No se ha encontrado el cálculo ingresado, recargue la página");
}*/