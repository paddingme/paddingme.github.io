---
title: javascript中闭包的深入理解
layout: post
tags:
- javascript
---


闭包是JavaScript最重要的概念之一，本文结合网络中几篇介绍闭包的文章和《JavaScript权威指南》、《JavaScript语言精粹》、《JavaScript禅意花园》等书做详细总结。

##什么是闭包##
 * 闭包是函数的局部变量集合，只是这些局部变量在函数返回后会继续存在。
 * 闭包是函数的“堆栈”在函数返回后并不释放，可以理解为这些函数堆栈并不在栈上分配而是在堆上分配。
 * 当在一个函数内定义另外一个函数就会产生闭包。
 * （闭包，闭包是指在 JavaScript 中，**内部函数总是可以访问其所在的外部函数中声明的参数和变量，即使在其外部bb函数被返回（寿命终结）了之后。**）

如上所述 闭包是**函数的“局部变量”集合**，只是这个局部变量时可以在函数返回后备访问。
```javascript
function greeting(name){
    var text='Hello'+name; //local variable
    return function(){alert(text);};//每次调用时，产生闭包，并返回内部函数对象给调用者。
}
var sayHello=greeting("Closure");
sayHello();//通过闭包访问到了局部变量text
```
执行结果为：Hello Closure,因为sayHello()函数在greeting函数执行完毕后，仍然可以访问到定义在其之内的局部变量text。

[看下函数和对象之间的逻辑关系！！]（http:www.woshishabi.com）
 






参考的文章如下：
1. [闭包]（https://developer.mozilla.org/zh-CN/docs/JavaScript/Guide/Closures）(感觉这个写的通俗易懂，没有什么花花肠子)
2. http://coolshell.cn/articles/6731.html
3. http://www.ruanyifeng.com/blog/2009/08/learning_javascript_closures.html
4. http://www.zhihu.com/question/19554716
