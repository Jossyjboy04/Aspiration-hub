 // Mobile Navigation Toggle
        const hamburger = document.getElementById('hamburger');
        const mobileNav = document.getElementById('mobileNav');
        const main = document.getElementById('main');
        const header = document.getElementById('header');
        function show(){
            mobileNav.style.display="flex";
        }

        main.addEventListener('click', () => {
        mobileNav.style.display="none";
        });

        // Sticky Header Effect
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        });

        // Resource Card Click Effects
        document.querySelectorAll('.resource-card').forEach(card => {
            card.addEventListener('click', function() {
                // Add click effect
                this.style.transform = 'scale(0.95)';
                setTimeout(() => {
                    this.style.transform = '';
                }, 150);

                // Add loading animation
                this.classList.add('loading');
                setTimeout(() => {
                    this.classList.remove('loading');
                }, 1000);

                // Here you would typically handle the resource opening
                // For now, we'll just show a simple message
                console.log('Opening resource:', this.querySelector('.resource-title').textContent);
            });
        });

        // Add entrance animations on scroll
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.animationPlayState = 'running';
                }
            });
        }, observerOptions);

        document.querySelectorAll('.resource-card').forEach(card => {
            observer.observe(card);
        });

        // Smooth scrolling for any anchor links
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