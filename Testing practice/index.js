function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

function reverseString(str) {
    let returnStr = "";

    for (let i = str.length - 1; i >= 0; i--)
        returnStr += str[i];

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

    for (let i = 0; i < str.length; i++) {
        if (!alphabet.includes(str[i].toLowerCase())) {
            returnStr += str[i];
            continue;
        }

        let index = alphabet.indexOf(str[i].toLowerCase());

        if (index >= alphabet.length - 1)
            index = index - alphabet.length;

        if (str[i] === str[i].toLowerCase()) {
            returnStr += alphabet[index + shift];
        } else {
            returnStr += alphabet[index + shift].toUpperCase();
        }
    }

    return returnStr;
}

function analyzeArray(arr) {
    return {
        average: arr.reduce((a, b) => a + b, 0) / arr.length,
        min: arr.reduce((a, b) => Math.min(a, b)),
        max: arr.reduce((a, b) => Math.max(a, b)),
        length: arr.length
    };
}

export { capitalize, reverseString, calculator, caesarCipher, analyzeArray };
