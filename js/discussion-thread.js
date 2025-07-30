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

        function scrollToReplyForm() {
            document.querySelector('.reply-form-section').scrollIntoView({
                behavior: 'smooth'
            });
            document.getElementById('replyText').focus();
        }

        function sharePost() {
            if (navigator.share) {
                navigator.share({
                    title: 'How to Stay Motivated During Challenging Times',
                    text: 'Check out this inspiring discussion on Aspiration Hub',
                    url: window.location.href
                });
            } else {
                // Fallback for browsers that don't support Web Share API
                navigator.clipboard.writeText(window.location.href);
                alert('Link copied to clipboard!');
            }
        }

        // Handle reply form submission
        document.getElementById('replyForm').addEventListener('submit', function(e) {
            e.preventDefault();
            const replyText = document.getElementById('replyText').value;
            
            if (replyText.trim()) {
                // Create new reply card
                const repliesSection = document.querySelector('.replies-section');
                const replyCard = document.createElement('article');
                replyCard.className = 'reply-card';
                replyCard.innerHTML = `
                    <div class="reply-meta">
                        <div class="reply-avatar">YU</div>
                        <div>
                            <div class="reply-author">you</div>
                            <div class="reply-timestamp">Just now</div>
                        </div>
                    </div>
                    <div class="reply-content">
                        <p>${replyText.replace(/\n/g, '</p><p>')}</p>
                    </div>
                `;
                
                repliesSection.appendChild(replyCard);
                
                // Clear form and show success
                document.getElementById('replyText').value = '';
                alert('Your reply has been posted successfully!');
                
                // Scroll to new reply
                replyCard.scrollIntoView({ behavior: 'smooth' });
            }
        });