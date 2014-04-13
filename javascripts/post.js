$(document).ready(function () {
  $("a.tag").click(function() {
    var googleCseUrl = "http://www.google.com/cse?cx=017017719923970963940%3Aggcsf-ihsqm&ie=UTF-8&sa=Search"
    var uriEncodedTag = encodeURI($(this).text());
    var tagUrl = googleCseUrl + "&q=" + uriEncodedTag;
    window.location.href = tagUrl;
    return false;
  });
});