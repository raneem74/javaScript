
var sum=0,flag=1;
do{
var num=prompt("please enter num");
num=parseInt(num);
if(isFinite(num))
    sum+=num;
else 
    flag=0;
}while(sum<100&&num!=0&&flag);

document.write("your sum is"+sum);