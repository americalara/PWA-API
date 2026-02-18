const fraseElemento = document.getElementById("frase");
const boton = document.getElementById("btnNueva");

async function obtenerFrase() {

    fraseElemento.textContent = "Cargando frase...";

    try {
        const response = await fetch("https://api.quotable.io/random");

        // 🔎 Validar status HTTP
        if (!response.ok) {
            fraseElemento.textContent = "Error HTTP: " + response.status;
            return;
        }

        const data = await response.json();

        // 🔎 Validar estructura del JSON
        if (!data || !data.content) {
            fraseElemento.textContent = "Error: JSON inválido";
            return;
        }

        fraseElemento.textContent = data.content;

        // Guardar última frase
        localStorage.setItem("ultimaFrase", data.content);

    } catch (error) {

        if (!navigator.onLine) {
            fraseElemento.textContent = "Sin conexión a internet";
        } 
        else if (error.name === "TypeError") {
            fraseElemento.textContent = "Error de red o CORS";
        } 
        else {
            fraseElemento.textContent = "Error desconocido: " + error.message;
        }

        console.log("Error real:", error);
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

