---
title: 【JavaScript】【学习心得】学习JavaScript 第十一天
layout: post
tags:
- Mu-Help-Plan
---


 文章取自我的 Github  repos: [Learning-JavaScript](https://github.com/paddingme/Learning-JavaScript)， 作者：[@paddingme](http://padding.me/about.html) 。 
 &nbsp;原文链接：[https://github.com/paddingme/Learning-JavaScript/issues/15](https://github.com/paddingme/Learning-JavaScript/issues/15)

## Ajax

### Ajax 是什么
Ajax 全称为 Asynchronous JavaScript and XML（异步 JavaScript 和 XML），是一种创建交互式网页应用的网页开发技术。简单点说就是以往Web 应用涉及大量的页面刷新：用户点击某个链接，请求发送回服务器，然后服务器根据用户的操作再返回新页面。尽管是网页页面一小部分的变化，也会刷新页面和重新加载整个页面，诸如页面logo,导航，footer 区域等。而使用 Ajax 就可以做到只更新页面中的一小部分，而不用刷新整个页面。

### Ajax 原理
Ajax 的原理简单来说通过 XmlHttpRequest 对象来向服务器发**异步请求**，从服务器获得数据，然后用 JavaScript来操作 DOM 而更新页面。这其中最关键的一步就是从服务器获得请求数据。
以往我们浏览网页的原理是由 Client 向 Server 提交页面申请，再由 Server 将申请通过 HTTP 传回给 Client 生成浏览页面：

![Ajax 原理图](http://yianbin.qiniudn.com/fe-ajax-a.png)

使用 Ajax 后的工作原理如下图，可见通过 Ajax 在用户交互方面有了很大改进，用户可以不用为提交了 Form 而长时间等待服务器应答，而且通过 Ajax 也可以开发出华丽的 Web 交互页面。

![Ajax 原理图](http://yianbin.qiniudn.com/fe-ajax-b.png)

Ajax 的适用范围：它依赖 JavaScript，有可能有浏览器不支持，另搜索引擎的蜘蛛程序也不会抓取相关内容。


### XMLHttpRequest
Ajax 技术的核心是 XMLHttpRequest 对象，它充当着浏览器中的脚本（客户端）与服务器之间的中间人的角色。

由于XXX 的 IE 浏览器 实现的 XMLHttp 方式不一样，我们有必要再一次来兼容下。

```js
function getHTTPObject() {
  if (typeof XMLHttpRequest == "undefined") {
    XMLHttpRequest = function() {
      try { return new ActiveXObject("Msxml2.XMLHTTP.6.0");}
        catch (e) {}
      try { return new ActiveXObject("Msxml2.XMLHTTP.3.0");}
        catch (e) {}
      try { return new ActiveXObject("Msxml2.XMLHTTP");}
        catch (e) {}
      return false;
    }
  }
  return new XMLHttpRequest();
}
```

为了模拟 Ajax 服务器请求，我们首先建立一个 HTML 页面
```html
<!DOCTYPE html>
<html lang="zh-cmn-Hans">
<head>
    <meta charset="UTF-8">
    <title>Ajax DEMO</title>
</head>
<body>
    <div id="new"></div>
<script src="addLoadEvent.js"></script>
<script src="1-7-2.js"></script>
</body>
</html>

```
命名为 1-7-2.html,在同级文件夹下建立一个1-7-2.txt里随便输入一些内容。

XMLHttpRequest 对象常用方法为 open 方法，它用来指定服务器上将要访问的文件，指定请求类型：GET、POST 或 SEND。这个方法第三个参数用于指定请求是否以异步方式发送和处理。

```js
function getHTTPObject() {
  if (typeof XMLHttpRequest == "undefined") {
    XMLHttpRequest = function() {
      try { return new ActiveXObject("Msxml2.XMLHTTP.6.0");}
        catch (e) {}
      try { return new ActiveXObject("Msxml2.XMLHTTP.3.0");}
        catch (e) {}
      try { return new ActiveXObject("Msxml2.XMLHTTP");}
        catch (e) {}
      return false;
    }
  }
  return new XMLHttpRequest();
}

function getNewContent() {
  var request = new getHTTPObject();
  if (request) {
    request.open("GET","1-7-2.text",true);
    request.onreadystatechange = function() {
      if (request.readyState == 4) {
        var para = document.createElement("p");
        var txt = document.createTextNode(request.responseText);
        para.appendChild(txt);
        document.getElementById("new").appendChild(para);
      }
    };
    request.send(null);
  } else {
    alert ("对不起，您的浏览器不支持 XMLHttpRequest!");
  }
}

addLoadEvent(getNewContent);
```

浏览器加载 HTML 页面 没有反应，为什么呢。把它放在tomcat webapp 目录下 启动你的tomcat 然后再试试。Ajax 需要向服务器发起请求，而不是单纯的像我们之前用浏览器打开一个静态的 HTML 页面
如图所示：是不是很帅气的出现了。

![tomcat webapp 文件目录](http://paddingme.qiniudn.com/ajax.PNG)
![页面 demo](http://paddingme.qiniudn.com/demo.PNG)

其中上述的 onreadystatechange 是一个事件处理函数。它会在服务器给 XMLHttpRequest 对象送回响应时的时候被触发执行。
```js
request.onreadystatechange = function() {
    //处理响应
}
```

在你 onreadystatechange 指定函数引用是，不要在函数名后加括号（表示立即调用），我们的目的是指向把函数自身的引用（而不是函数结果）赋值给 onreadystatechange 属性。
```
request.onreadystatechange = dosomething;
```

在指定了请求的目标之后，也明确了如何处理响应之后，用 send 方法发送请求。
```js
request.send(null);
```
如果 浏览器不支持 XMLHttpRequest 对象 还需要做处理。

服务器在向 XMLHttpRequest 对象返回响应时，该对象有许多属性可用，浏览器会在不同阶段更新 readystate 属性的值：

- 0 表示未初始化
- 1 表示正在加载
- 2 表示加载完毕
- 3 表示正在交互
- 4 表示完成(此时，可以访问服务器发回来的数据了)

访问服务器发回来的数据有两个属性：

- responseText 属性：用于保存文本字符串形式的数据；
- responseXML 属性：用于保存 Content-Type 头部中指定为 “text/xml” 的数据，其实为一个 DocumentFragment 对象, 可用各种 DOM 方法来处理此对象。

在使用 Ajax 一定要注意 **同源策略**。 使用 XMLHttpRequest 对象发送的请求只能访问与其所在的 HTML 处于同一个域中的数据，不能向其他域发送请求。

注意 Ajax 是异步请求，异步请求很容易忽略其异步性——脚本的执行不会等 send 的响应，而是会继续执行。

### 渐进增强的使用 Ajax
**Ajax 应用主要依赖于服务器端处理，而非客户端处理**，实际上是服务器端的脚本完成了绝大部分工作。XMLHttpRequest 对象作为浏览器与服务器之间的“中间人”，它只是负责传递和响应。如果把它拿掉，浏览器与服务器之间的请求和响应应该继续完成，只不过需要的时间可能会长点。
构建 Ajax 网站的最好方法是先构建一个常规的网站，然后渐进增强的使用 Ajax（Hijax）。


p.s.:其中部分内容引自：[AJAX 的工作原理](https://github.com/infp/Front-end-Interview/blob/master/source/javascript.md#21%E8%AF%B7%E5%B0%BD%E5%8F%AF%E8%83%BD%E8%AF%A6%E5%B0%BD%E7%9A%84%E8%A7%A3%E9%87%8A-ajax-%E7%9A%84%E5%B7%A5%E4%BD%9C%E5%8E%9F%E7%90%86)