<!--
 * @Description: 
 * @Autor: fengshuai
 * @Date: 2021-07-26 09:56:21
 * @LastEditors: fengshuai
 * @LastEditTime: 2021-07-26 13:59:39
-->

## [REM 布局 与 新秀 VW布局](https://cloud.tencent.com/developer/article/1352187)

### 前言

 前端页面的布局方案，可以从远古时代的Table布局说起，然后来到 DIV+CSS布局，之后有了Float布局，Flex布局，Column布局，Grid布局等等。 

 而另一方面，还有一些[布局概念](https://www.cnblogs.com/zhuzhenwei918/p/7147303.html)： 

**1. 静态布局**

直接使用px作为单位

**2. 流式布局**

宽度使用%百分比，高度使用px作为单位

**3. 自适应布局**

创建多个静态布局，每个静态布局对应一个屏幕分辨率范围。使用 @media媒体查询来切换多个布局

**4. 响应式布局**

通常是糅合了流式布局+弹性布局，再搭配媒体查询技术使用

**5. 弹性布局**

通常指的是rem或em布局。rem是相对于html元素的font-size大小而言的，而em是相对于其父元素（非font-size的是相对于自身的font-size

淘宝的 [Flexible](https://github.com/amfe/lib-flexible) 让REM布局得以流行开来，而此Flexible实现也有一些不足，此外，也涌现出了多种实现REM布局的方案

比如直接使用 html{ font-size:625%; } 基准值，配合JS来设置根元素字体大小，或者使用媒体查询来设置根元素字体大小

```css
@media screen and (min-width: 320px) {
  html,body,button,input,select,textarea {
      font-size:12px!important;
  }
}

@media screen and (min-width: 374px) {
  html,body,button,input,select,textarea {
      font-size:14px!important;
  }
}
```

但使用rem来布局的方案并不太正统，它有一些hack的特点

比较规范的方式是使用vw单位，随之而来的就是后起之秀 VW布局

### 基本概念

#### 物理像素(physical pixel)

物理像素又被称为设备像素，它是显示设备中一个最微小的物理部件。每个像素可以根据操作系统设置自己的颜色和亮度。正是这些设备像素的微小距离欺骗了我们肉眼看到的图像效果。

#### 设备独立像素(density-independent pixel)

设备独立像素也称为密度无关像素，可以认为是计算机坐标系统中的一个点，这个点代表一个可以由程序使用的虚拟像素(比如说CSS像素)，然后由相关系统转换为物理像素。

#### CSS像素

CSS像素是一个抽像的单位，主要使用在浏览器上，用来精确度量Web页面上的内容。一般情况之下，CSS像素称为与设备无关的像素(device-independent pixel)，简称DIPs。

#### 屏幕密度

屏幕密度是指一个设备表面上存在的像素数量，它通常以每英寸有多少像素来计算(PPI)。

#### 设备像素比(device pixel ratio)

设备像素比简称为dpr，其定义了物理像素和设备独立像素的对应关系。它的值可以按下面的公式计算得到：

```javascript
设备像素比 ＝ 物理像素 / 设备独立像素
```

在Javascript中，可以通过 `window.devicePixelRatio `获取到当前设备的dpr。

在css中，可以通过 `-webkit-device-pixel-ratio`，`-webkit-min-device-pixel-ratio`和 `-webkit-max-device-pixel-ratio`进行媒体查询，对不同dpr的设备，做一些样式适配。

或者使用 resolution | min-resolution | max-resolution 这些比较新的标准方式

![](https://ask.qcloudimg.com/http-save/yehe-2966628/xj4qybaazb.png?imageView2/2/w/1620)

#### 位图像素

一个位图像素是栅格图像(如：png, jpg, gif等)最小的数据单元。每一个位图像素都包含着一些自身的显示信息(如：显示位置，颜色值，透明度等)。

理论上，1个位图像素对应于1个物理像素，图片才能得到完美清晰的展示

![](https://ask.qcloudimg.com/http-save/yehe-2966628/i9sczy7pwg.png?imageView2/2/w/1620)

对于dpr=2的retina屏幕而言，1个位图像素对应于4个物理像素，由于单个位图像素不可以再进一步分割，所以只能就近取色，从而导致图片模糊(注意上述的几个颜色值)。

所以，对于图片高清问题，比较好的方案就是`两倍图片`(@2x)。

如：200×300(css pixel)img标签，就需要提供400×600的图片。

#### **缩放比 scale**

缩放比：scale = 1/dpr

#### 视窗 viewport

简单的理解，viewport是严格等于浏览器的窗口。在桌面浏览器中，viewport就是浏览器窗口的宽度高度。但在移动端设备上就有点复杂。

移动端的viewport太窄，为了能更好为CSS布局服务，所以提供了两个viewport:虚拟的visualviewport和布局的layoutviewport。

**视窗缩放 viewport scale**

在开发移动端页面，我们可以设置`meta`标签的viewport scale来对视窗的大小进行缩放定义

```html
<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
```

#### **rem单位**

font size of the root element.

`rem`就是相对于根元素`<html>`的`font-size`来做计算

#### **视窗单位**

- vw : 1vw 等于视窗宽度的1%
- vh : 1vh 等于视窗高度的1%
- vmin : 选取 vw 和 vh 中最小的那个
- vmax : 选取 vw 和 vh 中最大的那个

![](https://ask.qcloudimg.com/http-save/yehe-2966628/zqx1jejfyf.png?imageView2/2/w/1620)

## REM 布局

rem布局的核心是设置好根html元素的font-size

一般来说，为了防止在高清屏幕下像素不够用导致模糊，我们拿到的设计稿是640px（iphone5 设备宽为320px）或750px的两倍稿（iphone6 设备宽为375px），按照设备宽度做了两倍的大小。

那开发的时候在CSS中要设置什么尺寸呢，如何做到一份设计稿适配到不同机型中

**最佳方案是：**在photoshop或其他工具中量出某个元素或图片或文字的尺寸，然后直接写到代码中。额外的适配不需要理会。

```css
width: px2rem(200);
```

 基于此，可以使用SCSS来提供一系列的基础支持 

```js
/* 移动端页面设计稿宽度 */
$design-width: 750;
/* 移动端页面设计稿dpr基准值 */
$design-dpr: 2;
/* 将移动端页面分为10块 */
$blocks: 10;
/* 缩放所支持的设备最小宽度 */
$min-device-width: 320px;
/* 缩放所支持的设备最大宽度 */
$max-device-width: 540px;

/*
    rem与px对应关系，1rem代表在JS中设置的html font-size值（为一块的宽度），$rem即为$px对应占多少块

        $px                     $rem
    -------------    ===    ------------
    $design-width              $blocks
*/

/* 单位px转化为rem */
@function px2rem($px) {
    @return #{$px / $design-width * $blocks}rem;
}

/* 单位rem转化为px，可用于根据rem单位快速计算原px */
@function rem2px($rem) {
    @return #{$rem / $blocks * $design-width}px;
}
```

为了便于计算，我们将页面分为10个块，根据映射关系，我们只需要计算某个元素在页面中占了多少块（$rem），结合html中font-size的大小，就能在页面上设置好正确的元素大小

在对应的JS文件中

```js
var docElem = document.documentElement,
  metaElem = document.querySelector('meta[name="viewport"]'),
  dpr = window.devicePixelRatio || 1,
  // 将页面分为10块
  blocks = 10,
  // 需要限制的最小宽度
  defaultMinWidth = 320,
  // 需要限制的最大宽度
  defaultMaxWidth = 540,
  // 计算的基准值
  calcMaxWidth = 9999999;
```

 将页面按照clientWidth进行分割成块，和CSS对应起来 

```javascript
// 设置docElem字体大小
function setFontSize() {
  var clientWidth = docElem.clientWidth;

  clientWidth = Math.max(clientWidth, defaultMinWidth * dpr)

  // 调整计算基准值
  if (calcMaxWidth === defaultMaxWidth) {
      clientWidth = Math.min(clientWidth, defaultMaxWidth * dpr);
  }

  docElem.style.fontSize = clientWidth / blocks + 'px';
}

setFontSize();

window.addEventListener(window.orientationchange ? 'orientationchange' : 'resize', setFontSize, false);
```

###  **1px在高清屏幕中的显示问题** 

在REM布局中普遍采用的是viewport scale 视窗缩放的方式

视窗缩放很简单，其实就是直接将meta标签中的scale进行更改。比如dpr为3，则scale为

![](https://ask.qcloudimg.com/http-save/yehe-2966628/8phn1jcovc.png?imageView2/2/w/1620)

 但缩放在某些安卓设备中支持度不太好，我们还需要做其他检测（检测了现用的一些机型，应该还不完整哈） 

```javascript
// 大部分dpr为2以下的安卓机型不识别scale，需设置不缩放
    if (navigator.appVersion.match(/android/gi) && dpr <= 2) {
        dpr = 1;
    }

    setScale(dpr);

    // 企业QQ设置了scale后，不能完全识别scale（此时clientWidth未收到缩放的影响而翻倍），需设置不缩放
    if (navigator.appVersion.match(/qq\//gi) && docElem.clientWidth <= 360) {
        dpr = 1;
        setScale(dpr);
    }

    docElem.setAttribute('data-dpr', dpr);

    // 设置缩放
    function setScale(dpr) {
        metaElem.setAttribute('content', 'initial-scale=' + 1 / dpr + ',maximum-scale=' + 1 / dpr + ',minimum-scale=' + 1 / dpr + ',user-scalable=no');
    }
```

### **设置容器的最大最小宽度**

上图中，随着拉伸，内容区越来越大，各元素尺寸也越来越大。已经进行了最小宽度的处理。

**要控制缩放的程度，关键有两个点：尺寸计算基准、容器宽度**

```html
<!DOCTYPE html>
<html>
    <head>
        <title>REM布局</title>
        <meta charset="utf-8">
        <meta lang="zh-CN">
        <meta name="viewport" data-content-max content="width=device-width,initial-scale=1,user-scalable=no">
        <link rel="stylesheet" href="./rem.css">
        <script src="./rem.js"></script>
    </head>

    <body data-content-max>
        <section class="container">
```

尺寸计算基准位于 meta标签中的 data-content-max，容器宽度位于 body标签中

在JS中进行匹配控制，需要注意的是，因为我们已经进行了视窗的缩放，clientWidth将会比设备宽度大，要记得以dpr进行翻倍

```js
// 需要限制的最小宽度
    var defaultMinWidth = 320,
        // 需要限制的最大宽度
        defaultMaxWidth = 540,
        // 计算的基准值
        calcMaxWidth = 9999999;


    if (metaElem.getAttribute('data-content-max') !== null) {
        calcMaxWidth = defaultMaxWidth;
    }


    ...

    // 设置docElem字体大小
    function setFontSize() {
        var clientWidth = docElem.clientWidth;

        clientWidth = Math.max(clientWidth, defaultMinWidth * dpr)

        // 调整计算基准值
        if (calcMaxWidth === defaultMaxWidth) {
            clientWidth = Math.min(clientWidth, defaultMaxWidth * dpr);
        }

        docElem.style.fontSize = clientWidth / blocks + 'px';
    }
```

 在CSS中，简单地调用一下，核心方法已经抽离 

```css
html {
    @include root-width();
}
```

```css
/* html根的宽度定义 */
@mixin root-width() {
    body {
        @include container-min-width();

        &[data-content-max] {
            @include container-max-width();
        }
    }

    /* 某些机型虽然设备dpr大于1，但识别不了scale缩放，这里需要重新设置最小宽度防止出现横向滚动条 */
    &[data-dpr="1"] body {
        min-width: $min-device-width;
    }
}

/* 设置容器拉伸的最小宽度 */
@mixin container-min-width() {
    margin-right: auto;
    margin-left: auto;
    min-width: $min-device-width;

    @media (-webkit-device-pixel-ratio: 2) {
        min-width: $min-device-width * 2;
    }

    @media (-webkit-device-pixel-ratio: 3) {
        min-width: $min-device-width * 3;
    }
}

/* 设置容器拉伸的最大宽度 */
@mixin container-max-width() {
    margin-right: auto;
    margin-left: auto;
    max-width: $max-device-width;

    @media (-webkit-device-pixel-ratio: 2) {
        max-width: $max-device-width * 2;
    }

    @media (-webkit-device-pixel-ratio: 3) {
        max-width: $max-device-width * 3;
    }
}
```

### **文本大小是否用rem单位**

有时我们不希望文本在Retina屏幕下变小，另外，我们希望在大屏手机上看到更多文本，以及，现在绝大多数的字体文件都自带一些点阵尺寸，通常是16px和24px，所以我们不希望出现13px和15px这样的奇葩尺寸。

我们可以选择使用px直接定义

```css
/* 设置字体大小，不使用rem单位， 根据dpr值分段调整 */
@mixin font-size($fontSize) {
    font-size: $fontSize / $design-dpr;

    [data-dpr="2"] & {
        font-size: $fontSize / $design-dpr * 2;
    }

    [data-dpr="3"] & {
        font-size: $fontSize / $design-dpr * 3;
    }
}
```

```css
@include font-size(30px);
```

## VW 布局

REM布局中用到了JS来动态设置html的font-size，可能造成页面的抖动。

可以考虑比较新的VW布局，无需使用JS，虽说在移动端 iOS 8 以上以及 Android 4.4 以上才获得支持，不过还是值得一用的。如果需要兼容，可以尝试 [viewport-units-buggyfill](https://github.com/rodneyrehm/viewport-units-buggyfill)

在REM布局中处理1px问题是用了视窗缩放的方案，在VW布局中就不用了，转而使用容器缩放（transform）的方案

调用方式形如

```css
height: px2vw(300);
```

 同样的，我们需要写个转换方法 

```javascript
/* 移动端页面设计稿宽度 */
$design-width: 750;
/* 移动端页面设计稿dpr基准值 */
$design-dpr: 2;

/*
    vw与px对应关系，100vw为视窗宽度，$vw即为$px对应占多宽

        $px                    $vw
    -------------    ===    ------------
    $design-width              100vw
*/

/* 单位px转化为vw */
@function px2vw($px) {
    @return ($px / $design-width) * 100vw;
}

/* 单位vw转化为px，可用于根据vw单位快速计算原px */
@function vw2px($vw) {
    @return #{($vw / 100) * $design-width}px;
}
```

### **对于高清屏幕边框1px问题，有三个方面需要考虑**

1. 单边边框

2. 多边边框

3. 边框的圆角

1. 单边边框比较简单，本质是在目标元素上加个伪类，设置宽度（左|右边框）或高度（上|下边框）为1px，然后在高清屏幕下对齐进行缩放

```css
transform-origin: 0 0;
transform: scaleY(.5);
```

2. 要让伪类支持设置多边边框，已经不能仅仅使用宽度或高度，而应该在这个伪类上设置多边边框，然后设置dpr倍的宽高，再进行缩放（自左上方）

```css
width: 200%;
height: 200%;

transform-origin: top left;
transform: scale(.5, .5);
```

3. 边框圆角一般作用于多边边框，使用了伪类设置边框之后，元素本身并没有边框，所以我们需要对伪类设置圆角，此外，也需要对元素本身设置圆角 

 如果只是需要设置圆角，其实也可以不设置边框，可以使用背景颜色来营造出这种“边框”的分界，在VW布局中，显示地设置边框可能会造成代码量太多 

另外要注意的是，圆角如果设置为像素值（比如50px），在不同的dpr下它产生的圆角效果还是有区别的，所以最好也把dpr作为系数放在圆角中

针对上面三种情况，我们需要写好一个scss的1px边框生成器

先来看看怎么调用

```scss
/* 底部单个边框 */
.f-border-bottom {
  @include border(
    $direction: bottom,
    $size: 1px,
    $color: #ddd,
    $style: solid
  );
}
```

```scss
/* 常规多边边框 */
.f-border {
  @include border(
    $direction: all,
    $size: 1px,
    $color: #ddd,
    $style: solid
  );
}
```

```scss
/* 多个边框不同的属性 */
&.hover {
  @include border(
    $direction: (top, right, bottom, left),
    $size: (3px, 2px, 1px),
    $color: (#0f0, #ddd),
    $style: dotted
  );
}
```

```scss
/* 圆角边框百分比 */
.f-border-radius {
  @include border(
    $direction: all,
    $radius: 50%
  );
}
```

```scss
/* 圆角边框自定义多个角，顺序 */
.f-border-radius {
  @include border(
    $radius: (10px, 20px, 30px, 40px)
  );
}
```

```scss
/* 多个边框调用 */
&:not(.info-item__tel) {
  @include border(
    $direction: all,
    $size: 1px,
    $color: #ddd,
    $style: solid,
    $radius: 50px
  );
}
```

 看起来调用方式还是有点复杂的，不过应该也还好吧，实在是实现不了像scale缩放那样直接写原生border属性，除非使用构建工具了 

## REM + VW布局

为了解决纯VW布局不能设置最大最小宽度的问题，我们引入REM。

通过配置html根元素的font-size为vw单位，并且配置最大最小的像素px值，在其他css代码中可以直接使用rem作为单位

调用方式炒鸡简单

```css
html {
    @include root-font-size();
}
line-height: px2rem(300);
```

 而scss里面的实现，同样是先定义一个映射关系。将页面宽度进行分块（只是为了防止值太大） 

```scss
/* 移动端页面设计稿宽度 */
$design-width: 750;
/* 移动端页面设计稿dpr基准值 */
$design-dpr: 2;
/* 将移动端页面分为10块 */
$blocks: 10;
/* 缩放所支持的设备最小宽度 */
$min-device-width: 320px;
/* 缩放所支持的设备最大宽度 */
$max-device-width: 540px;

/*
    rem与px对应关系，1rem代表html font-size值（为一块的宽度），$rem即为$px对应占多少块

        $px                    $rem
    -------------    ===    ------------
    $design-width              $blocks
*/

/* html根元素的font-size定义，简单地将页面分为$blocks块，方便计算 */
@mixin root-font-size() {
    font-size: 100vw / $blocks;

    body {
        @include container-min-width();
    }

    /* 最小宽度定义 */
    @media screen and (max-width: $min-device-width) {
        font-size: $min-device-width / $blocks;
    }

    /* 最大宽度定义 */
    &[data-content-max] {
        body[data-content-max] {
            @include container-max-width();
        }

        @media screen and (min-width: $max-device-width) {
            font-size: $max-device-width / $blocks;
        }
    }
}
```

```scss
/* 设置容器拉伸的最小宽度 */
@mixin container-min-width() {
    margin-right: auto;
    margin-left: auto;
    min-width: $min-device-width;
}

/* 设置容器拉伸的最大宽度 */
@mixin container-max-width() {
    margin-right: auto;
    margin-left: auto;
    max-width: $max-device-width;
}
```

这里的max-width直接使用宽度值，因为使用的是vw，视窗未缩放

而在页面标签（html和body）中，简单地配上属性代表是否需要限制宽度即可。

```html
<!DOCTYPE html>
<html data-content-max>
    <head>
        <title>VW-REM布局</title>
        <meta charset="utf-8">
        <meta lang="zh-CN">
        <meta name="viewport" content="width=device-width,initial-scale=1,user-scalable=no">
        <link rel="stylesheet" href="./vw-rem.css">
    </head>

    <body data-content-max>
```

