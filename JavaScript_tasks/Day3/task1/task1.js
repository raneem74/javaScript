function fill_array(arr)
{

    var values= prompt("please enter array elements ");
    values=values.split(" ");
    for(var i=0;i<5;i++)
    arr[i]=values[i];
}
function sort_dec(arr)
{
    arr.sort(function(a,b){return b-a})//swap if true
}
function sort_asc(arr)
{
    arr.sort(function(a,b){return a-b})
}

var arr= new Array();
fill_array(arr);
console.log("sorting");
console.log("%cu've entered the values of:",'color:red');
console.log(arr);
sort_dec(arr);
console.log("%cur values descending: ",'color:red');
console.log(arr);
sort_asc(arr);
console.log("%cur values ascending : ",'color:red');
console.log(arr);