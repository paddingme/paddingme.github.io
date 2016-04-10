---
title: display:inline-block兼容ie6-7的写法
layout: post
tags:
- segment
---


 文章取自我的 Github  repos: [Learning-HTML-CSS](https://github.com/paddingme/Learning-HTML-CSS)， 作者：[@paddingme](http://padding.me/about.html) 。  
原文链接：[https://github.com/paddingme/Learning-HTML-CSS/issues/20](https://github.com/paddingme/Learning-HTML-CSS/issues/20)

[display:inline-block兼容ie6/7的写法](http://www.phpvar.com/archives/2211.html)

```css
div {
  display:inline-block;
  *display:inline; 
  *zoom:1;
} 

```