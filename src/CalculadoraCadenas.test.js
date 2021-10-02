import calcularCadenas from "./CalculadoraCadenas.js";

describe("Sumar", () => {
  it("deberia sumar 2 numeros separados por ,", () => {
    expect(calcularCadenas("1,2")).toEqual(3);
  });
  it("deberia sumar 2 numeros separados por ,", () => {
    expect(calcularCadenas("1,5")).toEqual(6);
  });
  it("deberia sumar 2 numeros separados por ,", () => {
    expect(calcularCadenas("1*5")).toEqual(1);
  });
  it("deberia sumar 2 numeros separados por ,", () => {
    expect(calcularCadenas("1,,5")).toEqual(1);
  });
  it("deberia sumar 2 numeros separados por ,", () => {
    expect(calcularCadenas("**5")).toEqual(0);
  });
  it("deberia sumar todos los numeros separados por ,", () => {
    expect(calcularCadenas("1,2,4,8")).toEqual(15);
  });
  it("deberia sumar todos los numeros separados por ,", () => {
    expect(calcularCadenas("1,2,4,,8")).toEqual(7);
  });
  it("deberia sumar todos los numeros separados por ,", () => {
    expect(calcularCadenas("*1,2,4,,8")).toEqual(0);
  });
  it("deberia sumar todos los numeros separados por ,", () => {
    expect(calcularCadenas("1/2,4,,8")).toEqual(1);
  });
  it("deberia sumar todos los numeros separados por -", () => {
    expect(calcularCadenas("1-2-4-8")).toEqual(15);
  });
  it("deberia sumar todos los numeros separados por -", () => {
    expect(calcularCadenas("1-,2-4-8")).toEqual(1);
  });
  it("deberia sumar todos los numeros separados por - y ,", () => {
    expect(calcularCadenas("1-2,4,8")).toEqual(15);
  });
  it("deberia sumar todos los numeros separados por - y ,", () => {
    expect(calcularCadenas("-1,2-4-,8")).toEqual(0);
  });
});
