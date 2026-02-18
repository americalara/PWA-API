const fraseElemento = document.getElementById("frase");
const boton = document.getElementById("btnNueva");

async function obtenerFrase() {
    try {
        const response = await fetch("https://api.quotable.io/random");

        if (!response.ok) {
            throw new Error("Error en la respuesta");
        }

        const data = await response.json();

        fraseElemento.textContent = data.content;

        // Guardar última frase para modo offline
        localStorage.setItem("ultimaFrase", data.content);

    } catch (error) {
        console.log("Error real:", error);

        const fraseGuardada = localStorage.getItem("ultimaFrase");

        if (fraseGuardada) {
            fraseElemento.textContent = fraseGuardada + " (Offline)";
        } else {
            fraseElemento.textContent = "No se pudo cargar la frase.";
        }
    }
}

// Evento del botón
boton.addEventListener("click", obtenerFrase);

// Cargar frase al iniciar
obtenerFrase();


// Registrar service worker
if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("service-worker.js")
        .then(() => console.log("Service Worker registrado"))
        .catch(err => console.log("Error al registrar SW:", err));
}

