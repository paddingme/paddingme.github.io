---
title: 回味background
layout: post
tags:
- CSS
---


 文章取自我的 Github  repos: [DailyReading](https://github.com/paddingme/DailyReading)， 作者：[@paddingme](http://padding.me/about.html) 。  
原文链接：[https://github.com/paddingme/DailyReading/issues/2](https://github.com/paddingme/DailyReading/issues/2)

# [回味background](http://segmentfault.com/blog/linxz/1190000002481921)

笔记目录：
- [background](#background)
- [background-color](#background-color)
- [background-image](#background-image)
- [background-position](#background-position)
- [background-origin(CSS3)](#background-origin)
- [background-clip(CSS3)](#background-clip)
- [background-attachment)](#background-attachment)
- [background-repeat](#background-repeat)
- [background-size(CSS3)](#background-size)
- [多背景图片](#mult-background-imgaes)
- [background 简写模式](#simply-mode)

<h2 id="background">background</h2>

background 简写属性在一个声明中设置所有的背景属性。
可以设置如下属性：
- background-color(CSS1)
- background-position(CSS1)
- background-repeat(CSS1)
- background-attachment(CSS1)
- background-image(CSS1)
- background-clip(CSS3)
- background-size(CSS3)
- background-origin(CSS3)

如果不设置其中的某个值，也不会出问题，比如 `background:#ff0000 url('smiley.gif');` 也是允许的。

通常建议使用这个属性，而不是分别使用单个属性，因为 **这个属性在较老的浏览器中能够得到更好的支持，而且需要键入的字母也更少**。


<h2 id="background-color">background-color</h2>

`background-color` 的显示区域和 `background-clip` 有关。

demo: http://jsbin.com/fiyazayuho/2/

![](http://sfault-image.b0.upaiyun.com/343/503/3435038285-54b3e96100924_articlex)

<h2 id="background-image">background-image</h2>

`background-image:url()` 这个括号里的地址建议不要用中文/全角字符，如果有空格的话，那么就建议个路径加上引号。

默认地，背景图像位于元素的左上角。
提示：请设置一种可用的背景颜色，这样的话，假如背景图像不可用，页面也可获得良好的视觉效果。`background-image` 会盖在 `background-color` 上面，然后如果在 `url()` 后面写半角英文逗号的话，就可以玩多背景图了，比如：`background-image: url(name1.jpg), url(name2.png), url(name3.gif);`。

<h2 id="background-position">background-position</h2>

`background-position` 的位置是跟 `background-origin` 相关。

可能的值:

|值|描述|
|---|---|
|top left,top center,top right,center left, center center, center right, bottom left, bottom center,bottom right|如果仅规定了一个关键词，那么第二个值将是"center"。默认值：0% 0%。|
|x% y% |第一个值是水平位置，第二个值是垂直位置。左上角是 0% 0%。右下角是 100% 100%。如果仅规定了一个值，另一个值将是 50%。|
|xpos ypos|第一个值是水平位置，第二个值是垂直位置。左上角是 0 0。单位是像素 (0px 0px) 或任何其他的 CSS 单位。如果仅规定了一个值，另一个值将是50%。
可以混合使用 % 和 position 值。|


<h2 id="background-origin">background-origin(CSS3)</h2>

`background-origin` 规定了指定背景图片 `background-image` 属性的原点位置的背景相对区域。`background-image` 有三个属性值：

-  border-box
   背景将会延伸到延伸到外边界的边框，但是是在边框在上，背景在下，这个用border-style 为dashed可以直接看得出来。
- padding-box
  背景描绘在padding盒子，边框里不会有背景出现。同样，背景将会延伸到最外边界的padding.
- content-box
  背景描绘在内容区范围.

注意：当使用 background-attachment 为fixed时，该属性将被忽略不起作用。

<h2 id="background-clip">background-clip(CSS3)</h2>

`background-clip` 设置元素的背景（背景图片或颜色）是否延伸到边框下面。如果没有背景图片，那么只有在边框设置为透明或半透明时才能看到视觉效果。其也拥有三个属性值：

- border-box
  背景延伸到边框外沿（背景被裁剪到边框盒）。
- padding-box
  背景延伸到内边距外沿（背景被裁剪到内边距框）。
- content-box
  背景裁剪到内容区外沿（背景被裁剪到内容框）。

<h2 id="background-attachment">background-attachment</h2>

如果指定了 `background-image` ，那么 `background-attachment` 决定背景图像是在视角中固定的还是随滚动条滚动的，默认值为 `scroll`

- scroll
  如果设为 `scroll`，背景图片会随着包含它的区块一起滚动。
- fixed
  如果设为 `fixed`，背景图片不会随着包含它的元素一直滚动，而是一直固定固定在屏幕的一个位置。
- local（CSS3）
  <http://jsbin.com/cenipe/1/>

  ![](http://sfault-image.b0.upaiyun.com/350/295/3502950769-54b3ea06a1a97_articlex)

<h2 id="background-repeat">background-repeat</h2>

`background-origin` 属性会影响 `background-repeat`。
- repeat
  背景图像将在垂直方向和水平方向重复。
- no-repeat
  背景图像将仅显示一次。
- repeat-x
  背景图像将在水平方向重复。
- repeat-y
  背景图像将在垂直方向重复。
- space（CSS3）
  根据背景图片的大小，然后通过计算容器的大小来平铺背景，多余的部分用空白来填充，这样的平铺方式是不会出现图片被截成一半的情况。

![](http://sfault-image.b0.upaiyun.com/174/948/1749480153-54b3ea294b617)

- round（CSS3）
根据背景图片的大小，然后通过计算容器的大小，压缩图片来填充容器，这样的平铺方式也是不会出现图片截成一半的情况，不过跟background-repeat: space;不同的是这种填充方式不会出现空白的区域，而是会去压缩图片的大小来适应容器，如图：

![](http://sfault-image.b0.upaiyun.com/329/872/329872279-54b3ea360c3f7)

<h2 id="background-size">background-size(CSS3)</h2>

`background-size` 设置背景图片大小。

```css
/* 关键字 */
background-size: cover
background-size: contain

/* 一个值: 这个值指定图片的宽度，图片的高度隐式的为auto */
background-size: 50%
background-size: 3em
background-size: 12px
background-size: auto

/* 两个值: 第一个值指定图片的宽度，第二个值指定图片的高度 */
background-size: 50% auto
background-size: 3em 25%
background-size: auto 6px
background-size: auto auto

/* 逗号分隔的多个值：设置多重背景 */
background-size: auto, auto     /* 不同于background-size: auto auto */
background-size: 50%, 25%, 25%
background-size: 6px, auto, contain

background-size: inherit
```


- <length>
  <length> 值，指定背景图片大小，不能为负值。
- <percentage>
  <percentage> 值，指定背景图片相对背景区（background positioning area）的百分比。背景区由background-origin设置，默认为盒模型的内容区与内边距，也可设置为只有内容区，或者还包括边框。如果attachment 为fixed，背景区为浏览器可视区（即视口），不包括滚动条。不能为负值。
- auto
  以背景图片的比例缩放背景图片。
- cover
  缩放背景图片以完全覆盖背景区，可能背景图片部分看不见。
- contain
  缩放背景图片以完全装入背景区，可能背景区部分空白。

背景图片大小计算：

+  如果指定了 background-size 的两个值并且不是auto：
   背景图片按指定大小渲染。
+  contain 或 cover:
   保留固有比例，最大的包含或覆盖背景区。如果图像没有固有比例，则按背景区大小。
+  auto 或 auto auto:
   图像如果有两个长度，则按这个尺寸。如果没有固有尺寸与固有比例，则按背景区的大小。如果没有固有尺寸但是有固有比例， 效果同 contain。如果有一个长度与比例，则由此长度与比例计算大小。如果有一个长度但是没有比例，则使用此长度与背景区相应的长度。
+  一个为 auto 另一个不是auto:
   如果图像有固有比例，则指定的长度使用指定值，未指定的长度由指定值与固有比例计算。如果图像没有固有比例，则指定的长度使用指定值，未指定的长度使用图像相应的固有长度，若没有固有长度，则使用背景区相应的长度。

注意，对于没有固有尺寸或固有比例的矢量图不是所有的浏览器都支持。特别注意测试Firefox 7- 与Firefox 8+，以确定不同之处能否接受。

<h2 id="mult-background-imgaes">多背景图片</h2>

用英文半角逗号隔开，如果要用简写模式的话，那么就先写完一个 background 简写属性后，再用,半角逗号隔开，继续写，如：

    background: url(a.png) top left no-repeat,
                url(b.png) center / 100% 100% no-repeat,
                url(c.png) white;

<h2 id="simply-mode">background 简写模式</h2>

以前没有那么多新增属性的时候，简写就是：

    background: url(a.png) top left no-repeat fixed #000;

现在有了之后，就稍微改变了一下，不过也相差不多：

    background: url(a.png) top left / cover no-repeat fixed content-box content-box #000

格式就是：

    <bg-image> || <position> [ / <bg-size> ]? || <repeat-style> || <attachment> || <box> || <box> || <'background-color'>


## 参考

- <http://segmentfault.com/blog/linxz/1190000002481921>
- <https://developer.mozilla.org/>
- <http://www.w3school.com.cn/>
