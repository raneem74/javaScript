function calc_area(rad)
{
    return Math.PI*Math.pow(rad,2);
}
function calc_sqroot(val)
{
    return Math.sqrt(val);
}
function calc_cos(val)
{
   //val =parseInt(val);
    return (Math.cos(val*(Math.PI/180))).toFixed(4);
}


var input=prompt("please enter raduis: ");
var output=calc_area(input);
console.log(output);
alert(`total area of circle is ${output}`);
///////////////////////////////////////////
var input=prompt("please enter value to calc its square root: ");
var output=calc_sqroot(input);
//console.log(output);
alert(`sqaure root of ${input} is ${output}`);
////////////////////////////////////////////
var input=prompt("please enter angle to calculate cos : ");
var output=calc_cos(input);
//console.log(output);
//alert(`cos ${input} is ${output}`);
document.write(`cos ${input}\u00B0 is ${output}`)