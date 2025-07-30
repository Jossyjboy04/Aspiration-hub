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

        function focusSearch() {
            document.getElementById('searchInput').focus();
            document.getElementById('searchInput').select();
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }

        // Handle search form submission
        document.getElementById('searchForm').addEventListener('submit', function(e) {
            e.preventDefault();
            const searchTerm = document.getElementById('searchInput').value;
            
            if (searchTerm.trim()) {
                // Update search term display
                document.querySelector('.search-term').textContent = `${Math.floor(Math.random() * 50) + 20} results`;
                
                // Simulate search results update
                setTimeout(() => {
                    alert(`Searching for: "${searchTerm}"`);
                    // In a real application, this would trigger a new search
                }, 300);
            }
        });

        // Smooth scroll to top when clicking logo
        document.querySelector('.logo').addEventListener('click', function(e) {
            if (window.location.pathname.includes('search-results')) {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
            }
        });