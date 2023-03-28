function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

function reverseString(str) {
    let returnStr = "";

    for (let i = str.length - 1; i >= 0; i--) {
        returnStr += str[i];
    }

    return returnStr;
}

const calculator = {
    "add": function (a, b) {
        return a + b;
    },
    "subtract": function (a, b) {
        return a - b;
    },
    "divide": function (a, b) {
        return a / b;
    },
    "multiply": function (a, b) {
        return a * b;
    }
}

function caesarCipher(str, shift) {
    let returnStr = "";
    const alphabet = "abcdefghijklmnopqrstuvwxyz";

    return returnStr;
}

export { capitalize, reverseString, calculator, caesarCipher };
