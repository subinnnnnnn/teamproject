$(function(){

  //메인비주얼
  var main_visual = new Swiper(".main_visual", {
    loop: true,
    autoplay: {
      delay: 3500,
      disableOnInteraction: false,
    },

    navigation: {
      nextEl: ".visual_arrow .swiper-button-next",
      prevEl: ".visual_arrow .swiper-button-prev",
    },
    scrollbar: {
      el: ".visual_scroll .swiper-scrollbar",
      hide: false
    },
    pagination: {
      el: ".visual_arrow .swiper-pagination",
      type: "fraction",
    },

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
  var product_box = new Swiper(".product_box", {
    slidesPerView: 4,
    spaceBetween: 16,
    loop: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: ".product_arrow .swiper-button-next",
      prevEl: ".product_arrow .swiper-button-prev",
    },


    breakpoints: {
      0: { 
        slidesPerView: 2,
        spaceBetween: 10,
      },

      768: { 
        slidesPerView: 2,
        spaceBetween: 10,
      },
      
      835: { 
        slidesPerView: 2.5,
        spaceBetween: 16,
      },
      
      1200: {
        slidesPerView: 4,
        spaceBetween: 16,
      },

      1340: {
        slidesPerView: 4,
        spaceBetween: 16,
      },

    },


  });


  //상품 호버시
  $("#main .product .swiper-slide").mouseenter(function(){
    $(this).find(".product_name").addClass("on");
  });
  $("#main .product .swiper-slide").mouseleave(function(){
    $(this).find(".product_name").removeClass("on");
  });



  //메이드 영역
  //메이드 슬라이드
  var ourmade_content = new Swiper(".ourmade_content", {
    loop: true,
    navigation: {
      nextEl: ".ourmade .swiper-button-next",
      prevEl: ".ourmade .swiper-button-prev",
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

  document.addEventListener('DOMContentLoaded', function() {
    const closeBtns = document.querySelectorAll('.close');

    closeBtns.forEach(function(btn) {
      btn.addEventListener('click', function(event) {
        event.stopPropagation();    // 이벤트 버블링 막기 (부모 <a>로 올라가는 거 방지)
        event.preventDefault();     // 기본 동작 차단 (href="#" 링크 방지)
        
        // 여기서 닫기 동작을 추가할 수도 있음
        console.log("닫기 버튼 클릭됨");
      });
    });
  });
 
  $('.close').on('click', function(e) {
    e.preventDefault();
    e.stopPropagation();
    console.log("닫기 버튼 클릭됨");
  });

  //면적계산기 팝업
  $("#main .customer .calc").click(function(){
    $(".calc_popup").show();
  });

  $(".calc_popup .close").click(function(){
    $(".calc_popup").hide();
  });
  $(".calc_popup .mo_close").click(function(){
    $(".calc_popup").hide();
  });



});