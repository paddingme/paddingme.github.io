$(document).ready(function () {
  $("a.tag").click(function() {
    var googleCseUrl = "http://www.google.com/cse?cx=012926632951468748908:1kf2gp-ylyw&ie=UTF-8&sa=Search"
    var uriEncodedTag = encodeURI($(this).text());
    var tagUrl = googleCseUrl + "&q=" + uriEncodedTag;
    window.location.href = tagUrl;
    return false;
  });
});