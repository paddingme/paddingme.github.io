---
title: dataURLtoBlob
layout: post
tags:
- undefined
---


 文章取自我的 Github  repos: [Learning-JavaScript](https://github.com/paddingme/Learning-JavaScript)， 作者：[@paddingme](http://padding.me/about.html) 。 
 &nbsp;原文链接：[https://github.com/paddingme/Learning-JavaScript/issues/32](https://github.com/paddingme/Learning-JavaScript/issues/32)

```js
//data为文件的base64编码
function dataURLtoBlob(data) {
    var tmp = data.split(',');
    tmp[1] = tmp[1].replace(//s/g,'');
    var binary = atob(tmp[1]);
    var array = [];
    for(var i = 0; i < binary.length; i++) {
        array.push(binary.charCodeAt(i));
    }
    return new Blob([new Uint8Array(array)], {type: 'image/jpeg'});
}

```