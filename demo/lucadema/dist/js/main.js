$('#myCarousel').carousel('next');

 
$(function () {
    		$('#myTab a:first').tab('show')
  		});


// $(document).ready(function() {
//                 var form=$("#myForm");//获取表单对象
//                 form.submit(function(){ //表单submit时间
//                 	$.post(form.attr("action"),//以POST方式提交
//                 		form.serialize(),
//                 	 function(result,status){ //提交是否成功 result为JSON
//                 	 	debugger;
//                 	 	alert(status);
//                 	 	alert(result.Sucess);
//                 	 	alert(result.Message);
//                 	 	alert(result.ReturnUrl);
//                 	 },
//                 	 "json");
//                 return false;
//                 });
//             });

//传输图片地址在这里
// window.onload=function(){
    
//     var url="caba/listimage.action";//请求图片的！！！的连接
//     var request=new XMLHttpRequest();
//     request.open("GET",url);

//     request.onload=function(){


//         if(request.status==200)
//         {
//             updateImage(request.responseText);
//         }
//     };

//     request.send(null);
    
// }



function updateImage(responseText){

    var imageDiv = document.getElementById("carouseImage");

    var images = JSON.parse(responseText);

    for (var i = 0; i < images.totalCont; i++) {

        var image = images.rows[i];
        var imageUrl = image.imagepath;
        var div = document.createElement("div");

        if(i==0){
            div.setAttribute("class", "item active");
            }
            else{
            div.setAttribute("class", "item ");
        }
        div.innerHTML="<img   src="+imageUrl+">";

        imageDiv.appendChild(div);

    }

}




function check(){

    var name=document.getElementById("inputName");
    var phoneNumber=document.getElementById("inputPhoneNumber");
    var content=document.getElementById("inputContent");
    if(name.value==""){
        alert("请输入您的姓名！");
     return false;
    }
    if(phoneNumber.value=="")
    {
        alert("请输入您的联系电话！");
        return false;
    }
    if(content.value=="")
    {
        alert("请输入您的留言内容！");
        return false;
    }

    return    true;
}