const fraseElemento = document.getElementById("frase");
const boton = document.getElementById("btnNueva");

async function obtenerFrase() {
    try {
        const response = await fetch("https://api.quotable.io/random");
        const data = await response.json();

        fraseElemento.textContent = data.content;

        // Guardar última frase
        localStorage.setItem("ultimaFrase", data.content);

    } catch (error) {

        const fraseGuardada = localStorage.getItem("ultimaFrase");

        if (fraseGuardada) {
            fraseElemento.textContent = fraseGuardada;
        } else {
            fraseElemento.textContent = "No hay conexión a internet";
        }
    }
}

boton.addEventListener("click", obtenerFrase);

// Cargar una frase al iniciar
obtenerFrase();


// Registrar service worker
if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("service-worker.js");
}

