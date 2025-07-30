function toggleMobileMenu() {
            const navLinks = document.querySelector('.nav-links');
            const hamburger = document.querySelector('.hamburger');
            
            navLinks.classList.toggle('active');
            hamburger.classList.toggle('active');
        }

        // Close mobile menu when clicking on a link
        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', () => {
                document.querySelector('.nav-links').classList.remove('active');
                document.querySelector('.hamburger').classList.remove('active');
            });
        });

        // Animate stats on scroll
        function animateStats() {
            const statNumbers = document.querySelectorAll('.stat-number');
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const target = entry.target;
                        const finalValue = target.textContent;
                        const isPercentage = finalValue.includes('%');
                        const numericValue = parseInt(finalValue.replace(/[^\d]/g, ''));
                        
                        let current = 0;
                        const increment = numericValue / 50;
                        const timer = setInterval(() => {
                            current += increment;
                            if (current >= numericValue) {
                                current = numericValue;
                                clearInterval(timer);
                            }
                            
                            if (finalValue.includes('K')) {
                                target.textContent = (current / 1000).toFixed(1) + 'K+';
                            } else if (isPercentage) {
                                target.textContent = Math.floor(current) + '%';
                            } else {
                                target.textContent = Math.floor(current) + '+';
                            }
                        }, 30);
                        
                        observer.unobserve(target);
                    }
                });
            });
            
            statNumbers.forEach(stat => observer.observe(stat));
        }

        // Initialize animations when page loads
        window.addEventListener('load', () => {
            animateStats();
        });

        // Smooth scroll for internal links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });