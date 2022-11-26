function init()
{

    var allSources=['1.gif','2.gif','3.gif','4.gif','5.gif','6.gif','1.gif','2.gif','3.gif','4.gif','5.gif','6.gif'];
    shuffle(allSources);

    const original_source='Moon.gif';

    var img_on=false,img1,img2,img_clicked=0;
    var opened=[],opened_sum=0;
    function show(id)
    {   
        if(!opened[id]&&img_clicked<2)
        {
            img_clicked++;
            if(img_on)
        {
            img2=document.getElementById(id);
            img_on=!img_on;
            img2.src=allSources[parseInt(id)];

            if(img2.src!=img1.src)
            {
                click_num=0;
                setTimeout(function(){img1.src=original_source;
                                    img2.src=original_source;
                                    img_clicked=0;
                                    },300) ;

            }
            else
            {
                opened[img1.id]=1;
                opened[img2.id]=1;
                opened_sum+=2;
                if(opened_sum==12)
                {
                    document.body.innerHTML='';
                    console.log("you win!!!");
                    document.write("you win!!");
                }
                img_clicked=0;
            }
            
        }
        else{
            img1=document.getElementById(id);
            img_on=!img_on;
            img1.src=allSources[parseInt(id)];

            
        }
        } 
    }

    function close(img)
    {
        img.src=original_source;

    }
    function shuffle(array) {
        let currentIndex = array.length,  randomIndex;

        // While there remain elements to shuffle.
        while (currentIndex != 0) {

            // Pick a remaining element.
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;

            // And swap it with the current element.
            [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
            }
        return array;
        }



}