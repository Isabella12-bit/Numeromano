import { decimalToRoman } from "./sumador.js";

document.getElementById("convertir").addEventListener("click", () => {
    const numero = parseInt(document.getElementById("numero").value, 10);
    if (numero === 1) {
        document.getElementById("resultado").textContent = decimalToRoman(numero);
    } else {
        document.getElementById("resultado").textContent = "Solo se admite el número 1 por ahora.";
    }
});