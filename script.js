$(document).ready(function () {

  // Sticky navbar + scroll button
  $(window).scroll(function () {

    $(".navbar").toggleClass("sticky", this.scrollY > 20);
    $(".scroll-up-btn").toggleClass("show", this.scrollY > 500);

  });

  // Scroll to top
  $(".scroll-up-btn").click(function () {
    $("html").animate({ scrollTop: 0 }, 500);
    $("html").css("scrollBehavior", "auto");
  });

  // Smooth scroll on menu click
  $(".navbar .menu li a").click(function () {
    $("html").css("scrollBehavior", "smooth");

    // Close mobile menu after click
    $(".navbar .menu").removeClass("active");
    $(".menu-btn i").removeClass("active");
  });

  // Toggle mobile menu
  $(".menu-btn").click(function () {
    $(".navbar .menu").toggleClass("active");
    $(".menu-btn i").toggleClass("active");
  });

  // Typing animation (safe check)
  if ($(".typing").length) {
    new Typed(".typing", {
      strings: [
        "Mechanical Professional",
        "Thermal, Nuclear & Infrastructure Projects",
        "24+ Years Experience"
      ],
      typeSpeed: 60,
      backSpeed: 30,
      loop: true
    });
  }

});
