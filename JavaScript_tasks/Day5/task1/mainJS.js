

function nextPage()
{
 var saveCookie=window.confirm("do you accept to save cookies?");
 saveCookie=(saveCookie==true)?1:0;
 localStorage.setItem("saveCookie",String(saveCookie));
    //name
    var name =document.getElementById("fname").value;
    setCookie("name",name,saveCookie);
    //age
    var age = document.getElementById("age").value;
    setCookie("age",age,saveCookie);

    //color
    var color =document.getElementById("color").value;
    setCookie("color",color,saveCookie);

    //gender
    var gender =document.querySelector('input[name="gender"]:checked').value;
    setCookie("gender",gender,saveCookie);

    location.assign("welcome.html");
}


function welcome()
        {
            var saveCookie=localStorage.getItem("saveCookie");
            saveCookie=parseInt(saveCookie);
            var visited=getCookie("visited");
            if (visited==undefined)
            {
                visited=0;
                setCookie("visited",visited,saveCookie);
            }
            setCookie('visited',++visited,saveCookie);
            visited=getCookie("visited");
            var gender=getCookie("gender");
            var name=getCookie("name");
            var color=getCookie("color");
            displayImg(gender);
            var message=document.getElementById("welcome");
            message.innerHTML=`welcome <span style="color:${color};">${name}</span> you have visited this site <span style="color:${color};">${visited}</span> times :)`
        }
         function displayImg(gender)
         {
            gender=='f'?document.getElementById('genderImg').src='profile/female.jpg':document.getElementById('genderImg').src='profile/male.jpg';
         }