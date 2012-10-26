"use strict";

require.config({
    baseUrl: 'js',
    paths: {
        'zepto': ['lib/zepto']
    }
});

window.requirejs(['app']);
