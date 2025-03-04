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

test("Convierte 35 a XXXV", () => {
  expect(decimalARomano(35)).toBe("XXXV");
});

test("Convierte 50 a XX", () => {
  expect(decimalARomano(50)).toBe("L");
});

test("Convierte 82 a LXXXII", () => {
  expect(decimalARomano(82)).toBe("LXXXII");
});

test("Convierte 250 a CCX", () => {
  expect(decimalARomano(250)).toBe("CCL");
});

test("Convierte 500 a D", () => {
  expect(decimalARomano(500)).toBe("D");
});