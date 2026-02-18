document.addEventListener("DOMContentLoaded", function () {

    const quoteElement = document.getElementById("quote");
    const authorElement = document.getElementById("author");
    const button = document.getElementById("newQuoteBtn");

    async function obtenerFrase() {
        try {
            const response = await fetch(`https://api.adviceslip.com/advice?timestamp=${Date.now()}`);
            const data = await response.json();

            // Ajuste según la nueva API
            quoteElement.textContent = `"${data.slip.advice}"`;
            authorElement.textContent = "- Consejo";

            // Guardar última frase
            localStorage.setItem("ultimaQuote", data.slip.advice);
            localStorage.setItem("ultimoAutor", "Consejo");

        } catch (error) {
            // Offline o error
            const ultimaQuote = localStorage.getItem("ultimaQuote");
            const ultimoAutor = localStorage.getItem("ultimoAutor");

            if (ultimaQuote && ultimoAutor) {
                quoteElement.textContent = `"${ultimaQuote}"`;
                authorElement.textContent = `- ${ultimoAutor}`;
            } else {
                quoteElement.textContent = "No hay conexión a internet";
                authorElement.textContent = "";
            }

            console.log("Error:", error);
        }
    }

    button.addEventListener("click", obtenerFrase);

    // Cargar primera frase al inicio
    obtenerFrase();
});
