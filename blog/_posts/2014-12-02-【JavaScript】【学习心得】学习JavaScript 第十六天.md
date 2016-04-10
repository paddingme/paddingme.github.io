---
title: 【JavaScript】【学习心得】学习JavaScript 第十六天
layout: post
tags:
- Mu-Help-Plan
---


 文章取自我的 Github  repos: [Learning-JavaScript](https://github.com/paddingme/Learning-JavaScript)， 作者：[@paddingme](http://padding.me/about.html) 。
  原文链接：[https://github.com/paddingme/Learning-JavaScript/issues/20](https://github.com/paddingme/Learning-JavaScript/issues/20)

## JavaScript 简介
JavaScript 的兴起，主要目的是处理以前由服务器端语言负责的一些输入验证操作，如今，JavaScript 已不再局限于简单的数据验证，而是具备了与浏览器窗口及其内容等几乎所有方面交互的能力。今天JavaScript 已经成为一门功能全面的编程语言，能够处理复杂的计算和交互，拥有了 **闭包**、**匿名函数**、甚至 **元编程**等特性。

一个完整的JavaScript 实现通常有三部分组成：

- 核心(ECMAScript)，由 ECMA-262 定义，提供核心语言功能；
- 文档浏览器模型(DOM)，提供访问和操作网页内容的方法和接口；
- 浏览器对象模型(BOM)，提供与浏览器交互的方法和接口。
我们常见的 Web 浏览器只是 ECMAScript 实现可能的 *宿主环境*之一。而Web 浏览器对DOM的支持，对于IE来说，IE 5.5 支持 DOM 1 级。在随后的 IE6、IE7中没有引入新的 DOM 功能，直到 IE8 才对以前 DOM 实现中的 bug 进行修复。


## 在HTML 中使用JavaScript
HTML4.01为`<script>`定义了6个属性(废弃的这里不再给出)：

- async: 可选，表示应该立即下载脚本，但不应妨碍页面中的其他操作；
- defer: 可选，表示脚本可以延迟到文档完全被解析和显示之后再执行，只对外部脚本有效；
- src: 可选，外部脚本文件；
-  type: 可选，表示编写代码使用的脚本语言的内容类型（MIME），通常为 text/javascript ,默认也为 text/javascript。

使用`<javascript>`元素有两种方式:

* 直接在页面嵌入 JavaScript 代码；
* 包含外部 JavaScript 文件。

包含在`<script>`元素内部的JavaScript 代码将从上至下依次解释。在解释器 `<script>` 元素内部的所有的代码求值完毕以前，页面中的其余内容将不会被浏览器加载或显示。

在使用`<script>`嵌入 Javascript 代码时，记住不要在代码的任何地方出现 `"</script>"`字符串，浏览器会认为这是结束的`</script>`标签。

无论如何包含代码，只要不存在`defer`或者`async`属性，浏览器都会按照`<script>`元素所在页面中出现的先后顺序对它们依次进行解析。

`defer`属性只适用于外部脚本文件，现实中，延迟脚本并不一定会按照顺序进行(第一个延迟脚本先于第二个延迟脚本执行)，也不一定会在 DOMContentLoaded 事件触发前执行，因为最好只包含一个延迟脚本。

异步脚本同样只适用于外部脚本文件，并告诉浏览器立即下载文件，异步脚本并不保证按照它们的先后顺序执行。 异步脚本一定会在页面的load 事件前执行，但可能会在 DOMContentLoaded 事件触发之前或之后执行。

```html
    <!DOCTYPE html>
    <html lang="zh-CN">
    <head>
        <meta charset="UTF-8">
        <title>Document</title>
        <script type="text/javascript" defer="defer" src="example.js"></script>
        <script type="text/javascript" async src="example.js"></script>
    </head>
    <body>
        <noscript>
         <p>本页面需要浏览器支持 JavaScript!</p>
        </noscript>
    </body>
    </html>
```
适用外部脚本文件通常会有如下优点：

- 易于维护
- 可缓存
- 适应未来(不需要hack)


## 数据类型
### 标识符

所谓标识符，就是指变量、函数、属性的名字，或者函数的参数。标识符可以是按照下列格式规则组合起来的一个或多个字符：

- 第一个字符必须是一个字母、下划线、或者一个美元符号；
- 其他字符可以是字母、下划线、美元符号或者数字。

### 变量

ECMAScript 的变量是松散的，所谓松散类型就是可以用来保存任何类型的数据，亦即每个变量仅仅是一个用于保存值的占位符而已。

### 数据类型

ECMAScript 中有五种简单数据类型：**Undefined**、 **Null**、 **Number**、 **String**、 **Boolean**。
还有一种复杂数据类型：**Obejct**。

#### typeof
`typeof` 用来检测给定变量的数据类型,对一个值使用`typeof`操作符可能返回如下字符串：

- "undefined"——值未定义；
- "boolean"——布尔值；
- "string"——字符串；
-  "number"——数字；
-  "object"——对象或者null(空指针)；
-  "function"——函数。

```js
console.log(typeof null);//"object"
```

特殊值`null`被认为是一个空的对象引用。Safari 以及之前版本、Chrome 7以及之前版本对正则表达式跳动 `typeof` 返回 "function"，而其他浏览器返回 "object"。

#### Undefined

对于尚未声明过的变量，只能执行一项操作，即是对其使用`typeof`操作符检验器数据类型。

对未初始化过的变量执行`typeof` 返回"undefied"；而对未声明过的变量执行也返回"undefined".


#### Null

如果定义的变量准备在将来用于保存对象，那么最好将该变量初始化为`null`。

#### Boolean

|数据类型|转换为true 的值|转换为false 的值|
|--------|---------------|----------------|
|Boolean |true           |false           |
|String  | 任何非空字符串|""(空字符串)    |
|Number  | 任何非零数字包含无穷大|0和NaN|
|Object  | 任何对象      | null           |
|Undefined|              | undefined      |


#### Number
1. 浮点数

    所谓浮点数，是指该数值中必须包含一个小数点，且小数点后面必须至少有一位数字。如果浮点数本身就是一个整数（如1.0）,那么该值将被转换为整数。

    浮点数值的最高精度是17位小数，但在进行算术计算时其精确度远远不如整数，例如0.1+0.2结果不是0.3而是0.30000000000000004，如果这两个数是0.15+0.15或者0.25+0.05则没有问题。

2. 数值范围

    数值范围为Infinity 和 -Infinity，可使用 isFinite() 函数检测。

3. NaN

    任何值除以0都会返回 NaN(not a number) ，任何涉及NaN 的操作都返回 NaN，其次 NaN 与任何值都不相等， 包括 NaN 本身。 isNaN()函数进行检测，在接收一个数值之后会尝试进行转换为数值，某些不是数值的值会被转换为数值，如"10"或布尔值，任何不能被转换为数值的值则返回true。

    isNaN 也适用于对象，在基于对象调用 isNaN() 函数时， 会首先调用对象的 valueOf() 方法， 然后确定该方法返回的值是否可以转换为数值，如果不能，则基于这个返回值再调用 toString() 方法，再测试返回值。

4. 数值转换

    有三个函数可以把非数值转换为数值： Number()、 parsetInt()、 parseFloat()。
    Number() 可以用于任何数据类型，而另外两个专门用于字符串转换成数值。

    Number() 转换规则：
    - 如是 Boolean， 转换为0或1；
    - 若是数字值，转换为数字值；
    - 若是null, 返回0；
    - 若是undefined, 返回 NaN;
    - 若是字符串，则：
        - 若字符串只包含数字（包含带正号或负号的情况），则将其转换为十进制数值。
        - 若字符串包含有效的浮点数，转换为相应的浮点数。
        - 若包含有效的十六进制数，转换为相同大小的十进制数。
        - 若为空字符串，转换为0。
        - 若字符串包含上述， 则格式之外的字符，转换为 NaN 。
    - 若是对象，则调用 valueOf()方法，然后按照前面的方法返回值，若转换结果为 NaN,则调用对象的 toString() 方法，然后在依照前面的规则返回相应的字符串值。

    parseInt() 函数在转换字符串时，会忽略字符串前面的空格， 直至找到第一个非空字符。如果第一个字符不是数字字符或者符号，则返回NaN,亦即`parseInt("")`返回NaN,若第一个字符是数字则继续解析第二个，知道解析玩所有后续字符或者遇到非数字字符。parseInt()后还可以跟一个参数，转换时使用的基数（2,8,10,16）。

    parseFloat() 始终忽略前导的零。十六进制的始终会被转换为0,只解析十进制。

#### String

任何字符串的长度都可以通过访问它的length 属性取得。

字符串一段创建，他们的值就不可以改变。要改变某个变量保存的字符串，首先要销毁原来的字符串，然后再用另一个包含新值的字符串填充该变量。

转换为字符串：每个值都有一个 toString()方法，但null 和undefined 没有。也可以传参数改变原来的值；还可以使用String()方法，其转换规则为：

- 若值有toString()方法，则调用该方法返回值；
- 若值为null,返回"null";
- 若值为undefined,返回"undefined"。