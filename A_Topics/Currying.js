

// Currying :
    // In simple terms, Currying is a transformation of functions.
    // Instead of taking all arguments at once, a function takes one argument at a time and returns a new function that expects the next argument.

// The Basic Idea :
    // Imagine a function that needs 3 ingredients to make a dish.

        // Normal Function:
            //  You give all 3 ingredients at the same time.

        // Curried Function : 
            // You give the first ingredient, and the function gives you a "receipt."
            // You give the second ingredient to that receipt, and it gives you another receipt.
            // Finally, you give the third ingredient, and you get your dish.



            
// Comparison at a Glance

    // Regular Function:
        // Arguments: fn(a, b, c)
        // Logic: Does everything at once.
        // Flexibility: Harder to reuse parts.
        // Curried Function:

    // Arguments: fn(a)(b)(c)
        // Logic: Does one step at a time.
        // Flexibility: Very easy to reuse parts.



// --- 1. THE NORMAL WAY ---
    function calculatePrice(discount, price) {
    return price - (price * discount);
    }

    // We have to repeat the 0.10 every single time
    console.log(calculatePrice(0.10, 100)); // 90
    console.log(calculatePrice(0.10, 200)); // 180


// --- 2. THE CURRIED WAY ---
    function curryPrice(discount) {
    // This inner function "remembers" the discount
        return function(price) {
            return price - (price * discount);
        };
        }

    // Step A: Create a specialized "10% off" function
    const applyTenPercent = curryPrice(0.10);

    // Step B: Use that specialized function for different prices
    console.log(applyTenPercent(100)); // 90
    console.log(applyTenPercent(500)); // 450

    // You can also call it all at once like this:
    const final = curryPrice(0.20)(100); // 80