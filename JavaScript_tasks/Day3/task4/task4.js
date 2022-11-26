var message,i=0,win;
function take_mess()
{
    message=prompt("please enter your meesage");
    return message;
}

function show_message_win()
{
    win=open("message.html","","width=500,height=200");
    show_message(); 
}
function show_message()
{
    
    
    if(ms.length>0)
    {
        win.document.write(ms.shift());
        setTimeout(show_message,500);
    }
    else{
        setTimeout(function(){win.close();},1000)

    }
    
    
}

var message=take_mess();
var ms=message.split("");