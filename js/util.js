function goTo(section) {
    var cfg = {
        scrollDuration : 800
    };

    var target = this.hash,
        $target    = $('#'+section);

    $('html, body').stop().animate({
        // 'scrollTop': $target.offset().top - 72
        'scrollTop': $target.offset().top
    }, cfg.scrollDuration, 'swing', function () {
    });
}

function goToCustom(section) {
    var cfg = {
        scrollDuration : 800
    };

    var target = this.hash,
        $target    = $('#'+section);

    $('html, body').stop().animate({
        'scrollTop': $target.offset().top - 90
        // 'scrollTop': $target.offset().top
    }, cfg.scrollDuration, 'swing', function () {
    });
}

function checkIfMobile() {
    return $('html body').width() <= 768;
}