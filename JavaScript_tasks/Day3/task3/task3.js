var chwin,point=0,down=1;
function open_child()
{
    chwin=window.open('child.html','',"width=200,height=200");
    move_win();
}
function close_child()
{
    chwin.close();
}

function move_win()
{
    
        chwin.moveTo(point,point);
        if(point<660&&down)
        point+=50
        else if (point>0)
        {
            down=0;
            point-=50;
        }
        else
            down=1;
        //point=point+1;
        chwin.resizeTo(200, 200);
       var mytimer= setTimeout(move_win,500);
       //clearInterval(mytimer);

    //else 
        
    

}

