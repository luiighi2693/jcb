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

function checkNavegation() {
    if (window.location.href.indexOf('#') !== -1) {
        if (window.location.href.split('#')[1].length !== 0) {
            goTo(window.location.href.split('#')[1]);
        }
    }
}

let bannerTimeOut = null;
let bannerArray = [];
let isVideo = false;

function startTimeOut(){
    if (isVideo) {
        $( "#videoPreview" ).hover(
            function() {
                clearTimeout(bannerTimeOut);
                showBanner();
            }, function() {
                bannerTimeOut = setTimeout(function(){
                    hideBanner();
                }, 5000);
            }
        );
    } else {
        $( "#carousel-example-generic" ).hover(
            function() {
                clearTimeout(bannerTimeOut);
                showBanner();
            }, function() {
                bannerTimeOut = setTimeout(function(){
                    hideBanner();
                }, 5000);
            }
        );
    }

    bannerTimeOut = setTimeout(function(){
        hideBanner();
    }, 15000);
}

function hideBanner() {
    bannerArray.forEach(number => {
        $('#banner'+number).css('display', 'none');
    });
}

function showBanner() {
    bannerArray.forEach(number => {
        $('#banner'+number).css('display', 'block');
    });
}