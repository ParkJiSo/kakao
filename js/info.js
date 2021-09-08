$(document).ready(function(){
    //    1300px이상일때 메뉴 (pc기본)
    // $("ul.sub").hide();
    // $("header").mouseenter(function(){
    //     $("ul.sub").stop().slideDown();
    // }) ;
    // $("header").mouseleave(function(){
    //     $("ul.sub").stop().slideUp();
    // }) ;
     // 3depth메뉴 click
     // 3depth메뉴는 hover하지 않고 click으로 처리한다.
    $("ul.sub>li>a").click(function(e){   
       
        $(this).stop().parent().find(".sub").slideToggle();
       
    }) ;
    //    768px이상일때 햄버거메뉴
    $("html,body").animate({"scrollTop":"0"},10);
    $("#m_menu > .hamburger_menu").click(function(){
       $("#m_menu > #m_bg_menu").css("display","block");
       $("#m_menu > #m_bg_menu").stop().animate({left:"0%"},500);
       $("#m_menu > .hamburger_menu").css("display","none");
    }) ;
    $("#m_menu > #m_bg_menu > .m_close").click(function(){
       $("#m_menu > .hamburger_menu").css("display","block","color","gray");
       $("#m_menu > #m_bg_menu").stop().animate({left:"100%"},500);  
    }) ;
    //768px이상일때 햄버거메뉴의 서브메뉴 슬라이드 업/다운
    $("#m_menu > #m_bg_menu > .m_btm_menu > ul > li >a ").click(function(){
        $(this).parent().find(".m_sub").stop().slideToggle();
        $(this).parent().find("img").toggleClass("on");
    }); 
    // 3depth메뉴
    // 3depth메뉴는 hover하지 않고 click으로 처리한다.
    $("ul.m_sub>li>a").click(function(e){
//        e.preventDefault();
        $(this).stop().parent().find(".sub").slideToggle();
        $(".sub").stop().slideDown();
//        return false;
    }) ;
});

 