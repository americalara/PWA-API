document.addEventListener("DOMContentLoaded", function () {

    const quoteElement = document.getElementById("quote");
    const authorElement = document.getElementById("author");
    const button = document.getElementById("newQuoteBtn");

    async function obtenerFrase() {
        try {
            const response = await fetch("https://api.quotable.io/random");
            const data = await response.json();

            quoteElement.textContent = `"${data.content}"`;
            authorElement.textContent = `- ${data.author}`;

            // Guardar última frase
            localStorage.setItem("ultimaQuote", data.content);
            localStorage.setItem("ultimoAutor", data.author);

        } catch (error) {

            const ultimaQuote = localStorage.getItem("ultimaQuote");
            const ultimoAutor = localStorage.getItem("ultimoAutor");

            if (ultimaQuote && ultimoAutor) {
                quoteElement.textContent = `"${ultimaQuote}"`;
                authorElement.textContent = `- ${ultimoAutor}`;
            } else {
                quoteElement.textContent = "No hay conexión a internet";
                authorElement.textContent = "";
            }
        }
    }

    button.addEventListener("click", obtenerFrase);

    obtenerFrase();
});



// Registrar service worker
if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("service-worker.js")
        .then(() => console.log("Service Worker registrado"))
        .catch(err => console.log("Error al registrar SW:", err));
}

