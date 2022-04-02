



 


// var allImage = document.querySelectorAll("img");

allImage  = Array.from(document.querySelectorAll("img"));
var parentLayer = document.querySelector(".parentLayer");
var childLayer= document.querySelector(".childLayer");
var close= document.querySelector("#close");
var left= document.querySelector("#left");
var right= document.querySelector("#right");
var currentIndex;




for ( var i=0 ; i < allImage.length ; i++)
{
    allImage[i].addEventListener("click" , test)
}


function test (eInfo){
    // parentLayer.style.display = "flex"
    // parentLayer.classList.remove("d-none");
    // parentLayer.classList.add("d-flex");
    parentLayer.classList.replace("d-none" , "d-flex");
    var imageSrc = eInfo.target.src;
    childLayer.style.backgroundImage = `url(${imageSrc})`
    currentIndex =  allImage.indexOf (eInfo.target)
}


    close.addEventListener("click" , function(){
        parentLayer.classList.replace("d-flex" , "d-none")
    })


    right.addEventListener("click" , rightSlide)
    function rightSlide()
    {
        currentIndex++; 
        if (currentIndex>5 )
        {
            currentIndex = 0;
        }
        var currentSrc = allImage[currentIndex].src;
        childLayer.style.backgroundImage = `url(${currentSrc})`

    }
    left.addEventListener("click" , leftSlide)
    function leftSlide()
    {
        currentIndex--; 
        if (currentIndex<0 )
        {
            currentIndex = allImage.length-1;
        }
        var currentSrc = allImage[currentIndex].src;
        childLayer.style.backgroundImage = `url(${currentSrc})`

    }




// var allImage = document.querySelectorAll("img");
// var parentLayer = document.querySelector(".parentLayer")
// var childLayer = document.querySelector(".childLayer")


// for ( var i=0 ; i < allImage.length ; i++)
// {
//     allImage[i].addEventListener("click" , test)
// }

// function test (eInfo)
// {
//     parentLayer.classList.replace("d-none" , "d-flex")  
//     var imageSrc = eInfo.target.src;
//     childLayer.style.backgroundImage = `url(${imageSrc})`
// }