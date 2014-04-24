var authorName="山边小溪";
function doSomething(){
    var blogName="梦想天空";
    function innerSay(){
        alert(blogName);
    }
    innerSay();
}
alert(authorName); //山边小溪
alert(blogName); //脚本错误
doSomething(); //梦想天空
innerSay() //脚本错误