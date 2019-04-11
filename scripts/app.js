$(function() {
  $(".menu-wrap, .btn-hire").click(function() {
    cur = $(this).attr("href");
    $(".main-wrapper").animate({ scrollTop: 0 });
    $(".main-content").removeClass("content-animate");
    $(cur).addClass("content-animate");
    $(".main-overlay").fadeIn();
    $(".content-wrapper").addClass("wrapper-animate");
    $(".gform").show();
    $("#thankyou_message").hide();
    return false;
  });
  $(".bar-title .rotate-wrap i,.main-overlay,.res-close").click(function() {
    $(cur).removeClass("content-animate");
    $(".main-overlay").fadeOut();
    $(".content-wrapper").removeClass("wrapper-animate");
    return false;
  });

  $(".gotop").click(function() {
    $(".content-wrapper").animate({ scrollTop: 0 });
  });
  $(".topscroll").click(function() {
    $(".main-wrapper").animate({ scrollTop: 0 });
  });
});

$(".portfolio-tab li").click(function() {
  var currentTab = $(this).attr("data-type");
  $(".portfolio-tab li").removeClass("tab-active");
  $(this).addClass("tab-active");
  $(".portfolio-list > div, .no-data-available").hide();
  if (currentTab == "all") {
    $(".portfolio-list > div").show();
  } else if (currentTab == "tools") {
    $(".no-data-available").show();
  }
  $("div[data-type=" + currentTab + "]").show();
});

$(".main-wrapper").scroll(function() {
  var scrollPos = $(".content-animate .main-wrapper").scrollTop();
  scrollPos > 100 ? $(".topscroll").show() : $(".topscroll").hide();
  if (cur == "#resume") {
    var resumePos = $(".skills-wrapper").offset().top;
    if (scrollPos >= resumePos + 100) {
      $(".skill-wrap").addClass("animate-skills");
    } else {
      $(".skill-wrap").removeClass("animate-skills");
    }
  }
});
