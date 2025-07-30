
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

        // Character counters
        function updateCharCounter(inputElement, counterElement, maxLength) {
            const currentLength = inputElement.value.length;
            const counter = document.getElementById(counterElement);
            counter.textContent = `${currentLength}/${maxLength} characters`;
            
            // Color coding for character limits
            counter.classList.remove('warning', 'danger');
            if (currentLength > maxLength * 0.8) {
                counter.classList.add('warning');
            }
            if (currentLength > maxLength * 0.95) {
                counter.classList.add('danger');
            }
        }

        // Title character counter
        document.getElementById('topicTitle').addEventListener('input', function() {
            updateCharCounter(this, 'titleCounter', 100);
        });

        // Content character counter
        document.getElementById('postContent').addEventListener('input', function() {
            updateCharCounter(this, 'contentCounter', 2000);
        });

        // Form validation and submission
        document.getElementById('createPostForm').addEventListener('submit', function(e) {
            e.preventDefault();
            
            const title = document.getElementById('topicTitle').value.trim();
            const category = document.getElementById('topicCategory').value;
            const content = document.getElementById('postContent').value.trim();
            
            // Basic validation
            if (!title || !category || !content) {
                alert('Please fill in all required fields.');
                return;
            }
            
            if (title.length < 10) {
                alert('Please provide a more descriptive title (at least 10 characters).');
                document.getElementById('topicTitle').focus();
                return;
            }
            
            if (content.length < 20) {
                alert('Please provide more details in your message (at least 20 characters).');
                document.getElementById('postContent').focus();
                return;
            }
            
            // Disable submit button during processing
            const submitBtn = document.getElementById('submitBtn');
            submitBtn.disabled = true;
            submitBtn.textContent = 'Creating Discussion...';
            
            setTimeout(() => {
                alert('Your discussion topic has been created successfully! You will now be redirected to the forum.');
                
                window.location.href = 'discussion-forum.html';
            }, 1500);
        });

        // Auto-resize textarea
        document.getElementById('postContent').addEventListener('input', function() {
            this.style.height = 'auto';
            this.style.height = Math.max(150, this.scrollHeight) + 'px';
        });

        // Form auto-save (optional - saves to localStorage)
        function autoSave() {
            const formData = {
                title: document.getElementById('topicTitle').value,
                category: document.getElementById('topicCategory').value,
                content: document.getElementById('postContent').value
            };
            
            if (formData.title || formData.content) {
                 localStorage.setItem('draft-post', JSON.stringify(formData));
            }
        }

        // Auto-save every 30 seconds
        setInterval(autoSave, 30000);

        window.addEventListener('load', function() {
            const draft = localStorage.getItem('draft-post');
            if (draft) {
                const formData = JSON.parse(draft);
                document.getElementById('topicTitle').value = formData.title || '';
                document.getElementById('topicCategory').value = formData.category || '';
                document.getElementById('postContent').value = formData.content || '';
            }
        });