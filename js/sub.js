$(function(){
    $(".tabs a").click(function(){
        var ch_con2=$(this).attr("href");
        $(".tab_container>div").hide();
        $(ch_con2).fadeIn();
        $(".tabs a").removeClass("active");
        $(this).addClass("active");
        return false;
    })
})//E