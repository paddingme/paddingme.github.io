---
title:  Markdown 语法笔记
layout: post
tags:
- markdown
---


未完成，待更新！(20150114)

---

不久前狗大V —— [性感玉米](http://weibo.com/corndog) 在 [微博](http://weibo.com/1676582524/BDTSIktAJ) 中说：

>必须要歌颂一下 Markdown 了，自称是语法很容易 Shock 到普通 User，其实要学的，一对手就数得过来。对能熟练背诵江户四十八手的玩家来说不是问题。简易培训之后（比斯大林格勒保卫战中的肉盾培训时间略长）炸裂到完全可以实现在双手不离开键盘的情况下进行简单的格式处理（绝对够用），伟大！相见恨晚！

哈哈哈，狗大 V 都已经在学 [Markdown](http://zh.wikipedia.org/zh-cn/Markdown) 了，简直炸裂！ 不记得是去年还是前年学习了 Markdown，相见恨晚，已经到了写文章、文档无 Markdown 不欢、寝食不安、无法下指敲键盘的地步了。一个网站如果不支持 Markdown 在我心中更会大打折扣。学习 Markdown 已经很长时间了，Markdown 语法简单易记，但是有时候遇到嵌套或者别的总是会有点晕。这里记载下 Markdown 语法，以供日后查阅。

本文主要分为以下几部分：

- [Markdown 基本语法](#syntax)
    +  [兼容 HTML](#html)
    +  [段落和换行](#p)
    +  [区块引用 Blockquotes](#blockquote)
    +  [列表](#list)
    +  [代码区块](#代码区块)
    +  [分隔线](#hr)
    +  [链接](#link)
    +  [强调](#em)
    +  [代码](#code)
    +  [图片](#img)
    +  [自动链接](#autolink)
- [GitHub 风格的 Markdown 语法](#gfm)
- [各平台的 Markdown 支持情况](#use)
- [一些和排版有关的资源](#layout)
- [参考文章](#acknowledgement)

<h2 id="syntax">Markdown 语法</h2>

想要从头到尾一步步学习 Markdown 语法 请点击 <http://wowubuntu.com/markdown/> 阅读, 这里只记录下对我来说比较容易弄混的语法。

<h3 id="html">兼容 HTML</h3>

一些 HTML 区块元素――比如 `<div>`、`<table>`、`<pre>`、`<p>` 等标签，必须在前后加上空行与其它内容区隔开，还要求它们的开始标签与结尾标签不能用制表符或空格来缩进。在 HTML 区块标签间的 Markdown 格式语法将不会被处理。比如，你在 HTML 区块内使用 Markdown 样式的 \* 强调 \* 会没有效果。

    这是一个普通段落。

    <table>
        <tr>
            <td>Foo</td>
        </tr>
    </table>

    这是另一个普通段落。

效果：

这是一个普通段落。

    <table>
        <tr>
            <td>Foo</td>
        </tr>
    </table>

这是另一个普通段落。

<h3 id="p">段落和换行</h3>

一个 Markdown 段落是由一个或多个连续的文本行组成，它的前后要有一个以上的空行（空行的定义是显示上看起来像是空的，便会被视为空行。比方说，若某一行只包含空格和制表符，则该行也会被视为空行）。普通段落不该用空格或制表符来缩进。

如果你确实想要依赖 Markdown 来插入 `<br />` 标签的话，在插入处先按入两个以上的空格然后回车。

<h3 id="blockquotes">区块引用</h3>

    > This is a blockquote with two paragraphs. Lorem ipsum dolor sit amet,
    > consectetuer adipiscing elit. Aliquam hendrerit mi posuere lectus.
    > Vestibulum enim wisi, viverra nec, fringilla in, laoreet vitrisus.
    >
    > Donec sit amet nisl. Aliquam semper ipsum sit amet velit. Suspendisse
    > id sem consectetuer libero luctus adipiscing.

效果：

> This is a blockquote with two paragraphs. Lorem ipsum dolor sit amet,
> consectetuer adipiscing elit. Aliquam hendrerit mi posuere lectus.
> Vestibulum enim wisi, viverra nec, fringilla in, laoreet vitae, risus.
>
> Donec sit amet nisl. Aliquam semper ipsum sit amet velit. Suspendisse
> id sem consectetuer libero luctus adipiscing.

或者只在整个段落的第一行最前面加上 `>` ：

    > This is a blockquote with two paragraphs. Lorem ipsum dolor sit amet,
      consectetuer adipiscing elit. Aliquam hendrerit mi posuere lectus.
      Vestibulum enim wisi, viverra nec, fringilla in, laoreet vitae, risus.

    > Donec sit amet nisl. Aliquam semper ipsum sit amet velit. Suspendisse
      id sem consectetuer libero luctus adipiscing.

效果：

> This is a blockquote with two paragraphs. Lorem ipsum dolor sit amet,
  consectetuer adipiscing elit. Aliquam hendrerit mi posuere lectus.
  Vestibulum enim wisi, viverra nec, fringilla in, laoreet vitae, risus.

> Donec sit amet nisl. Aliquam semper ipsum sit amet velit. Suspendisse
  id sem consectetuer libero luctus adipiscing.

区块引用可以嵌套（例如：引用内的引用），只要根据层次加上不同数量的 > ：

    > This is the first level of quoting.
    >
    > > This is nested blockquote.
    >
    > Back to the first level.

效果：

> This is the first level of quoting.
>
> > This is nested blockquote.
>
> Back to the first level.

引用的区块内也可以使用其他的 Markdown 语法，包括标题、列表、代码区块等：

    > ## 这是一个标题。
    >
    > 1.   这是第一行列表项。
    > 2.   这是第二行列表项。
    >
    > 给出一些例子代码：
    >
    >     return shell_exec("echo $input | $markdown_script");

效果：

> ## 这是一个标题。
>
> 1.   这是第一行列表项。
> 2.   这是第二行列表项。
>
> 给出一些例子代码：
>
>     return shell_exec("echo $input | $markdown_script");

<h3 id="list">列表</h3>

列表项目标记通常是放在最左边，但是其实也可以缩进，最多 3 个空格，项目标记后面则一定要接着至少一个空格或制表符。

如果列表项目间用空行分开，在输出 HTML 时 Markdown 就会将项目内容用 `<p>` 标签包起来，举例来说：

    * Bird
    * Magic

会被转换为：

    <ul>
    <li>Bird</li>
    <li>Magic</li>
    </ul>

但是这个：

    * Bird

    * Magic

会被转换为：

    <ul>
    <li><p>Bird</p></li>
    <li><p>Magic</p></li>
    </ul>


列表项目可以包含多个段落，每个项目下的段落都必须缩进 4 个空格或是 1 个制表符：

    1.  This is a list item with two paragraphs. Lorem ipsum dolor
        sit amet, consectetuer adipiscing elit. Aliquam hendrerit
        mi posuere lectus.

        Vestibulum enim wisi, viverra nec, fringilla in, laoreet
        vitae, risus. Donec sit amet nisl. Aliquam semper ipsum
        sit amet velit.

    2.  Suspendisse id sem consectetuer libero luctus adipiscing.

效果：

1.  This is a list item with two paragraphs. Lorem ipsum dolor
    sit amet, consectetuer adipiscing elit. Aliquam hendrerit
    mi posuere lectus.

    Vestibulum enim wisi, viverra nec, fringilla in, laoreet
    vitae, risus. Donec sit amet nisl. Aliquam semper ipsum
    sit amet velit.

2.  Suspendisse id sem consectetuer libero luctus adipiscing.

如果要在列表项目内放进引用，那 `>` 就需要缩进：

    *   A list item with a blockquote:

        > This is a blockquote
        > inside a list item.

效果：

*   A list item with a blockquote:

    > This is a blockquote
    > inside a list item.

**如果要放代码区块的话，该区块就需要缩进*两次*，也就是 8 个空格或是 2 个制表符**：

    *   一列表项包含一个列表区块：

                <代码写在这>
效果：

*   一列表项包含一个列表区块：

        <代码写在这>

当然，项目列表很可能会不小心产生，像是下面这样的写法：

    1986. What a great season.

效果：

1986. What a great season.

换句话说，也就是在行首出现*数字-句点-空白*，要避免这样的状况，你可以在句点前面加上反斜杠。

    1986\. What a great season.

效果：

1986\. What a great season.

<h3 id="代码区块">代码区块</h3>

要在 Markdown 中建立代码区块很简单，只要简单地缩进 4 个空格或是 1 个制表符就可以，一个代码区块会一直持续到没有缩进的那一行（或是文件结尾）。例如，下面的输入：

    这是一个普通段落：

        这是一个代码区块。

效果：

这是一个普通段落：

    这是一个代码区块。

<h3 id="hr">段落和换行</h3>

你可以在一行中用三个以上的星号、减号、底线来建立一个分隔线，行内不能有其他东西。你也可以在星号或是减号中间插入空格。

<h3 id="link">链接</h3>

Markdown 支持两种形式的链接语法： *行内式*和*参考式*两种形式。

不管是哪一种，链接文字都是用 [方括号] 来标记。

要建立一个*行内式*的链接，只要在方块括号后面紧接着圆括号并插入网址链接即可，如果你还想要加上链接的 title 文字，只要在网址后面，用双引号把 title 文字包起来即可，例如：

    This is [an example](http://example.com/ "Title") inline link.

    [This link](http://example.net/) has no title attribute.

会产生：

    <p>This is <a href="http://example.com/" title="Title">
        an example</a> inline link.</p>

    <p><a href="http://example.net/">This link</a> has no
        title attribute.</p>

如果你是要链接到同样主机的资源，你可以使用相对路径：

    See my [About](/about/) page for details.

*参考式*的链接是在链接文字的括号后面再接上另一个方括号，而在第二个方括号里面要填入用以辨识链接的标记：

    This is [an example][id] reference-style link.

你也可以选择性地在两个方括号中间加上一个空格：

    This is [an example] [id] reference-style link.

接着，在文件的任意处，你可以把这个标记的链接内容定义出来：

    [id]: http://example.com/  "Optional Title Here"

链接内容定义的形式为：

*   方括号（前面可以选择性地加上至多三个空格来缩进），里面输入链接文字
*   接着一个冒号
*   接着一个以上的空格或制表符
*   接着链接的网址
*   选择性地接着 title 内容，可以用单引号、双引号或是括弧包着

下面这三种链接的定义都是相同：

    [foo]: http://example.com/  "Optional Title Here"
    [foo]: http://example.com/  'Optional Title Here'
    [foo]: http://example.com/  (Optional Title Here)

**请注意：**有一个已知的问题是 Markdown.pl 1.0.1 会忽略单引号包起来的链接 title。

链接网址也可以用尖括号包起来：

    [id]: <http://example.com/>  "Optional Title Here"

你也可以把 title 属性放到下一行，也可以加一些缩进，若网址太长的话，这样会比较好看：

    [id]: http://example.com/longish/path/to/resource/here
            "Optional Title Here"

网址定义只有在产生链接的时候用到，并不会直接出现在文件之中。

链接辨别标签可以有字母、数字、空白和标点符号，但是并*不*区分大小写，因此下面两个链接是一样的：

    [link text][a]
    [link text][A]

*隐式链接标记*功能让你可以省略指定链接标记，这种情形下，链接标记会视为等同于链接文字，要用隐式链接标记只要在链接文字后面加上一个空的方括号，如果你要让 "Google" 链接到 google.com，你可以简化成：

    [Google][]

然后定义链接内容：

    [Google]: http://google.com/

由于链接文字可能包含空白，所以这种简化型的标记内也许包含多个单词：

    Visit [Daring Fireball][] for more information.
    然后接着定义链接：

    [Daring Fireball]: http://daringfireball.net/

链接的定义可以放在文件中的任何一个地方，我比较偏好直接放在链接出现段落的后面，你也可以把它放在文件最后面，就像是注解一样。

下面是一个参考式链接的范例：

    I get 10 times more traffic from [Google] [1] than from
        [Yahoo] [2] or [MSN] [3].

        [1]: http://google.com/        "Google"
        [2]: http://search.yahoo.com/  "Yahoo Search"
        [3]: http://search.msn.com/    "MSN Search"

如果改成用链接名称的方式写：

    I get 10 times more traffic from [Google][] than from
        [Yahoo][] or [MSN][].

        [google]: http://google.com/        "Google"
        [yahoo]:  http://search.yahoo.com/  "Yahoo Search"
        [msn]:    http://search.msn.com/    "MSN Search"

上面两种写法都会产生下面的 HTML。

    <p>I get 10 times more traffic from <a href="http://google.com/"
        title="Google">Google</a> than from
        <a href="http://search.yahoo.com/" title="Yahoo Search">Yahoo</a>
        or <a href="http://search.msn.com/" title="MSN Search">MSN</a>.</p>

下面是用行内式写的同样一段内容的 Markdown 文件，提供作为比较之用：

    I get 10 times more traffic from [Google](http://google.com/ "Google")
        than from [Yahoo](http://search.yahoo.com/ "Yahoo Search") or
        [MSN](http://search.msn.com/ "MSN Search").

参考式的链接其实重点不在于它比较好写，而是它比较好读，比较一下上面的范例，使用参考式的文章本身只有 81 个字符，但是用行内形式的却会增加到 176 个字元，如果是用纯 HTML 格式来写，会有 234 个字元，在 HTML 格式中，标签比文本还要多。

使用 Markdown 的参考式链接，可以让文件更像是浏览器最后产生的结果，让你可以把一些标记相关的元数据移到段落文字之外，你就可以增加链接而不让文章的阅读感觉被打断。

<h3 id="em">强调</h3>

Markdown 使用星号（`*`）和底线（`_`）作为标记强调字词的符号，被 `*` 或 `_` 包围的字词会被转成用 `<em>` 标签包围，用两个 `*` 或 `_` 包起来的话，则会被转成 `<strong>`

但是**如果你的 `*` 和 `_` 两边都有空白的话，它们就只会被当成普通的符号**。

如果要在文字前后直接插入普通的星号或底线，你可以用反斜线：

<h3 id="code">代码</h3>

如果要在代码区段内插入反引号，你可以用多个反引号来开启和结束代码区段：

    ``There is a literal backtick (`) here.``

<h3 id="img">图片</h3>

Markdown 使用一种和链接很相似的语法来标记图片，同样也允许两种样式： *行内式*和*参考式*。

行内式的图片语法看起来像是：

    ![Alt text](/path/to/img.jpg)

    ![Alt text](/path/to/img.jpg "Optional title")

详细叙述如下：

*   一个惊叹号 `!`
*   接着一个方括号，里面放上图片的替代文字
*   接着一个普通括号，里面放上图片的网址，最后还可以用引号包住并加上
    选择性的 'title' 文字。

参考式的图片语法则长得像这样：

    ![Alt text][id]

「id」是图片参考的名称，图片参考的定义方式则和连结参考一样：

    [id]: url/to/image  "Optional title attribute"

<h3 id="autolink">自动链接</h3>

Markdown 支持以比较简短的自动链接形式来处理网址和电子邮件信箱，只要是用尖括号包起来， Markdown 就会自动把它转成链接。一般网址的链接文字就和链接地址一样

    <http://example.com/>

Markdown 会转为：

    <a href="http://example.com/">http://example.com/</a>

    <address@example.com>

Markdown 会转成：

    <a href="&#x6D;&#x61;i&#x6C;&#x74;&#x6F;:&#x61;&#x64;&#x64;&#x72;&#x65;
    &#115;&#115;&#64;&#101;&#120;&#x61;&#109;&#x70;&#x6C;e&#x2E;&#99;&#111;
    &#109;">&#x61;&#x64;&#x64;&#x72;&#x65;&#115;&#115;&#64;&#101;&#120;&#x61;
    &#109;&#x70;&#x6C;e&#x2E;&#99;&#111;&#109;</a>

在浏览器里面，这段字串（其实是 `<a href="mailto:address@example.com">address@example.com</a>`）会变成一个可以点击的「address@example.com」链接。




<h2 id="gfm">GitHub 风格的 Markdown 语法</h2>

- https://github.com/cssmagic/blog/issues/13
- https://help.github.com/articles/github-flavored-markdown/

<h2 id="use">各平台的 Markdown 支持情况</h2>

<h2 id="layout">一些和排版有关的资源</h2>

-  [Web 中文字体应用指南](https://ruby-china.org/topics/14005)
-  [中文排版的最佳实践](http://zhuanlan.zhihu.com/FrontendMagazine/19891152)
-  [Entry.css](https://github.com/zmmbreeze/Entry.css/)

   > Customizable and readable less library for Chinese text. 一个可配置的、更适合阅读的中文文章样式库
-  [typo.css ](https://github.com/sofish/typo.css)

   > 中文网页重设与排版：一致化浏览器排版效果，构建最适合中文阅读的网页排版
-  [yue.css](https://github.com/lepture/yue.css)

   > A typography stylesheet for readable content
-  [chinese-copywriting-guidelines](https://github.com/sparanoid/chinese-copywriting-guidelines)

   > Chinese Copywriting Guidelines：中文文案排版指北
-  [Han.css](https://github.com/ethantw/Han)

   > 「漢字標準格式」印刷品般的漢字排版框架 Han.css: the CSS typography framework optimised for Hanzi.

<h2 id="acknowledgement">参考文章</h2>

- <http://wowubuntu.com/markdown/>
- <https://github.com/cssmagic/blog/issues/13>
- <https://help.github.com/articles/github-flavored-markdown/>



<!--
1. 大 V 都在 学 Markdown 你还在干什么呢？
2. markdown 之 普通语法
 - http://wowubuntu.com/markdown/
3. github markdown 语法
4. 各平台为啥 markdown 不一样呢（github，sf.gg，html-js，以及 W3CTech（不支持表格嵌套））
5. 一些和文字，排版有关系的东西。
-->

