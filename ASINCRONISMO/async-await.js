function obtenerDatos() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Datos recibidos con async/await");
        }, 2000);
    });
}

async function mostrarDatos() {
    try {
        const resultado = await obtenerDatos();
        console.log(resultado);
    } catch (error) {
        console.error(error);
    }
}

mostrarDatos();