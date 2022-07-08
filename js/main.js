$(function(){
    /* CONTENT1 COUNT */
    $(".num").counterUp({
        delay: 10,
        time: 1000
    });
    
    /* CONTENT2 TAB */
    $(".tabs a").click(function(){
        var ch_con=$(this).attr("href");
        $(".tab_container>div").hide();
        $(ch_con).fadeIn();
        $(".tabs a").removeClass("active");
        $(this).addClass("active");
        return false;
    })
    
    /* CONTENT3 */
    
    /*  //bxSlider */
    $(".bxslider").bxSlider({
        minSlides:2,
        maxSlides:3,
        slideWidth:450,
        moveSlides:1,
        slideMargin:25
    })
    
    /* //CUT STR */
    cut();
    function cut(){
        str = new Array();
        for(i=0; i<9; i++){
            str[i]=$(".bxslider>.cut_str:eq("+i+")").children("p").text();
            if(str[i].length >= 78){
                str[i]=str[i].substr(0,78)+"...";
            } else {
                str[i]=str[i];
            }
            $(".bxslider>.cut_str:eq("+i+")").children("p").text(str[i]);
        }
    }
    
    $(".view_more").click(function(){
        cut(false);
    })
})//