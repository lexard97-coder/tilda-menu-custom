(function() {
    'use strict';
    
    console.log('🎨 Кастомное меню загружено');
    
    function fixMenu() {
        const panels = document.querySelectorAll('.tlk-menu__panel');
        const burgers = document.querySelectorAll('.tlk-menu__burger');
        const contents = document.querySelectorAll('.tlk-menu__content');
        const links = document.querySelectorAll('.tlk-menu__link');
        const activeLinks = document.querySelectorAll('.tlk-menu__link_active');
        
        if (panels.length === 0) return;
        
        panels.forEach(el => el.style.backgroundColor = '#564299');
        
        burgers.forEach(el => {
            el.style.backgroundColor = '#564299';
            el.querySelectorAll('span').forEach(span => {
                span.style.backgroundColor = '#ffffff';
            });
        });
        
        contents.forEach(el => {
            el.style.backgroundColor = '#564299';
            el.style.color = '#ffffff';
        });
        
        links.forEach(el => el.style.color = '#ffffff');
        
        activeLinks.forEach(el => {
            el.style.backgroundColor = '#ffffff';
            el.style.color = '#564299';
        });
    }
    
    fixMenu();
    
    const observer = new MutationObserver(fixMenu);
    observer.observe(document.body, { childList: true, subtree: true });
    
    setInterval(fixMenu, 2000);
})();
