var name_,phone,mobile,email,color;
var name_reg=/^[a-zA-Z ]+$/;
var phone_reg=/^[0-9]{8}$/
var mobile_reg=/^0(10|11|12)[0-9]{8}$/
var email_reg=/^[a-zA-z]{3,}@[0-9]{3,}\.com$/
var color_reg=/^(red|green|blue)$/
do {
    name_=prompt("plese enter your name");
}while(!name_.match(name_reg))

do {
    phone=prompt("plese enter your phone number");
}while(!phone.match(phone_reg))

do {
    mobile=prompt("plese enter your mobile number");
}while(!mobile.match(mobile_reg))

do {
    email=prompt("plese enter your email number");
}while(!email.match(email_reg))

do{

    color=prompt("please enter color red,green or blue");
}while(!color.match(color_reg))


document.write("your data is");
document.write(`<hr>`);

document.write(`<font color= ${color} >welcome dear guest<br></font>`);
document.write(`<font color= black>${name_}<br></font>`);

document.write(`<font color= ${color} >your phone is<br></font>`);
document.write(`<font color= black>${phone}<br></font>`);

document.write(`<font color= ${color} >your mobile is<br></font>`);
document.write(`<font color= black>${mobile}<br></font>`);

document.write(`<font color= ${color} >your email is<br></font>`);
document.write(`<font color= black>${email}<br>
</font>`);

