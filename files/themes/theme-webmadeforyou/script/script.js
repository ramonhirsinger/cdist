$(document).ready(function () {
    //NAVIGATION
    $('#animated_navigation_button').click(function () {
        
        //instances
        $this = $(this);
        $header = $('header');
        $parent = $this.closest('.navigation-controller');
        $navpanel = $header.find('.wmfy-navpanel-wrapper');
        $navtitle = $parent.find('.navigation-title');
        
        //toggle classes
        $this.toggleClass('open');
        $navtitle.toggleClass('navigation-toggled');
        
        if ($navpanel.hasClass('open')) {
            $navpanel.removeClass('open').addClass('closed');
        } else {
            $navpanel.removeClass('closed').addClass('open');
        }
        
    });
});

