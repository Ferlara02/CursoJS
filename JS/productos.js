/* RECUPERO FUNCION Y ARRAY DE MAIN */




/******** FETCH con ruta relativa para baldozas en productos ****/

const productos = document.getElementById("contenedorProductos");

const baldozasProductos = "../json/productos.json";


fetch(baldozasProductos)
    .then(response => response.json())
    .then(datos => {
        datos.forEach(baldoza => {
            const div = document.createElement("div");
            div.innerHTML += `<h3 class="baldoza"> ${(baldoza.nombre).toUpperCase()}</h3>
            <img class = "baldozaImg" src="../img/${baldoza.nombre}.png" alt="Baldoza">
            <p>Tamaño baldoza: ${baldoza.lado1}cm X ${baldoza.lado2}cm.</p>
            <label for="cantidadProd">Cantidad de baldozas: </label>
            <input type="number" name="" id="cantProducto${baldoza.nombre}">

            <button class="btnCarrito" id = "botonComprar${datos.indexOf(baldoza)}">Comprar</button>`
            productos.appendChild(div);

            let botonComprar = document.getElementById(`botonComprar${datos.indexOf(baldoza)}`);
            let cantProducto = document.getElementById(`cantProducto${baldoza.nombre}`);

            botonComprar.addEventListener("click", () => {
                cantProducto.value.length !== 0 &&
                    Swal.fire({
                        title: `Estas a punto de comprar ${cantProducto.value} baldozas`,
                        icon: "info",
                        text: ` Tamaño: ${baldoza.lado1}cm x ${baldoza.lado2}cm.
                                Precio: $${cantProducto.value * baldoza.precio}`,
                        confirmButtonText: "Finalizar Compra",
                        confirmButtonColor: "green",
                        showCancelButton: true,
                        cancelButtonText: "Cancelar",
                        cancelButtonColor: "red",
                    }).then((result)=> {
                        if(result.isConfirmed){
                            Swal.fire({
                                title:"Compra finalizada",
                                icon: "success",
                                confirmButtonText: "Aceptar",
                                confirmButtonColor: "#DFBA69"
                            });
                        }
                    })
            })
        });
    })
    .catch(error => console.log(error))
