$(document).ready(function () {
    generalScript.init();
});

var generalScript = (function () {

    $NAV_ANIMATION_TIME = 50;

    $window = window;
    $header = $('header');
    $nav = $header.find('nav');
    $navbutton = $('#animated_navigation_button');
    $navpanel = $header.find('.navpanel-background');
    $navtitle = $header.find('.navigation-title');
    navpanelWrapper = $('.wmfy-navpanel-wrapper');

    $headnavigationlilvl1 = $nav.find('ul.level_1 > li');

    /**
     * Sets the wrapper of the Navigationelements to the half of its actual size
     * @returns {undefined}
     */
    var initNavpanelWrapperHeight = function () {
        navpanelWrapper.css("height", navpanelWrapper.height() / 2);
    }

    /**
     * Give the li elements of the navigation their pushed-down position
     * @returns {undefined}
     */
    var initNavLiElements = function () {
        $nav.find('ul.level_1 > li').addClass('setdown');
    }
    /**
     *  Sets the class behaviour of navbutton
     * @returns {undefined}
     */
    var initNavButton = function () {
        $navbutton.click(function () {
            $this = $(this);
            $this.toggleClass('open');

            $navtitle.toggleClass('navigation-toggled');
            if ($navpanel.hasClass('open')) {
                $navpanel.removeClass('open').addClass('closed');
                $headnavigationlilvl1.each($).wait($NAV_ANIMATION_TIME, function (index) {
                    $this = $(this);
                    $this.removeClass('easeup');
                    $this.addClass('setdown');
                });

            } else {
                $navpanel.removeClass('closed').addClass('open');
                var time = $NAV_ANIMATION_TIME;
                $headnavigationlilvl1.each($).wait(time, function (index) {
                    $this = $(this);
                    $this.addClass('easeup');
                });
            }
        });
    };

    var init = function () {
        initNavLiElements();
        initNavButton();
        initNavpanelWrapperHeight();
    }

    return {
        init: init
    };

})();

