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
const arrayBaldozasCarrito = [];
//

const resultados = document.getElementById("resultados");


//Funciones

function calculaCantidad() {
    let nombre = document.getElementById("nombrePiso");
    let lado1 = document.getElementById("lado1");
    let lado2 = document.getElementById("lado2");
    let largo = document.getElementById("largo");
    let ancho = document.getElementById("ancho");
    let cantidad = (largo.value * ancho.value * 10000) / (lado1.value * lado2.value);

    baldozaPersonalizada = new pisoYBaldoza(nombre.value, lado1.value, lado2.value, largo.value, ancho.value, cantidad);
    console.log(baldozaPersonalizada);

    //alert("La cantidad de baldozas que necesita para cubrir su " + nombre + " es de: " + baldozaPersonalizada.cantidad);
    
    arrayBaldozas.push(baldozaPersonalizada);
    arrayBaldozasCarrito.push(baldozaPersonalizada);
}

/*function buscaBaldozas() {
    let nombreIngresado = (prompt("Ingrese el nombre del ambiente calculado: ")).toLowerCase();
    const buscado = arrayBaldozas.find(pisoYBaldoza => pisoYBaldoza.nombre === nombreIngresado);
    if (buscado != undefined) {
        alert("La cantidad de baldozas para " + buscado.nombre + " es de " + buscado.cantidad);
    }else alert("No se ha encontrado el cálculo ingresado, recargue la página");
}*/

//Formulario con Eventos
const formDatos = document.getElementById("formDatos");

formDatos.addEventListener("submit", (e) => {
    e.preventDefault();
    calculaCantidad();
    arrayBaldozas.forEach(pisoYBaldoza => {
        let div = document.createElement("div");
        div.innerHTML = `<h4 class="baldoza"> ${(pisoYBaldoza.nombre).toUpperCase()} </h4>
                        <p>Cantidad de baldozas: ${(pisoYBaldoza.cantidad).toFixed(1)} </p>
                        <p>Tamaño baldoza: ${pisoYBaldoza.lado1}cm X ${pisoYBaldoza.lado2}cm.</p>
                        <p>Área del ambiente: ${pisoYBaldoza.ancho * pisoYBaldoza.largo}m² </p>
    
                        <button class="btnCarrito">Agregar al carrito </button>`;
    
        contenedorBaldozas.appendChild(div);
    })
    arrayBaldozas.shift();
    formDatos.reset();
})


///EJECUCIÓN

//DOM
const contenedorBaldozas = document.getElementById("contenedorBaldozas");

const btnClear = document.getElementById("btnClear");

btnClear.addEventListener("click", () => {
    contenedorBaldozas.innerHTML = ``;
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