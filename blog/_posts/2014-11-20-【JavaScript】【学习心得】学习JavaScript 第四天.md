---
title: 【JavaScript】【学习心得】学习JavaScript 第四天
layout: post
tags:
- Mu-Help-Plan
---


 文章取自我的 Github  repos: [Learning-JavaScript](https://github.com/paddingme/Learning-JavaScript)， 作者：[@paddingme](http://padding.me/about.html) 。  
原文链接：[https://github.com/paddingme/Learning-JavaScript/issues/7](https://github.com/paddingme/Learning-JavaScript/issues/7)

经过了三天的持续学习，咱们的第一个 js 网页你有没有做出来呢？这个简单的 [JavaScript 图片库](http://codepen.io/paddingme/pen/qCuDo) 它是否完美？今天我们来学习一些最佳实践，来完善我们的这个 JavaScript 图片库。


## 质疑一切

若要使用 JavaScript 就要确认：这么做会对用户的浏览体验产生怎样的影响？还有个更重要的问题：如果用户的浏览器不支持 JavaScript 该怎么办？这些都是我们需要考虑的。

## 平稳退化（graceful degradation）

禁止使用弹窗，这是一个体验非常糟糕的应用，在读屏软件上不一定能弹出（可访问性），可以用其他手段实现同样的效果，例如说朦态窗。

## `window.open(url,name,features)`
- url 一个可选的字符串，声明了要在新窗口中显示的文档的 url 。如果省略了这个参数，或者它的值是空字符串，那么新窗口就不会显示任何文档。
- name 一个可选的字符串，该字符串是一个由逗号分隔的特征列表，其中包括数字、字母和下划线，该字符声明了新窗口的名称。这个名称可以用作标记 <a> 和 <form> 的属性 target 的值。如果该参数指定了一个已经存在的窗口，那么 open() 方法就不再创建一个新窗口，而只是返回对指定窗口的引用。在这种情况下，features 将被忽略。
- features 一个可选的字符串，声明了新窗口要显示的标准浏览器的特征。如果省略该参数，新窗口将具有所有标准特征。在窗口特征这个表格中，我们对该字符串的格式进行了详细的说明。

```javascript
function popUp(winURL){
    window.open(winURL,"popup","width=320,height=480");
}
```

## JavaScript 伪协议

```html
<a href="JavaScript:popUp('http://padding.me')">Example</a>
```

这条语句在支持 "JavaScript:" 伪协议的浏览器中正常运行，较老的浏览器则会去尝试打开那个链接但失败，支持这种伪协议但禁用了 JavaScript 功能的浏览器则会什么也不做。  
"JavaScript:" 伪协议调用 JavaScript 代码的做法非常不好。

## 内嵌的事件处理函数

```html
<a href="#" onclick="popUp('http://padding.me');return false;">Example</a>
```

这样的做法同样操作，不能进行平稳退化。若用户禁用 JavaScript 功能，这样的链接毫无作用。

做到平稳退化，应该将"#"换为真实的 url。

```html
<a href="http://paddingme" onclick="popUp('http://padding.me');return false;">Example</a>
```


```html
<a href="http://paddingme" onclick="popUp(this.getAttribute('href'));return false;">Example</a>
```


```html
<a href="http://paddingme" onclick="popUp(this.href);return false;">Example</a>
```


## 渐进增强

CSS的出现，有了 HTML 结构与样式的分离。这也是一种渐进增强，如果禁用了 CSS，网页还是能展现基本的文档内容。


## 分离  JavaScript
```html
<a href="http://paddingme" class="popUp">Example</a>
```

```javascript
window.onload = prepareLinks;
function prepareLinks(){
    if(!document.getElementsByTagName) return false;
    var links = document.getElementsByTagName("a");
    for(var i = 0;i < links.length;i++){
        if(links[i].getAttribute("class") == "popUp"){
            links[i].onclick = function() {
                popUp(this.getAttribute("href"));
                return false;
            }
        }
    }
}
```

## 性能考虑

### 尽量少访问 DOM 和尽量减少标记

不管是什么时候，只要是查询 DOM 中的某些元素，浏览器都会搜索整个 DOM 树，从中查找可能匹配的元素。

而过多不必要的元素标记只会增加 DOM 树的规模，进而增加遍历 DOM 树以查找特定元素的时间。

### 合并和放置脚本
将多个脚本合并为一个脚本，以减少浏览器向服务器端发送求，将脚本放在 `</body>`之前，为什么呢？这样 DOM 操作可以在浏览器将网页全部加载渲染完毕之后开始进行，以减少浏览器对网页的重绘，提升网页加载速度和性能。

### 压缩脚本
将脚本压缩减小脚本体积，减缓带宽压力，更快的将脚本下载下来。

OK，今天学了这些最佳实践，明天我们根据这些最佳实践来重构我们的 JavaScript 图片库。
