import calcularCadenas from "./CalculadoraCadenas.js";

describe("calcularCadenas", () => {
  it("suma de 2 numeros separados por 1 caracter intermedio : deberia devolver 1 para la cadena '1,0' ", () => {
    expect(calcularCadenas("1,0")).toEqual(1);
  });
});
