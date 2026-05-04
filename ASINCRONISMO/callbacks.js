function obtenerDatos(callback) {
    setTimeout(() => {
        callback("Datos recibidos con callback");
    }, 2000);
}

obtenerDatos(function(resultado) {
    console.log(resultado);
});