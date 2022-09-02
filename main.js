alert("¡Bienvenido al calculador de baldozas!")

let tipoBaldoza = parseInt(prompt("Ingrese la longitud del lado de su baldoza en centímetros (Coloque sólo el nro: 20, 30, 50, etc.) "));

let baldoza = tipoBaldoza * tipoBaldoza;

let largo = parseInt(prompt("Ingrese el largo de su piso en metros (introduza sólo números): "));
let ancho = parseInt(prompt("Ingrese el ancho de su piso en metros (introduzca sólo números): "));

function cantBaldozas(largo, ancho, baldoza) { 
    return (largo * ancho * 10000) / baldoza;
}

while(isNaN(cantBaldozas(largo, ancho, baldoza)) == true){
    alert("Valores ingresados no válidos, recargue el sitio e introduzca sólo números.");
    break;
}

alert("La cantidad de baldozas que necesita para cubrir su piso es de " + cantBaldozas(largo, ancho, baldoza));

