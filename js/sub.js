$(function(){
//서브메뉴
 // $("#lnb>li").mouseover(function(){
//    $(this).children(".depth2").stop().slideDown(300);
 // });
 // $("#lnb>li").mouseleave(function(){
 //   $(this).children(".depth2").stop().slideUp(300);
 // });
 // $("#lnb>li").click(function(){
 //   $(this).children(".depth2").stop().slideToggle(300);
 // });
  // 1024px을 기준으로 PC와 모바일 환경을 구분합니다.
  const isMobile = window.innerWidth <= 1024;
  // 모바일이 아닐 경우 (PC 환경)
  if (!isMobile) {
      $("#lnb > li").mouseover(function() {
          $(this).children(".depth2").stop().slideDown(300);
      });

      $("#lnb > li").mouseleave(function() {
          $(this).children(".depth2").stop().slideUp(300);
      });
  }
  // 모바일 환경일 경우
  else {
      $("#lnb > li").click(function() {
          // slideToggle()을 사용해 클릭 시 메뉴를 펼치거나 접습니다.
          $(this).children(".depth2").stop().slideToggle(300);
      });
  }  


  //컬러차트
    var swiper = new Swiper(".chart", {
      slidesPerView:2,
      spaceBetween:20,
      loop:true,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      autoplay: {
        delay:3000,
        disableOnInteraction:false,
      },
      // 반응형 설정
      breakpoints: {
        // 768px 이상일 때
        768: {
          slidesPerView: 3,
          spaceBetween:15
        },
        // 1024px 이상일 때
        1024: {
          slidesPerView: 3,
          spaceBetween: 30
        },
        1340: {
          slidesPerView: 4,
          spaceBetween:20
        }       
      }      
    });

  AOS.init();
  //지우
  //04_06_오시는길
  //오시는길 탭 영역
  $("#container .google_map .map_tabs li").eq(0).addClass("on");
  $("#container .google_map .map_container").eq(1).hide();

  $("#container .google_map .map_tabs li").click(function(){
    $(this).addClass("on").siblings().removeClass("on");
    let indexNum = $(this).index();
    $("#container .google_map .map_container").eq(indexNum).show().siblings().hide();
  });  

});


