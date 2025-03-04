import { decimalARomano } from "./sumador.js";

test("Convierte 1 a I", () => {
    expect(decimalARomano(1)).toBe("I");
});

test("Convierte 2 a II", () => {
  expect(decimalARomano(2)).toBe("II");
});