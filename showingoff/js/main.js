jQuery(document).ready(function($) {
  //move nav element position according to window width
  moveNavigation();
  $(window).on('resize', function() {
    (!window.requestAnimationFrame) ? setTimeout(moveNavigation, 300): window.requestAnimationFrame(moveNavigation);
  });

  //mobile version - open/close navigation
  $('.cd-nav-trigger').on('click', function(event) {
    event.preventDefault();
    if ($('header').hasClass('nav-is-visible')) $('.moves-out').removeClass('moves-out');

    $('header').toggleClass('nav-is-visible');
    $('.cd-main-nav').toggleClass('nav-is-visible');
    $('.cd-main-content').toggleClass('nav-is-visible');
  });

  //mobile version - go back to main navigation
  $('.go-back').on('click', function(event) {
    event.preventDefault();
    $('.cd-main-nav').removeClass('moves-out');
  });

  //open sub-navigation
  $('.cd-subnav-trigger').on('click', function(event) {
    event.preventDefault();
    $('.cd-main-nav').toggleClass('moves-out');
    $('#menulink').toggleClass('.menulink-opp');
    $('.cd-logo').toggleClass('.cd-logo-opp');
  });

  function moveNavigation() {
    var navigation = $('.cd-main-nav-wrapper');
    var screenSize = checkWindowWidth();
    if (screenSize) {
      //desktop screen - insert navigation inside header element
      navigation.detach();
      navigation.insertBefore('.cd-nav-trigger');
    } else {
      //mobile screen - insert navigation after .cd-main-content element
      navigation.detach();
      navigation.insertAfter('.cd-main-content');
    }
  }

  function checkWindowWidth() {
    var mq = window.getComputedStyle(document.querySelector('header'), '::before').getPropertyValue('content').replace(/"/g, '').replace(/'/g, "");
    return (mq == 'mobile') ? false : true;
  }
});

var titleHeight = $('.title').height();

$(window).scroll(function() {
  if ($(window).width() > 768) {
    if ($(window).scrollTop() > titleHeight) {
      $('.project-info').css('position', 'fixed').css('top', '0');
    } else {
      $('.project-info').css('position', 'static');
    }
  } else {
    if ($(window).scrollTop() > titleHeight) {
      $('.project-info').css('position', 'static');
    } else {
      $('.project-info').css('position', 'static');
    }
  }
});




$('.imzoom')
  // imzoom mouse actions
  .on('mouseover', function() {
    $(this).children('.photo').css({
      'transform': 'scale(' + $(this).attr('data-scale') + ')'
    });
  })
  .on('mouseout', function() {
    $(this).children('.photo').css({
      'transform': 'scale(1)'
    });
  })
  .on('mousemove', function(e) {
    $(this).children('.photo').css({
      'transform-origin': ((e.pageX - $(this).offset().left) / $(this).width()) * 100 + '% ' + ((e.pageY - $(this).offset().top) / $(this).height()) * 100 + '%'
    });
  })
  // imzooms set up
  .each(function() {
    $(this)
      // add a photo container
      .append('<div class="photo"></div>')
      // some text just to show zoom level on current item in this example
      .append('<div class="txt">HOVER TO ZOOM</div>')
      // set up a background image for each imzoom based on data-image attribute
      .children('.photo').css({
        'background-image': 'url(' + $(this).attr('data-image') + ')'
      });
  })
