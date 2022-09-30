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
        
                        <button class="btnCarrito" id = "carritoBoton${arrayBaldozas.indexOf(baldoza)}">Agregar al <i class="fa-solid fa-cart-shopping"></i> </button>`;
            contenedorBaldozas.appendChild(div);
            const carritoBoton = document.getElementById(`carritoBoton${arrayBaldozas.indexOf(baldoza)}`);
            carritoBoton.addEventListener("click", () => {
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

const totalCompra = document.getElementById("totalCompra");

const eliminarCarritoTotal = document.getElementById("eliminarCarritoTotal");


if(localStorage.getItem("baldozasCarrito")) {
    let baldozasCarrito = JSON.parse(localStorage.getItem("baldozasCarrito"));
    for(let i = 0; i < baldozasCarrito.length; i++) {
        carrito.push(baldozasCarrito[i]);
    }
}

const mostrarCarrito = document.getElementById("mostrarCarrito");


/** MOSTRAR CARRITO ALMACENADO EN LOCALSTORAGE**/

mostrarCarrito.addEventListener("click", () => {
    actualizaCarrito();
    calculaTotalCompra();
})

/** BOTON ELIMINAR TOTAL CARRITO **/

eliminarCarritoTotal.addEventListener("click", (e) => {
    e.preventDefault();
    contenedorCarrito.innerHTML = ``;
    for(let i = 0; i < carrito.length; i++) {
        carrito.splice(i);
    }
    calculaTotalCompra();
    localStorage.clear();
});


const actualizaCarrito = () => {
    contenedorCarrito.innerHTML = "";
    carrito.forEach(baldoza => {
        const div = document.createElement("div");
        div.innerHTML = `
                        <h3 class="baldoza"> ${(baldoza.nombre).toUpperCase()}</h3>
                        <img class = "baldozaImg" src="img/baldoza2.png" alt="Baldoza">
                        <p>Cantidad de baldozas: ${(baldoza.cantidad).toFixed(1)} </p>
                        <p>Tamaño baldoza: ${baldoza.lado1}cm X ${baldoza.lado2}cm.</p>
                        <p class = "precioCarrito">Precio: $${((baldoza.cantidad) * 40).toFixed(2)}</p>
                        <button onClick = "eliminaDelCarrito('${baldoza.nombre}')" class = "btnCarrito">Eliminar del <i class="fa-solid fa-cart-shopping"></i></button>`;
        contenedorCarrito.appendChild(div);
    })
}

const agregaAlCarrito = (nombre) => {
    const baldozaCarrito = arrayBaldozas.find(baldoza => baldoza.nombre === nombre);
    carrito.push(baldozaCarrito);
    actualizaCarrito();
    localStorage.setItem("baldozasCarrito", JSON.stringify(carrito));
    calculaTotalCompra();
}

/**BOTON DE ELIMINAR INDIVIDUAL **/
function eliminaDelCarrito(nombre) {
    const baldozaElim = carrito.find(baldoza => baldoza.nombre === nombre);
    carrito.splice(carrito.indexOf(baldozaElim), 1);
    actualizaCarrito();
    calculaTotalCompra();
}

/***********CALCULAR TOTAL COMPRA *****/
const totalSpan = document.getElementById("total");

const calculaTotalCompra = () => {
    let total = 0;
    carrito.forEach(baldoza => {
        total += (baldoza.cantidad * 40);
    })
    totalSpan.innerHTML = (total).toFixed(2);
}

