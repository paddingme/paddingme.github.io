var gaJsHost = (("https:" == document.location.protocol) ? "https://ssl." : "http://www.");
document.write(unescape("%3Cscript src='" + gaJsHost + "google-analytics.com/ga.js' type='text/javascript'%3E%3C/script%3E"));

setTimeout(function(){
  try{ 
    var pageTracker = _gat._getTracker("UA-4605088-1");
    pageTracker._trackPageview();
  } catch(err) {} 
}, 500);
