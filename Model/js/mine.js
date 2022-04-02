


$("#home").animate(  {width : "100%"} , 1000 );
$("#home").animate(  {height : "100vh"} , 1000  , function(){

    $("h1").fadeIn(1000  , function(){
        
        $(".item").eq(0).slideDown(1000 , function(){
            $(".item").eq(1).slideDown(1000 , function(){

                $(".item").eq(2).slideDown(1000)

            })

        } );


    }  );
    


});




