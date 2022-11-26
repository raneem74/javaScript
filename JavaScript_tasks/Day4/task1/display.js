var formUrl=document.location.href;
const paramArr = formUrl.slice(formUrl.indexOf('?') + 1).split('&');
const params = {};
    paramArr.map(param => {
        const [key, val] = param.split('=');
        params[key] = decodeURIComponent(val);
    })

console.log(`welcom ${params["fname"]} ${params["lname"]}`)
console.log(`your address is ${params["address"]} \nyour gender is ${params["gender"]}\nyour email is ${params["email"]}\nyour mobile is ${params["mobile"]}`)
if(!navigator.userAgent.match(/chrome|chromium|crios/i))
    alert("please try to use chrom");



