

2015 年终总结
     --  From Slice to Enginner (从切图仔到工程师)


1.  2015 年 03月 从研发二 --->  公共开发组

2.  2015 年 07月1日  ---> 正式入职


关键词: 挖坑！


主要做的事情：

  1. 密铺小游戏 ： gulp  HTML5 CSS3(flexbox) 移动端HTML5 事件  拖拽 （截图）

  2. Angularjs   四叶草抽奖 （截图）

  3. AngularJS   教材电子书阅读

  4. 陕西省教育平台 （前后端分离）

  5. 新高考选课 （前后端分离）

  6. 学生成长档案 （前后端分离）



前后端分离,
前端工程化,
维护前端公共库, ===》》 责任！
As a mentor(带实习生),


后期想做的是：

前后端分离：

  完善前后端分离流程和规范
  建立API规范,
  完善流程和文档。
  Json-Server,
  Gulp 推进完善自动化流程
  引入 Stylus 管理 CSS 管理 CSS,
  积累公共组件。
  ECMAScript 5/6


团队：

  - 建立前端规范
  - 分享交流


  希望明年公司可以招更多的前端，或者希望对前端感兴趣的后端同学转前端。


涉足移动端：

  混合开发

  angular + ionic


nodejs ---》 建立中间层 数据分发



##  所有脱离了业务背景的技术选型都是耍流氓。



1.  翻阅所有微博/twitter
2.  翻阅自己所有笔记
3.  翻阅朋友圈/手机截图等等


<!--
  当你有把锤子的时候,你看什么都像钉子  放在最后。
-->

## client 客户端

### 单个子任务

- `gulp html`: 压缩指定 html 文件；
- `gulp css`: 压缩指定 css 文件；
- `gulp js`: 压缩指定 js 文件；
- `gulp js`: 压缩指定 js 文件；
- `gulp img`: 压缩指定 图片；


### 批量子任务：

- `gulp partials`: 批量压缩模板页 html；
- `gulp tc`: 批量将模板 html 转化为 js 存入缓存；
- `gulp imgs`: 批量压缩 /img 文件下所有图片；
- `gulp move`: 批量迁移所有未修改文件到 /dist目录下；
- `gulp clean`: 批量清空 dist 下所有文件；



### 批零多任务：

- `gulp build`: 重写 index.html 合并、压缩、重命名 index.html 中指定 css,js 文件。
- `gulp watch`： 检测所有的文件夹变动，根据相应文件夹变动**增量**执行相应任务；启动实时刷新服务区器；
- `gulp`: 顺序执行 clean 任务, 并行执行 move,imgs,partials,build 任务，再执行 watch 任务；
- `gulp push`: 将 dist 文件夹发送到 219 version 指定目录下，需要ssh 秘钥；



## server

-  `node server`: 启动测试服务器；
-  `gulp doc`: 生成 API 文档；
-  `gulp push`: 发送 API 文档到 219指定目录（需要 ssh 秘钥）；
-  `gulp`: 发送 API 文档到 219，并且启动服务器






























