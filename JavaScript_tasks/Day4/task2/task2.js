const srcArr= ['1.jpg','2.jpg','3.jpg','4.jpg'];
const imgSize=srcArr.length;
var img = document.getElementById('img');
var i=0,timer;


function next()
{
    img.src=srcArr[++i%imgSize];
}
function prev()
{
    i=(--i+imgSize)%imgSize;
    img.src=srcArr[i]
}
function slideShow()
{
    timer=setInterval(function(){
                            img.src=srcArr[++i%imgSize];
                            },2000)
}

function stop(){
    clearInterval(timer);
}

///indx=indx.slice(indx.indexOf('\/')+1)

//console.log(indx)