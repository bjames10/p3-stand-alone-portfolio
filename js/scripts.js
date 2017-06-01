/*jslint browser: true*/
/*global $, jQuery*/
// Scripts

// Lightgallery
$(document).ready(function () {'use strict'; $("#lightgallery").lightGallery(); });
$('figure').lightGallery({
    selector: 'a',
    mode: 'lg-slide'
});

$('#aniimated-thumbnials').lightGallery({
    thumbnail: true
});