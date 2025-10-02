document.addEventListener('DOMContentLoaded', function() {
    
    // Smooth Scrolling for Navigation (Navigation ke liye smooth scrolling)
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            document.querySelector(targetId).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Scroll Animation (Scroll hone par elements ka upar aana)
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                // observer.unobserve(entry.target); // Agar aap chahte hain ki animation ek hi baar ho
            } else {
                // optional: entry.target.classList.remove('is-visible'); // Agar aap chahte hain ki wapas scroll karne par element gayab ho jaye
            }
        });
    }, {
        threshold: 0.1 // Jab element ka 10% dikhe
    });

    document.querySelectorAll('.animate-up').forEach(element => {
        observer.observe(element);
    });
});