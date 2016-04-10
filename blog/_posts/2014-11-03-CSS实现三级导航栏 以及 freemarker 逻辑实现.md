---
title: CSS实现三级导航栏 以及 freemarker 逻辑实现
layout: post
tags:
- article
- CSS
- edit
- HTML
---


 文章取自我的 Github  repos: [Learning-HTML-CSS](https://github.com/paddingme/Learning-HTML-CSS), 作者：[@paddingme](http://padding.me/about.html) 。
原文链接：[https://github.com/paddingme/Learning-HTML-CSS/issues/15](https://github.com/paddingme/Learning-HTML-CSS/issues/15)

# CSS 实现三级导航栏以及 freemarker 实现

做网站经常需要做三级导航栏，这里记录下三级导航栏的实现。

水平方向的三级导航栏实现效果如下：

![nav](https://cloud.githubusercontent.com/assets/5771087/4879124/3b32ba66-6323-11e4-9277-90ffd299a88a.png)

HTML 代码结构：

```html
    <ul class="nav">
        <li><a href="#">一级目录1</a>
            <ul>
                <li><a href="#">二级目录11</a></li>
                <li><a href="#">二级目录12</a>
                    <ul>
                        <li><a href="#">三级目录121</a></li>
                        <li><a href="#">三级目录122</a></li>
                        <li><a href="#">三级目录123</a></li>
                    </ul>
                </li>
                <li><a href="#">二级目录13</a></li>
            </ul>
        </li>
        <li><a href="#">一级目录2</a></li>
        <li><a href="#">一级目录3</a>
            <ul>
                <li><a href="#">二级目录31</a></li>
                <li><a href="#">二级目录32</a>
                    <ul>
                      <li><a href="#">三级目录321</a></li>
                    </ul>
                </li>
                <li><a href="#">二级目录33</a></li>
                <li><a href="#">二级目录34</a>
                    <ul>
                      <li><a href="#">三级目录341</a></li>
                      <li><a href="#">三级目录342</a></li>
                    </ul>
                </li>
            </ul>
          </li>
    </ul>
```

CSS 代码
```css
    .nav {
      float: left;
    }

    .nav a {
        display: block;
        text-decoration: none;
        color: #333;
        padding: 5px 10px;
        border: 1px solid #ccc;
        background-color: #9A9797;
    }

    .nav a:hover {
      background: #444;
      color: white;
    }
    .nav li {
        list-style: none;
    }

    .nav > li {
      float: left;
      position: relative;
    }

    .nav ul {
      white-space: nowrap;
      padding: 0;
      visibility: hidden;
    }

    .nav ul li {
    position: relative;
    }

    .nav ul ul {
      position: absolute;
      top: 0;
      float: left;
      margin-left: 100%;
      visibility: hidden;
    }

    .nav li:hover > ul {
      visibility: visible;
    }
```
demo 地址：[CodePen](http://codepen.io/paddingme/pen/LneGf)

浏览器兼容性待测试(todo)。

<iframe id="embed_dom" name="embed_dom" frameborder="0" style="border:1px solid #000;display:block;width:664px; height:929px;" src="http://www.processon.com/embed/5456f6340cf23db8dee41679"></iframe>



Freemarker 流程图：
![nav1](https://cloud.githubusercontent.com/assets/5771087/4879112/07e79e38-6323-11e4-808b-14549ab511cf.png)

Freemarker 代码：

```html
    <ul class="nav">
       [@cms_channel_list]
          [#list tag_list as a]
              <!-- 是否有二级栏目 start -->
              [#if a.child?? && a.child?size>0]
                <!-- 是否有三级栏目 start -->
                [#if a.child[0].child?? && a.child[0].child?size>0]
                <li>
                  <a href="${a.child[0].child[0].url}">${a.name}</a>
                [#else]
                <li>
                  <a href="${a.child[0].url}">${a.name}</a>
                [/#if]
                <!-- 是否有三级栏目 end -->

                <!-- 遍历所有二级栏目 start -->
                <ul>
                  [#list a.child as b]
                    <!-- 是否有三级栏目 start-->
                    [#if b.child?? && b.child?size>0]

                      <li><a href="${b.child[0].url}" >${b.name}</a>
                        <ul>
                        [#list b.child as c]
                          <li><a href="${c.url}">${c.name}</a></li>
                        [/#list]
                        </ul>
                      </li>
                    [#else]
                      <li><a href="${b.url}" class="scd-a">${b.name}</a></li>
                    [/#if]
                    <!-- 是否有三级栏目 end-->
                  [/#list]
                </ul>
                 <!-- 遍历所有二级栏目 end -->
              [#else]
              <li><a href="${a.url}">${a.name}</a>
              [/#if]
              <!-- 是否有二级栏目 end -->
              </li>
          [/#list]
        [/@cms_channel_list]
      </ul>

```
