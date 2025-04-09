document.addEventListener('DOMContentLoaded', function() {
    const megaMenu = document.getElementById('megaMenu');
    const previousTasksLink = document.getElementById('previousTasksLink');
    let isMenuOpen = false;
    
    // Toggle mega menu when clicking "Previous Tasks"
    previousTasksLink.addEventListener('click', function(e) {
        e.preventDefault();
        isMenuOpen = !isMenuOpen;
        megaMenu.classList.toggle('active', isMenuOpen);
    });
    
    // Close mega menu when clicking outside
    document.addEventListener('click', function(e) {
        if (isMenuOpen && !megaMenu.contains(e.target) && e.target !== previousTasksLink) {
            megaMenu.classList.remove('active');
            isMenuOpen = false;
        }
    });
    
    // Close menu when pressing Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && isMenuOpen) {
            megaMenu.classList.remove('active');
            isMenuOpen = false;
        }
    });
});
