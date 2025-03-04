import { decimalARomano } from "./sumador.js";

document.getElementById("convertir").addEventListener("click", () => {
    const numero = parseInt(document.getElementById("numero").value, 10);
    document.getElementById("resultado").textContent = decimalARomano(numero);
});