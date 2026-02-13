

//  The Throttle Logic (The Gatekeeper)

    // let isWaiting: This is a simple "Yes/No" switch (a boolean).
    // if (isWaiting) return: This is the gate.
    // If the switch is "Yes," the function stops immediately and does nothing.
    // isWaiting = true: Once the work starts, we flip the switch to "Yes" to lock the gate.
    // setTimeout: This is a timer that waits for the delay to finish, then flips the switch back to "No" so the work can happen again.


// --- THROTTLE: The "Only once every X seconds" Function ---
function throttle(work, interval) {
  let isWaiting = false; // 1. The "Gate" starts as OPEN (false)
  
  return function() {
    // 2. If the Gate is CLOSED, stop here and go home
    if (isWaiting) return; 
    
    // 3. If the Gate is OPEN, do the work!
    work();
    
    // 4. Immediately CLOSE the gate
    isWaiting = true; 
    
    // 5. After the interval (e.g. 1000ms), OPEN the gate again
    setTimeout(() => {
      isWaiting = false;
    }, interval);
  };
}