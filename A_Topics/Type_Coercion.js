

// Type Coercion
    // In JavaScript, every piece of data has a "Type" (like a String, Number, or Boolean). Type Coercion is the process of converting a value from one type to another.

    // Think of it as a translator. Sometimes you manually ask for a translation (Explicit), and sometimes JavaScript tries to translate for you automatically (Implicit).



// 1. Explicit Coercion (Manual)
    // Explicit coercion is when you intentionally change a type. You write code that clearly says: "Turn this value into a Number."

// 2. Implicit Coercion (Automatic)
    // Implicit coercion is when JavaScript surprises you by changing the type behind the scenes. It happens when you try to apply operators (like +, -, or ==) to values of different types



const inputA = "10";
const inputB = 5;

// TASK 1: Explicit Coercion
// Convert inputA into a number and store the result in totalSum
let totalSum = Number(inputA) + inputB;

// TASK 2: Implicit Coercion
// Without converting types manually, combine inputA and inputB
let combinedResult = inputA + inputB;

// TASK 3: Boolean Coercion
// Convert the value 0 into a boolean and store it in isActive
let isActive = Boolean(0);

console.log("Total Sum:", totalSum);
console.log("Combined Result:", combinedResult);
console.log("Is Active:", isActive);