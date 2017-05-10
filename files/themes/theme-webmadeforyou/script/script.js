$(document).ready(function () {
    generalScript.init();
});

var generalScript = (function () {

    $NAV_ANIMATION_DELAY = 50;
    $NAV_TRANSITION_TIME = 200;


    $window = window;
    $header = $('header');
    $nav = $header.find('.wmfy-navpanel-wrapper nav');
    $navbutton = $('#animated_navigation_button');
    $navpanel = $header.find('.navpanel-background');
    $navtitle = $header.find('.navigation-title');
    $nextrowbutton = $('#navigation-next-row-button');
    navpanelWrapper = $('.wmfy-navpanel-wrapper');
    $headnavigationlilvl1 = $nav.find('ul.level_1 > li');

    $activerow = null;
    $navrows = null;
    /**
     * Sets the wrapper of the Navigationelements to the half of its actual size
     * @returns {undefined}
     */
    var initNavpanelWrapperHeight = function () {
        navpanelWrapper.css("height", navpanelWrapper.height() / 2 - 20);
    }

    /**
     * Give the li elements of the navigation their pushed-down position
     * @returns {undefined}
     */
    var initNavLiElements = function () {
        $nav.find('ul.level_1 > li').addClass('setdown');
    }

    /**
     * Every three elements / or less if last row, are wrapped with a wrapping div
     * @returns {undefined}
     */
    var wrapThreeNavElements = function () {
        $class_navrow = "nav_row";
        var i = 0;
        row_number = 0;
        for (var i = 0; i < $headnavigationlilvl1.length; i += 3) {
            $headnavigationlilvl1.slice(i, i + 3).wrapAll('<div class="neavigation_row_' + row_number + ' navigation_row"></div>');
            row_number++;
        }
        $navrows = $('.navigation_row');
        $navrows.first().addClass('first');
        $navrows.last().addClass('last');
    }

    var setActiveRow = function () {
        navigationrows = $('.navigation_row');
        rownumber = navigationrows.index($headnavigationlilvl1.find("span.active").parent().parent());
        $activerow = $('.navigation_row_' + rownumber);
        navigationrows.each(function (index, val) {
            $this = $(this);
            if (index !== rownumber) {
                $this.addClass('hidden-row');
                $this.children('li').addClass('pusheddown');
            } else {
                $this.addClass('active-row');
                $this.children('li').addClass('setdown');
            }
        });
    }

    var initNavigationSniffButton = function () {
        var slideUpTimeForListElements = ($NAV_TRANSITION_TIME) * 3 + ($NAV_ANIMATION_DELAY * 2);

        $nextrowbutton.click(function () {
            $activerow = $('.navigation_row.active-row');

            if ($activerow.next() !== null && !$activerow.hasClass('last')) {
                $activerow.children('li').removeClass('setdown easeup pusheddown pushup');
                $activerow.children('li').each($).wait($NAV_ANIMATION_DELAY, function (index) {
                    $this = $(this);
                    $this.addClass('moveup');
                });

                var toNextRow = function () {
                    $activerow.removeClass('active-row').addClass('hidden-row');
                    $activerow.children('li').removeClass('easeup moveup pushup').addClass('pusheddown');

                    $activerow.next().children('li').addClass('pusheddown');
                    $activerow.next().addClass('active-row').removeClass('hidden-row');
                    $activerow = $('.navigation_row.active-row');
                    $activerow.children('li').each($).wait($NAV_ANIMATION_DELAY, function (index) {
                        $this = $(this);
                        $this.addClass('pushup');
                    });

                }
                setTimeout(toNextRow, slideUpTimeForListElements);
//                    
            } else {
                $activerow = $('.navigation_row.active-row');
                $activerow.children('li').removeClass('setdown easeup pusheddown pushup');
                $activerow.children('li').each($).wait($NAV_ANIMATION_DELAY, function (index) {
                    $this = $(this);
                    $this.addClass('moveup');
                });

                var toFirstRow = function () {
                    $activerow.removeClass('active-row').addClass('hidden-row');
                    $activerow.children('li').removeClass('easeup moveup setdown');

                    $firstrow = $('.navigation_row.first');
                    $firstrow.addClass('active-row').removeClass('hidden-row');
                    $firstrow.children('li').each($).wait($NAV_ANIMATION_DELAY, function (index) {
                        $this = $(this);
                        $this.addClass('pushup');
                    });
                }

                setTimeout(toFirstRow, slideUpTimeForListElements);
            }
        });
    }
    /**
     *  Sets the class behaviour of navbutton
     * @returns {undefined}
     */
    var initNavButton = function () {

        $navbutton.click(function () {
            $this = $(this);
            $this.toggleClass('open');
            $activerow = $('.navigation_row.active-row');
            $navtitle.toggleClass('navigation-toggled');

            if ($navpanel.hasClass('open')) {
                $navpanel.removeClass('open').addClass('closed');
                $activerow.children('li').each($).wait($NAV_ANIMATION_DELAY, function (index) {
                    $this = $(this);
                    $this.removeClass('easeup pusheddown pushup');
                    $this.addClass('setdown');
                });

            } else {
                $navpanel.removeClass('closed').addClass('open');
                var time = $NAV_ANIMATION_DELAY;
                $activerow.children('li').each($).wait(time, function (index) {
                    $this = $(this);
                    $this.addClass('easeup');
                });
            }
        });
    };

    var init = function () {
        initNavLiElements();
        wrapThreeNavElements();
        initNavpanelWrapperHeight();
        setActiveRow();

        initNavigationSniffButton();
        initNavButton();

    }

    return {
        init: init
    };

})();

