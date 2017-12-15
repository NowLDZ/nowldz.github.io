$(document).ready(function() {
  $('.navbar-links').click(function() {
    $('body').animate(
      {
        scrollTop: eval($('#' + $(this).attr('target')).offset().top - 70),
      },
      1000
    );
  });
});
