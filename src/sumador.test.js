import { decimalARomano } from "./sumador.js";

test("Convierte 1 a I", () => {
    expect(decimalARomano(1)).toBe("I");
});

test("Convierte 2 a II", () => {
  expect(decimalARomano(2)).toBe("II");
});

test("Convierte 3 a III", () => {
  expect(decimalARomano(3)).toBe("III");
});

test("Convierte 7 a VII", () => {
  expect(decimalARomano(7)).toBe("VII");
});

test("Convierte 15 a XV", () => {
  expect(decimalARomano(15)).toBe("XV");
});

test("Convierte 20 a XX", () => {
  expect(decimalARomano(20)).toBe("XX");
});