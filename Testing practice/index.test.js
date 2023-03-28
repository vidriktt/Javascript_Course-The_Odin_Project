import { capitalize, reverseString, calculator, caesarCipher, analyzeArray } from "./index";

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
    expect(caesarCipher("string", 2)).toBe("uvtkpi");
});

test("that takes a string and a shift factor and returns it with each character “shifted” - alphabet wrapping", () => {
    expect(caesarCipher("zoo", 3)).toBe("crr");
});

test("that takes a string and a shift factor and returns it with each character “shifted” - case sensitive", () => {
    expect(caesarCipher("String", 4)).toBe("Wxvmrk");
});

test("that takes a string and a shift factor and returns it with each character “shifted” - non alphabet character", () => {
    expect(caesarCipher("str1ng!", 2)).toBe("uvt1pi!");
});

test("takes an array of numbers and returns an object with the following properties: average, min, max, and length", () => {
    expect(analyzeArray([1, 2, 3, 4, 5])).toEqual({
        average: 3,
        min: 1,
        max: 5,
        length: 5
    });
});
