$(function(){function n(){$("body").hasClass("open-menu")?o.offset({left:e-40}):o.css({left:""})}var o=$(".nav__btn"),t=$(".nav__links"),e=t.width();$(".nav__btn, .overlay-bg").click(function(){$("body").toggleClass("open-menu"),n()}),$(window).on("resize",n),$("body *").on("touchstart",function(){})});