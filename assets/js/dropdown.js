$(document).ready(function () {
  $(".navbar-default .navbar-nav > li.dropdown").hover(
    function () {
      $("ul.dropdown-menu", this).stop(!0, !0).slideDown("fast");
      $(this).addClass("open");
    },
    function () {
      $("ul.dropdown-menu", this).stop(!0, !0).slideUp("fast");
      $(this).removeClass("open");
    }
  );
});
