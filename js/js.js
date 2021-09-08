
var no, count, cur, next,id_len, nic_len, pw_len, login_sw=0;
var timer=setInterval("show()",3000); //main
let timer_ent=setInterval("show_ent()",3000);

show_biz(), show_life(), show_mob(), show_crew()

    $(document).ready(function(){
    $("#header").load("header.html");
    $("#footer").load("footer.html");
    });

    $(function() {
    // 헤더 스크롤 했을 시 숨기기    
        var didScroll;
        var lastScrollTop = 0;
        var delta = 0;
        var navHeight = $("header").outerHeight();

        $(window).scroll(function(e) {
            didScroll = true;
        });
        setInterval(function(){
            if(didScroll){
                hasScrolled();
                didScroll = false;
            }
        },250);

        function hasScrolled(){
            var st = $(this).scrollTop();
            if(Math.abs(lastScrollTop - st)<= delta) return;
            if(st > lastScrollTop && st > navHeight){
                $("header").removeClass("nav-down").addClass("nav-up");
            } else {
                if(st+$(window).height()<$(document).height()){
                    $("header").removeClass("nav-up").addClass("nav-down");
                }
            }
            lastScrollTop = st;
        }
        $(".link_top").on("click",function(){
            $("html,body").animate({"scrollTop":"0"},10);
        });
    // 컴퓨터 사양 안내 닫기
    $(".infor li p").on("click",function(){
        $(".infor").hide();
    });
    
    
// 콘텐츠 1 5가지 소개 그림 및 텍스트 이동 작업 
    for (i=0; i<=5; i++)
    {
        $(".infor_img5 li:eq("+i+")").css("background","url(img/at1/at1re"+i+".gif")
                                     .css({"backgroundSize":"cover","backgroundPosition":"center","backgroundRepeat":"no-repeat"});
    }
    let at1_pos=100, at1_count=0;
    $(".infor_icon5 li").css("color","gray");
    $(".infor_icon5 li:eq(0)").css("color","rgb(255,205,0)");
    
    $(".infor_icon5 li").on("click",function() {
        no=$(this).index();
        at1_count=no;
        at1_pos=100*no;
        $(".infor_img5").animate({"left":-at1_pos+"%"},500);
        $(".infor_icon5 li").css("color","gray")
        $(this).css("color","rgb(255,205,0)");    
    });
    $(".infor_icon5 li").on("click",function() {
        no=$(this).index();
        at1_count=no;
        at1_pos=100*no;
        $(".infor_text5").animate({"left":-at1_pos+"%"},500);
        $(".infor_icon5 li").css("color","gray")
        $(this).css("color","rgb(255,205,0)");
    });

// 콘텐츠 2 연년도 별 이미지 삽입
    for (i=0; i<17; i++)
        $(".hscon_wrap>.img:eq("+i+")").css("background","url(img/at2/at2img"+i+".png")
                                   .css("backgroundSize","100% 100%");
// 콘텐츠 2 중복 연년도 아이콘 클릭 시 그림 이동 작업 
    $(".hsm_subbox li").on("click",function() {
        no=$(this).index();
        at2_click(no);
    });
    // pc버전 content 2 page animate 
    $("#hscon_btn_right4").on("click",function() {
        $(".hscon_wrap4_2").show(); 
        $(".hscon_wrap4_2").css({"left":"10%","opacity":"0"},1000);
        $(".hscon_wrap4_2").animate({"left":"50%","opacity":"1"},1000);
        $(".hscon_wrap4_1").hide();

    });
    $("#hscon_btn_left4").on("click",function() {
        $(".hscon_wrap4_2").hide();
        $(".hscon_wrap4_2").css({"left":"10%","opacity":"1"},1000);
        $(".hscon_wrap4_1").show(); 
        $(".hscon_wrap4_1").css({"left":"10%","opacity":"0"},1000);
        $(".hscon_wrap4_1").animate({"left":"50%","opacity":"1"},1000);
     });


     $("#hscon_btn_right6").on("click",function() {
        $(".hscon_wrap6_3").show(); 
        $(".hscon_wrap6_3").css({"left":"10%","opacity":"0"},1000);
        $(".hscon_wrap6_3").animate({"left":"50%","opacity":"1"},1000);
        $(".hscon_wrap6_1").hide();
     });
     $("#hscon_btn_left6").on("click",function() {
        $(".hscon_wrap6_3").hide();
        $(".hscon_wrap6_3").css({"left":"10%","opacity":"0"},1000);
        $(".hscon_wrap6_2").show(); 
        $(".hscon_wrap6_2").css({"left":"10%","opacity":"0"},1000);
        $(".hscon_wrap6_2").animate({"left":"50%","opacity":"1"},1000); 
     });
     $("#hscon_btn_left6_1").on("click",function() {
        $(".hscon_wrap6_2").hide();
        $(".hscon_wrap6_2").css({"left":"10p%","opacity":"0"},1000);
        $(".hscon_wrap6_1").show(); 
        $(".hscon_wrap6_1").css({"left":"10%","opacity":"0"},1000);
        $(".hscon_wrap6_1").animate({"left":"50%","opacity":"1"},1000); 
     });

     $("#hscon_btn_right7").on("click",function() {
        $(".hscon_wrap7_1").show(); 
        $(".hscon_wrap7_1").css({"left":"10%","opacity":"0"},1000);
        $(".hscon_wrap7_1").animate({"left":"50%","opacity":"1"},1000);
     });

     $("#hscon_btn_right8").on("click",function() {
        $(".hscon_wrap8_1").show(); 
        $(".hscon_wrap8_1").css({"left":"10%","opacity":"0"},1000);
        $(".hscon_wrap8_1").animate({"left":"50%","opacity":"1"},1000);
     });
   

   

//  콘텐츠 3 뉴스 메뉴 클릭시 메인 호출하기
    $(".news_card").hide();
    $(".news_card1").show();
    $(".news_page li").show(); 
    $(".news_page li").on("click",function() {
        no=$(this).index()+1;
        $(".news_card").hide();
        $(".news_card"+no).show();
    });     
  
// 콘텐츠 보도자료 클릭시 해당 이미지 삽입 호출하기 
    for (i=0; i<=30; i++)
        $(".news>.img:eq("+i+")").css("background","url(img/at3/at3news"+i+".jpg") 
                                   .css("backgroundSize","100% 100%");    
        $(".news_bar li:nth-child(1)").on("click",function() {
        $(".news_card").hide();
        $(".news_card1").show();
        $(".news_box").show();
        $(".news_page li").show();
    });                                                                                           

// 콘텐츠 카카우 나우 클릭시 해당 이미지 삽입 호출하기         
    $(".news_bar li:nth-child(3)").on("click",function() {
        $(".news_card").hide();
        $(".news_card2").show();
        $(".news").hide();
        $(".news_now").show(); 
        $(".news_page li").hide(); 
    });                           

// 콘텐츠 미디어 행사 클릭시 해당 이미지 삽입 호출하기         
        $(".news_bar li:nth-child(4)").on("click",function() {
        $(".news_card").hide();
        $(".news_card5").show();
        $(".news").hide();
        $(".news_media").show(); 
        $(".news_page li").hide(); 
    });                              

    
// 콘텐츠 해당 메뉴 버튼 클릭시 CSS                                
    for (i=0; i<=4; i++){
        $(".news_bar li").css("background","white");
        $(".news_bar li:eq(0)").css("background","rgb(255,205,0)").css("color","white");
    }

        $(".news_bar li").on("click",function() {
        no=$(this).index;
        $(".news_bar li").css("background","white").css("color","black")
        $(this).css("background","rgb(255,205,0)").css("color","white");
    });
    // at4 맵 아이콘 클릭시 해당 이미지 보이기
    $(".map_icon_wrap>.map_btn").click(function() {
        var i = $(this).index();
        $(".map_btn>div>img").eq(i).toggle(500);
    });

    
    // at5 서비스 이미지 기능 작업
    // 동작으로 추가된 태그 이벤트가 적용되지 않는다.
    // 동작으로 생성된 태그는 별도의 이벤트 형식으로 지정
    // append / prepend on 이벤트로 가능
    // 선택자 .on(이벤트, 타겟태그, 동작함수)
    $(".right_con").on('click','.box', function(){
        var wrap = $(".right_con");
        var i = $(this).index();
        var bt = $(this).position().top;
        if(bt==0){
            $(this).prev().css("z-index","400");
            $(this).prev().stop().animate({left:0, top:0, opacity:"1"},500);
            $(this).css("z-index","300");
            $(this).stop().animate({left:30, top:30},500);
            $(this).next().css("z-index","100");
            $(this).next().stop().animate({left:0, top:50, opacity:0},500,function(){
                $(this).parent().prepend("<div class='box'>"+ $(this).parent().find('div:last').html()+"</div>");
                $(this).parent().find('div:last').remove();
            });
        } else {
            $(this).css("z-index","400");
            $(this).prev().css("z-index","300");
            $(this).prev().stop().animate({left:-30, top:-30, opacity:"0"},500);
            $(this).stop().animate({left:0, top:0},500);
            $(this).next().css("z-index","300");
            $(this).next().stop().animate({left:30, top:30, opacity:"1"},500,function(){
                $(this).parent().append("<div class='box'>"+ $(this).parent().find('div:first').html()+"</div>");
                $(this).parent().find("div:first").remove();
            });
        }  
    });
//  비즈니스 서비스 biz iphone frame img 
    for(i=0; i<=5; i++) {
    $(".mob5_small li:eq("+i+")").css("background","url(img/at5/mob"+i+".png)")
    .css("backgroundSize","cover");
    }
//  엔터테이먼트 서비스 ent iphone frame img   

    for(i=0; i<=5; i++) {
        $(".mob6_small li:eq("+i+")").css("background","url(img/at6/mob"+i+".png)")
        .css("backgroundSize","cover");
        }
        $(".login_bar").on("click",function() {
            login_func();
        });  

    $(".login_infor p").on("click",function() {
        $(".login_infor").hide();
    });

    // $("#login").on("click", function() {
    //     if(login_sw ==1){
    //         login_sw=0;
    //         $("#login").html("로그인");
    //         id.value="";
    //         pw.value="";
    //         id.focus();
    //     }
    // });
        
    $(".join_btn").on("click", function() {    
        join_func();     
    });
//   회원가입 12번 주메뉴 호출하기 
    $(".topMenu>a:nth-child(2)").on("click", function() {       
        $(".join_fin").hide();
        $("#container").show();  
    });
    $(".join_infor p").on("click",function(){
        $(".join_infor").hide();
    })
    
//   회원가입 12번 시작하기 버튼 누르면 메인으로 이동하기     
    $(".joinfin_bar").on("click", function() {
        $(".join_fin").hide();
        // $("#index").load("index.html");
        
    });
   
});

// jQuery 변수 호출
// main big img 슬라이드 모션
function show() {
    $(".wrap_big_5").animate({"left":"-=100%"},1000,function(){
        $(".wrap_big_5 li:first").appendTo(".wrap_big_5");
        $(".wrap_big_5").css("left","+=100%",100);
    })
}  

// 콘텐츠 2 연년도 박스 모션
function at2_click(no) {
    $(".hscon_wrap").css({"left":"100%","opacity":"0"});
    $(".hscon_wrap"+no).animate({"left":"10%","opacity":"1"},500);

   
} 

function show_biz() {
    let current = 0;
  
    setInterval(function() {
        
        let prev =  $(".mob5_small>li").eq(current);
        move(prev, 0, '-100%');

        current++;
        if(current == $(".mob5_small>li").length){
            current=0;
        }
        let next =  $(".mob5_small>li").eq(current);
        move(next, '100%',0);
    },3000);

    function move(tg, start, end) {
        tg.css('top',start)
        .stop()
        .animate({top:end},800);
        
    }
}  
function show_ent() {
    $(".mob6_small").stop().animate({"left":"-100%"},1000,function(){
        $(".mob6_small li:first").appendTo(".mob6_small");
        $(".mob6_small").css("left","0");
    });
}  
function show_life() {
    let current = 0;
    let banner = $(".mob7_small>li");
    setInterval(function() {
        let prev = $(".mob7_small>li").eq(current);
        move(prev, 0, '100%');

        current++;
        if(current == $(".mob7_small>li").length){
            current=0;
        }
        let next = $(".mob7_small>li").eq(current);
        move(next, '-100%',0);
    },3000);
    function move(tg, start, end) {
        tg.css('top',start)
        .stop()
        .animate({top:end},800);
        
    }
}  

function show_mob() {
    let cur = 0; 
    setInterval(function() {
        var len =  $(".mob8>img").length;
        $(".mob8>img").eq(cur).fadeOut();
        cur++;
        if(cur>=len){cur=0;}
        $(".mob8>img").eq(cur).fadeIn();   
    },3000);
}

function login_func() {
    id_len=id.value.length;
    pw_len=pw.value.length;

    if(id_len<1) {
        $(".login_id_infor").show();
        id.focus();
        return false;
    }
    if(id_len<4){
        $(".login_id4_infor").show();
        id.focus();
        return false;
    }
    for (i=0; i<id_len; i++){
        let code=id.value.charCodeAt(i);
        if(code>128){
            $(".login_idE_infor").show();
            id.value="";
            id.focus();
            return false;
        }
    }
    if(pw_len<8){
        $(".login_pw_infor").show();
        pw.focus();
        return false;
    }

    // $(".login_wrap").hide();
    // $("#login").html("로그아웃");
    // login_sw=1;
}

$("#login").on("click", function() {
    if(login_sw ==1){
        login_sw=0;
        $("#login").html("로그인");
        id.value="";
        pw.value="";
        id.focus();
    }

})



function join_func() {
    id_len=id.value.length;
    nic_len=nic.value.length;
    pw_len=pw.value.length;
    tel2_len=tel2.value.length;

    if(id_len<1){
        $(".join_id_infor").show();
        id.focus();
        return;
    }
    if(id_len<4){
        $(".join_id4_infor").show();
        id.value="";
        id.focus();
        return;
    }
    for(i=0; i<id_len; i++){
        let code=id.value.charCodeAt(i);
        if(code>128){
            $(".join_idE_infor").show();
            id.value="";
            id.focus();
            return;
        }
    }
    if(pw_len<8){
        $(".join_pw_infor").show();
        pw.value="";
        pw.focus();
        return;
    }
    if(nic_len<1) {
        $(".join_nic_infor").show();
        nic.value="";
        nic.focus();
        return;
    }
    if(tel2_len<1) {
        $(".join_num_infor").show();
        tel2.value="";
        tel2.focus();
        return;
    }
    if(isNaN(tel2.value) || isNaN(tel3.value) || tel2.value=="" || tel3.value==""){
        $(".join_num2_infor").show();
        tel2.value=""; tel3.value="";
        tel2.focus();
        return;
    }
    $(".join_fin").show();
    $("#container").hide();

}

function show_crew() {
    let current = 0;
    let banner = $(".crew_main3>li");
    
    setInterval(function() {

        let prev = $(".crew_main3>li").eq(current);
        move(prev, 0, '-100%');

        current++;
        if(current == $(".crew_main3>li").length){
            current=0;
        }
        let next = $(".crew_main3>li").eq(current);
        move(next, '100%',0);
        
        $(".crew_btn li").css({"background":"rgba(0,0,0,0.3)","width":"10%"});
        $(".crew_btn li:eq("+current+")").css({"background":"#ccc","width":"30%"});

        
    
    },3000);
    function move(tg, start, end) {
        tg.css('left',start)
        .stop()
        .animate({left:end},800);   
    }
   
}  



