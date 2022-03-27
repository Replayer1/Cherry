var header = $(".header"),
  scrollPrev = 0;

$(window).scroll(function () {
  var scrolled = $(window).scrollTop();

  if (scrolled > 100 && scrolled > scrollPrev) {
    header.addClass("out");
  } else {
    header.removeClass("out");
  }
  scrollPrev = scrolled;
});

$(".profile-info a").on("click", function () {
  let href = $(this).attr("href");

  $("html, body").animate(
    {
      scrollTop: $(href).offset().top,
    },
    {
      duration: 470,
      easing: "swing",
    }
  );

  return false;
});

let togleTheme = true;

$("#togle-theme").on("click", function () {
  togleTheme = !togleTheme;
  if (togleTheme == false) {
    $("body").addClass("light-theme");
    $("#moon").removeClass("bi-moon");
    $("#moon").addClass("bi-moon-fill");
  } else {
    $("body").removeClass("light-theme");
    $("#moon").removeClass("bi-moon-fill");
    $("#moon").addClass("bi-moon");
  }
});

let nowDate = moment().format("YYYY[-0]M[-]D");
$("#date").attr("min", nowDate);
$("#date").attr("max", "2023-01-01");

