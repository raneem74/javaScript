function generateCard(){
    var choice=document.querySelector('input[name="card"]:checked').value;
    var mydiv=document.createElement("div");
    var myimg=document.createElement("img");
    myimg.src=choice;
    mydiv.appendChild(myimg);
    var mess=document.getElementById("message").value;
    var myp=document.createElement("p");
    myp.style.textAlign='center';
    myp.style.color='darkcyan';
    myp.style.fontSize='30px';
    myp.innerText =mess;
    mydiv.appendChild(myp);
    console.log(mydiv);
    var mybutton=document.createElement('input');
    mybutton.type='button';
    mybutton.value='close';
    mybutton.style.margin ='auto';
    mydiv.appendChild(mybutton);
    var mywin=window.open("","","width=500,height=500");
    mybutton.addEventListener('click',function(){mywin.close()} )
    mywin.document.body.appendChild(mydiv);
    mywin.document.body.style.backgroundColor="pink";


//var cardPage=window.open("","","width=500,height=500");
//cardPage.document.body = document.createElement("body");
//var cardImg=cardPage.document.body.createElement('img');
//cardImg.src=choice;
//var cardMess=cardPage.document.createElement('p');
//cardMess.value="test"
//cardPage.document.body.appendChild(cardMess);
//cardPage.document.body.appendChild(cardImg);





//cardPage.document.body.innerHTML="<p>hhaaa</p><img src=cards/gws3.jpg/>";
//cardPage.document.body.appendChild(cardImg)
//cardPage.document.body.appendChild(cardImg);

//var myDiv = cardPage.document.createElement("div");
//cardPage.document.body.appendChild(myDiv);
//myDiv.appendChild(cardImg);



//cardPage.append(cardImg);


}