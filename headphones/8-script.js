
        document.addEventListener('DOMContentLoaded', function () {
            const hamburgerIcon = document.getElementById('hamburger-icon');
            const mobileMenuOverlay = document.getElementById('mobile-menu-overlay');
            const closeMobileMenuButton = document.getElementById('close-mobile-menu');
            const mobileMenuLinks = mobileMenuOverlay.querySelectorAll('a');

            if (hamburgerIcon) {
                hamburgerIcon.addEventListener('click', function () {
                    mobileMenuOverlay.classList.add('active');
                });
            }

            if (closeMobileMenuButton) {
                closeMobileMenuButton.addEventListener('click', function () {
                    mobileMenuOverlay.classList.remove('active');
                });
            }

            mobileMenuLinks.forEach(link => {
                link.addEventListener('click', function () {
                    mobileMenuOverlay.classList.remove('active');
                });
            });

            // Close mobile menu on screen resize if greater than 480px
            window.addEventListener('resize', function () {
                if (window.innerWidth > 480) {
                    mobileMenuOverlay.classList.remove('active');
                }
            });
        });
    