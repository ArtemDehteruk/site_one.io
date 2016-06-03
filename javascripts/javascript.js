$(function() {
 $('.b-nav__ulist-adaptive-menu').click(function() {
  if($('.b-nav__ulist, .b-nav__persona').is(':visible')) {
  $('.b-nav__ulist, .b-nav__persona').removeClass('showitems');
 }
 else {
  $('.b-nav__ulist, .b-nav__persona').addClass('showitems');
 }
});
});