$(window).scroll(function(){

    let pTop = $("#about").offset().top;
    let sTop = $(window).scrollTop();

    if( sTop >= pTop){

        $(".navbar").removeClass("bg-dark");
        $(".navbar").addClass("bg-primary");
    }
    else
    {
        $(".navbar").removeClass("bg-primary");
        $(".navbar").addClass("bg-dark");  
    }
})