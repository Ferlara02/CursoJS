let numero = parseInt(prompt("Ingrese la cantidad de veces que quiera que se repita el mensaje: "));

for(let i = 1; i <= numero; i++) {
    if(numero >= 10000) {
        alert("No rompas tu computadora!");
        numero = parseInt(prompt("Ingresa un numero menor a 10.000"));
    }else {
        console.log("Hola mundo", i);
    }
}