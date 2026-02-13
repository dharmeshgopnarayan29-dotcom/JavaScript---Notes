

// Performance Optimization
    // In web development, Performance Optimization is the process of making your website load faster and respond instantly to user actions.

// When an app is slow, users get frustrated and leave.
// As an Advanced Front-End Developer, your job is to write code that doesn't just "work," but works efficiently.

// Why does Performance matter?

    // User Retention: A 1-second delay can lower customer satisfaction by 16%.
    // SEO: Search engines like Google rank faster websites higher in search results.
    // Battery & Data: Efficient code saves battery life on mobile phones and uses less internet data.



// The Two Main Areas of Optimization
// To optimize a front-end app, we focus on two main "bottlenecks":

    // 1. Network Optimization (Loading Speed)
        // This is about how fast the files get from the server to the user's screen.

        // Minification: Shrinking code by removing spaces and comments.
        // Compression: Zipping files so they are smaller to download.
        // Lazy Loading: Only loading images or code when the user actually needs to see them.

    // 2. Execution Optimization (Runtime Speed)
        // This is about how smoothly the app runs after it has loaded. This is where Debouncing and Throttling live!

        // Reducing "Jank": Ensuring animations and scrolling stay smooth (60 frames per second).
        // Memory Management: Cleaning up unused data so the browser doesn't crash.
        // Avoiding Heavy Layout Reflows: Not forcing the browser to recalculate the entire page design unnecessarily.




// Imagine a website with 100 high-quality photos.

    // Without Optimization (Lazy Loading):
        // The browser tries to download all 100 photos at once. The page freezes, and the user waits a long time.
    // With Optimization (Lazy Loading):
        // The browser only downloads the photos the user can actually see on their screen. As the user scrolls down, the next photos load just in time




// The Concept: "Don't Load it until you need it"

    // The Placeholder: We start by putting a tiny, lightweight "placeholder" image (or just a blank space) where the real image will go.

    // The Observer: We use a tool called the IntersectionObserver. Think of this as a "Watchman" that stands at the edge of the screen.

    // The Switch: When the Watchman sees an image entering the screen, he swaps the "placeholder" for the real, high-quality image.

    // The Benefit: The website loads instantly because it only downloads 2 or 3 images instead of 100.


        // 1. Select all images that have the class 'lazy'
        const allImages = document.querySelectorAll('img.lazy');

        // 2. Setup the "Watchman" (IntersectionObserver)
        const watchman = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            
            // Check: Is the image visible on the screen?
            if (entry.isIntersecting) {
            const img = entry.target;
            
            // Swap the placeholder for the REAL image
            img.src = img.dataset.src; 
            
            // Stop watching this image (it's already loaded!)
            observer.unobserve(img);
            
            console.log("Image loaded for performance!");
            }
        });
        });

        // 3. Tell the watchman to start tracking every image
        allImages.forEach(image => watchman.observe(image));