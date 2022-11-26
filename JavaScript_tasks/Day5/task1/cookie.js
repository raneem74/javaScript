function getCookie(cookieName)
{
    var cookieDectioary=allCookieList();
    return cookieDectioary[cookieName];
}

function setCookie(cookieName,cookieValue,saveCookie)
{
    if(saveCookie)
    {
        var date=new Date();
        date.setMonth(date.getMonth()+1);
        document.cookie=encodeURIComponent(cookieName)+"="+encodeURIComponent(cookieValue)+';expires='+date.toGMTString();
    }
    else
    document.cookie=encodeURIComponent(cookieName)+"="+encodeURIComponent(cookieValue);
}

function allCookieList()
{
    var cookielist=document.cookie;
    cookielist=cookielist.split(";");
    var cookieDectioary=[];
    for(var i=0;i<cookielist.length;i++)
    {
        var [k ,v]=cookielist[i].split("=");
        cookieDectioary[k.trim()]=v;
    }
    return cookieDectioary;
}

function deleteCookie(cookieName)
{
    var date=new Date();
    document.cookie=cookieName+"=;expires="+date.toGMTString();
}

function hasCookie(cookieName)
{
    var cookieDectioary=allCookieList();
    return cookieDectioary[cookieName]==undefined?0:1;
}
