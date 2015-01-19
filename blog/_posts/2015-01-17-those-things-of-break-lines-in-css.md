---
title: css 换行的那些事儿
layout: post
tags:
 - css
---

## 一个导航栏引发的血案
周五做一个二级导航栏，需要的效果如图所示，


写的代码是：

```html
<!DOCTYPE html>
<html lang="zh-cmn-Hans">
<head>
    <meta charset="UTF-8">
    <title>Navbar</title>
    <style>
        ul {
            list-style: none;
        }
        a {
            text-decoration: none;
        }
        .nav li a:hover {
            background: lightsteelblue;
        }
        .nav li {
            display: inline-block;
            *display: inline;
            *zoom: 1;
            position: relative;
            padding-bottom: 20px;
            border: 1px solid red;
        }
        .nav li a {
            padding: 10px;
            background: aliceblue ;
            margin-right: -8px;
            border-right: 1px solid #fff;

        }
        .nav li:hover .second-column {
            visibility: visible;
            border: 1px solid blue;
        }
        .second-column {
            visibility: hidden;
            position: absolute;
            top: 37px;
            left: 0;
        }
        .nav .second-column a {
            padding: 0;
            margin: 0;
        }
    </style>
</head>
<body>
    <ul class="nav">
        <li><a href="">一级栏目</a></li>
        <li>
            <a href="">一级栏目</a>
            <div class="second-column">
                <a href="">二级栏目</a>
                <a href="">二级栏目</a>
                <a href="">二级栏目</a>
                <a href="">二级栏目</a>
            </div>
        </li>
        <li>
            <a href="">一级栏目</a>
            <div class="second-column">
                <a href="">二级栏目二级栏目二级栏目</a>
                <a href="">二级栏目</a>
                <a href="">二级栏目二级栏目二级栏目</a>
                <a href="">二级栏目</a>
            </div>
        </li>
        <li><a href="">一级栏目</a></li>
    </ul>
</body>
</html>
```

得到的效果是：


在线 DEMO: <http://codepen.io/paddingme/pen/QwvLBO>

发现二级导航栏所在的区域和一级导航栏 `li` 区域宽度一样，无法全部水平拜访。

折腾了半天，研究了半天，差点于屏幕前吐血身亡。最后发现加了句 `white-space: nowrap;` 就轻松搞定了。

在线 DEMO: <http://codepen.io/paddingme/pen/RNVbBr>

猜测是 绝对定位的元素根据其定位的父元素进行定位，默认情况下不限制宽度的情况下，绝对定位元素会自动折行，不超过其定位的父元素的宽度区域。

这里我们使用 `white-space: nowrap` 强制不换行得到所需要效果。



## white-space

实现强制不换行

```css
div {
    white-space：nowrap;
}
```

语法： `white-space`：normal | pre | nowrap | pre-wrap | pre-line

查看了 [MDN](https://developer.mozilla.org/zh-CN/docs/Web/CSS/white-space)（还翻译了下，感觉翻译得好差，见笑=.=）和 [CSS参考手册](http://css.doyoe.com/)。
总结下各个取值的用法是：

- `normal` : 浏览器默认情况下 `white-space` 即为 `normal`, 表现为连续的空白符会被合并为一个空格，制表符、换行符都是空白符。当遇到盒子边界或者 `<br>` 就会换行。
- `pre`: 连续的空白符不会被合并。
- `nowrap`: 强制文本不换行，除非遇到`<br>`。
- `pre-wrap`: 连续的空白符不会被合并, 遇到盒子边界或者 `<br>` 就会换行。
- `pre-line`: 连续的空白符不会被合并,保持文本的换行,遇到盒子边界或者 `<br>` 就会换行。

![](http://paddingme.qiniudn.com/whitespace.png)

注：IE7及更早浏览器不支持 CSS2.1 新增的 pre-wrap | pre-line。
## word-wrap & word-break

CSS 自动换行

```css
div {
    word-wrap: break-word;
    word-break: normal;
}
```


word-wrap：normal | break-word

- normal： 允许内容顶开或溢出指定的容器边界。
- break-word： 内容将在边界内换行。如果需要，单词内部允许断行。

设置或检索当内容超过指定容器的边界时是否断行。
作为 IE 的私有属性之一，IE5.5 率先实现了 `word-wrap` ，后期被 w3c 采纳成标准属性；
CSS3 中将 `word-wrap` 改名为 `overflow-wrap`；
对应的脚本特性为 `wordWrap`。

`word-break` 是用来在单词内断行。

word-break：normal | keep-all | break-all

- normal： 依照亚洲语言和非亚洲语言的文本规则，允许在字内换行。
- keep-all： 与所有非亚洲语言的 normal 相同。对于中文，韩文，日文，不允许字断开。适合包含少量亚洲文本的非亚洲文本。
- break-all： 该行为与亚洲语言的 normal 相同。也允许非亚洲语言文本行的任意字内断开。该值适合包含一些非亚洲文本的亚洲文本，比如使连续的英文字母间断行。

设置或检索对象内文本的字内换行行为。注意 FireFox 早起版本不识别 word-break，需要 hack。
对于解决防止页面中出现连续无意义的长字符打破布局，应该使用 `break-all`；
作为 IE 的私有属性之一，IE5.5 率先实现了 `word-break` ，后期被w3c采纳成标准属性；
对应的脚本特性为 `wordBreak`。



参考：

- <http://www.hicss.net/solve-change-line-in-css/>
- <https://developer.mozilla.org/zh-CN/docs/Web/CSS/white-space>
- <https://developer.mozilla.org/zh-CN/docs/Web/CSS/word-break>
- <https://developer.mozilla.org/zh-CN/docs/Web/CSS/word-wrap>
- <http://css.doyoe.com/>

## css 实现省略号

```css
div {
    width: 27em;
    white-space: nowrap;
    text-overflow:ellipsis;
    overflow:hidden;
}
```

注意 `text-overflow: ellipsis` 在 Firefox 下无效，可以用其他方法 hack，例如

```css
/* FF 下的样式 */
p {clear:both;}
p span {
float:left;
    max-width:175px;   /*IE不能解释该属性，而FF可以*/
}
p:after {
    content:"...";
}
```

参考：

- [关于文字内容溢出用点点点(…)省略号表示](http://www.zhangxinxu.com/wordpress/2009/09/%E5%85%B3%E4%BA%8E%E6%96%87%E5%AD%97%E5%86%85%E5%AE%B9%E6%BA%A2%E5%87%BA%E7%94%A8%E7%82%B9%E7%82%B9%E7%82%B9-%E7%9C%81%E7%95%A5%E5%8F%B7%E8%A1%A8%E7%A4%BA/)
- [CSS 单行溢出文本显示省略号...的方法（兼容IE FF）
](http://www.cnblogs.com/hlz789456123/archive/2009/02/18/1392972.html)