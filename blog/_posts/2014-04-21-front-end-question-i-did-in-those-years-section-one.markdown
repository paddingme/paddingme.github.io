---
title: 那些年我做过的面试题（1）
layout: post
tags:
- html
- css
- javascript
- 前端面试题
---

本文根据网络上出现的前端试题整理总结，主要来自以下几个前端试题集以及我自己的面试经历的总结：

* <cite>markyun<cite> [2014年最新前端开发面试题](https://github.com/markyun/My-blog/tree/master/Front-end-Developer-Questions) 和 [端开发面试题](http://segmentfault.com/a/1190000000465431)
* <cite>darcyclarke</cite>[Front-end-Developer-Interview-Questions](https://github.com/darcyclarke/Front-end-Developer-Interview-Questions) 

##1.get和post的区别##

 * get向指定的资源请求数据,请求的数据会附在URL之后,就是把数据放置在请求行（request line）中），以?分割URL和传输数据，多个参数用&连接；
 * post向指定的资源提交要被处理的数据
 get方法，查询请求是在url中显示的，有长度限制，get方法是安全幂等的。而post方法请求是封装在http消息包体中

    &|get|post
 ---|---|----
 后退/刷新|无害|请求重新提交
 书签|可做书签|不可做
 缓存|可被缓存|不能被缓存
 历史|保留在浏览器记录里|不保留
 对数据长度限制|限制（2048字符）|不限制
 安全性|url中暴露数据|相对安全
 可见性|url中可见|不可见

 总结：
   ①. 对于get来说，是向服务器端请求数据，其请求在url中可见，其长度有限制（2048字符）个体方法是安全幂等，这里的安全是指用于获取信息而非修改信息，幂等是指每次请求得到的结果都一样。
   ②. 对于post来说，是向服务器端提交数据，每次刷新或者后退都会重新提交，post请求的数据封装在http请求的首部里。


##2. HTTP 状态码##

  * `1XX`代表请求已经被接收；
  * `2xx`代表请求已成功被服务器接收、理解、并接受。常用的200表示请求已成功，请求所希望的响应头或数据体将随此响应返回；
  * `3xx`代表重定向。
  * `4xx`代表客户端错误。404表示网页不存在。
  * `5xx`代表服务器错误。500表示服务器内部错误，503表示服务器暂时不可用

##3.前端MVC框架##
  

##4.闭包##
   请见[隔壁](http://localhost:4000/blog/2014/04/20/what-is-closure/)。
  
