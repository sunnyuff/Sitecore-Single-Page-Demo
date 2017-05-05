$(function () {
    'use strict';

    if ($('html').hasClass('notexpeditor')) {
        var $page = $('#main'),
        options = {
            debug: true,
            prefetch: false,
            //cacheLength:10,
            onStart: {
                duration: 250, // Duration of our animation
                render: function ($container) {
                    // Add your CSS animation reversing class
                    $container.addClass('is-exiting');
                    // Restart your animation
                    smoothState.restartCSSAnimations();
                }
            },
            onReady: {
                duration: 0,
                render: function ($container, $newContent) {
                    // Remove your CSS animation reversing class
                    $container.removeClass('is-exiting');
                    // Inject the new content
                    $container.html($newContent);
                }
            }
        },
        smoothState = $page.smoothState(options).data('smoothState');
        $('.main-content').addClass('page-moveToLeft');
    }
    
});