---
title: "JavaScript语言精粹之第四章 函数（中）"
layout: post
tags:
- JavaScript
---


##上半章回顾##
上半章介绍了函数对象，函数的字面量定义，函数的四种调用模式。重点回顾下这四种调用模式。

+ 方法调用模式：当函数被保存为一个对象的属性时，此时调用即为方法调用（函数为对象属性，调用为方法调用）。这时this被绑定到该对象。如果一个调用表达式包含一个属性存取式，那么它被当做方法来调用（属性被调用，当做方法调用）；
+ 函数调用模式：当函数不是对象的属性时，为函数调用，此时this被绑定到全局对象，而非绑定到这个函数的外部函数的this变量。
+ 构造器调用（new）：this绑定到这个新new的对象。
+ Apply调用：函数是对象，所以也有方法。apply方法让我们构件一个参数数组并用其调用函数，也允许我们选择this的值，apply方法接受2个参数第一个是赋给this的值，第二个是参数数组。

---

##第四章 函数（中）##
###4.4  参数###
当一个函数调用时，会得到一个arguments数组，通过arguments函数可访问它被调用时传递给它的参数列表，包括哪些未被分配给函数声明时定义的形参的多余参数。

    var sum = function () {
	    var i, sum=0;
	    for (var i = 0; i < arguments.length; i++) {
		     sum += arguments[i];
	    }
	    return sum;
    };
    document.writeln(sum(4,8,12,13));//37
注意arguments只是一个array-like对象，其拥有一个length属性，但缺少所有的数组方法。
###4.5  返回###
当一个函数被调用时，return语句被执行时函数立即返回而不再执行余下的部分。一个函数总是返回一个值，如果没指定则为undefined。如果函数以前加上new出来的，且返回值不是一个对象，则返回
this(该新对象)。
###4.6 异常###
异常是干扰程序的正常流程的非正常（但并未完全出乎意料的）事故。当查出这样的事故时，程序抛出异常。

    var add = function (a,b){
	    if (typeof a !== 'number'||typeof b !== 'number'){
		    throw {
			    name: 'TypeError',
			    message: 'add needs numbers'
		     };
	     }
	     return a + b;
      }
throw语句中断函数执行，应该抛出一个exception对象，该对象包含可识别异常类型的name属性和一个描述性的message属性。也可添加其他属性。
该exception对象将被传递给一个try语句的catch语句。

    var add = function (a,b) {
	    if (typeof a !== 'number'||typeof b !== 'number'){
		   throw {
			   name: 'TypeError',
			   message: 'add needs numbers'
		   };
	   }
	   return a + b;
     }
    var try_it = function () {
	    try {
		    add("seven");
	   } catch (e) {
		   document.writeln(e.name + ":" + e.message);
	   }
    }
    try_it();
###4.7  给类型增加方法###
JavaScript允许给语言的基本类型增加方法。如第三章，我们通过Object.prototype添加方法是的该方法对所有对象可用。这样的方法对函数、数组、字符串、数字和正则表达式和布尔值同样适用。

例如我们可通过给Fundation.prototype增加方法使得所有函数都有这个方法。

    Function.prototype.method = funtion (name,func) {
	    this.prototype[name] = func;
	    return this;
     }
通过给Fundation.prototype增加一个method方法，我们就不必键入prototype这个属性名了。

我们还可以用过给Number.prototype添加一个integer方法来重写JavaScript中的取整方法。它会根据数字的正负来判断使用Math.floor（向下取整）或者Math.ceiling（向上取整）。

    Number.method('integer',function(){
	    return Math[this<0?'ceiling':'floor'](this);
    });
    document.writeln((-10/3).integer());//-3
     //报错 Number里无method方法 待查

     //移除字符串末端空白的方法
     String.method('trim',function() {
	     return this.replace(/^\s+|\s+$/g,'');
      });
      document.writeln('"' + "     neat   ".trim() + '"');

通过给基本类型增加方法，可大大提高语言表现力。基于JS原型继承的动态本质，新的方法立刻被赋予到所有的值（对象实例）上，哪怕值（对象实例）是在创建之前就创建好了。

基本类型的原型是公共的机构，在类库混用时应小心。一个保险的做法是指在确定没有该方法时才添加他。

    //有条件的增加一个方法
    Function.prototype.method = function (name,fun) {
    if (!this.prototype[name]) {
         this.prototupe[name] = func;
         }
     };
另外要注意for in语句在原型上表现很糟糕可参考第三章的解决办法。

###4. 8 递归###
递归函数是一种会直接或间接的调用自身的函数。

//Hanoi问题

递归函数可以非常高效的操作树形结构，比如浏览器的DOM。每次递归调用时处理给定树的一小段。
<pre><code>
//walk_the_DOM函数，它从某个给定结点开始，按HTML源码中顺序访问该树的每个节点。
//它会调用一个函数，并依此传递每个节点给它，walk_the_DOM调用自身去处理每一个子节点。
var walk_the_DOM = function walk(node,func){
	func(node);
	node=node.firstChild;
	while (node) {
		walk (node, func){
			node=node.nextSibling;
		}
	}
};


//getElementByAttribute取得属性名字符串和一个可选的匹配值
//他调用walk_the_DOM 传递一个用来查找节点属性名的函数
//匹配的节点会累积到一个结果数组。
var getElementByAttribute = function (att, value) {
	var results = [];
	walk_the_DOM(document.body, function (node) {
		var actual = node.nodeType === 1&& node.getAttribute(att);
		if(typeof actual === 'string' && (actual === value || typeof value !== 'string')) {
			results.push(node);
		}
	});
	return results;
}
//太高深，蒙逼的节奏，后面回来再看。
</pre></code>
尾递归优化，即如果一个函数返回自身递归调用的结果，那么调用的过程会被替换为一个循环。可惜JS不提供，深度递归的函数可能会因为返回堆栈溢出而运行失败。

    var factorial = function factorial (i, a) {
	   a = a || 1;
	    if (i <2) {
		    return a;
	    }
	    return factorial(i-1, a*i);
    }
     document.writeln(factorial(4));//24

###4.9  作用域###
**JS并不是支持块作用域！** JS具有函数作用域！因为缺乏快作用域，最好在函数体顶部声明所有需要用到的变量。（这里涉及到函数提升和变量提升。）

<hr>
每天更新前回顾下昨天的文章，发现又get了很多新技能，而且对于前面的一些坑或者不懂的地方突然就明白了，这难道是传说中的 `温故而知新，可以为**湿**！`

近期考试所以更的慢.

too tired to learn,未来无限可能。
