$(function(){
    /* HEADER */
    $(".depth2_show").on("mouseover focusin",function(){
        $("#hd_wrap").css({"height":"120px"});
        $(".hd_bg").addClass("active");
    })
    $(".depth2_show").on("mouseout focusout",function(){
        $("#hd_wrap").css({"height":"70px"});
        $(".hd_bg").removeClass("active");
    })
    $(".depth1>li").on("mouseover focusin",function(){
        $("#hd_wrap").addClass("active");
        $(this).children(".depth2").stop().fadeIn(200);
    })
    $(".depth1>li").on("mouseout focusout",function(){
        $(this).children(".depth2").stop().fadeOut(200);
        $(".hd_bg").removeClass("active");
        if(sct <= 5){
            $("#hd_wrap").removeClass("active");
        }
    })
    
    $(window).scroll(function(){
        sct = $(window).scrollTop();
        if(sct >= 5){
            $("#hd_wrap").addClass("active");
        }else{
            $("#hd_wrap").removeClass("active"); 
        }
    })
    
    /* TABLET & MOBILE GNB */
    $(".m_gnb_btn").click(function(){
        $(this).toggleClass("on");
        $("#m_gnb").toggleClass("active");
        $(".m_depth2").delay(1000).stop().slideUp();
    })
    $(".m_depth2_show>a").click(function(){
        $(".m_depth2_show").children(".m_depth2").stop().slideUp();
        $(this).next(".m_depth2").stop().slideToggle();
    })
    
    /* CHAT */
    $(".chat_btn").click(function(){
        $(".msg").fadeToggle();
    })
    $(".btn_msg_close").click(function(){
        $(".msg").fadeOut();
    })
})