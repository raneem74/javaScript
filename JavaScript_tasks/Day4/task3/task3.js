var timer ,i=0;
var imgArr=document.getElementsByClassName("marble");
var len=imgArr.length;


function motion()
{
    
    timer=setInterval(function()
    {
        imgArr[i].src="marble1.jpg";
        i=++i%len;
        imgArr[i].src="marble3.jpg";
        
    },200)  
}
function stop_motion()
{
    clearInterval(timer);

}
