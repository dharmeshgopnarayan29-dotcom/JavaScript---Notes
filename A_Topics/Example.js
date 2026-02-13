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
do {                                             // executes the code block at least once, before checking the condition.
    console.log("a =",a);
    a++;
} while (a < 4);


let values = ["Apple", "Orange", "Mango"]        // for...of Loop (Use for arrays)
for (let value of values) {
    console.log(value);
}


let student = {name: "John", age: 20, grade: "A"};     // for...in loop  (Use for objects)
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
                arr3.splice(1,0,"Dhruv")        // Output : [1,"Dhruv",2,3,4,5]


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
            let found = arrr3.find(el => el > 10);      // Output : 12
            
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


// Copy by value :
    // This applies to primitive data types: numbers, strings, booleans, null, and undefined.
    let A = 5;
    let b = a;              // b gets A copy of 5
    A = 10;
    console.log(b);         // still 5, Unaffected


// Copy by Reference :
    // This applies to complex data types like non-primitive data types such as: objects, arrays, and functions.
    let arrA = [2, 5, 67, 23, 1]
    let arrB = arrA;                  // arrB references same object
    arrB[0] = 3000;
    console.log(arrA[0]);             // 3000, changed through arrB


// Shallow Copy :
    // A shallow copy in JavaScript creates a new outer object/array, but nested objects are still shared between the original and the copy.
    // Ex :
        let s = [1,2,3];
        let d = [...s];         // Shallow Copy
        d[0] = 100;
        console.log(s)          // Output : [1,2,3]
        console.log(d)          // Output : [100,2,3]

    // Ex :
    let s1 = [[1,2], [3,4]];
    let d1 = [...s1];
    d1[0][0] = 100;
    console.log(s1);           // output : [[100,2], [3,4]]
    console.log(d1);           // Output : [[100,2], [3,4]]

    // Ex :
    let user1 = {
        name: "Dharmesh",
        address: {
            city: "Mumbai"
            }
        };

    let user2 = { ...user1 };                     // shallow copy
    user2.address.city = "Delhi";
    console.log(user1.address.city);             // Delhi
    console.log(user2.address.city);            // Delhi

    // Common methods for shallow copying include :
        const oldArray = [
                    { name: "A" },
                    { name: "B" }
                    ];

        // 1. Array.from()   ----> Does not Deep copy
            // Create new array from array-like or iterable objects.
            // Array.from(iterable, mapFn?, thisArg?)
            let str = "hello";
            let arrrr = Array.from(str);
            // Output : ["h", "e", "l", "l", "o"]

        // 2. Spread Operator : 
            const newArray = [...oldArray];

        // 3. Silce() :
            const copy3 = oldArray.slice();
            copy3[0].name = "Z";
                // Output :  [{ name: "Z" }, { name: "B" }]

        // 4. concat() :
            const copy4 = [].concat(oldArray);
            copy4[0].name = "P";
            // Output : [{ name: "P" }, { name: "B" }]

        // 5. map() :
            const copy5 = oldArray.map(item => item);
            copy5[0].name = "Q";
               // Output : [{ name: "Q" }, { name: "B" }]


// Deep Copy :
    // Deep copies duplicate the elements and all nested objects or arrays, so changes in the copied array do not affect the original.
    // Function are not supported

    // Common methods for deep copying include:
        // a. Using JSON serialization :
            const original = [
                    { name: "A", marks: 90 },
                    { name: "B", marks: 85 }
                ];
            const copy = JSON.parse(JSON.stringify(original));
            copy[0].marks = 100;
            console.log(original);
                // [{ name: "A", marks: 90 }, { name: "B", marks: 85 }]
            console.log(copy);
                // [{ name: "A", marks: 100 }, { name: "B", marks: 85 }]


        // b. Modern structured cloning :
            // Function are not supported
            const original2 = {
                name: "Dharmesh",
                scores: [90, 85, 88],
                address: { city: "Mumbai" }
                };

            const copy2 = structuredClone(original2);
            copy2.address.city = "Delhi";
            console.log(original2.address.city);     // Mumbai
            console.log(copy2.address.city);         // Delhi


// Object Method :
    // Object methods are functions stored as properties in objects, allowing them to perform 
    // actions or computations using the object's data. Within these methods, this refers to the owner object.

    // Syntax :
            const person = {
                name5 : "Dharmesh",
                greet : function () {
                    return "Hii, I'm" + this.name5;
                }
            };

            person.greet();    // Hii, I'm Dharmesh


// for -in loop to iterate over object properties :
    // Syntax : 
        // for(let key in Object) {
        //     // code here
        // }

        const person2 = {
            name4 : "Shivam",
            age : 20
        }
        for (let key in Object) {
            console.log(key)
        }                               // output : name  age



// Prototype in Javascript :
    function Person3(name6) {
        this.name6 = name6;
    }
    Person3.prototype.sayHello = function() {
        console.log(`Hello, my name is ${this.name6}.`);
    };

    const n2 = new Person3("Dharmesh");
    n2.sayHello();              // Output : Hello, my name is Dharmesh.


    

    //  Using Object.create() :
        // Creates a new object with the specified prototype.

        const PeopleProto = {
            greet() {
                console.log(`Hello, My Name is ${this.name}...`);
            }
        };

        const people = Object.create(PersonProto);
        people.name = "Ashu";
        people.greet();                // Output : Hello, My Name is Ashu...
    



// Common Built-in Object methods :

    // 1. Using Object.create() :
        // Creates a new object with the specified prototype.

        const PeopleProto1 = {
            greet() {
                console.log(`Hello, My Name is ${this.name}...`);
            }
        };

        const people = Object.create(PersonProto1);
        people.name = "Ashu";
        people.greet();                // Output : Hello, My Name is Ashu...
    
    // 2. Using Object.assign() :
        // Copies enumerable properties from one or more source objects to a target object.

        // Object.assign(target, source1, source2,...);
            const target = {a : 1};
            const source = {b : 2};
            const final = Object.assign(target, source);
                // Output : {a : 1, b : 2}

    // 3. Using Object.keys() :
        // Returns an array of a given object's own enumerable property names
            const obj = {a : 1, b : 2};
            Object.keys(obj);
                // Output : ["a", "b"]



// call() :
        function greet(city) {
            console.log(`Hi, I am ${this.name} from ${city}`);
            }

        const user = { name: "Dharmesh" };
        greet.call(user, "Mumbai");
            // Output : Hi, I am Dharmesh from Mumbai


// apply() :
        function greet(city) {
            console.log(`Hi, I am ${this.name2} from ${city}`);
        }
        const user12 = {name2 : "Dharmesh"};
        greet.apply(user12, ["Delhi"]);
            // Output :  Hi, I am Dharmesh from Delhi


// bind() :
        const user123 = {
            username123 : "Ashu",
            age : 20,
            address123 : "Jamshedpur",
            getUserName : function() {
                return this.username123;
            }
        };
        function printUser() {
            const userDetail = `User Name is ${this?.username123} having age : ${this?.age}, living in : ${this?.address123}`
            console.log(userDetail);
        }

        printUser();    // It's give Unknown

        // Explicit binding 
        const bindFunc = printUser.bind(user123);        
        bindFunc();      // It's Give details

        // Demonstrate bind 
        const bindedFunc = printUser.bind(user123, "extra Param")


// Destructuring :
    // Destructuring is a syntax in JavaScript that allows unpacking values from arrays or properties from objects into distinct variable
    
    // 1. Array Destructuring :
        const arrr12 = [10,20,30];
        const [a12,b12] = arrr12
        console.log(a12);             // output : 10
        console.log(b12);             // output : 20
        
        // Skipping Items :
        const [a13, ,b13] = arrr12;   // output : 10 30
        
        // Default Items :
        const [v = 5, w = 15] = [100];
        console.log(v,w);              // Output : 100 15

    // 2. Object Destructuring :
        const user1345 = { name1345: "Hari", age: 25, address: "Bangalore" };
        const { name1345, age } = user1345;
        console.log(name1345);             // "Hari"
        console.log(age);                  // 25

            // Property Renaming :
                const { name: username22, age: years } = user1345;
                console.log(username22);          // "Hari"
                console.log(years);               // 25

            // Default Values
                // Defaults can be set if a property is missing:
                const { country = "India" } = user;
                console.log(country);            // "India"

            // Nested Destructuring
                // Extract properties from nested objects:
                const marks = {
                    section1: { alpha: 15, beta: 16 },
                    section2: { alpha: -31, beta: 19 }
                    };
                const { section1: { alpha, beta } } = marks;
                console.log(alpha, beta); // 15 16

            // Rest Properties
                // Use rest to collect remaining properties:
                const { name134, ...details } = user;
                console.log(details); // {age: 25, address: "Bangalore"}

            
// Factory Function : 
    // A factory function is a function that creates and returns a new object each time
    // Unlike constructor functions, factory functions do not require the new keyword

    // Factory functions are useful when you need to create multiple objects with similar properties and methods but want to avoid repeating code

    function createUser(name, age) {
        return {
            name: name,
            age: age,
            greet() {
                console.log(`Hello, my name is ${name} and I am ${age} years old.`);
                },
            };
        }
    const user11 = createUser("Hari", 25);
    user1.greet();              // Hello, my name is Hari and I am 25 years old.
    const user2 = createUser("Mita", 30);
    user2.greet();              // Hello, my name is Mita and I am 30 years old.

    
// Constructor Function :
    // the new keyword is used to create an object from a constructor function or class.
        // When you use new, JavaScript:
            // 1. Creates a new empty object
            // 2. Sets the object’s prototype
            // 3. Binds this to the new object
            // 4. Returns the object automatically



// Promises :
    let promise = new Promise((resolve, reject) => {
    // async operation
    if (success) {
        resolve("Operation successful!");
    } else {
        reject("Something went wrong!");
    }
    });

// Promises Chaining :
    // Promise chaining in JavaScript is a technique where multiple asynchronous operations are executed sequentially by returning promises inside .then() handlers.

    // Example :
    function task(message, delay) {
        return new Promise((resolve) => {
            setTimeout(() => {
            console.log(message);
            resolve(message);
            }, delay);
        });
        }

        task("Task 1 completed", 1000)
            .then(() => task("Task 2 completed", 1000))
            .then(() => task("Task 3 completed", 1000))
            .catch((error) => console.error("Error:", error));


        