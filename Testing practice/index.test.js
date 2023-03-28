import { capitalize, reverseString, calculator, caesarCipher } from "./index";

test("takes a string and returns it with the first character capitalized", () => {
    expect(capitalize("string")).toBe("String");
});

test("takes a string and returns it reversed", () => {
    expect(reverseString("string")).toBe("gnirts");
});

test("take two numbers and return the correct calculation - add", () => {
    expect(calculator.add(1, 2)).toBe(3);
});

test("take two numbers and return the correct calculation - subtract", () => {
    expect(calculator.subtract(1, 2)).toBe(-1);
});

test("take two numbers and return the correct calculation - divide", () => {
    expect(calculator.divide(1, 2)).toBe(0.5);
});

test("take two numbers and return the correct calculation - multiply", () => {
    expect(calculator.multiply(1, 2)).toBe(2);
});

test("that takes a string and a shift factor and returns it with each character “shifted”", () => {
    expect(caesarCipher("string", 2)).toBe("");
});
