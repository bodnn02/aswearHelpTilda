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

$("a[href^='#']").on("click", function(event) {
    // Предотвращаем стандартное поведение ссылки (переход по якорю)
    event.preventDefault();

    // Получаем целевой блок, к которому нужно выполнить скролл
    const targetBlock = $($(this).attr("href"));
    
    // Выполняем плавный скролл к целевому блоку
    $("html, body").animate({
    scrollTop: targetBlock.offset().top
    }, 1000); // Время анимации в миллисекундах (здесь 1000 мс = 1 сек)
});

function scrollDisable() {
    $("html,body").css("overflow","hidden");
}
function scrollEnable() {
    $("html,body").css("overflow","auto");
}

$(document).ready(function() {
    // При прокрутке страницы
    $(window).scroll(function() {
        // Получаем текущее положение скролла
        var scroll = $(window).scrollTop();

        // Для каждой секции
        $('.animate-section').each(function() {
            // Получаем положение секции относительно верхней границы документа
            var offsetTop = $(this).offset().top;

            // Если секция видима на экране
            if (scroll > offsetTop - $(window).height() * 0.75) {
                // Добавляем класс, который делает анимацию появления
                $(this).addClass('visible');
            }
        });
    });
});

$(document).ready(function() {
    var isMouseDown = false;
    var startX;
    var scrollLeft;

    $('.scrollable-block').on('mousedown', function(e) {
        isMouseDown = true;
        startX = e.pageX - $(this).offset().left;
        scrollLeft = this.scrollLeft;
    });

    $('.scrollable-block').on('mouseleave', function() {
        isMouseDown = false;
    });

    $('.scrollable-block').on('mouseup', function() {
        isMouseDown = false;
    });

    $('.scrollable-block').on('mousemove', function(e) {
        if (!isMouseDown) return;
        var x = e.pageX - $(this).offset().left;
        var walk = x - startX;
        this.scrollLeft = scrollLeft - walk;
    });
});