
// The Debounce Logic (The Reset)

    // let timer: This is a container. It holds the "waiting period."
    // clearTimeout(timer): This is the most important part.
    // If you click a button again while the timer is still counting down, this line kills the old timer.
    // setTimeout: This starts a brand new countdown.
    // If you stop clicking, the countdown finally reaches zero and the work gets done.



// --- DEBOUNCE: The "Wait until I'm finished" Function ---
    function debounce(work, delay) {
        let timer; // 1. A variable to hold our countdown
        
        return function() {
            // 2. If the user acts again, "kill" the current countdown
            clearTimeout(timer); 
            
            // 3. Start a fresh countdown from scratch
            timer = setTimeout(() => {
            work(); // 4. Only do the work when the timer finally hits zero
            }, delay);
        };
    }


