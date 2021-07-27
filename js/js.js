
let no, at, count, curr, next;
let timer=setInterval("show()",3000); //main
let timer_biz=setInterval("show_biz()",3000); //at5
let timer_ent=setInterval("show_ent()",3000); // at6
let timer_life=setInterval("show_life()",3000); // at7
let timer_mob=setInterval("show_mob()",3000); //at8 




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
    // 컴퓨터 사양 안내 닫기
    $(".infor li p").on("click",function(){
        $(".infor").hide();
    })
    // 메인화면 슬라이드 그림 이동 작업
    for(i=0; i<5; i++) {
        $(".wrap_big_5 li:eq("+i+")").css("background","url(img/at0/at0box"+i+".jpg)")
                     .css("backgroundSize","100% 100%");
    }

// 아티클 페이지 변경 작업
    for(i=1; i<=13; i++) {
    $(".menu"+i).on("click",function() {
        $(".wrap_box").hide();
        no=$(this).attr("class").substr(4,2);            
        $(".at").hide();
        $(".at"+no).show();
    })
    }
    
// 로그 클릭하여 초기 화면 보이기
    $(".logo").on("click", function() {        
//            alert("ok");
        $(".at").hide();
        $(".wrap_box").show();
      
    })
// at1 5가지 소개 그림 및 텍스트 이동 작업 
    for (i=0; i<=5; i++)
    {
        $(".at1_img5 li:eq("+i+")").css("background","url(img/at1/at1re"+i+".gif")
                                   .css("backgroundSize","100% 100%");
    }
    let at1_pos=500, at1_count=0;
    $(".at1_icon5 li").css("color","gray");
    $(".at1_icon5 li:eq(0)").css("color","rgb(255,205,0)");
    
    $(".at1_icon5 li").on("click",function() {
        no=$(this).index();
        at1_count=no;
        at1_pos=500*no;
        $(".at1_img5").animate({"left":-at1_pos+"px"},500);
        $(".at1_icon5 li").css("color","gray")
        $(this).css("color","rgb(255,205,0)");    
    })
    $(".at1_icon5 li").on("click",function() {
        no=$(this).index();
        at1_count=no;
        at1_pos=500*no;
        $(".at1_text5").animate({"left":-at1_pos+"px"},500);
        $(".at1_icon5 li").css("color","gray")
        $(this).css("color","rgb(255,205,0)");
    })

// at2 연년도 별 이미지 삽입
    for (i=0; i<17; i++)
        $(".at2_wrap div:eq("+i+")").css("background","url(img/at2/at2img"+i+".png")
                                   .css("backgroundSize","100% 100%");
// at2 중복 연년도 아이콘 클릭 시 그림 이동 작업 
    $(".at2_menu li").on("click",function() {
        no=$(this).index();
        at2_click(no);
        // $(".at2_wrap4_1").hide();
        // $(".at2_wrap4_2").hide();
    })

    $("#at2_btn_right4").on("click",function() {
        $(".at2_wrap4_2").show(); 
        $(".at2_wrap4_2").css({"left":"200px","opacity":"0"},1000);
        $(".at2_wrap4_2").animate({"left":"750px","opacity":"1"},1000);
        $(".at2_wrap4_1").hide();

    })
    $("#at2_btn_left4").on("click",function() {
        $(".at2_wrap4_2").hide();
        $(".at2_wrap4_2").css({"left":"200px","opacity":"1"},1000);
        $(".at2_wrap4_1").show(); 
        $(".at2_wrap4_1").css({"left":"200px","opacity":"0"},1000);
        $(".at2_wrap4_1").animate({"left":"750px","opacity":"1"},1000);
     })


     $("#at2_btn_right6").on("click",function() {
        $(".at2_wrap6_3").show(); 
        $(".at2_wrap6_3").css({"left":"200px","opacity":"0"},1000);
        $(".at2_wrap6_3").animate({"left":"750px","opacity":"1"},1000);
        $(".at2_wrap6_1").hide();
     })
     $("#at2_btn_left6").on("click",function() {
        $(".at2_wrap6_3").hide();
        $(".at2_wrap6_3").css({"left":"200px","opacity":"0"},1000);
        $(".at2_wrap6_2").show(); 
        $(".at2_wrap6_2").css({"left":"200px","opacity":"0"},1000);
        $(".at2_wrap6_2").animate({"left":"750px","opacity":"1"},1000); 
     })
     $("#at2_btn_left6_1").on("click",function() {
        $(".at2_wrap6_2").hide();
        $(".at2_wrap6_2").css({"left":"200px","opacity":"0"},1000);
        $(".at2_wrap6_1").show(); 
        $(".at2_wrap6_1").css({"left":"200px","opacity":"0"},1000);
        $(".at2_wrap6_1").animate({"left":"750px","opacity":"1"},1000); 
     })

     $("#at2_btn_right7").on("click",function() {
        $(".at2_wrap7_1").show(); 
        $(".at2_wrap7_1").css({"left":"200px","opacity":"0"},1000);
        $(".at2_wrap7_1").animate({"left":"750px","opacity":"1"},1000);
     })

     $("#at2_btn_right8").on("click",function() {
        $(".at2_wrap8_1").show(); 
        $(".at2_wrap8_1").css({"left":"200px","opacity":"0"},1000);
        $(".at2_wrap8_1").animate({"left":"750px","opacity":"1"},1000);
     })

//  at3 뉴스 메뉴 클릭시 메인 호출하기
    $(".at3_card").hide();
    $(".at3_card1").show();
    $(".at3_page li").on("click",function() {
        no=$(this).index()+1;
        $(".at3_card").hide();
        $(".at3_card"+no).show();
    })     
  
// at3 보도자료 클릭시 해당 이미지 삽입 호출하기 
    for (i=0; i<=30; i++)
        $(".at3_news div:eq("+i+")").css("background","url(img/at3/at3news"+i+".jpg") 
                                   .css("backgroundSize","100% 100%");    
        $(".at3_bar li:nth-child(1)").on("click",function() {
        $(".at3_card").hide();
        $(".at3_card1").show();
        $(".at3_box").show();
    })                                                                                           

// at3 카카우 나우 클릭시 해당 이미지 삽입 호출하기         
    for (i=0; i<4; i++)
        $(".at3_now div:eq("+i+")").css("background","url(img/at3/at3now"+i+".jpg") 
                                   .css("backgroundSize","100% 100%");

        $(".at3_bar li:nth-child(3)").on("click",function() {
            $(".at3_card").hide();
            $(".at3_card2").show();
            $(".at3_news").hide();
            $(".at3_now").show(); 
        })                           

// at3 미디어 행사 클릭시 해당 이미지 삽입 호출하기         
    $(".at3_media div").css("background","url(img/at3/at3media0re.jpg") 
                                   .css("backgroundSize","90% 130%");

        $(".at3_bar li:nth-child(4)").on("click",function() {
        $(".at3_card").hide();
        $(".at3_card5").show();
        $(".at3_news").hide();
        $(".at3_media").show(); })                                   

    
// at3 버튼 클릭시 CSS                                
    for (i=0; i<=4; i++){
        $(".at3_bar li").css("background","white");
        $(".at3_bar li:eq(0)").css("background","rgb(255,205,0)").css("color","white");
    }

        $(".at3_bar li").on("click",function() {
        no=$(this).index;
        $(".at3_bar li").css("background","white").css("color","black")
        $(this).css("background","rgb(255,205,0)").css("color","white");
            
    })
    
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

    // 마우스 휠에 대한 동작 
    
    // $(".right_con").on("mousewheel",".box", function(e){
    //     e.preventDefault();
    //     var delta=0;
    //     delta=e.originalEvent.wheelDelta/120;
    //     if(delta<0) {// 마우스를 내렸을 때 
    //         $(".box:nth-child(1)").css("z-index","400");
    //         $(".box:nth-child(1)").stop().animate({left:0, top:0, opacity: "1"},500);
    //         $(".box:nth-child(2)").css("z-index","300");
    //         $(".box:nth-child(2)").stop().animate({left:30, top: 30},500);
    //         $(".box:nth-child(3)").css("z-index","100");
    //         $(".box:nth-child(3)").stop().animate({left:0, top: 50, opacity: "0"},500,
    //         function(){
    //             wrap.prepend("<div class='box'>"+wrap.find("div:last").html()+"</div>");
    //             wrap.find("div:last").remove();

    //         });
    //     } else {
    //         $(".box:nth-child(3)").css("z-index","400");
    //         $(".box:nth-child(2)").css("z-index","300");
    //         $(".box:nth-child(2)").stop().animate({left:-30, top: -30, opacity:0},500);
    //         $(".box:nth-child(3)").stop().animate({left:0, top:0},500);
    //         $(".box:nth-child(4)").css("z-index","300");
    //         $(".box:nth-child(4)").stop().animate({left:30, top:30, opacity:"1"},500,
    //         function(){
    //             wrap.append("<div class='box'>"+wrap.find("div:first").html()+"</div>");
    //             wrap.find("div:first").remove();

    //         });

    //     }
    // });
//  at5 biz iphone frame img 
    for(i=0; i<=5; i++) {
    $(".mob5_small li:eq("+i+")").css("background","url(img/at5/mob"+i+".png)")
    .css("backgroundSize","cover");
    }
//  at6 ent iphone frame img   
    for(i=0; i<=6; i++) {
        $(".mob6_small li:eq("+i+")").css("background","url(img/at6/mob"+i+".png)")
        .css("backgroundSize","cover");
        }
// at7 life iphone frame img 
    for(i=0; i<=9; i++) {
        $(".mob7_small li:eq("+i+")").css("background","url(img/at7/mob"+i+".png)")
        .css("backgroundSize","cover");
        }
//    at8 iphone frame 속에 setInterval로 그림 변경하기
    $(".mob8").each(function() {
        at=$(this).find("img");
        count=at.length;
        curr=0;
        at.eq(curr).fadeIn();
    })

        
//    아티클 12번 가입 버튼 누르면 가입 완료 호출하기
    $(".at12_fin").on("click", function() {        
        $(".at12_joinfin").show();
        $(".at12_box").hide();
      
    })
//   아티클 12번 주메뉴 호출하기 
    $(".menu12").on("click", function() {        
        $(".at12_joinfin").hide();
        $(".at12_box").show();
      
    })
    
//   아티클 12번 시작하기 버튼 누르면 메인으로 이동하기     
    $(".at12_joinfin_bar").on("click", function() {
        $(".at12_joinfin").hide();
        $(".wrap_box").show();
        
    })
    
    
});

// jQuery 변수 호출
// main big img 슬라이드 모션
function show() {
    $(".wrap_big_5").animate({"left":"-=100%"},1000,function(){
        $(".wrap_big_5 li:first").appendTo(".wrap_big_5");
        $(".wrap_big_5").css("left","+=100%",100);
    })
}  
function show_biz() {
    $(".mob5_small").animate({"top":"-=100%","opacity":"1"},1000,function(){
        $(".mob5_small li:first").appendTo(".mob5_small");
        $(".mob5_small").css({"top":"+=100%","opacity":"1"},100);
    })
}  
function show_ent() {
    $(".mob6_small").animate({"left":"-=100%"},1000,function(){
        $(".mob6_small li:first").appendTo(".mob6_small");
        $(".mob6_small").css("left","+=100%",100);
    })
}  
function show_life() {
    $(".mob7_small").animate({"top":"+=100%","opacity":"1"},1000,function(){
        $(".mob7_small li:first").appendTo(".mob7_small");
        $(".mob7_small").css({"top":"-=100%","opacity":"1"},100);
    })
}  
function show_mob() {
    next=(curr+1)%count;
    at.eq(curr).fadeOut();
    at.eq(next).fadeIn();
    curr=next;
}


// at2 연년도 박스 모션
function at2_click(no) {
    $(".at2_wrap").css({"left":"100%","opacity":"0"});
    $(".at2_wrap"+no).animate({"left":"200px","opacity":"1"},500);
} 

// 자바스크립트
window.onload=function() {
    var timer = setInterval(updateTime, 1000);
}    

function updateTime() {
    var now = new Date();
    var calendar = now.getFullYear()+"-"+(now.getMonth()+1)+"-"+now.getDate()
    var amPm = 'AM';
    var hr = addZeros(now.getHours(),2);
    var min = addZeros(now.getMinutes(),2);
    var sec = addZeros(now.getSeconds(),2);

    if(hr>=12) {
        amPm = 'PM';
        hr = addZeros(hr - 12,2);
    }
    

    
    document.querySelector("figure>p>span:nth-child(1)").innerHTML = hr;
    document.querySelector("figure>p>span:nth-child(2)").innerHTML = min;
    document.querySelector("figure>p>span:nth-child(3)").innerHTML = sec;
    document.querySelector("figure>p>span:nth-child(4)").innerHTML = amPm;
    
    checkTime(hr);
}
function addZeros(num, digit) {
    var zero = '';
    num = num.toString();
    if (num.length < digit) {
        for (i = 0; i < digit - num.length; i++) {
            zero += '0';
        }
    }
    return zero + num;

}


function checkTime(hr){
   
    var element = document.getElementById("at4_wrap");
    if(hr>=5 && hr<11){
        element.classList.remove();
        element.classList.add("morning");
    } else if (hr>=11 && hr<16){
        element.classList.remove();
        element.classList.add("afternoon");
    } else if (hr>=16 && hr<20){
        element.classList.remove();
        element.classList.add("evening");
    } else if (hr>=20 && hr<25){
        element.classList.remove();
        element.classList.add("night");
    };

}
