$(document).ready(function() {
    // Evento de clic en el botón que abre el modal
    $("#abrirModal").click(function() {
        $("#miModal").modal("show");
    });

    // Evento de envío del formulario dentro del modal
    $("#miFormulario").submit(function(event) {
        // Evitar el envío del formulario de manera tradicional
        event.preventDefault();

        // Obtener datos del formulario
        var formData = $(this).serialize();

        // Realizar la solicitud AJAX
        $.ajax({
            type: "POST",
            url: "./accion/accionesArticulos.php?accion=nuevo",
            data: formData,
            success: function(response) {
                // Manejar la respuesta del servidor
                //$("#resultado").html(response);
                alert(response);

                setTimeout(function() {
                    location.reload();
                }, 200);
            },
            error: function(error) {
                alert("Error en la solicitud AJAX:", error);
            }
        });

        // Cerrar el modal después de enviar el formulario
        $("#miModal").modal("hide");
    });

});

//MOdificar

$(document).ready(function() {
    // Evento de clic en el botón "Modificar"
    $("#modificar").click(function() {
        // Obtener la fila actual
        var fila = $(this).closest("tr");

        // Obtener datos de las celdas de esa fila
        var idProducto = fila.find("td:eq(0)").text(); // Ajusta el índice según la posición de la columna
        var proNombre = fila.find("td:eq(1)").text();
        var proDetalle = fila.find("td:eq(2)").text();
        var proImagen = fila.find("td:eq(3)").text();
        var proStock = fila.find("td:eq(4)").text();
        // ... Obtener otros datos según sea necesario

        // Llenar el modal con los datos capturados
        $("#proIdModificar").val(idProducto);
        $("#proNombreModificar").val(proNombre);
        $("#proDetalleModificar").val(proDetalle);
        $("#proImagenModificar").val(proImagen);
        $("#proCantStockModificar").val(proStock);
        // ... Llenar otros campos del modal según sea necesario

        // Mostrar el modal
        $("#modalModificar").modal("show");
    });
});



function guardarCambios() {

    var idProducto =    $("#proIdModificar").val();
    var nombreProducto = $("#proNombreModificar").val();
    var detalleProducto = $("#proDetalleModificar").val();
    var imagenProducto = $("#proImagenModificar").val();
    var stockProducto = $("#proCantStockModificar").val();

    $.ajax({
        type: "POST",
        url: "./accion/accionesArticulos.php?accion=editar", // Asegúrate de crear este archivo para eliminar el producto
        data: {
            idProducto: idProducto,
            proNombre:  nombreProducto,
            proDetalle : detalleProducto,
            imagen : imagenProducto,
            proCantStock : stockProducto
        },
        success: function(response) {
            // Maneja la respuesta según tus necesidades (puede ser una confirmación o cualquier otra cosa)
            console.log(response);

            // Elimina la fila de la tabla (puedes hacerlo directamente aquí o recargar la página)
            // ...

            // Puedes recargar la página después de eliminar el producto
            location.reload();
        },
        error: function(error) {
            console.error("Error en la solicitud AJAX:", error);
        }
    });
}


function eliminarArticulo(idProducto) {
    console.log("entro");
    // Realiza la solicitud AJAX para eliminar el producto
    $.ajax({
        type: "POST",
        url: "./accion/accionesArticulos.php?accion=borrar", // Asegúrate de crear este archivo para eliminar el producto
        data: {
            idProducto: idProducto
        },
        success: function(response) {
            // Maneja la respuesta según tus necesidades (puede ser una confirmación o cualquier otra cosa)
            console.log(response);

            // Elimina la fila de la tabla (puedes hacerlo directamente aquí o recargar la página)
            // ...

            // Puedes recargar la página después de eliminar el producto
            location.reload();
        },
        error: function(error) {
            console.error("Error en la solicitud AJAX:", error);
        }
    });
}

function altaArticulo(idProducto){
    $.ajax({
        type: "POST",
        url: "./accion/accionesArticulos.php?accion=alta", // Asegúrate de crear este archivo para eliminar el producto
        data: {
            idProducto: idProducto
        },
        success: function(response) {
            // Maneja la respuesta según tus necesidades (puede ser una confirmación o cualquier otra cosa)
            console.log(response);

            // Elimina la fila de la tabla (puedes hacerlo directamente aquí o recargar la página)
            // ...

            // Puedes recargar la página después de eliminar el producto
            location.reload();
        },
        error: function(error) {
            console.error("Error en la solicitud AJAX:", error);
        }
    });
}