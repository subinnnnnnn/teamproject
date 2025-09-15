$(function(){
  //메뉴
  $("#header .gnb").mouseenter(function(){
    $(".sub_menu").stop().slideDown(250);
    $(".header_bg").stop().slideDown(250);
  });
  $("#header .gnb").mouseleave(function(){
    $(".sub_menu").stop().slideUp(250);
    $(".header_bg").stop().slideUp(250);
  });

  $("#header .sub_menu li").mouseenter(function(){
    $(this).parents(".sub_menu").addClass("on").siblings().removeClass("on");
  });
  $("#header .sub_menu li").mouseleave(function(){
    $(this).parents(".sub_menu").removeClass("on");
  });

  //메뉴 반응형
  $("#header .media_gnb .media_submenu").hide();

  $("#header .media_gnb > li").click(function(e){
    e.stopPropagation(); // 부모(.media_menu)까지 클릭 이벤트 전달 차단

    let $submenu = $(this).children(".media_submenu");

    if ($submenu.is(":visible")) {
      $submenu.slideUp();
    } else {
      $("#header .media_gnb .media_submenu").slideUp();
      $submenu.slideDown();
    }
  });

  //메뉴 반응형 클릭시
  $(".media_submenu_bg").hide();
  $("#header .media_menu").click(function(e){
    if($(this).hasClass("on")) {
      $(this).removeClass("on");
      $(".media_submenu_bg").fadeOut();
      $(this).find(".media_gnb").removeClass("on");
      $("#header .media_gnb .media_submenu").slideUp(); // 닫을 때만 전체 닫기
    } else {
      $(this).addClass("on");
      $(".media_submenu_bg").fadeIn();
      $(this).find(".media_gnb").addClass("on");
    }
  });

  //위로가기
  $(window).scroll(function(){
  if($(window).scrollTop()>=200){
    $(".btn_top").fadeIn();
    $("#header").addClass("fixed")
  } else {
    $(".btn_top").fadeOut();
    $("#header").removeClass("fixed")                
  }
});

});