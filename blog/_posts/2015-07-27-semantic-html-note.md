---
title: 语义化 HTML 笔记
layout: post
tags:
 - HTML
---

本篇为主要学习 [Justineo](https://github.com/Justineo) 的 slideshow: [Semantic HTML](http://justineo.github.io/slideshows/semantic-html/)
所做的学习笔记。
<!-- http://padding.me/slide/slicer/#/ -->


1. `<abbr>` 

```html
<abbr title="World Wide Web">WWW</abbr>
```

```css
abbr[title] {
    borde-bottom: 1px dotted rgba(255,255,255,0.3);
    cursor: help;
}
```

2. `q`

3.

```html
<blockquote cite=“http://www.w3.org/TR/html4/intro/intro.html#h-2.2” lang="en-US">
To publish information for global distribution, one needs
<mark>a universally understood language</mark>,
a kind of publishing mother tongue that all computers may potentially understand.
</blockquote>
```

4. mark


5. `figcaption`


6.  `id` 属性标识符（用于引用）,不应依赖其语义处理相应元素
    `class` 属性: authors are encouraged to use values that describe the nature of the content

7. `title` 属性：
  - 链接：描述目标信息
  - 图片： 版权/描述
  - 引用： 来源信息
  - 交互元素：操作指南
  - ....


5. `link` 元素，元数据，用来描述文档本身与其他资源的关系；必须包含 `rel` 以及 `href` 属性。

```html

<link rel="stylesheet" href="">
<link rel="author license" href="/about">
```

link + rel + author, link + rel + license 都有预定义的语义


a 元素

存在 href 属性时为超链接
缺少 href 属性时为链接占位符


<nav>
  <ul>
    <li><a href="/">Home</a></li>
    <li><a href="/news">News</a></li>
    <li><a>Examples</a></li>
  </ul>
</nav>


<!-- a + rel

rel="prev", rel="next"

链接到文档的前一篇 / 后一篇 / 前一页 / 后一页 (超链接) -->
