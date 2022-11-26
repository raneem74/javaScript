function longest_word(str)
{
    const splited_str=str.split(" ");
    var longest=0,indx;
    for(var i=0;i<splited_str.length;i++)
    {
        if(splited_str[i].length>longest)
            {
                longest=splited_str[i].length;
                indx=i;
            }

    }
    return splited_str[indx];

}
var input_str=prompt("enter string please");
document.write("the longest word is ")
document.write(longest_word(input_str));