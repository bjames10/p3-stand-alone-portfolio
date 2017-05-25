/*jslint browser: true*/
/*global $, jQuery*/
// Scripts
$(window).load(function () {
    'use strict';
    $('.loader').fadeOut();
});
// Lightgallery

$('figure').lightGallery({
    selector: 'a',
    mode: 'lg-slide'
});