
var cur,prev;
setInterval(scroll,500);
function scroll()
{
    
    cur=window.scrollY;

    if (cur!=prev)
    {
        console.log(cur);
        console.log(prev);
        scrollBy(0,10);
        prev=cur;
    }
    else
    window.close();
    

    
    //window.close();

 /*   if ( $(window).scrollTop() + $(window).height() == $(document).height() ) {
        $(window).close();
}*/

}