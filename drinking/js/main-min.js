jQuery(document).ready(function($){function o(){var o=$(".cd-main-nav-wrapper");t()?(o.detach(),o.insertBefore(".cd-nav-trigger")):(o.detach(),o.insertAfter(".cd-main-content"))}function t(){return"mobile"!=window.getComputedStyle(document.querySelector("header"),"::before").getPropertyValue("content").replace(/"/g,"").replace(/'/g,"")}o(),$(window).on("resize",function(){window.requestAnimationFrame?window.requestAnimationFrame(o):setTimeout(o,300)}),$(".cd-nav-trigger").on("click",function(o){o.preventDefault(),$("header").hasClass("nav-is-visible")&&$(".moves-out").removeClass("moves-out"),$("header").toggleClass("nav-is-visible"),$(".cd-main-nav").toggleClass("nav-is-visible"),$(".cd-main-content").toggleClass("nav-is-visible")}),$(".go-back").on("click",function(o){o.preventDefault(),$(".cd-main-nav").removeClass("moves-out")}),$(".cd-subnav-trigger").on("click",function(o){o.preventDefault(),$(".cd-main-nav").toggleClass("moves-out"),$("#menulink").toggleClass(".menulink-opp"),$(".cd-logo").toggleClass(".cd-logo-opp")})});var titleHeight=$(".title").height();$(window).scroll(function(){$(window).width()>768?$(window).scrollTop()>titleHeight?$(".project-info").css("position","fixed").css("top","0"):$(".project-info").css("position","static"):($(window).scrollTop(),$(".project-info").css("position","static"))}),$(".imzoom").on("mouseover",function(){$(this).children(".photo").css({transform:"scale("+$(this).attr("data-scale")+")"})}).on("mouseout",function(){$(this).children(".photo").css({transform:"scale(1)"})}).on("mousemove",function(o){$(this).children(".photo").css({"transform-origin":(o.pageX-$(this).offset().left)/$(this).width()*100+"% "+(o.pageY-$(this).offset().top)/$(this).height()*100+"%"})}).each(function(){$(this).append('<div class="photo"></div>').append('<div class="txt">HOVER TO ZOOM</div>').children(".photo").css({"background-image":"url("+$(this).attr("data-image")+")"})});var titleHeight=$(".title").height();$(window).scroll(function(o){var t=$(".cd-logo"),e="fixed"==t.css("position");$(window).width()>768&&($(this).scrollTop()>titleHeight&&($(".cd-logo").css({color:"#333333"}),$("#menulink").css({color:"#333333"})),$(this).scrollTop()<titleHeight&&($(".cd-logo").css({color:"#ffffff"}),$("#menulink").css({color:"#ffffff"})))});