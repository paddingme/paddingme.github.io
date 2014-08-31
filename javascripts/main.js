 window.onload = function() {
     var obtn = document.getElementById("btn");
     var clientHeight = document.documentElement.clientHeight;
     var timer = null;
     var isTop = true;

     window.onscroll = function() {
         var osTop = document.documentElement.scrollTop || document.body.scrollTop;
         console.log("document.documentElement.scrollTop"+document.documentElement.scrollTop);
         console.log("document.body.scrollTop"+document.body.scrollTop);
         console.log("osTop"+osTop)
         console.log("clientHeight"+clientHeight)
         if (osTop >= clientHeight) {
             obtn.style.display = "block";
         } else {
             obtn.style.display = "none";
         }
         if (!isTop) clearInterval(timer);
         isTop = false;
     }
     obtn.onclick = function() {
         timer = setInterval(function() {
             var osTop = document.documentElement.scrollTop || document.body.scrollTop;
             var ispeed = Math.floor(-osTop / 5);
             document.documentElement.scrollTop = document.body.scrollTop = osTop + ispeed;
             isTop = true;
             if (osTop == 0)
                 clearInterval(timer);
         }, 30)

     }
 }
