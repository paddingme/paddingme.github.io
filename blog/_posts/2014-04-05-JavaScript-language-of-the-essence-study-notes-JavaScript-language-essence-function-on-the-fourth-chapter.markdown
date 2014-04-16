---
title: "JavaScript语言精粹第四章函数（上）"
layout: post
tags:
- JavaScript
---

##上一章回顾##
上一章主要介绍了对象的定义及相关属性：
      
1. 对象字面量的定义:包含在一对花括号中的零个或多个“名/值”对。
2. 检索对象中的值:通过在[]后缀加入字符串表达式的方式,用.表示法也可以（若字符串表达式是一个常数且是合法的JavaScript标识符）；检索并不存在的元素的值返回undefined；||可以用来填充**默认的值**；检索一个undefined的值会爆出类型错误；
3.  更新对象中的值。
4. 引用：对象通过引用来传递，永远不会被拷贝。
5. 原型：继承，**委托**。
6. 反射：typeof ，处理非独有的属性-hasOwnProperty方法。（反射机制指的是程序在运行时能够获取自身的信息。例如一个对象能够在运行时知道自己有哪些方法和属性。）
7. 枚举：for in；hasOwnProperty方法过滤属性，typeof 过滤函数，或创建数组以正确的顺序包含属性名再for循环。
8. 删除：可能会暴露来自原型链中的属性。
9. Global Abatement：在应用中只创建为一个全局变量；闭包。

---

##第四章  函数##
函数包含一组语句，他们是JavaScript的基础模块单元，用于代码复用、信息隐藏和组合调用。函数用于指定对象的行为。
##4.1 函数对象##
如上章述，对象是"名/值"对的集合并拥有i个连到原型对象的隐藏链接，JavaScript中函数就是对象。
**对象字面量产生的对象连接到 Object.prototype,函数对象连接到Function.prototype（该原型对象本身连接到Object.prototype）**。每个函数在创建时附有两个附加的隐藏属性：函数的上下文和实现函数行为的代码（JavaScript创建一个函数对象时会为该对象设置一个“调用”属性，当JS调用该函数时，可理解为JS调用此函数的“调用”属性）。
   
 每个函数对象在创建时还附带prototype属性，其值为一个拥有constructor属性且值为该函数的对象（注意理解），这和隐藏的Function.prototype完全不同（下章分析）。

##4.2  函数字面量##
函数对象可以通过函数字面量来创建：

    //创建一个名字add的变量，并用来把两数字想家的函数赋值给它。
    var add = function (a, b) {
        return a + b;
    };
函数有四部分构成：function保留字； 函数名，可省略（匿名函数），函数可以用它的名字来递归调用自己；（）中的参数；{}中的语句。

函数字面量可出现在任何允许表达式出现的地方。函数可以被定义在其他函数中。一个内部函数自然可以访问自己的参数和变量。同时它也能方便地访问它被嵌套在其中的函数的参数与变量。通过函数字面量创建的函数对象包含一个连到外部上下文的连接,即**闭包**。

## 4.3 调用 ##
调用一个函数将暂停当前函数的执行，传递控制权和参数给新函数。除声明时定义的形参外，每个函数接收两个附加的参数：this和arguments。在oo中，this值取决于调用模式。JavaScript有四种调用模式：方法调用、函数调用、构造器调用、apply调用模式。这些模式在如何初始化关键参数this存在差异。**调用运算符是跟在任何产生一个函数值的表达式之后的一对圆括号**。圆括号内可包含零或多个用逗号隔开的表达式，每个表达式产生一个参数值。每个参数值被赋予函数声明时定义的形参名（就是实参传进函数）。当实参（arguments）与形参（parameters）个数不匹配时不会导致运行错误。若实参多了则多的忽略，若少了则少的传给形参的实参值定义为undefined。对参数不进行类型检查。

#####方法调用模式#####
当一个函数被保存为对象的一个属性时，成为**方法**。当一个方法被调用时，this被绑定到该对象。如果一个调用表达式包含一个属性存取表达式（即一个点表达式或[subscript]下标表达式），那么它被当做一个方法来调用（很好理解）。

    var myObject = {
  	   value : 0,//注意这里是逗号，书上是分号
      increment : function (inc) {
        this.value += typeof inc === 'number' ? inc : 1;
      }
    };
    myObject.increment();
    document.writeln(myObject.value); //1
    myObject.increment(2);
    document.writeln(myObject.value); //3

方法可使用this去访问对象，故其能从对象中取值或修改该对象。this到对象的绑定发生在调用时（very late binding），这使得函数可以对this高度复用。通过this可取的所属对象的上下文的方法称为公共方法。
#####函数调用模式#####
当一个函数并非一个对象的属性时，它就当做一个函数来调用。`var sum = add(3, 4);//sum值为7`
当函数以此模式调用时，this被绑定到全局对象（语言设计上的错误）。正确设计应为当内部函数被调用时，this应该仍然绑定到外部函数的this变量。导致方法不能利用内部函数来帮助它工作。因为内部函数的this被绑定了错误的值，所以不能共享该方法对对象的访问权限。解决方法，定义一个that变量并把它赋值给this,那么内部函数就可以通过that访问this了。

    //给myObject 增加一个 double 方法
    myObject.double = function () {
	    var that = this;//解决方法
	    var helper = function () {
		   that.value = add(that.value,that.value);
	    };
	    helper();//以函数的形式调用helper
    };
    //以方法的形式调用doule
    myObject.double();
    document.writeln(myObject.getValue());//6

#####构造器调用模式#####
JavaScript基于原型继承的语言，但是不自信，所以提供了基于类的语言类似的对象构建语法。

如果在一个函数前加上 new 来调用，那么将创建一个隐藏链接到该函数的prototype成员的新对象，同时this将会绑定到这个新对象上。（new 也会改变 return 语句的行为）

    //创建一个名为Quo的构造器函数，它创造一个带有status属性的值。
    var Quo =function (string) {
	    this.status = string;
    };
    //给Quo的所有实例提供一个名为 get_status 的公共 方法。
    Quo.prototype.get_status = function () {
       	 return this.status;
     }
    //构造一个Quo实例
    var myQuo =new Quo("confused");
    document.writeln(myQuo.get_status()); //confused;

不推荐这种方式。
#####Apply调用模式#####
JavaScript是一门函数式的面向对象编程语言，所以函数可以用方法。
apply方法让我们构建一个参数数组并用其去调用函数，它也允许我们选择this的值。apply方法接收两个参数，第一个是将被绑定给this的值，第二个是一个参数数组。
    
     //构建一个包含两个数字的数组，并且将他们想加

    var array = [3, 4];
    var sum = add.apply(null, array); //sum值为7

    //构造一个包含status成员对象
    var statusObeject = {
	    status ：'A-OK'
     };

     //statusObeject并没有继承自 Quo.prototype,但我们可以在statusObeject上调用get_status方法。
     //尽管statusObeject并没有一个名为get_status的方法。

    var status = Quo.prototype.get_status.apply(statusObeject);
    //status值为OK




<hr>
今晚就到这里，明天继续。=。=


    