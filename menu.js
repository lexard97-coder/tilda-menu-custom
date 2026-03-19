(function() {
    'use strict';
    
    console.log('🎨 Супер-скрипт для меню запущен');
    
    // Функция поиска меню везде
    function findAndPaintMenu() {
        // Ищем все возможные места, где может быть меню
        const possibleParents = [
            document.body,
            document.getElementById('app'),
            document.getElementById('allrecords'),
            document.querySelector('.tlk-courses'),
            document.querySelector('.tlk-lecture')
        ].filter(el => el); // Убираем null
        
        let painted = 0;
        
        // Проходим по всем возможным родителям
        possibleParents.forEach(parent => {
            // Ищем все элементы меню внутри каждого родителя
            const panels = parent.querySelectorAll('.tlk-menu__panel');
            const burgers = parent.querySelectorAll('.tlk-menu__burger');
            const contents = parent.querySelectorAll('.tlk-menu__content');
            const links = parent.querySelectorAll('.tlk-menu__link');
            const activeLinks = parent.querySelectorAll('.tlk-menu__link_active');
            
            // Красим то, что нашли
            panels.forEach(el => {
                el.style.backgroundColor = '#564299';
                painted++;
            });
            
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
        });
        
        if (painted > 0) {
            console.log(`✅ Покрашено элементов: ${painted}`);
        }
    }
    
    // Запускаем сразу
    findAndPaintMenu();
    
    // Запускаем каждые 500 мс в течение 10 секунд
    let attempts = 0;
    const interval = setInterval(function() {
        findAndPaintMenu();
        attempts++;
        if (attempts > 20) { // 10 секунд
            clearInterval(interval);
            console.log('⏱ Основной поиск завершен');
        }
    }, 500);
    
    // Следим за изменениями в DOM (для динамической подгрузки)
    const observer = new MutationObserver(function(mutations) {
        mutations.forEach(function(mutation) {
            if (mutation.addedNodes.length) {
                // При появлении новых элементов ищем меню
                setTimeout(findAndPaintMenu, 100);
            }
        });
    });
    
    // Наблюдаем за всем документом
    observer.observe(document.body, {
        childList: true,
        subtree: true
    });
    
    // Запускаем при любом клике (вдруг меню открывается по клику)
    document.addEventListener('click', function() {
        setTimeout(findAndPaintMenu, 200);
    });
    
    console.log('🚀 Наблюдение за меню активировано');
})();
