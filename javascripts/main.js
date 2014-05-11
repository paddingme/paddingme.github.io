
/*scroll to top*/
window.onload=function() {
	var obtn=document.getElementById("btn");
	var clientHeight=document.documentElement.clientHeight;
	var timer=null;
	var isTop=true;

	window.onscroll=function(){
		var osTop=document.documentElement.scrollTop||document.body.scrollTop;
		if(osTop>=clientHeight){
			obtn.style.display="block";
		}else{
			obtn.style.display="none";
		}
		if(!isTop) clearInterval(timer);
			isTop=false;
	}

	obtn.onclick= function() {
		timer = setInterval(function() {
			var osTop=document.documentElement.scrollTop||document.body.scrollTop;
			var ispeed=Math.floor(-osTop/5);
			document.documentElement.scrollTop=document.body.scrollTop=osTop+ispeed;

			isTop=true;

			if(osTop==0)
				clearInterval(timer);
		},30)
		

	}
}


/* 判断用户代理是否为IE来改变字体大小*/
if(/windows/i.test(navigator.userAgent)){
  document.getElementsByTagName('html')[0].className += ' windows'
}


