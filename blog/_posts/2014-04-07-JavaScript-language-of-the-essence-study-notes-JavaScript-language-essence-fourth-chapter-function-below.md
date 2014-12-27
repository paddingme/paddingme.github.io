---
title: "JavaScript语言精粹之第四章 函数（下）"
layout: post
tags:
- JavaScript
---

##上章回顾##
上节介绍了函数中的参数（arguments），返回，异常，给类型增加方法，递归，以及作用域，这里不展开回忆，可见上一节讨论（上一节其实也没展开讨论，只是给个概念化描述=。=）。

---

##第四章函数（下）##
###4.10 闭包（Closure）###
好的，重点来了。上节说了JavaScript没有块作用域，只有函数作用域，作用域的好处是内部函数可以访问定义它们的外部函数的参数和变量（除了this和arguments）。更有趣的是，内部函数会拥有比其外部函数更长的生命周期:)。
<pre><code>
var myObeject = function () {
	var value = 0;

	return {
		increment: function (inc) {
			value += typeof inc === 'number' ? inc : 1;
		},
		getValue: function () {
			return value;
		}
	}
}();
</code></pre>
这里通过调用一个函数的形式来初始化myObject,该函数将返回一个对象字面量。此函数定义了一个value变量。该变量对increment和getValue可用，但函数的作用域使得它对其他的程序来说是不可见的。这里要注意的是我们并没有把一个函数赋给myObject而是把调用这个函数后返回的结果赋值给myObject了（注意最后一行的（））。该函数返回一个包含两个方法的对象，并且这些方法继续享有访问value变量的特权。
<pre><code>
var quo = function (status) {
	return {
		get_status:function () {
			return status;
		}
	};
};
var myQuo = quo("amazed"); //函数调用
document.writeln(myQuo.get_status());
</code></pre>

<pre><code>
//对比下之前的myQuo
var Quo = function (string) {
	this.status = string; 
};
Quo.prototype.get_status = function () {
	return this.status;
};
var myQuo = new Quo("confused"); //构造器调用
document.writeln(myQuo.get_status());
</pre></code>
前面的quo函数被设计成无需在前面加上new来使用（所以它的名字没有首字母大写）。当我们调用quo时，它返回包含get_status方法的一个新都想。该对象的一个引用保存在myQuo中，即使quo已经返回了，但get_value方法仍然享有访问quo对象的status属性的特权。get_status方法并不是访问该参数的一个拷贝，它访问的就是该参数本身。因为该函数可以访问它**被创建时的上下文环境**。this is closure.
<pre><code>
var fade = function (node) {
	var level = 1;
	var step = function () {
		var hex = level.toString(16);
		node.style.backgroundColor = '#FFFF' + hex + hex;
		if (level < 15) {
			level += 1;
			setTimeout(step,100);
 		}
	};
	setTimeout(step,100);
};
fade(document.body);
</code></pre>
分析下这段代码：我们调用fade,把document.body作为参数传递给它，fade函数设置level为1，它定义了一个step函数，接着它调用steTimeout,并传递step函数和一个时间（100毫秒）给它，然后它返回，fade函数结束。

在100毫秒之后step函数被调用。它把fade函数的level变量初始化为16进制。接着，它修改fade函数得到的节点的背景颜色。然后查看level的大小，如果level尚未变为白色（F）那么他增大fade函数的level变量和用setTimeout预定让它自己再次运行。step函数很快被再次调用。但这次levle变量值为2，fade函数在之前已经返回了，但只要fade的内部函数需要，它的变量就会持续保留。

再看一个糟糕的例子。
<pre><code>
var add_the_handelers = function (nodes) {
	var i;
	for (var i = 0; i < nodes.length; i+=1) {
		nodes[i].onclick = function (e) {
			alert(e);
		}
	}
};</code></pre>
add_the_handlers函数目的是给每个事件处理器一个唯一值（i）。它未能达到目的是因为时间处理器函数绑定了变量i,而不是函数在构造时的变量的i。（不是很懂，函数也未达到显示节点数目的效果~~=||=）
<pre><code>
//更好的例子
var add_the_handelers = function (nodes) {
	var i;
	for (var i = 0; i < nodes.length; i+=1) {
		nodes[i].onclick = function (i) {
			return function (e) {
			alert(e);
			};
		}(i);
	}
};</code></pre>
现在我们定义了一个函数并立即传递i进去执行，而不是把一个函数赋值onclick。那个函数将返回一个事件处理器函数，这个事件处理器函数绑定的是传递进去的i的值。而不是定义在add_the_handlers函数里的i的值。那个被返回的函数被复制给onclick。

闭包是JS一个非常重要的特性，前端乱炖里也有很多非常好的文章，大家可以去看看。

###4.11  回调###
函数可以让不连续事件的处理变得更容易。例如：假定有这么一个序列，由用户交互开始向服务器发送请求，最终显示服务器的响应，最纯朴的方法可能会是这样写的。
    
    request = prepare_the_request();
    response = send_request_synchronously(request);
    display(response);

同步请求易会导致客户端进入假死状态，响应性降低。来尝试异步请求。提供一个当服务器的响应到达时将被调用的回调函数。异步的函数立即返回，这样客户端不会被阻塞。

    request = prepare_the_request();
    response = send_request_synchronously(request,function(response){
	    display(response);
    });
我们传递了一个函数作为参数给send_request_synchronously函数，它将在收到响应时被调用。
####4.12   模块###
模块是一个提供接口但隐藏状态与实现的函数或者对象。我们可以使用函数和闭包来构造模块。通过使用函数构造模块，我们就可以完全摒弃全局变量的使用。

例如，我们要给String增加一个deentityify方法，其作用是寻找字符串中的HTML字符实体来替换为他们对应的字符。在一个对象中保存字符实体的名字和他们对应的字符是有意义的。我们在哪儿保存该对象呢。全局变量，oh,no,donnot give shit.我们可以把它定义在该函数本身，但是有运行时的小号，我们没执行一次函数该字面量就会被求值一次。理想的额方式是将其放入一个闭包中。而且也许还能提供一个增加更多字符实体的扩展方法。

<pre><code>String.method('deentityify',function(){
	//字符实体表，它映射字符实体的名字到对应的字符。
	var entity = {
		quot : '"',
		lt : '<',
		gt : '>',
	};
	//返回deetityify方法
	return function () {
		//这才是deetityify方法，它调用字符串的replace方法
		//查找‘&’开头和‘;’结束的字符串。如果这些字符可以在字符实体表中找到
		//那么久将该字符实体替换为映射表中的额值。

		return this.replace(/&([^&;]+);/g,
			function(a,b){
				var r = entity[b];
				return typeof r === 'string' ? r : a;
			});
	};
}());
//注意我们用（）运算法立即调用我们刚刚创建的函数。

document.writeln('<"'.deentityify());
//no method 'method'=~~=</code></pre>
模块模式利用了函数作用域和闭包来创建绑定对象与私有成员的关联。在该例中只有deentityify方法有权访问字符实体表这个数据对象。

**模块模式的一般形式是：一个定义了私有变量和函数的函数；利用闭包创建可以访问私有变量和函数的特权函数；最后返回这个特权函数；或者把他们保存到一个可访问到的地方**

模块模式也可以用来产生安全的对象。假定我们想要构造一个用来产生序列号的对象。
<pre><code>
//返回一个用来产生唯一字符串的对象
//唯一字符串有两部分组成：前缀+序列号
//该对象包含一个设置前缀的方法，一个设置序列号的方法
//和一个产生唯一字符串的gensym方法
var serial_maker = function () {
	var prefix = '';
	var seq = 0;
	return {
		set_prefix: function (p) {
			prefix = String(p);
		},
		set_seq: function (s) {
			seq = s;
		},
		gensym: function () {
			var result = prefix + seq;
			seq += 1;
			return result;
		}
	};
};

var seqer =serial_maker();
seqer.set_prefix('Q');
seqer.set_seq(1000);
var unique = seqer.gensym();
</code></pre>

###4.14   级联###
有一些方法没有返回值，例如一些设置或修改对象的某个状态却不返回任何值的方法就是典型例子。如果我们让这些方法返回this而不是undefined,就可以启用级联。在一个级联中，我们可以在单独一条的语句中一次调用同一个对象的很多方法。一个启用级联的Ajax类库允许我们以这样的形式去编码。
<pre><code>
getElement('myBoxDiv').
	move(350,150).
	width(100).
	height(100).
	color('red').
	appendText("Please donot give a shit!");
	on('mousedown',function(m){
		this.startDrag(m,this.getNinth(m));
	}).
	on('mousemove','drag').
	later(2000,function(){
		this.
			color('yellow').
			setHTML('What hath God wraught?').
			slide(400,40,200,200)
		}).
	tip('this box is resizeable');
</code></pre>
级联可以产生具备很强表现力的接口。它也能帮助控制那种构造试图一次做太多事情的接口的趋势。

###4.14   套用###
函数也是值，我们可以去操作函数值。**套用**允许我们将函数与传递给它的参数相结合去产生出一个新的函数。

    var add1 = add.curry(1);
     document.writeln(add1(6));//7
//curry见书P43

###4.15 记忆###
函数可以用对象去记住先前操作的结果->记忆。

    var fibonacci = function (n) {
   	return n < 2 ? n:fibonacci(n-1)+fibonacci(n-2);
    }

    for (var i = 0; i<=10; i++){ 
	document.writeln('//'+i+':'+fibonacci(i));
     }
     //fibonacci函数被调用了453次。做了大量的重复工作
     //我们在一个名为memo的数组里保存我们的存储结果，存储结果隐藏在闭包中
     //当函数被调用时，这个函数首先看是否已经知道存储结果，若知道立即返回该存储结果。
<pre><code>
var fibonacci =	function () {
	var memo = [0, 1];
	var fib = function (n) {
		var result = memo[n];
		if (typeof result !== 'number') {
			result =fib(n-1)+fib(n-2);
			memo[n] =result;
		}
		return result;
	};
	return fib;
}();

for (var i = 0; i<=10; i++){
	document.writeln('//'+i+':'+fibonacci(i));
}
//该函数得到同样结果但却调用了29此。
</code></pre>
我们可以把这种形式一般化，编写一个函数来帮助我们构造带记忆功能的函数。
memoizer函数将取得一个初级的memo数组和fundamental函数，它返回一个管理meno存储和在需要时调用fundamental函数的shell函数。我们传递这个shell函数和该函数的参数给fundamental函数。
<pre><code>
var memoizer =  function (memo,fundamental) {
	var shell = function (n) {
		var result = memo[n];
		if(typeof result !== 'number') {
			result = fundamental(shell,n);
			meno[n]=result;
		}
		return result;
	};
	return shell;
};
//x现在我们可以用memoizer来定义fibonancci函数
var fibonacci = memoizer([0,1],function(shell,n){
return shell(n-1)+shell(n-2);});
</code></pre>
==================本章 完==========================

*――“你为什么要学JavaScript？”――“为了酷炫~！”*

