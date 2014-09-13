---
title: JavaScirpt 高级程序设计学习笔记(3)
layout: post
tags:
- javascript
---

### object

ECMAScript 中的对象其实就是一组数据和功能的集合。对象可以通过`new`操作符后跟要创建的对象类型的名称来创建。而创建Obeject类型的实例并为其添加属性和（或）方法，就可以创建自定义对象。

和Java中的java.lang.object对象一样，Object 类型是所有它的实例的基础。亦即 Object类型所具有的任何属性和方法也同样存在于更具体的对象中。

Object的每个实例都具有下列属性和放啊：

- constructor: 保存这用于创建当前对象的函数；
- hasOwnProperty(propertyName)： 用于检查给定的属性在当前对象实例中（而不是在实例的原型中）是否存在，propertyName必须以字符串形式指定充当参数；
- isPrototypeOf(object): 用于检查传入的对象是否是传入对象的原型
- propertyIsEnumerable(propertyName):用于检查给定的属性是否能够使用for-in语句来枚举；
- toLocaleString(): 返回对象的字符串表示，该字符串与执行环境的地区对应；
- toString(): 返回对象的字符串表示；
- valueOf(): 返回对象的字符串、数值或布尔值表示，通常与toString() 返回相同。

### 位操作符

ECMAScirpt 中的所有数值都以IEEE-754 64位格式存储，但位操作符并不直接操作64的值。而是先将64位的值转换成32位的证书，然后执行操作，最后将结果转换回64位。对于开发人员来说，由于64位存储格式是透明的，因此整个过程就像是只存在32位的整数一样。

对于有符号的整数来说，32位中的前31位用于表示数值。第32位表示数值符号。负数同样以二进制码存储，但使用二进制补码。

位操作符有如下几种

- 按位非： `~`
- 按位与： `&`
- 按位或： `|`
- 按位异或： `^`
- 左移：`<<`
- 右移：`>>`
- 无符号左移：`<<<`
- 无符号右移：`>>>`


### 布尔操作符

#### 逻辑与
在有一个操作数不是布尔值的情况下，逻辑与操作就不一定返回布尔值，此时，它遵循下列规则：

- 若第一个操作数是对象，则返回第二个操作数；
- 若第二个操作数是对象，则只有在第一个操作数的求值结果为true 时才返回该对象；
- 若两个操作数都是对象，则返回第二个操作数；
- 若有一个操作数是null, 则返回null;
- 若有一个操作数是NaN, 则返回NaN;
- 若有一个操作数是undefined, 则返回undefined;

不能在逻辑与操作中使用未定义的值。

    var found = true;
    var result = (found && someUndefinedVariable);//这里会发生错误
    alert (result); //这一行不会执行

    var found = false;
    var result = (found && someUndefinedVariable)//不会发生错误
    alert (result); // 执行("false")


#### 逻辑或
操作规则如下：

- 如果第一个操作是对象，则返回第一个操作数；
- 如果第一个操作数的求值结果为false, 则返回第二个操作数；
- 如果两个操作数都是对象，则返回第二个操作对象；
- 如果两个操作数都是null,则返回null;
- 如果两个操作数都是NaN,则返回NaN;
- 如果两个操作数都是undefined,则返回undefined;

我们可以使用逻辑或的短路行为来避免为变量赋null 或者 undefined 值，例如

    var myObject =  preferredObject || backupObject;

在这个例子中，myObject 将被赋予等号后面两个值中的一个。变量 preferredObject 中包含有限赋给变量myObject的值， 变量 backupObject 负责在preferredObject 中不包含有效值情况下提供后备值。

### 乘性操作符

#### 乘法
在处理特殊值的情况下，乘法操作符遵循下列特殊的规则：

- 若操作数是数值，执行常规的乘法计算，即如果两正数或两负数相乘结果是正数，而如果只有一个操作数有符号，那结果是负数，超过表示范围返回 Infinity或-Infinity；
- 若一操作数是 NaN, 结果为 NaN;
- 若Infinity与0相乘，结果为NaN;
- 若Infinity与非0相乘，则结果为Infinity或-Infinity；
- 若Infinity与Infinity相乘，则结果为Infinity；
- 若一操作数不是数值，则在后台调用Number() 转换，再根据上述规则计算。

#### 除法
除法的特殊计算规则如下：

- 若操作数是数值，执行常规的除法计算，即如果两正数或两负数相乘结果是正数，而如果只有一个操作数有符号，那结果是负数，超过表示范围返回 Infinity或-Infinity；
- 若一操作数是NaN,则结果是NaN；
- 若Infinity 被 Infinity 除，结果是NaN；
- 若0被0除，返回NaN；
- 若非0的有限数被0除，结果是 Infinity 或 -Infinity；
- 若 Infinity 被任何非0 除， 则结果是 Infinity 或 -Infinity。
- 若一操作数不是数值，则在后台调用Number() 转换，再根据上述规则计算。





