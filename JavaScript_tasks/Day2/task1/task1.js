var input_str=prompt("enter your string");
var selected_char=prompt("enter a char to count");
var case_senstive=prompt("want to check with case senstive?y/n");
if(case_senstive.match(/y/i))
{
    var regEx = new RegExp(selected_char,'g');
    var res = input_str.match(regEx).length;
}  
else if (case_senstive.match(/n/i))
{
    var regEx = new RegExp(selected_char,'gi');
    var res = input_str.match(regEx).length;
}
else 
    var res ="invalid input";
    

document.write(res);
console.log(res);