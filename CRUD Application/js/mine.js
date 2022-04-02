

var myImg = document.querySelector("img")

document.addEventListener("mousemove" , function(eInfo)
{
    myImg.style.left = eInfo.clientx;
    myImg.style.top = eInfo.clienty;
}
)