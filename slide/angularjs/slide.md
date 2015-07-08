
# 1. 什么是 AngularJS

Google
现在版本 1.4
未来 2.0
1.4 VS 2.0 的区别是什么，未来是什么
适用场景

# 2. AngularJS 特点


1. 双向数据绑定—— model 和 view 绑定；
2. 模板——在AngularJS中，模板相当于HTML文件被浏览器解析到DOM中，AngularJS遍历这些DOM，也就是说AuguarJS把模板当做DOM来操作，去生成一些指令来完成对view的数据绑定；
3. MVVM：Model-View-ViewModel；
4. 依赖注入；
5. 指令——可以用来创建自定义的标签，也可以用来装饰元素或者操作DOM属性；



MVC

MVW

MVVM


MVVM模式是Model-View-ViewMode模式的简称。由视图(View)、视图模型(ViewModel)、模型(Model)三部分组成，通过这三部分实现 UI逻辑、呈现逻辑和状态控制、数据与业务逻辑的分离。

Model将和ViewModel互动(通过$scope对象)，将监听Model的变化。这些可以通过View来发送和渲染，由HTML来展示你的 代码。View可以通过$routeProvider对象来支配，所以你可以深度的链接和组织你的View和Controller，将他们变成导航 URL。AngualrJS同时提供了无状态的Controller，可以用来初始化和控制$scope对象。


Model用于封装与应用程序的业务逻辑相关的数据以及对数据的处理方法。它具有对数据直接访问的权利，例如对数据库的访问，Model不依赖于View和ViewModel，也就是说，模型不关心会被如何显示或是如何被操作，模型也不能包含任何用户使用的与界面相关的逻辑。

ViewModel是一个用来提供特别数据和方法从而维护指定view的对象,。ViewModel是$scope的对象，只存在于AnguarJS的应用中。$scope只是一个简单的js对象，这个对象使用简单的API来侦测和广播状态变化。

Controller负责设置初始状态和参数化$scope方法用以控制行为。需要指出的controller并不保存状态也不和远程服务互动。

View是AngularJS解析后渲染和绑定后生成的HTML。这个部分帮助你创建web应用的架构。$scope拥有一个针对数据的参考，controller定义行为，view处理布局和互动。

ng-controller指令就是用来定义应用程序控制器的，并且同时创建了一个新的作用域关联到相应的DOM元素上。


model，普通的JS 对象。那么哪些可以创建 model 呢？





$scope：AngularJS 中的 $scope 对象是模板的域模型（domain  model）亦 作用于实例,通过为其属性赋值，可以传递数据给模板渲染。
作用域可以加入域模板相关的数据和提供相关的功能，例如为作用域实例定义方法，以封装 UI 交互逻辑提供模板使用。
从概念上讲，AngularJS 的作用域== View-Model


Controller: 初始化作用域实例
            1. 提供模型的初始值，
            2. 增加 UI 相关的行为（函数）以及扩展 $scope 对象
控制器允许我们来增强在模型层和视图层的数据绑定，通过提供我们数据模型的上下文。；
Service,
Directive（可以举一个例子）,
template： html 使用自定义的 HTML 标签与属性为静态的HTML 文档添加动态行为
view: In Angular, the view is a projection of the model through the HTML template.
This means that whenever the model changes, Angular refreshes the appropriate binding points, which updates the view.


MVC components in angular:

Model — Models are the properties of a scope; scopes are attached to the DOM where scope properties are accessed through bindings.
View — The template (HTML with data bindings) that is rendered into the View.
Controller — The ngController directive specifies a Controller class; the class contains business logic behind the application to decorate the scope with functions and values

声明式模板视图，
命令式控制逻辑。
（举个例子）


    和 jQuery 有什么不一样？

传统前端开发思维：
    以JQuery为代表
    以DOM为中心
    关注VIEW层的变化和用户操作
    「我有这样一个DOM，我想让它做XX」

新一代前端开发思维
    以AngularJS为代表
    以Data为中心
    聚焦于数据的变更
    MVW = Model + View + WhatEver

[有jQuery背景，该如何用AngularJS编程思想？](http://blog.jobbole.com/46589/)


- 数据双向绑定
- 依赖注入
To use a service in Angular, you simply declare the names of the dependencies you need as arguments to the controller's constructor function, as follows:
phonecatApp.controller('PhoneListCtrl', function ($scope, $http) {...}
Angular's dependency injector provides services to your controller when the controller is being constructed. The dependency injector also takes care of creating any transitive dependencies the service may have (services often depend upon other services).

When the application bootstraps, Angular creates an injector that will be used to find and inject all of the services that are required by your app. The injector itself doesn't know anything about what $http or $route services do. In fact, the injector doesn't even know about the existence of these services unless it is configured with proper module definitions.

2. Hello World

ng-controller 创建作用域$scope

当浏览器启动、开始解析HTML时，DOM元素上的指令属性就会跟其他属性一样被解析，也就是说当一个Angular.js应用启动，Angular编译器就会遍历DOM树来解析HTML，寻找这些指令属性函数，在一个DOM元素上找到一个或多个这样的指令属性函数，它们就会被收集起来、排序，然后按照优先级顺序被执行。


ng-app指令来标明一个AngularJS应用程序，并通过AngularJS完成自动初始化应用和标记应用根作用域，同时载入和指令内容相关的模块，并通过拥有ng-app指令的标签为根节点开始编译其中的DOM。



```js
<script src="angular.js"></script>

<body ng-app ng-init="name='World!'">
    <input type="text" ng-model="name">
    <h2>Hello,{{name}}!</h2>
</body>
```


```js
<script src="angular.js"></script>
<body ng-app="helloApp" ng-controller="HelloCtrl">
    <input type="text" ng-model="name">
    <h2>Hello,{{name}}!</h2>
</body>
<script>
    Angular.module('helloApp',[]);  //声明这个模块

    Angular.module('helloApp').controller('HelloCtrl',function($scope){
            $scope.name = "AngularJS";
        }); //引用这个模块
</script>
```


```
<body ng-app ng-init="name='world'">
    <h1>Hello,{{name}}!</h1>
    <div ng-controller="HelloCtrl">
        Say Hello to: <input type="text" ng-model="name">
        <h2>Hello,{{name}}!</h2>
    </div>
</body>
```

```
<body ng-app ng-init="things={name:'world'}">
    <h1>Hello,{{things.name}}</h1>
    <div ng-controller="HelloCtrl">
        Say Hello to: <input type="text" ng-mode="things.name">
        <h2>Hello,{{things.name}}</h2>
    </div>
</body>
```

介绍 AngularJS 如何启动

`<script src="angular.js"></script>`
This code downloads the angular.js script which registers a callback that will be executed by the browser when the containing HTML page is fully downloaded. When the callback is executed, Angular looks for the ngApp directive. If Angular finds the directive, it will bootstrap the application with the root of the application DOM being the element on which the ngApp directive was defined.

There are 3 important things that happen during the app bootstrap:
The injector that will be used for dependency injection is created.
The injector will then create the root scope that will become the context for the model of our application.
Angular will then "compile" the DOM starting at the ngApp root element, processing any directives and bindings found along the way.


ng-app
ng-init
ng-model
{{expression   }}  ---》 输出模型的表达式


介绍 directive 指令


介绍数据的双向绑定



# 一些其他的举个例子 不详细讲

1. 路由管理  ng-view

2. 与后端通信
 [3.md](3.md)
3. 自建指令和服务

4. filter



# 学习 AngularJS


社区：


官网： http://angularjs.org （被墙）
 教程 API debugger 报错 等等

angularjscn 1.3.9 的文档可以在这里找到 http://docs.angularjs.cn/api


ngnice  http://www.ngnice.com/

http://www.ngnice.com/showcase/

书籍：

精通 AngularJS；
Pro Angularjs

