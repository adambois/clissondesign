jQuery.noConflict();

jQuery(document).ready(function() {
  jQuery('.navbar .parent').addClass('dropdown');
  jQuery('.navbar a.level-top').addClass('dropdown-toggle');
  jQuery('.navbar li.parent ul').addClass('dropdown-menu');
  jQuery('.navbar li.level1 ul').wrap('<li class="dropdown-submenu" />');
  jQuery('.parent>a').after('<i class="fa fa-plus" />');
  jQuery('.parent>a').addClass('not-active-mobile')

  jQuery(function() {
    jQuery('.hamburger').click(function () {
      showHideMobile();
    });

    jQuery(".dimmer").click(function() {
      showHideMobile();
    });

    jQuery('li.parent').click(function () {
      jQuery(this).children('.dropdown-menu').slideToggle();
      jQuery(this).children('i').toggleClass('fa-plus fa-minus');
    });
  });

  function showHideMobile() {
    jQuery(".hamburger").toggleClass('active');
    jQuery(".hamburger").parent('.menu').toggleClass('active');
    jQuery('.dimmer').toggleClass('active');
    jQuery('body').toggleClass('no-scrolling');
    jQuery('nav').toggleClass('active');

  }

  /* Footer */

  jQuery('.footer-links h4').after('<i class="fa fa-plus" />');

  jQuery(function() {
    jQuery('.footer-links div').click(function () {
      jQuery(this).children('i').toggleClass('fa-plus fa-minus');
      jQuery(this).children('ul').slideToggle();
    });
  });

});
