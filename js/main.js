$('.carousel__prev-btn').on('click', function(e) {
    var content_wrapper = $(this).parent().find('.carousel__content');
    var content = $(content_wrapper).children('*');
    
    // Вычисляем ширину всего контента, включая то, что выходит за границы
    var totalWidth = $(content)[0].scrollWidth;
    
    // Получаем ширину контейнера
    var containerWidth = $(content_wrapper).width();
    
    // Вычисляем количество страниц
    var length = Math.ceil(totalWidth / containerWidth);
    
    var current_index = parseInt(content.css('transform').split(',')[4]);

    // Устанавливаем ширину одной страницы
    var pageWidth = containerWidth;
    
    // Проверяем, текущая страница находится на грани
    if (current_index < 0) {
        // Перемещаем на предыдущую страницу (влево)
        var new_index = current_index + pageWidth;
        content.css('transform', 'translateX(' + new_index + 'px)');
    } else {
        // Если текущая страница уже первая, перейдем на последнюю страницу
        var new_index = -(length - 1) * pageWidth;
        content.css('transform', 'translateX(' + new_index + 'px)');
    }
});


$('.carousel__next-btn').on('click', function(e) {
    var content_wrapper = $(this).parent().find('.carousel__content');
    var content = $(content_wrapper).children('');
    
    // Вычисляем ширину всего контента, включая то, что выходит за границы
    var totalWidth = $(content)[0].scrollWidth;
    
    // Получаем ширину контейнера
    var containerWidth = $(content_wrapper).width();
    
    // Вычисляем количество страниц
    var length = Math.ceil(totalWidth / containerWidth);
    
    var current_index = parseInt(content.css('transform').split(',')[4]);

    // Устанавливаем ширину одной страницы
    var pageWidth = containerWidth;
    
    // Проверяем, текущая страница находится на грани
    if (current_index > - (length - 1)) {
        // Перемещаем на следующую страницу (вправо)
        var new_index = current_index - pageWidth;
        content.css('transform', 'translateX(' + new_index + 'px)');
    } else {
        // Если текущая страница уже последняя, перейдем на первую страницу
        content.css('transform', 'translateX(0)');
    }
});