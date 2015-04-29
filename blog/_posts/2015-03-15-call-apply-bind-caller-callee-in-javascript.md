---
title: JavaScript 中 call、apply、bind、caller、callee 详解
layout: post
tags:
 - JavaScript
---

## call() 方法 和 apply() 方法

我们可以将 call() 和 apply() 看作是某个对象的方法，通过调用方法的形式来间接调用函数。
call() 和 apply() 的第一个实参是要调用函数的母对象，它是调用上下文，在函数体内通过 this 来获得对它的引用。在 ECMAScript 5 严格模式中， call() 和 apply() 的第一个实参都会变为 this 的值，哪怕
传入的实参是原始值甚至是 null 或 undefined 。在 ECMAScript 3 和非严格模式中，传入的 null 和 underfined 都会被全局对象代替。而其他原始值则会被相应的包装对象（wrapper object）所代替。


对于 call() 来说，第一个调用上下文实参之后的所有实参就是要传入待调用函数的值。
apply() 的实参都放入一个数组中。注意，传入 apply() 的参数数组可以是类数组对象也可以是真实数组。实际上，可以将当前函数的 arguments 数组直接传入（另一个函数的）apply() 来调用另一个函数。

```js
    function trace(o,m) {
        var original = o[m];
        o[m] = function() {
            console.log(new Date(),"Entering:",m);
            var result = original.apply(this,arguments);
            console.log(new Date(),"Exitng:",m);
            return result;
        };
    }
```

## bind() 方法

bind() 为 ECMAScript 5 新增方法。此方法主要作用为将函数绑定至某个对象。当在函数 f() 上调用 bind() 方法并传入一个对象 o 作为参数，此方法将返回一个新的函数。（以函数调用的方式）调用新的函数将会把原始的函数 f() 当作 o 的方法来调用。传入新函数的任何实参都将传入原始函数。

```js
    function f(y) { return  this.x+y;} //这个是待绑定的函数
    var o = { x：1}; //将要绑定的对象
    var g = f.bind(o); //通过调用 g(x) 来调用 o.f(x)
    g(2);
```


```js
// 返回一个函数，通过调用它来调用 o 中的方法 f(),传递它所有的实参
    function bind(f,o) {
        if(b.bind) return f.bind(o); // 如果 bind() 方法参在
        else return function(){
            return f.apply(o,arguments);
        };
    }
```

ECMAScript 5 的 bind() 不仅仅是将函数绑定一个对象，而且除了第一个实参之外，传入 bind() 的实参也会绑定至 this，即 柯里化（currying）。

```js
var sum = function(x,y) {return x+y;}
var succ = sum.bind(null,1);
succ(2);//3

function f(y,z) {return this.x+y+z};

var g = f.bind({x:1},2);
g(3);//6

```

```js
// ECMAScirpt 3 模拟 bind()

if(!Function.prototype.bind) {
    Function.prototype.bind = function(o /*,args*/) {
        var self= this, boundArgs = arguments;
        return function() {
            var args = [], i;
            for(i=1;i<boundArgs.length;i++) args.push(boundArgs[i]);
            for(i=0;i<arguments.length;i++) args.push(arguments[i]);
            return self.apply(o,args);
        }
    }
}
```

ECMAScirpt 5 中的 bind() 方法有一些特性是上述无法模拟的。

- 真正的 bind() 方法返回一个函数对象，这个函数对象的 length 属性是绑定函数的形参个数减去实参的个数。
- bind() 可顺带用作构造函数。将忽略传入 bind() 中的 this，原始函数就会以构造函数的形式调用，其实参也将绑定。**在运行时将 bind() 所返回的函数用作构造函数时，所传入实参会原封不动的传入原始函数。**

  由于 bind() 方法所返回的函数并不包含 prototype 属性（普通函数的 prototype 属性是不能被删除的），并且将这些绑定的函数用作构造函数时所创建的对象从原始的未绑定的构造函数中继承 prototype。
