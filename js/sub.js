$(function(){
    //서브메뉴
  $("#lnb>li").mouseover(function(){
    $(this).children(".depth2").stop().slideDown(300);
  });
  $("#lnb>li").mouseleave(function(){
    $(this).children(".depth2").stop().slideUp(300);
  });
  $("#lnb>li").click(function(){
    $(this).children(".depth2").stop().slideToggle(300);
  });

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
  
});