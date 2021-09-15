$(function() {
   //  for (i=0; i<=5; i++)
   //  $(".hscon_mob>div:eq("+i+")").css("background","url(images/at2img"+i+".png")
   //                             .css("backgroundSize","100% 100%");
     // ipad mobile content 2 page animate
    $(".hs_year_btn").click(function(e) {
      e.preventDefault();
     $(".hs_year").toggle(500); 
   });
   $(".hs_year>li").click(function(){
      no=$(this).index();                         
      if(no==4){
         for (i=0; i<=3; i++) {
            $(".hsmob4_img>.img").eq(i).css("background","url(images/hsmob4_slide"+i+".png")
                                    .css("backgroundSize","100% 100%");
         }
      }                               
      else if(no==6){
         for (i=0; i<=4; i++) {
            $(".hsmob6_img>.img").eq(i).css("background","url(images/hsmob6_slide"+i+".png")
                                    .css("backgroundSize","100% 100%");
         }
      }                                
      else if(no==7){
         for (i=0; i<=2; i++) {
            $(".hsmob7_img>.img").eq(i).css("background","url(images/hsmob7_slide"+i+".png")
                                    .css("backgroundSize","100% 100%");
         }
      }                          
      else if(no==8){
         for (i=0; i<=2; i++) {
            $(".hsmob8_img>.img").eq(i).css("background","url(images/hsmob8_slide"+i+".png")
                                    .css("backgroundSize","100% 100%");
         }
      }
      at2_mob(no);
     
   });
   
   let slide_pos=100, slide_count=0;
   $(".hsmob_icon span").css("color","gray");
   $(".hsmob_icon span:eq(0)").css("color","rgb(255,205,0)");
   
   $(".hsmob_icon span").on("click",function() {
       no=$(this).index();
       slide_count=no;
       slide_pos=100*no;
       $(".hsmob_img").animate({"left":-slide_pos+"%"},290);
       $(".hsmob_icon span").css("color","gray")
       $(this).css("color","rgb(255,205,0)");    
   })
   $(".hsmob_icon span").on("click",function() {
       no=$(this).index();
       slide_count=no;
       slide_pos=100*no;
       $(".hsmob_list").animate({"left":-slide_pos+"%"},290);
       $(".hsmob_icon span").css("color","gray")
       $(this).css("color","rgb(255,205,0)");
   })
  
});
function at2_mob(no) {
    $(".hscon_mob").css({"left":"-100%","opacity":"0"});
    $(".hscon_mob"+no).animate({"left":"10%","opacity":"1"},500);
}

