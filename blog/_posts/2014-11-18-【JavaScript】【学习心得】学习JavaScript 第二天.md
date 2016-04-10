---
title: 【JavaScript】【学习心得】学习JavaScript 第二天
layout: post
tags:
- Mu-Help-Plan
---


 文章取自我的 Github  repos: [Learning-JavaScript](https://github.com/paddingme/Learning-JavaScript), 作者：@paddingme 。原文链接：https://github.com/paddingme/Learning-JavaScript/issues/5

【JavaScript】【学习心得】学习 JavaScript 第二天

昨天 JavaScript 第一天，洋洋洒洒三千字，但是 [imooc](http://www.imooc.com/wenda/detail/235627) 上竟然没有小伙伴而围观, 让我的心拔凉拔凉的，我这儿可是有满满的干货，还附赠逗比属性。另外 imooc 的编辑器竟然不支持 markdown，满地打滚要求 imooc 的攻城狮火速支持 markdown。好了废话不多说，治病看疗效，我还是踏踏实实的继续练习 JavaScript 吧。

昨天咱们已经学习了《JavaScript DOM 编程艺术》第一章——JavaScript 简史 和 第二章——语法，咱们紧接着学习《第三章 DOM》，重点来了。

## 节点
 - 元素节点
 - 文本节点
 - 属性节点

## 获取元素

1. `getElementById()` 方法可返回对拥有指定 ID 的第一个对象的引用;

 ```javascript
 document.getElementById(id);
 ```

2. `getElementsByTagName` 方法可返回带有指定名称的对象的集合;

 ```javascript
 document.getElementsByTagName(tag);
 ```

3. `getElementsByClassName` 方法可返回带有指定标签名的对象的集合。

 ```javascript
 document.getElementsByClassName(class); //(HTML5 DOM 新增)
 ```


id 属性为 purchase 的元素包括这多少个元素节点：

```javascript
var shopping = document.getElementById("purchase");
var items = shopping.getElementByTagName("*");
alert(items.length);
```

新老浏览器实现 `getElementByClassName` (不支持多类名):

```javascript
function getElementsByClassName(node,classname) {
    if(node.getElementsByClassName){
        return node.getElementsByClassName(classname);
    } else {
        var results = new Array();
        var elems = node.getElementsByTagName("*");
        for(var i=0; i<elems.length; i++){
            if(elems[i].className.indexOf(className) != -1) {
                results[results.length]=elems[i];
            }
        }
        return results;
    }
}
```

`indexOf()` 方法可返回某个指定的字符串值在字符串中首次出现的位置。  
`stringObject.indexOf(searchvalue,fromindex)`  
该方法将从头到尾地检索字符串 stringObject，看它是否含有子串 searchvalue。开始检索的位置在字符串的 fromindex 处或字符串的开头（没有指定 fromindex 时）。如果找到一个 searchvalue，则返回 searchvalue 的第一次出现的位置。stringObject 中的字符位置是从 0 开始的。


## 总结下
- 一份文档就是一棵节点树；
- 节点分为不同的类型：元素节点，属性节点，文本节点等；
- `getElementById` 将返回一个对象，该对象对应着文档里的一个特定的元素节点；
- `getElementsByTagName` 和 `getElementsByClassName` 将返回一个对象数组，他们分别对应着文档里的一组特定的元素节点；
- 每个节点都是一个对象。

## `getAttribute`

`object.getAttribute(attribute)`

`getAttribute` 是一个函数，只有一个参数——你打算查询的属性的名字。

`getAttrubute` 方法不属于 document 对象，所以不能通过 document 对象调用。它只能通过元素节点对象调用。

## `setAttribute`

`object.setAttribute(attribute,value)`

`setAttribute` 也只能用于节点元素对象，主要用于对属性值做出修改。`setAttribute`做出的修改不会反映在文档本身的源代码里。

这种表里不一的现象源自 DOM 的工作模式： 先加载文档的静态内容，再动态刷新，动态刷新不影响文档的静态内容。 这正是 DOM 的真正威力：对页面内容进行刷新却不需要在浏览器里刷新页面。

好了，今天就学习到这里了，好好消化理解，see you tomorrow。

