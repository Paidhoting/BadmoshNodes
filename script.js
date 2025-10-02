document.addEventListener('DOMContentLoaded', function() {
    
    // Smooth Scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            document.querySelector(targetId).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Scroll Animation (Intersection Observer)
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                // Agar aap chahte hain ki animation ek hi baar ho, toh neeche wali line uncomment kar dein
                // observer.unobserve(entry.target); 
            } 
        });
    }, {
        threshold: 0.1 // Jab element ka 10% dikhe
    });

    document.querySelectorAll('.animate-up').forEach(element => {
        observer.observe(element);
    });
});