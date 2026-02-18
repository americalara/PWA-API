const quoteElement = document.getElementById("quote");
const authorElement = document.getElementById("author");
const button = document.getElementById("newQuoteBtn");

async function fetchQuote() {
  try {
    const response = await fetch("https://api.quotable.io/random");
    const data = await response.json();

    quoteElement.textContent = `"${data.content}"`;
    authorElement.textContent = `- ${data.author}`;

    localStorage.setItem("lastQuote", JSON.stringify(data));

  } catch (error) {
    const savedQuote = JSON.parse(localStorage.getItem("lastQuote"));

    if (savedQuote) {
      quoteElement.textContent = `"${savedQuote.content}"`;
      authorElement.textContent = `- ${savedQuote.author}`;
    } else {
      quoteElement.textContent = "No hay conexión a internet.";
      authorElement.textContent = "";
    }
  }
}

button.addEventListener("click", fetchQuote);
fetchQuote();
