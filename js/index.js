/*字体*/
function freshRem() {
    var winW = document.documentElement.clientWidth,
        desW = 750,
        radio = winW / desW;
    document.documentElement.style.fontSize = radio * 100 + 'px';
}
freshRem();
window.addEventListener('resize', freshRem);

/*顶部追剧*/
$('.cover').click(function () {
    $('.trackBox').addClass('height');
    $(this).hide();
    $('.track').css('marginTop', 0);
    $('.bgNav').hide();
});

/*顶部追剧按钮*/
$('.trackBox').mouseenter(function () {
    if (!$('.modular-box').hasClass('none')) {
        $('.rightBtn').show();
    } else {
        $('.leftBtn').show();
    }
}).mouseleave(function () {
    $('.rightBtn').hide();
    $('.leftBtn').hide();
});

$('.buttonBtn').click(function () {
    $('.trackBox').removeClass('height');
    $('.cover').show();
    $('.track').css('marginTop', '-90px');
});

$('.rightBtn').click(function () {
    $('.modular-box').addClass('none');
    $(".modular .modular-item:lt(4)").addClass('none');
    $(this).hide(300);
    $('.leftBtn').show();
});

$('.leftBtn').click(function () {
    $('.modular-box').removeClass('none');
    $(".modular .modular-item:lt(4)").removeClass('none');
    $(this).hide(300);
    $('.rightBtn').show();
});

/*登陆*/
$('.into').click(function () {
    $('.sign').css('display', 'block');
});

$('.home').click(function () {
    $('.sign').css('display', 'block');
});

$('.close').click(function () {
    $('.sign').css('display', 'none');
});

/*轮播图*/
$(document).ready(function () {
//->AUTO MOVE
    let $container = $('.container'),
        $wrapper = $container.find('.wrapper'),
        $tip = $container.find('.list'),
        $tipList = $tip.find('li'),
        $slide = $wrapper.find('.slide'),
        autoTimer = null,
        autoInterval = 4000,
        step = 0,
        total = $slide.length;
    $slide.eq(step).css({
        opacity: 1,
        zIndex: 1
    });
    autoTimer = window.setInterval(autoMove, autoInterval);

//->STOP OR RUN
    $container.mouseenter(function () {
        window.clearInterval(autoTimer);
    }).mouseleave(function () {
        autoTimer = window.setInterval(autoMove, autoInterval);
    });

//->AUTO MOVE
    function autoMove() {
        step++;
        if (step >= total) {
            step = 0;
        }
        $slide.eq(step).css('zIndex', 1)
            .stop().animate({opacity: 1}, 500)
            .siblings().css('zIndex', 0)
            .stop().animate({opacity: 0}, 500);
        selectTip();
    }

    $container.mouseover(function (e) {
        var tar = e.target,
            $tar = $(tar),
            tarTag = tar.tagName.toUpperCase(),
            parent = tar.parentNode,
            $parent = $(parent);

        if (tarTag === 'LI' && $parent.hasClass('list')) {
            step = $tar.index();
            $slide.eq(step).css('zIndex', 1)
                .stop().animate({opacity: 1}, 500)
                .siblings().css('zIndex', 0)
                .stop().animate({opacity: 0}, 500);
            selectTip();
        }
    });

//->SELECT TIP
    function selectTip() {
        $tipList.each(function (index, item) {
            index === step ? $(item).addClass('cur') : $(item).removeClass('cur');
        });
    }
});

/*导航栏*/
$('nav>a').mouseenter(function () {
    $('nav>div').eq($(this).index()).show().siblings('div').hide();
}).mouseleave(function () {
    $('nav>div').eq($(this).index()).hide();
});

$('nav>div').mouseenter(function () {
    $(this).show();
}).mouseleave(function () {
    $(this).hide();
});

$('.icon>i').mouseenter(function () {
    let flag = $('.bgNav').css('display');
    if (flag === 'none') {
        $(this).addClass('hover');
    }
}).mouseleave(function () {
    $(this).removeClass('hover');
}).click(function () {
    let flag = $('.bgNav').css('display');
    if (flag === 'none') {
        $(this).removeClass('hover').addClass('cl');
        $('.bgNav').show();
    } else {
        $('.bgNav').hide();
        $(this).removeClass('cl').addClass('hover');
    }
});

$('.remen').mouseenter(function () {
    $(this).find($('.rm-rightBtn')).show();
}).mouseleave(function () {
    $(this).find($('.rm-rightBtn')).hide();
});
