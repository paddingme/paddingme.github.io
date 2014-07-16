---
title: css的水平居中、垂直居中
layout：post
tags:
- css
---


###div水平居中
方法：```text-align:center(内容居中)```和```margin: 0 auto;```配合使用。
demo: http://padding.me/demo/horizontal-center.demo.html

如何使用CSS让整个网页布局居中呢？

对body设置css内容居中样式(``` text-align:center```)后对布局最外层DIV盒子使用```margin:0 auto```即可让对象布局居中。

当然我们对盒子对象使用了 margin:0 auto，有的浏览器不对body对象加text-align:center样式，布局仍然是居中的，这是因为不同浏览器默认样式不同造成，如果不对body设置text-align:center，这样会造成有的浏览器布局居中，有的靠左，这样布局的兼容就产生了。








css居中之美 一丝
http://qrdemo.github.io/qrdemo/the-beauty-of-center-in-CSS.html#/

水平居中 常见：
.demo{
    text-align:center;

    margin:auto;

    position:absolute;
    left:50%;
    margin-left:-?px;
}

常见垂直居中

.demo{
    height:30px;
    lin-height:30px;

    display:table-cell;
    virtical-align:middle;

    position:absolute;
    top:50%;
    margin-top:-?px;
}

c33 居中
display:flex;

水平居中
p{alignment:center;}

垂直居中
p{child-align:middle;}

position:center;
