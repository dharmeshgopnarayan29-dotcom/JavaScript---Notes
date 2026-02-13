// function A(n) {
    
//     return typeof n
// };

// console.log(A("String"))
// console.log(A(134))
// console.log(A({}))


// const user1345 = { name134: "Hari", age: 25, address: "Bangalore" };
//     const { name134, age } = user1345;
//     console.log(name134);             // "Hari"
//     console.log(age); 

// function car(a) {
//     console.log(a, this)
// }

// const drive = {start : "Car starting"};

// car.call(drive, drive)


// const car = {
//     door: 2,
//     wheel: 4,
//     s : function () {
//         console.log("Car", this)
//     }
// }
// car.s()
// function Hof(callback) {
//     callback()
// }



// function first(c1) {
//     console.log("First")
//     c1(thrid)
// }

// function second(c2) {
//     c2()
//     console.log("Second")
// }

// function third() {
//     console.log("Thrid")
// }

// first(second);


// function rec(count) {
//     if (count===0) return;
//     console.log(count);
//     rec(count-1);
//     console.log(count)
// }

// rec(3)


// console.log("Start")

// const res = await fetch("https://jsonexamples.com/")
// console.log("Response", res)

// console.log("End")

// console.log("10" + 20 + 30 - "5")


// const parent = document.getElementById('parent');
// const rev = document.getElementById('reverse');
// const play = document.getElementById('play');
// const pause = document.getElementById('pause');

// rev.addEventListener('click', () => {console.log("Reverese by 10 seconds")});
// play.addEventListener('click', () => {console.log("Play The Video")});
// pause.addEventListener('click', () => {console.log("Pause THe Video")});

// parent.addEventListener('click', (e) => {
//     console.log("Target :", e.target)
//     console.log("Current Target :", e.currentTarget)
// })


const inputWord = document.getElementById('dictionary');
const word = document.getElementById('word');
const meaning = document.getElementById('meaning');


async function getMeaning() {
    const w = inputWord.value;
    word.innerText = w;

    const url =  `https://freedictionaryapi.com/api/v1/entries/en/${w}`
    const response = await fetch(url);
    const data = await response.json();
    console.log(data?.entries[0]?.senses);

    if(data?.entries[0]?.senses.length > 0) {
        meaning.innerText = data?.entries[0]?.senses[0]?.definition
    } else{
        meaning.innerText = "No Definition available"
    }
}

function debounceFunc(callback, delay) {
    let timerId = null;

    return function () {
        clearTimeout(timerId);
        timerId = setTimeout(() => {
            callback();
        }, delay)
    }
}



