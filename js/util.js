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
let projectTimeOut = null;
let bannerArray = [];
let isVideo = false;
// let screeenType = '';

let instalaciones = false;
let proyectos = false;

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

function processInstalations(flag) {
    if (!flag) {
        $('#installation-1').addClass('hideElement');
        $('#installation-2').addClass('hideElement');
    } else {
        $('#installation-1').removeClass('hideElement');
        $('#installation-2').removeClass('hideElement');
    }
}

function processProjects(flag) {
    if (!flag) {
        $('#project-1').addClass('hideElement');
        $('#project-2').addClass('hideElement');
        $('#project-3').addClass('hideElement');
        $('#project-4').addClass('hideElement');
        $('#project-5').addClass('hideElement');
    } else {
        $('#project-1').removeClass('hideElement');
        $('#project-2').removeClass('hideElement');
        $('#project-3').removeClass('hideElement');
        $('#project-4').removeClass('hideElement');
        $('#project-5').removeClass('hideElement');
    }
}

function processMobile(screenType = null) {

    if ($('html body').width() >= 642 || $('html body').width() <=767) {
        console.log('hide carousel');
        setTimeout(function(){
            $('.nbs-flexisel-inner').css('display', 'none');
        }, 200);
    }

    if ($('html body').height() > $('html body').width()) { //mobile
        console.log('mobile');

        $('#header-nav-wrap').height($('html body').height());

        $('.nbs-flexisel-inner').css('display', 'none');

        if (screenType === 'intro'){
            console.log('intro');
            setTimeout(function(){
                $('#footer-main-block').height($('html body').height() - 40 - $('#videoPreviewIntro').height());

                $('#footer-row-responsive-block')
                    .css('position', 'absolute')
                    .css('top', '50%')
                    .css('left', '50%')
                    .css('transform', 'translate(-50%, -50%)')
                    .css('-ms-transform', 'translate(-50%, -50%)');
            }, 200);
        } else {
            $('#footer-main-block').css('height', 'auto');

            $('#footer-row-responsive-block')
                .css('position', 'relative')
                .css('top', '0')
                .css('left', '0')
                .css('transform', 'none')
                .css('-ms-transform', 'none');
        }



    } else { // tablet
        console.log('tablet');
        $('#footer-main-block').css('height', 'auto');

        $('#footer-row-responsive-block')
            .css('position', 'relative')
            .css('top', '0')
            .css('left', '0')
            .css('transform', 'none')
            .css('-ms-transform', 'none');

        $('.nbs-flexisel-inner').css('display', 'block')
    }

   processInstalations(false);
    processProjects(false);

   $('#header-nav-wrap').css('height', $(window).height());
}

function processWeb() {
    $('#footer-main-block').css('height', 'auto');

    $('#footer-row-responsive-block')
        .css('position', 'relative')
        .css('top', '0')
        .css('left', '0')
        .css('transform', 'none')
        .css('-ms-transform', 'none');

    $('.nbs-flexisel-inner').css('display', 'block')
}

function goToProject(project) {
    if ($('html body').width() <= 500) {
        clearTimeout(projectTimeOut);
        projectTimeOut = setTimeout(function(){
            window.location = project;
        }, 2500);
    } else {
        window.location = project;
    }
}