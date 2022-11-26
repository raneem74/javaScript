function is_palindrome(str)
{
    const len = str.length;  
    for (let i = 0; i < len / 2; i++) {   
        if (str[i] !== str[len - 1 - i]) {  
            return 0; 
        }  
    }  
    return 1;
}


var input_str=prompt("enter your string to check palindrome");
var case_senstive=prompt("want to check with case senstive?y/n");
var res;
if(case_senstive.match(/y/i))
{
    res=is_palindrome(input_str);
}  
else if (case_senstive.match(/n/i))
{
    res=is_palindrome(input_str.toLowerCase());
}
if (res)
document.write("yes");
else 
document.write("no");