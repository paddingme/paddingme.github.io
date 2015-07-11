

Angularjs 初探

1. angularjs 是什么？

    Angularjs 是采用 JavaScript 语言编写的客户端（clien-side） MVC 框架，帮助开发者编写现代化的单页面（singal-page）应用。

    它尤其适合编写大量的 CRUD（增删改查）操作的，具有 Ajax 风格的 富客户端应用。


    模板/DI/TESTING


    <!-- MVC - Model-View-Controller

MVP - Model-View-Presenter

MVVM - Model-View-ViewModel

MVW / MV* - Model-View-Whatever -->


使用 HTML 作为模板语言。

        背景/现状

    2012年6月 1.0

    Angularjs 1.4
    Angularjs 2.0


2. angularjs 能做什么？



    端到端测试/单元测试
    使用场景：XXX


3. angularjs 怎么做的？
    --- 介绍 MVVM
    ---  Service
    ---  directive
    ---  route
    --- controller （不要在 控制器里 操作 DOM）


4. 怎么写 angularjs?


    1. 写声明化 html : 自定义指令 组件


    有jQuery背景，该如何用AngularJS编程思想？http://blog.jobbole.com/46589/
    以及 [《AngularJS进阶实践》](http://div.io/topic/684?page=1#2453)




单元测试： 测试控制器以及用JS 写的应用中的其他组件，但是不是很容易测试 DOM 操作或者整个应用的运行。

这时候就需要端到端测试。
Unit tests are perfect for testing controllers and other components of our application written in JavaScript, but they can't easily test DOM manipulation or the wiring of our application.



    端到端测试时指：End to End Testing。

    端到端测试类似于系统测试，测试级的“宏大”的端点，涉及整个应用系统环境在一个现实世界使用时的模拟情形的所有测试。例如与数据库对话，用网络通讯，或与外部硬件、应用系统或适当的系统对话。端到端架构测试包含所有访问点的功能测试及性能测试。端到端架构测试实质上是一种"灰盒"测试，一种集合了白盒测试和黑盒测试的优点的测试方法。

　　在 Google 测试世界里，端到端测试是指作用于从用户请求到响应的整个流程和全部服务器集群的测试。


端到端测试根据每个场景写脚本进行测试。

手机搜索输入框，
未搜索前是3个，
搜索S 是1个，
搜索S 是2个。


5. 介绍怎么 Angularjs 如何加载启动！


Angularjs 依靠浏览器去解析模板文本（就像浏览器对任何HTML 文档所做的），浏览器将文本转换成 DOM 树之后， Angularjs 参与进去，开始便利解析好的 DOM 结构。当遇到指令时，Angularjs 就执行相关逻辑，将指令转换成页面的动态部分。


ng-app


6. 各种指令


指令： 在 Angularjs 中，所有能够被框架理解和解释的特殊 HTML 标签和属性。



ng-init 初始化模型

$provider 服务可以注册不用的对象创建方案，之后 $injector 服务会解释这些方案，生成完备而可用的对象实例。


constant: 常量

factory： 工厂函数创建的新对象

service： 构造函数创建的新对象

provider: $get 工厂函数创建的新对象

$injector 创建的对象称为服务，




依赖注入：

1. 理解对象对其写作对象的需求；
2. 找到所需的协作对象
3. 链接协作对象，以形成完备的应用。



$http.get('api/user',{params:{id:'5'}})
    .success(function(data,status,headers,confg){

    });

    .error(function(){

        })



var postData = {text: 'long blob of text'};
    // The next line gets appended to the URL as params
    // so it would become a post request to /api/user?id=5
\var config = {params: {id: '5'}};

$http.post('api/user', postData, config)
    .success(function(data, status, headers, config) {
    // Do something successful})

    .error(function(data, status, headers, config) {
        // Handle the error
    });


$http({
    method: string,
    url: string,
    params: object,
    data: string or object,
    headers: object,
    transformRequest: function transform(data, headersGetter) or an array of functions,
    transformResponse: function transform(data, headersGetter) or an array of functions,
    cache: boolean or Cache object,
    timeout: number,
    withCredentials: boolean
});
