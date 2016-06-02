$(function() {
 $('.b-nav__ulist-adaptive-menu').click(function() {
  if($('.b-nav__ulist-menu').is(':visible')) {
  $('.b-nav__ulist-menu').removeClass('showitems');
 }
 else {
  $('.b-nav__ulist-menu').addClass('showitems');
 }
});
});