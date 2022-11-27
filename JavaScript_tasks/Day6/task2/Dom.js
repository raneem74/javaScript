function init()
{
    var center_div =document.body.firstChild.nextSibling;
    var header_div=center_div.firstChild.nextSibling;
    header_div.style.textAlign="right";

    var ul_div=header_div.nextSibling.nextSibling;
    var ul_element=ul_div.firstChild.nextSibling;
    ul_element.style="list-style-type: circle;";

    var new_img_element=document.createElement("img");
    new_img_element.src="dom.jpg";
    var new_img_div=document.createElement("div");
    new_img_div.append(new_img_element);
    new_img_div.style.textAlign = "left";
    document.body.append(new_img_div);
}
