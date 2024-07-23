

$(document).ready(function() {
  $("footer dd").hide();
  $('footer dt').click(function() {
      $(this).next().slideToggle(500);

      $(this).find("img").toggleClass("on");
    });
    
    setInterval(function(){

      $(".slide").animate({
        marginLeft : "-100%"
      },1000,function(){
        $(".slide li:first").appendTo(".slide");
        $(".slide").css("margin-left","0");
      });
  
    },3000);

    $(".sub_box>div:first ").siblings().hide();
    // 처음(women) 을 제외한 나머지 형제 서브 박스들을 숨깁니다.
  $(".main_menu li:first").addClass("active"); 
  // 펼쳐진 서브박스가 women 이므로 첫번째 메뉴에 .actve(라인) 추가해놓음. /css 에 설정해 놓음.



  $(".main_menu a").click(function(event) {   // 상단 메뉴의 링크를 클릭했을 때
    event.preventDefault(); //a 태그를 클릭하면 이동하는 성질이 기본적으로 있어서, 못하도록 기본성질 뺌.

    $(".sub_box>div").hide();   // 모든 서브 박스를 숨깁니다.

    // 클릭된 링크의 href 속성에서 대상 ID를 가져와 해당 요소를 표시합니다.
    var target = $(this).attr("href");
    $(target).show();


    // 상단 메뉴 active :언더 라인 /  관련
    // 모든 탭에서 active 클래스를 제거하고, 클릭된 자신의 탭에만 가져옵니다.

    $(".main_menu li").removeClass("active");
    $(this).parent().addClass("active");

  });


});




