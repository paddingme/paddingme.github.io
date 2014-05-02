---
title: CSS中的值和单位、字体以及文本属性(px,em,font)
layout: post
tags: CSS
---

这几天在学习[CSS权威指南](http://www.amazon.cn/CSS%E6%9D%83%E5%A8%81%E6%8C%87%E5%8D%97-%E8%BF%88%E8%80%B6/dp/B0011F5SIC/ref=sr_1_1?ie=UTF8&qid=1399054787&sr=8-1&keywords=css+%E6%9D%83%E5%A8%81%E6%8C%87%E5%8D%97),学习了CSS中的值和单位、字体以及文本属性，这里做一个相关总结，主要总结我认为重要的知识点。

##1. 值和单位##
CSS里的值和单位，主要分为绝对长度单位：`in`(英寸)、`cm`(厘米)`mm`(毫米)、`pt`(点，标准印刷度量单位)、`pc`(派卡，印刷术语),以及相对长度单位：`em`,`ex`,`px`。

我们主要使用`em`和`px`，`ex`指所用字体中小写x的高度,我们无情得忽视它。“相对”相对“绝对”的好处我们已然了解，例如url链接，我们不用关注外部url地址如何变化，相对路径没问题，我们便可以各种超链接。这里的相对长度单位也是同样的道理。`em`相对于给定字体的font-size值。现代浏览器字体默认大小为16个像素。如果一个元素的font-size为14px,那么对于该元素，1em=14px。这个值可能会随元素的不同而不同，另在设置字体的大小的时，em的值会相对于父元素的字体大小改变。总得来说，就是**em依赖于最近的字体大小**(不要惯性的以为依赖于原先body设定的或者浏览器默认的值。)

而`px`就是像素，对于显示器屏幕分辨率而言。当然`%`同`em`。（注意理解:`%`这个值可以是任意的：可能是同一个元素另一个属性的值，也可以是从父元素继承的一个值，或者是祖先元素的一个值。）


至于要用`px`还是`em`，老版本的IE浏览器不支持像素的缩放，所以用`px`取代`em`，另使用em可以省去很多冗余的工作，例如设置了body里的字体大小，后面的元素内的字体大小全部设置为em大小，这样改动的话只需要改动body里的字体大小，而不用每个元素改动px大小，再次提醒**em依赖于最近的字体大小**。将行距(line-height)，和纵向高度的单位都用em。保证缩放时候的整体性。px常使用在图片大小上。

这篇参考（http://blog.alphatr.com/em-and-px-in-css.html）也有一定参考意义，可以一看。

##2. 颜色##
CSS中颜色取值主要由以下几种方法：

1. CSS命名颜色。在CSS2.1中，CSS规范定义了17个颜色名。
2. 用RGB指定颜色。可以使用0~255取值或者0%~100%。

```
h1 {color:rgb(100%,50%,50%);}
h2 {color:rgb(255,132,123);}
```
3. 十六进制的RGB颜色。将三个介于00-FF的十六进制数连起来，就可以设置一种颜色。

```
h1 {
	color:#FF0000;
}
```
可以简写为

```
h1{
	color:#F00;
}
```
浏览器会取每一位，并将其复制成两位。

4. RGBA颜色表示。在RGB的基础上加了一个Alpha通道.它规定了对象的不透明度。lpha 参数是介于 0.0（完全透明）与 1.0（完全不透明）的数字。浏览器支持：IE9+、Firefox 3+、Chrome、Safari 以及 Opera 10+。

```
p {
 background-color:rgba(255,0,0,0.5);
}
```

5. HSL颜色和HSLA不做赘述。


##3. 字体##


##4. 文本属性##







参考文章：
+ [http://www.zhangxinxu.com/wordpress/?p=874](http://www.zhangxinxu.com/wordpress/?p=874) 这篇文章很有趣
+ [http://www.1z1b.com/one-blog-a-week/px-em-pt/#comment-17058](http://www.1z1b.com/one-blog-a-week/px-em-pt/#comment-17058)
+ [http://www.dreamdu.com/css/css_colors/](http://www.dreamdu.com/css/css_colors/)
+ [http://www.w3school.com.cn/cssref/css_colors_legal.asp](http://www.w3school.com.cn/cssref/css_colors_legal.asp)

   
