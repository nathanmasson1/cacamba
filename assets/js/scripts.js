// Mobile menu toggle
(function() {
    'use strict';
    
    // Wait for DOM to be ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initMobileMenu);
    } else {
        initMobileMenu();
    }
    
    function initMobileMenu() {
        const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
        const mainNav = document.querySelector('.main-nav');
        
        console.log('Mobile menu toggle:', mobileMenuToggle);
        console.log('Main nav:', mainNav);
        
        if (!mobileMenuToggle || !mainNav) {
            console.warn('Mobile menu elements not found');
            return;
        }
        
        // Toggle menu on button click
        mobileMenuToggle.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            
            console.log('Menu toggle clicked');
            
            // Toggle active class on button
            this.classList.toggle('active');
            
            // Toggle active class on nav
            mainNav.classList.toggle('active');
            
            // Toggle body scroll lock
            document.body.classList.toggle('menu-open');
            
            console.log('Menu is now:', mainNav.classList.contains('active') ? 'open' : 'closed');
        });
        
        // Close menu when clicking outside
        document.addEventListener('click', function(event) {
            const isClickInsideMenu = mainNav.contains(event.target);
            const isClickOnToggle = mobileMenuToggle.contains(event.target);
            
            if (!isClickInsideMenu && !isClickOnToggle && mainNav.classList.contains('active')) {
                mobileMenuToggle.classList.remove('active');
                mainNav.classList.remove('active');
                document.body.classList.remove('menu-open');
            }
        });
        
        // Close menu when clicking on a menu item
        const menuLinks = mainNav.querySelectorAll('a');
        menuLinks.forEach(function(link) {
            link.addEventListener('click', function() {
                mobileMenuToggle.classList.remove('active');
                mainNav.classList.remove('active');
                document.body.classList.remove('menu-open');
            });
        });
    }
})();

