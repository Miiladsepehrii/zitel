var TDLTEZtel = undefined,
    TDLTE = undefined,
    ADSL = undefined,
    PieTDLTE = undefined,
    PieADSL = undefined;

function move(durationTDLTEZtel, durationTDLTE, durationADSL, id, percentPieTDLTE, percentPieADSL) {
    if (TDLTEZtel) {
        TDLTEZtel.destroy();
    }
    if (TDLTE) {
        TDLTE.destroy();
    }
    if (ADSL) {
        ADSL.destroy();
    }
    if (PieTDLTE) {
        PieTDLTE.destroy();
    }
    if (PieADSL) {
        PieADSL.destroy();
    }

    PieTDLTE = new ProgressBar.Circle('#pieTDLTE' + id, {
        strokeWidth: 50,
        easing: 'easeInOut',
        duration: durationTDLTE,
        color: '#5e5f64',
        trailColor: '#e7e9e9',
        trailWidth: 48
    });

    PieTDLTE.animate(percentPieTDLTE);

    PieADSL = new ProgressBar.Circle('#pieADSL' + id, {
        strokeWidth: 50,
        easing: 'easeInOut',
        duration: durationADSL,
        color: '#5e5f64',
        trailColor: '#e7e9e9',
        trailWidth: 48,
    });

    PieADSL.animate(percentPieADSL);

    TDLTEZtel = new ProgressBar.Line('#myBarTDLTEZtel' + id, {
        easing: 'easeInOut',
        duration: durationTDLTEZtel,
        color: '#e7e9e9',
        trailColor: '#5e5f64',
        svgStyle: { width: '100%', height: '4px' }
    });

    TDLTEZtel.animate(1.0);

    TDLTE = new ProgressBar.Line('#myBarTDLTE' + id, {
        easing: 'easeInOut',
        duration: durationTDLTE,
        color: '#e7e9e9',
        trailColor: '#5e5f64',
        svgStyle: { width: '100%', height: '4px' }
    });

    TDLTE.animate(1.0);

    ADSL = new ProgressBar.Line('#myBarADSL' + id, {
        easing: 'easeInOut',
        duration: durationADSL,
        color: '#e7e9e9',
        trailColor: '#5e5f64',
        svgStyle: { width: '100%', height: '4px' }
    });

    ADSL.animate(1.0);
}

function scrollToElement(el, speed) {
    $('html,body').animate({ scrollTop: $(el).offset().top - 51 }, speed);
}

$(function() {

    // your code goes here
    window.onscroll = function() {
        stickyMenu()
    };

    let header = $('header');

    function stickyMenu() {
        if (window.pageYOffset >= 90) {
            header.addClass("sticky")
        } else {
            header.removeClass("sticky")
        }
    }

    let windowsSize = $(window).width();

    if (windowsSize < 992) {
        new fullpage('#fullpage', {
            //options here
            autoScrolling: true,
            touchSensitivity: 15,
            easingcss3: 'ease',
            easing: 'easeInOutCubic',
        });
    }

    $('.spinner').fadeOut(3000);
});