

// Promise
    new Promise((resolve, reject) => resolve("Hello from a Promise!"))
        .then(message => console.log(message))
        .catch(error => console.error(error));
        // Hello from a Promise!



// Implicit Return (The "One-Liner")
    // (Without curly braces)
    // x => x + 1	
    // Returns the value automatically.	

// Expilcit Return (The "Block Body")
    // (with curly braces)
    // x => { return x + 1; }
    // Returns nothing unless return keyword is used.





// Promise Chaining

    function getBread() {
    // Complete this function
        return new Promise(resolve => {
            setTimeout(() => resolve(`Bread ready`), 1000)
        })
    }

    function addFilling(message) {
        // Complete this function
        return new Promise(resolve => {
            setTimeout(() => resolve(`${message} -> Filling added`), 1000)
        })
    }

    function serveSandwich(message) {
        // Complete this function
        return new Promise(resolve => {
            setTimeout(() => resolve(`${message} -> Sandwich served`), 1000)
        })
    }

    // Chain the promises here
    getBread()
        .then(result => addFilling(result))
        .then(result => serveSandwich(result))
        .then(result => console.log(result))
        .catch(error => console.error("Error: ", error));






// From then TO await

    function getUserPost() {
        fetch('https://jsonplaceholder.typicode.com/posts/1')
            .then(response => response.json())
            .then(post => {
                console.log('Post:', post);
            })
            .catch(error => {
                console.error('An error occurred:', error);
            });
    }


        // CONVERT .then() TO async/await


    async function getUserPost() {
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
            const json = await response.json();
            console.log(json);
        } catch (error) {
            console.error('Error:', error)
        }
    }

    getUserPost();