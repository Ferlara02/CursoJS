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
    localStorage.setItem("baldozas", JSON.stringify(arrayBaldozas));
}




//DOM
const contenedorBaldozas = document.getElementById("contenedorBaldozas");

//Formulario con Eventos
const formDatos = document.getElementById("formDatos");

if(localStorage.getItem("baldozas")) {
    let baldoza = JSON.parse(localStorage.getItem("baldozas"));
    for(let i = 0; i < baldoza.length; i++) {
        arrayBaldozas.push(baldoza[i]);
    }
}

formDatos.addEventListener("submit", (e) => {
    e.preventDefault();
    if(lado1.value.length == 0 || lado2.value.length == 0 || largo.value.length == 0 || ancho.value.length == 0){
        alert("No deje campos vacíos");
    }else {
        calculaCantidad();
        contenedorBaldozas.innerHTML = ``;
        arrayBaldozas.forEach(baldoza => {
            const div = document.createElement("div");
            div.innerHTML = `<h3 class="baldoza"> ${(baldoza.nombre).toUpperCase()}</h3>
                        <p>Cantidad de baldozas: ${(baldoza.cantidad).toFixed(1)} </p>
                        <p>Tamaño baldoza: ${baldoza.lado1}cm X ${baldozaPersonalizada.lado2}cm.</p>
                        <p>Área del ambiente: ${baldoza.ancho * baldoza.largo}m² </p>
        
                        <button class="btnCarrito" id = "carritoBoton${arrayBaldozas.indexOf(baldoza)}">Agregar al carrito </button>`;
            contenedorBaldozas.appendChild(div);
            const carritoBoton = document.getElementById(`carritoBoton${arrayBaldozas.indexOf(baldoza)}`);
            carritoBoton.addEventListener("click", (e) => {
                agregaAlCarrito(baldoza.nombre);
                console.log(carrito);
            });
        });
    }
    formDatos.reset();
});

//Boton borrar calculos

const btnClear = document.getElementById("btnClear");


btnClear.addEventListener("click", (e) => {
    e.preventDefault();
    contenedorBaldozas.innerHTML = ``;
    for(let i = 0; i < arrayBaldozas.length; i++) {
        arrayBaldozas.splice(i);
    }
    console.log(arrayBaldozas);
    localStorage.clear();
});

//
//CARRITO
const contenedorCarrito = document.getElementById("contenedorCarrito");

const carrito = [];


const eliminarCarritoTotal = document.getElementById("eliminarCarritoTotal");


eliminarCarritoTotal.addEventListener("click", (e) => {
    e.preventDefault();
    contenedorCarrito.innerHTML = ``;
    for(let i = 0; i < carrito.length; i++) {
        arrayBaldozas.splice(i);
    }
});

const agregaAlCarrito = (nombre) => {
    const baldozaCarrito = arrayBaldozas.find(baldoza => baldoza.nombre === nombre);
    carrito.push(baldozaCarrito);
    carrito.forEach(baldoza => {
        const div = document.createElement("div");
        
        div.innerHTML = `
                            <h3 class="baldoza"> ${(baldoza.nombre).toUpperCase()}</h3>
                            <p>Cantidad de baldozas: ${(baldoza.cantidad).toFixed(1)} </p>
                            <p>Tamaño baldoza: ${baldoza.lado1}cm X ${baldozaPersonalizada.lado2}cm.</p>
                            <p>Precio: ${(baldoza.cantidad) * 40}</p>`;
        contenedorCarrito.appendChild(div);
        
    });
}















//////


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