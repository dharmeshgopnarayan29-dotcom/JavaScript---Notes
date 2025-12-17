sayHello();

function sayHello() {
    console.log("Hello...");
}


// Template Literals
let name = "Dharmesh"
let greeting = `Hello, ${name}...`
console.log(greeting);


// MultiLine Strings
let MultiLine = `
    This is line First.
    This is line Second.
    This is line Third...`;
console.log(MultiLine)

let OldWay = "This is line First.\nThis is line Second...";
console.log(OldWay);


// String Interpolation
let name1 = "Dharmesh";
let State = "Maharastra";
let message = `My name is ${name1}, I'm from ${State}...`;
console.log(message);


// Input
// let name2 = prompt("What is your name?"); 

// Processing
// let message2 = "Hello, " + name2 + "!";

// Output
// alert(message2);


// Conditional Statements in JavaScript
let i = 4;                 // if Statement
if (i < 5) {
    console.log("Condition is right...");
}


let Temperature = 42;                  // if-else Statement
if (Temperature < 45) {
    console.log(`Today's Temperature ${Temperature}....`);
} else {
    console.log("Temperature is more...");
}


let mark = 80;                        // if - else if Statement
if (mark < 35) {
    console.log(" Over All Grade 'C'....");
} else if (mark < 70) {
    console.log("Over All Grade 'B'.....");
} else {
    console.log("Student Out Perform....");
}


let day = "Monday";                  // switch statement
switch (day) {
    case "Monday":
        console.log("Start of the work week.");
        break; 
    case "Friday":
        console.log("Weekend is coming!");
        break;
    case "Sunday":
        console.log("Relaxing time.");
        break;
    default:
        console.log("Just a regular day.");
}



// Loops in JavaScript
for (let i = 2; i < 8; i++) {                     // for Loop
    console.log("i =", i);
}


let e = 1;                                        // while Loop
while (e < 3) {
    console.log("e =", e);
    e++;
}


let a = 1;                                       // do...while Loop
do {
    console.log("a =",a);
    a++;
} while (a < 4);


let values = ["Apple", "Orange", "Mango"]        // for...of Loop
for (let value of values) {
    console.log(value);
}


let student = {name: "John", age: 20, grade: "A"};     // for...in loop
for (let key in student) {
    console.log(key, ":", student[key]);
}


for (let d = 1; d < 4; d++) {                    // Loop Control : break
    if (d === 3) break;
    console.log(d);
}


for (let f = 1; f < 4; f++) {                    // Loop Control : continue
    if (f === 2) continue;
    console.log(f);
}



// Accessing String characters
const username = "Dharmesh"                      // Using Square Brackets
const firstCharacter = username[0]
     // Syntax:
         username.charAt(2)                           // Gives character at given index
     // Syntax:
         username.at(3)                               // gives character at given index

// string.slice(start_index_included, end_index_excluded)
let name3 = "Dharmesh";
name3.slice(1, 4);              // Output : "har"
name3.slice(-3);                // Output : "esh"

// string.substring(start_index_included, end_index_excluded)
// The substring() method also returns a portion of the string between the given
// indexes.
// Syntax:
// string.substring(startIndex, endIndex)  extracts part of the string
let q = "sunny";
q.substring(1, 4);                // output: "unn"
q.substring(-3, 4);               // output: "sunn" (negative treated as 0)


// How to Create Arrays in javascript?
   // 1. Using Literal syntax
       // Syntax:
            const arr = [1, 2, 3, 4];
   // 2. Using new keyword
        // Syntax:
            const arr1 = new Array([1, 2, 3, 4]);


// Access Array Elements
     // 1. Square bracket notation
          // Syntax:
                 arr[4]        // gives element at given index

     // 2. Using array.at() Method
          // Syntax :
                 arr.at(2)       // gives element at given index
                 const arr2 = [1,2,3,4]
                 console.log(arr2.at(1))          // Output : 2
                 console.log(arr2.at(-1))         // Output : 4


// Add, Update and Delete Elements from Arrays
const arr3 = [1,2,3,4,5];
// 1. Adding Element & Update Element :
            // a. Square Bracket
                arr3[5] = 12                   // Output : [1,2,3,4,5,12]

            // b. array.push() Method (Push at end)
                arr3.push("dharmesh");         // Output : [1,2,3,4,5,"dharmesh"]
            
            // c. array.unshift() Method  (Push at start)
                arr3.unshift(29)               // Output : [29,1,2,3,4,5]   

            // d. array.splice(start, delete_count, ele_1, ele_2, ....)
                arr3.splice(1,0,"Ashu")        // Output : [1,"Ashu",2,3,4,5]


// 2. Delete Element :
             // a. array.pop() Method :
                arr3.pop();                    // [1,2,3,4]  remove from end

             // b. array.shift() Method :
                arr3.shift();                  // [2,3,4,5]  remove from start

             // c. delete Keyword :
                delete arr3[1];                // [1,3,4,5]  remove element at index

             // d. splice(start, delete_count)
                const arr4 = [1,2,3,4];
                arr4.splice(2, 0, "ashu", "shivam", "prince")
                // Output : [1, 2, 'ashu', 'shivam', 'prince', 3, 4]
 


// Array Length Property
    //● The length property of an array in JavaScript represents the number of
// elements in that array.
    //● It is automatically updated when elements are added or removed.

    const arr5 = [1,2,3,4];
    // 1. Returns element count :
                console.log(arr5.length);   // Output : 3

    // 2. Can be manually changed :
                let arr6 = [1,2,3,4,5]
                arr6.length = 3;            // Output : [1,2,3]


// Remaining Array Method :
    // 1. Merge Two or more array (concat Method):
        let arr7 = [8,9];
        let result = arr5.concat(arr7);     // Output : [1,2,3,4,8,9]
    
    // 2. aaray.indexof(element)
        // Returns the first index of the element found.
        // ● Returns -1 if not found. 
            let arrr = [10,20,30,40] 
            arrr.indexOf(2)                 // Output : 1
    
    // 3. array.lastIndexOf(element)
        // ● Returns the last index of the element found.
        // ● Returns -1 if not found.
            let arrr1 = [10,20,30,20]
            arrr1.lastIndexOf(20);           // Output : 3
    
    // 4. array.includes(element)
        // ● Returns true if the element exists in the array, otherwise false.
        // ● Performs a strict equality check (===).
            let arrr2 = [1,2,3,4];
            arrr2.includes(2);              // Output : True
            arrr2.includes(5);              // Output : False
        
    // 5. array.find(callback)
        // ● Returns the first element that satisfies the condition inside the callback.
        // ● Returns undefined if none is found.
            let arrr3 = [5, 12, 8, 130, 44];
            let found = arr.find(el => el > 10);      // Output : 12
            
    // 6. array.findIndex(callback)
        // ● Returns the index of the first element that satisfies the condition in the callback.
        // ● Returns -1 if no element matches.
            let arrr4 = [5, 12, 8, 130, 44];
            let index = arr.findIndex(el => el > 100);    // Output : 3

    // 7. array.sort()
        // ● Sorts the array elements in place (modifies the array).
        // ● Converts elements to strings by default and sorts lexicographically.
        // ● A comparison/comparator function can be passed for custom sorting.
            let arrr5 = [40, 10, 30, 20];
            arrr5.sort((a, b) => a - b); // ascending
            // [10, 20, 30, 40]
            arrr5.sort((a, b) => b - a); // descending
            // [40, 30, 20, 10]

    // 8. array.reverse()
        // ● Reverses the order of the array.
        // ● Modifies the original array.
            arrr5.reverse()              // Output : [20,30,10,40]

    // 9. array.toReversed()
        // Returns a copy of the array reversed.
        // Original array remains unchanged.
            arrr5.toReversed()           // Output : [20,30,10,40]

    // 10. array.toSorted()
        // ● Returns a copy of the array sorted.
        // ● Does not modify the original array.
            arrr5.toSorted((a, b) => a - b);      // [10,20,30,40]
            // It's not change in original array


// Array Iteration Methods :
    // 1. array.forEach() :
        // array.forEach(callback(currentValue, index, array))
        let fruits = ["apple", "orange", "banana"];
        fruits.forEach(function(item) { console.log(item); });   
        // output: apple orange banana

    // 2. array.map() :
        //  It does not modify the original array, instead returning a transformed copy.
        // array.map(callback(currentValue, index, array))
        let nums = [1, 2, 3, 4];
        let squares = nums.map(x => x * x);         // output: [1, 4, 9, 16]

    // 3. array.filter() :
        // The original array remains unchanged.
        // array.filter(callback(element, index, array), thisArg)
        let numbers = [-20, 43, 12, 39, -2];
        let big = numbers.filter(n => n > 10);       // output: [43, 12, 39]

    // 4. array.reduce() :
        // array.reduce(callback(accumulator, currentValue, index, array),initialValue)  
        let nums2 = [1, 2, 3, 4];
        let sum = nums2.reduce((acc, curr) => acc + curr, 0); 

    // 5. array.every() :
        // It returns a Boolean value and stops checking after the first failure.
        // array.every(callback(element, index, array), thisArg)
        let ages = [20, 43, 12, 39, 2];
        let allAdults = ages.every(age => age >= 18);     // output: false

    // 6. array.some() :
        // It returns true if any elements pass and false otherwise.
        // array.some(callback(element, index, array), thisArg)
        let ages2 = [20, 43, 12, 39, 2];
        let hasAdult = ages2.some(age => age >= 18);      // output: true




