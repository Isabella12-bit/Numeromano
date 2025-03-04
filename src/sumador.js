export function decimalARomano(num) {
  const valores = [
    { valor: 100, simbolo: "C" },
    { valor: 50, simbolo: "L" },
    { valor: 40, simbolo: "XL" },
    { valor: 10, simbolo: "X" },
    { valor: 9, simbolo: "IX" },
    { valor: 5, simbolo: "V" },
    { valor: 4, simbolo: "IV" },
    { valor: 1, simbolo: "I" }
  ];

  let resultado = "";

  for (let i = 0; i < valores.length; i++) {
    while (num >= valores[i].valor) {
      resultado += valores[i].simbolo;
      num -= valores[i].valor;
    }
  }

  return resultado;
}
