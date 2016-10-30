/*jslint browser: true*/
/*global $, jQuery*/
var main = function () {
    'use strict';
    $('.anchorLink').click(function () {
        $('html, body').animate({
            scrollTop: $('[name="' + $.attr(this, 'href').substr(1) + '"]').offset().top - 30
        }, 1300);
        return false;
    });
    $('.arrow-next').click(function () {
        var currentSlide = $('.active-slide'),
            nextSlide = currentSlide.next(),
            currentDot = $('.active-dot'),
            nextDot = currentDot.next();
        
        if (nextSlide.length === 0) {
            nextSlide = $('.slide').first();
        }
        
        if (nextDot.length === 0) {
            nextDot = $('.dot').first();
        }
        
        currentSlide.fadeOut(1000);
        nextSlide.fadeIn(1000);
        currentSlide.removeClass('active-slide');
        nextSlide.addClass('active-slide');
        currentDot.removeClass('active-dot');
        nextDot.addClass('active-dot');

    });
    $('.arrow-prev').click(function () {
        var currentSlide = $('.active-slide'),
            prevSlide = currentSlide.prev(),
            currentDot = $('.active-dot'),
            prevDot = currentDot.prev();
        
        if (prevSlide.length === 0) {
            prevSlide = $('.slide').last();
        }
        
        if (prevDot.length === 0) {
            prevDot = $('.dot').last();
        }
        
        currentSlide.fadeOut(1000);
        currentSlide.removeClass('active-slide');
        prevSlide.fadeIn(1000);
        prevSlide.addClass('active-slide');
        currentDot.removeClass('active-dot');
        prevDot.addClass('active-dot');
    });
};
$(document).ready(main);