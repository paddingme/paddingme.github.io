---
title: inline-block前世今生
layout: post
tags:
- CSS
---


 文章取自我的 Github  repos: [DailyReading](https://github.com/paddingme/DailyReading)， 作者：[@paddingme](http://padding.me/about.html) 。
  原文链接：[https://github.com/paddingme/DailyReading/issues/5](https://github.com/paddingme/DailyReading/issues/5)

## [inline-block 前世今生](http://ued.taobao.org/blog/2012/08/inline-block/)

1.  IE6、7 真的不支持 `display:inline-block` 吗？

    IE 从 5.5 开始就已经支持` display:inline-block `了，只是支持的并不是那么完善。

    IE6 中 block 元素即使触发了 hasLayout 也不具有 inline-block 元素不换行的特性。

    ```css
    display:inline-block; /* 现代浏览器 +IE6、7 inline 元素 */
    *display:inline; /* IE6、7 block 元素 */
    *zoom:1; /* 触发haslayout*/
    ```

2.  到底什么是 inline-block

    inline-block 后的元素创建了一个行级的块容器，该元素内部（内容）被格式化成一个块元素，同时元素本身则被格式化成一个行内元素。

    即：inline-block 的元素既具有 block 元素可以设置宽高的特性，同时又具有 inline 元素默认不换行的特性。当然不仅仅是这些特性，比如 inline-block 元素也可以设置 vertical-align 属性。简而言之：

    **inline-block 后的元素就是一个格式化为行内元素的块容器( Block container )。**

    总结：

    - IE5.5 后开始支持 inline-block， 但是它所支持的 inline-block 不能等同于 CSS2.1 中的 inline-block，因为 IE5.5 比 CSS2.1 更早提出 inline-block 的概念并作为所谓的「私有属性值」使用，所以二者表现出来的效果是不完全一致。
    - IE 5.5、6、7 、8（Q）中 block 元素对 inline-block 支持不完整，如果要达到类似的效果，需要先设置为 display:inline，然后使用 zoom:1 等触发 hasLayout。
    - IE 5.5、6、7 、8（Q）中 inline 元素欲达到 inline-block 的效果只需直接设置此属性值或使用 zoom:1 等均可。

3. 去除 inline-block 空隙终极解决方案。

    ```css
    .dib-wrap {
        font-size:0;/* 所有浏览器 */
        *word-spacing:-1px;/* IE6、7 */
    }
    .dib-wrap .dib {
        font-size: 12px;
        letter-spacing: normal;
        word-spacing: normal;
        vertical-align:top;
    }
    @media screen and (-webkit-min-device-pixel-ratio:0){
    /* firefox 中 letter-spacing 会导致脱离普通流的元素水平位移 */
        .dib-wrap{
            letter-spacing:-5px;/* Safari 等不支持字体大小为 0 的浏览器, N 根据父级字体调节*/
        }
    }
    .dib {
        display: inline-block;
        *display:inline;
        *zoom:1;
    }
    ```

    总结：

    - IE5.5 后开始支持 inline-block， 比 CSS2.1 更早提出 inline-block 的概念并作为所谓的「私有属性值」使用。但是它所支持的 inline-block 不能等同于 CSS2.1 中的 inline-block，IE 5.5、6、7 、8（Q）中 block 元素对 inline-block 支持不完整，因此二者表现出来的效果是不完全一致。
    - 产生 inline-block 空隙的根本性原因是：HTML 中的换行符、空格符、制表符等合并为空白符，字体大小不为 0 的情况下，空白符自然占据一定的宽度，因此产生了元素间的空隙。
    - 慎用 -webkit-text-size-adjust:none，它将会导致页面无法通过缩放来改变字体大小。

4.  W3C 9.1 White space 中规定以下元素属于空白符（white space）：

    - ASCII 空格 ( )
    - ASCII 制表符 ( )
    - ASCII 换页符 (\&#x000C;)
    - 零宽度空格 (​)「这个在闭合浮动中也有运用到」