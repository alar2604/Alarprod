
    // Mobile menu toggle
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');

    mobileMenuButton.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
      const isExpanded = mobileMenuButton.getAttribute('aria-expanded') === 'true';
      mobileMenuButton.setAttribute('aria-expanded', !isExpanded);
    });

    // Desktop mega menu hover functionality
    const navDropdowns = document.querySelectorAll('.nav-dropdown');
    const megaMenus = document.querySelectorAll('.mega-menu');
    
    navDropdowns.forEach(dropdown => {
      const targetId = dropdown.getAttribute('data-target');
      const targetMenu = document.getElementById(targetId);
      
      dropdown.addEventListener('mouseenter', () => {
        // Close all mega menus first
        megaMenus.forEach(menu => menu.classList.remove('open'));
        // Open the target menu
        targetMenu.classList.add('open');
      });
    });

    // Close mega menu when mouse leaves the mega menu
    megaMenus.forEach(menu => {
      menu.addEventListener('mouseleave', () => {
        menu.classList.remove('open');
      });
    });

    // Mobile submenu toggles
    const mobileDropdownToggles = document.querySelectorAll('.mobile-dropdown-toggle');
    
    mobileDropdownToggles.forEach(toggle => {
      toggle.addEventListener('click', () => {
        const targetId = toggle.getAttribute('data-target');
        const targetSubmenu = document.getElementById(targetId);
        const arrow = toggle.querySelector('svg');
        
        // Toggle the submenu
        targetSubmenu.classList.toggle('open');
        
        // Rotate the arrow icon
        if (targetSubmenu.classList.contains('open')) {
          arrow.classList.add('rotate-180');
        } else {
          arrow.classList.remove('rotate-180');
        }
      });
    });

    // Close mega menus when clicking outside
    document.addEventListener('click', (event) => {
      if (!event.target.closest('.nav-dropdown') && !event.target.closest('.mega-menu')) {
        megaMenus.forEach(menu => menu.classList.remove('open'));
      }
    });