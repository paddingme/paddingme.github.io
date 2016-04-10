---
title: 【JavaScript】【学习心得】学习JavaScript 第一天
layout: post
tags:
- Mu-Help-Plan
---


 文章取自我的 Github  repos: [Learning-JavaScript](https://github.com/paddingme/Learning-JavaScript)， 作者：[@paddingme](http://padding.me/about.html) 。 
 &nbsp;原文链接：[https://github.com/paddingme/Learning-JavaScript/issues/1](https://github.com/paddingme/Learning-JavaScript/issues/1)

【写在前面】多少次咬牙坚持决心将 JavaScript 进行到底，却又半途而废。古语有云，只想做一个安静的切图仔不是一个好的前端汪。前端一直或多或少被人弊病，甚至被后端鄙视，前端入门易，上手快，在整个生态环境中前端的分量常被忽视，后端同学随手 google 下也能写出可以用的页面，前端存在的意义在哪儿？幸好 HTML5 来了， NodeJS 来了，前端的意义也越来越被多数公司认可重视，这是一个最好的时代，前端的春天仿佛真的来了。那么我们还要安心的做一个安静的美（cut）男子(boy)吗?答案显然是 NO！咳咳，安静还是必须的，我们可以志存高远，向着全栈工程师的党项努力，另一方面更要脚踏实地，夯实基础，这样才能精通各种奇淫技巧，不论是 nodejs 还是 fibjs 都能为我所用，才能做到手中无刀，心中有刀，无刀胜有刀。感谢 [90 天慕女神助力计划](http://www.imooc.com/wenda/detail/234205),让我们找到了学习的欲望和借口，大奖在哪儿,大奖在哪儿？？？90 天，你能坚持下去吗，90天你会收获什么吗？大浪淘沙，优胜劣汰，这个看脸的世界，还好，还有进化论这样伟大的意义存在。


想我打小骨骼惊奇，便是百年难遇的练武奇才，人在江湖飘，不怀揣几本武林秘籍怎么行走江湖。早已坐拥《JavaScript DOM 编程艺术》，《JavaScript 高级程序设计》，《JavaScript 语言精粹》，《JavaScript 权威指南》好几本大部头宝典呢。艾玛好多，九十天能练成盖世武功吗？轻轻抽出看上去最艺术的《JavaScript DOM 编程艺术》，对！就是你了，我喜欢艺术，无论是xx艺术还是xx艺术。拍拍胸脯，告诉自己我行我行我行行行(牛皮已经吹成这样了，不坚持下去实在是太脸了，还怎么好意思在前端圈混下去？)。

言归正传，我在 github 上也维护了一个 repo：[Learning-JavaScript](https://github.com/paddingme/Learning-JavaScript)，如果你也和我一样，基础不太好，想要努力啃下 JavaScript 这块烂骨头，欢迎一起维护，一起学习。

我将从《JavaScript DOM 编程艺术》->《JavaScript 高级程序设计》->《JavaScript 语言精粹》->《JavaScript 权威指南》的路线进行学习，记录下一路学到的重要知识点，并进行不断的 review 和对相关知识点的总结。

那我们开始就先从《JavaScript DOM 编程艺术》吧。

# 第一章 JavaScript 简史

JavaScript 的另一个名字叫 ECMAScript。我们通常所说的 BOM(Browser Object Model)是指浏览器对象模型，而 DOM(Document Object Model)则是指文档对象模型。

## 什么是 DOM ？
简单地说，DOM 是一套对文档的内容进行抽象和概念化的方法；  
DOM 是一种 API。API 简单地说是一组已经得到有关各方共同认可的基本约定。

W3C 对 DOM 的定义是：

> 一个与系统平台和编程语言无关的接口，程序和脚本可以通过这个接口动态地访问和修改文档的内容、结构和样式。

## 浏览器内核
 - IE: trident 内核
 - Firefox：gecko 内核
 - Safari/chrome: webkit 内核

浏览器内核更正确的应该叫 “Rendering Engine”，即渲染引擎。更多的关于浏览器内核的知识可以参加如下文章：
- [浏览器内核](http://baike.baidu.com/view/1369399.htm)
- [浏览器内核](http://www.baike.com/wiki/%E6%B5%8F%E8%A7%88%E5%99%A8%E5%86%85%E6%A0%B8)
- [关于浏览器内核的一些小知识](http://www.iplaysoft.com/browsers-engine.html)


 JavaScript 的来龙去脉，对 JavaScript 的学习会更有好处，至少会有更多的感性认识。如果你想了解更详尽的 Javascript  的诞生，可以参考阮一峰写的 [Javascript诞生记](http://www.ruanyifeng.com/blog/2011/06/birth_of_javascript.html),这里摘抄下重点：

>网景公司动了心，决定与 Sun 公司结成联盟。它不仅允许 Java 程序以 applet （小程序）的形式，直接在浏览器中运行；甚至还考虑直接将 Java 作为脚本语言嵌入网页，只是因为这样会使HTML网页过于复杂，后来才不得不放弃。
总之，当时的形势就是，网景公司的整个管理层，都是Java语言的信徒，Sun公司完全介入网页脚本语言的决策。因此，Javascript 后来就是网景和 Sun 两家公司一起携手推向市场的，这种语言被命名为" Java+script "并不是偶然的。
此时，34岁的系统程序员 Brendan Eich 登场了。1995年4月，网景公司录用了他。
仅仅一个月之后，1995年5月，网景公司做出决策，未来的网页脚本语言必须"看上去与 Java 足够相似"，但是比 Java 简单，使得非专业的网页作者也能很快上手。这个决策实际上将 Perl、Python、Tcl、Scheme 等非面向对象编程的语言都排除在外了。
Brendan Eich 被指定为这种"简化版 Java 语言"的设计师。


#  第二章 语法

1. `<script>` 标签不需要包含 `type="text/javascript"`，因为脚本默认是 JavaScript。

2. JAVA 属于编译型语言，需要编译器，而 JavaScript 属于解释型语言，在 互联网环境中， Web 浏览器负责完成 JavaScript 有关的解释和执行工作。

 用编译型语言编写的代码有错误，这些错误在代码编译阶段就能被发现。而解释型语言代码中的错误只能等到解释器执行到有关代码时才能被发现。

 在面试的时候如果面试官要问你 JAVA 和 JavaScript，不要再说是子集什么的（TNT），他们是雷锋和雷峰塔的区别啊。详细请戳 [JavaScript 与 Java 有什么不同？](https://www.java.com/zh_CN/download/faq/java_javascript.xml)

3. JavaScript 中也可以使用　HTML 风格注释，如：

 ```javascript
        <!-- 这是 JavaScript 的注释，不必在结尾加上-->。
 ```

 但为了区分，应使用 `//` 注释单行，`/* */` 注释多行。

4. JavaScript 允许直接赋值而无需声明。

 JavaScript 语法不允许变量名中包含空格或标点符号（“$” 除外）。

 JavaScript  变量名允许包含字母、数字、美元符号和下划线（但第一个字符不允许是数字）

 ```javascript
  var myMood = "happy";
 ```

 上述代码中 “happy” 是 JavaScript 中的一个字面量(literal), 亦即可以直接在 JavaScript 代码中写出来的数据。

5. JavaScript 不需要进行类型声明， 是一种弱类型( weakly typed)语言，意味着可以在任何阶段改变变量的数据类型。

6. 数组:

 ```javascript
  var beatles = Array();

  var beatles = Array(4);

  beatles[0] = "John";

  var beatles = Array("John","Paul","George","Ringo");

  var beatles = ["John","Paul","George","Ringo"];

  var lennon = ["John",1940,false];

  //不推荐如下的关联数组：
  var lennon = Array();
  lennon["name"] = "John";
 ```

 在  JavaScript 中，所有的变量都是某种类型的对象，你感受下。理想情况下，你不应该改修改 Array 对象的属性， 而应该使用通用的对象（object）。

7. 对象：

 ```javascript
 var lennon = Object();
 lennon.name = "John";
 lennon.year = 1940;
 lennon.living = false;

 var leenon = { "name":"John", year:1940, living:false };

 var beatles = {};
 beatles.vocalist = lennon;

 ```


8. 在命名变量时，可以用下划线来分割单词。在函数命令时，可使用驼峰法命名。

9. 如果在某个函数中使用了 `var`, 则那个变量将被视为一个局部变量，它只存在这个函数的上下文中；反之如果没有使用 `var`，那个变量将被视为全局变量，若脚本里已经存在一个与之同名的全局变量，则这个函数将会改变那个变量的值。

10. 对象是自包含的数据集合，包含在对象里的数据可以通过两种形式来访问——属性（property） 和方法 （method）：
 - 属性是隶属于某个特定对象的变量；
 - 方法是只有某个特定对象才能调用的函数。

 对象就是由一些属性和方法组合在一起而构成的一个数据实体。


11. 对象：
 - 自定义对象(用户自己创建的对象)
 - 内建对象( JavaScript 提供的一系列预先定义好的对象，可以拿来就用)
 - 宿主对象(由 JavaScript 运行环境提供的对象，对于web应用，运行环境即是浏览器，由浏览器提供的预定义对象即为宿主对象，宿主对象包括 Form、Image 、Element和 Document 等 )


好了今天就学习到这里，咱们明天再见。

> 习武之人，务必沉心静气，切忌浮躁，小心走火入魔哦。