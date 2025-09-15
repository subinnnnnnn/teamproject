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


  //메인비주얼
  var main_visual = new Swiper(".main_visual", {
    loop: true,
    autoplay: {
      delay: 3500,
      disableOnInteraction: false,
    },
    scrollbar: {
      el: ".swiper-scrollbar",
      hide: false
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    /*
    pagination: {
      el: ".visual_page .swiper-pagination",
      type: "fraction",
    },
    */
  });

  //상품 영역
  //상품 탭 요소
  $("#main .product .tabs li").eq(0).addClass("on");
  $("#main .product .product_content>.product_box").eq(1).hide();

  $("#main .product .tabs li").click(function(){
    $(this).addClass("on").siblings().removeClass("on");
    let indexNum = $(this).index();
    $("#main .product .product_content>.product_box").eq(indexNum).show().siblings().hide();
  });


  //상품 슬라이드
  var swiper = new Swiper(".product_box", {
    slidesPerView: 4,
    spaceBetween: 16,
    loop: true,
    autopla: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    breakpoints: {
      390: { // 0 ~ 834px
        slidesPerView:2.5,
        spaceBetween: 10,
      },
      
      835: { // 835px 이상
        slidesPerView:2.5,
        spaceBetween: 16,
      },

      1340: {
        slidesPerView:4,
        spaceBetween:16,
      },

    },


  });

  /*
  //상품 호버시
  $(".product_content .product_ex").hide();
  $(".product_content .swiper-slide").mouseenter(function(){
    $(this).find(".product_img").stop().fadeOut(100);
    $(this).find(".product_ex").stop().fadeIn(250);
  });

  $(".product_content .product_ex").hide();
  $(".product_content .swiper-slide").mouseleave(function(){
    $(this).find(".product_img").stop().fadeIn(250);
    $(this).find(".product_ex").stop().fadeOut(250);
  });
  */


  //메이드 영역
  //메이드 슬라이드
  var swiper = new Swiper(".ourmade_content", {
    loop: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  //메이드 클릭시 정보 영역
  $("#main .ourmade a.made_infor").hide();
  
  //오른쪽 타일 클릭 할때도 초록불
  $(".made_add .add_btn").on("click", function () {
    const parentDiv = $(this).parent();
    const index = parentDiv.index();

    // 클릭된 슬라이드 기준
    const slide = $(this).closest(".swiper-slide");

    // 왼쪽 버튼 / made_infor 제어
    slide.find(".add_btn").removeClass("on");
    slide.find(".made_infor").hide();
    $(this).addClass("on");
    parentDiv.find(".made_infor").show();

    // 오른쪽 썸네일 제어 (슬라이드 내부만)
    slide.find(".made_right .made_tile li img").removeClass("on");
    slide.find(".made_right .made_tile li img").eq(index).addClass("on");
  });

  // 오른쪽 썸네일 클릭
  $(".made_right .made_tile li").on("click", function () {
    const index = $(this).index();
    const slide = $(this).closest(".swiper-slide");

    // 오른쪽 img on 토글
    slide.find(".made_tile li img").removeClass("on");
    $(this).find("img").addClass("on");

    // 왼쪽 버튼 / made_infor 동기화영역
    slide.find(".add_btn").removeClass("on");
    slide.find(".made_infor").hide();
    slide.find(".made_add > div").eq(index).find(".add_btn").addClass("on");
    slide.find(".made_add > div").eq(index).find(".made_infor").show();
  });

  /* 오른쪽 타일 클릭 안되는
  $(".add_btn").on("click", function () {
    // 1) 모든 add_btn에서 on 제거
    $(".add_btn").removeClass("on");
    // 2) 모든 made_infor 숨기기
    $(".made_infor").hide();

    // 3) 클릭된 add_btn에 on 추가
    $(this).addClass("on");
    // 4) 해당 add_btn의 형제 made_infor만 보이기
    $(this).siblings(".made_infor").show();

    // 5) 오른쪽 made_right 안의 made_tile li img에서 on 제거
    $(".made_right .made_tile li img").removeClass("on");

    // 6) 클릭된 add_btn이 속한 div의 index로 오른쪽 img 선택 후 on 추가
    const index = $(this).parent().index(); // add_btn의 부모 div 인덱스
    $(".made_right .made_tile li img").eq(index).addClass("on");
  });
  */

  //메이드 close 버튼 클릭 시
  $("#main .ourmade .made .close").click(function(){
    $("#main .ourmade .made .made_infor").hide();

  });

  //면적계산기 팝업
  $("#main .customer .calc").click(function(){
    $(".calc_popup").show();
  });

  $(".calc_popup .close").click(function(){
    $(".calc_popup").hide();
  });

});