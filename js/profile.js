        // Mobile Navigation Toggle
        const hamburger = document.getElementById('hamburger');
        const mobileNav = document.getElementById('mobileNav');
        const overlay = document.getElementById('overlay');
        const header = document.getElementById('header');

        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            mobileNav.classList.toggle('active');
            overlay.classList.toggle('active');
        });

        overlay.addEventListener('click', () => {
            hamburger.classList.remove('active');
            mobileNav.classList.remove('active');
            overlay.classList.remove('active');
        });

        // Sticky Header Effect
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        });

        // Edit Profile Functionality
        const editProfileBtn = document.getElementById('editProfileBtn');
        const accountInfo = document.getElementById('accountInfo');
        const saveBtn = document.getElementById('saveBtn');
        const cancelBtn = document.getElementById('cancelBtn');
        const infoValues = document.querySelectorAll('.info-value');

        let originalValues = {};

        editProfileBtn.addEventListener('click', () => {
            // Store original values
            infoValues.forEach((input, index) => {
                originalValues[index] = input.value;
            });

            // Enable edit mode
            accountInfo.classList.add('edit-mode');
            infoValues.forEach(input => {
                input.removeAttribute('readonly');
                input.removeAttribute('disabled');
            });
            editProfileBtn.textContent = 'Editing...';
            editProfileBtn.style.background = '#f59e0b';
            editProfileBtn.disabled = true;
        });

        saveBtn.addEventListener('click', () => {
            // Simulate save operation
            saveBtn.textContent = 'Saving...';
            saveBtn.disabled = true;

            setTimeout(() => {
                // Exit edit mode
                accountInfo.classList.remove('edit-mode');
                infoValues.forEach(input => {
                    input.setAttribute('readonly', 'readonly');
                    if (input.tagName === 'SELECT') {
                        input.setAttribute('disabled', 'disabled');
                    }
                });
                editProfileBtn.textContent = 'Edit Profile';
                editProfileBtn.style.background = '';
                editProfileBtn.disabled = false;
                saveBtn.textContent = 'Save Changes';
                saveBtn.disabled = false;

                // Show success message
                showMessage('Profile updated successfully!', 'success');
            }, 1500);
        });

        cancelBtn.addEventListener('click', () => {
            // Restore original values
            infoValues.forEach((input, index) => {
                input.value = originalValues[index];
            });

            // Exit edit mode
            accountInfo.classList.remove('edit-mode');
            infoValues.forEach(input => {
                input.setAttribute('readonly', 'readonly');
                if (input.tagName === 'SELECT') {
                    input.setAttribute('disabled', 'disabled');
                }
            });
            editProfileBtn.textContent = 'Edit Profile';
            editProfileBtn.style.background = '';
            editProfileBtn.disabled = false;
        });

        // Profile Picture Upload
        const uploadBtn = document.getElementById('uploadBtn');
        const profilePicture = document.getElementById('profilePicture');

        uploadBtn.addEventListener('click', () => {
            // Create a temporary file input
            const fileInput = document.createElement('input');
            fileInput.type = 'file';
            fileInput.accept = 'image/*';
            fileInput.onchange = (e) => {
                const file = e.target.files[0];
                if (file) {
                    const reader = new FileReader();
                    reader.onload = (e) => {
                        profilePicture.src = e.target.result;
                        showMessage('Profile picture updated!', 'success');
                    };
                    reader.readAsDataURL(file);
                }
            };
            fileInput.click();
        });

        // Progress Animation
        function animateProgress() {
            const progressBars = document.querySelectorAll('.progress-fill');
            progressBars.forEach(bar => {
                const width = bar.style.width;
                bar.style.width = '0%';
                setTimeout(() => {
                    bar.style.width = width;
                }, 500);
            });
        }

        // Animate progress bars on page load
        window.addEventListener('load', () => {
            setTimeout(animateProgress, 1000);
        });

        // Message System
        function showMessage(text, type) {
            const message = document.createElement('div');
            message.style.cssText = `
                position: fixed;
                top: 20px;
                right: 20px;
                background: ${type === 'success' ? '#10b981' : '#ef4444'};
                color: white;
                padding: 15px 20px;
                border-radius: 8px;
                font-weight: 600;
                z-index: 9999;
                animation: slideIn 0.3s ease;
            `;
            message.textContent = text;
            document.body.appendChild(message);

            setTimeout(() => {
                message.style.animation = 'slideOut 0.3s ease';
                setTimeout(() => {
                    document.body.removeChild(message);
                }, 300);
            }, 3000);
        }

        // Add CSS for message animations
        const style = document.createElement('style');
        style.textContent = `
            @keyframes slideIn {
                from { transform: translateX(100%); opacity: 0; }
                to { transform: translateX(0); opacity: 1; }
            }
            @keyframes slideOut {
                from { transform: translateX(0); opacity: 1; }
                to { transform: translateX(100%); opacity: 0; }
            }
        `;
        document.head.appendChild(style);
