## css [常见布局](https://juejin.cn/post/6844903491891118087#heading-15)

![](https://user-gold-cdn.xitu.io/2017/8/21/395302ae7949d78570a6102e5ded1ff0?imageView2/0/w/1280/h/960/format/webp/ignore-error/1)

### 传统盒模型布局方式

我们的传统布局方式就是通过盒模型，使用 `display` 属性（文档流布局） + `position` 属性（定位布局） + `float`属性（浮动布局）。

#### 文档流布局

这是最基本的布局方式，就是按照文档的顺序一个一个显示出来，块元素独占一行，行内元素共享一行。

#### 浮动布局

浮动方式布局就是使用 `float` 属性，使元素脱离文档流，浮动起来。

#### 定位布局

我们也可以通过 `position` 属性来进行定位。

### flex 布局

#### 什么是 flex 布局

> 2009年，W3C 提出了一种新的方案----Flex 布局，可以简便、完整、响应式地实现各种页面布局。目前，它已经得到了所有浏览器的支持，这意味着，现在就能很安全地使用这项功能。
>
> Flex 是 Flexible Box 的缩写，意为"弹性布局"，用来为盒状模型提供最大的灵活性。

flex 是一种新型的布局方式，使用该布局方式可以实现几乎所有你想要的效果。但是要注意其浏览器的兼容性。

#### 使用 flex 布局

flex 的使用方法很简单，只需要将其 `display` 属性设置为 `flex` 就可以，也可以设置行内的 flex，记得 Webkit 内核的浏览器，必须加上 `-webkit` 前缀。**注意，设为 Flex 布局以后，子元素的 `float`、`clear` 和 `vertical-align` 属性将失效。**

```css
.ele{
  display: -webkit-flex;
  display: flex;
  display: inline-flex;
  display: -webkit-inline-flex;
}
```

> 在 flex 中，最核心的概念就是容器和轴，所有的属性都是围绕容器和轴设置的。其中，容器分为父容器和子容器。轴分为主轴和交叉轴（主轴默认为水平方向，方向向右，交叉轴为主轴顺时针旋转 90°）。

在使用 flex 的元素中，默认存在两根轴：水平的主轴（main axis）和垂直的交叉轴（cross axis）
主轴开始的位置称为 `main start`，主轴结束的位置称为 `main end`。
同理，交叉轴开始的位置称为 `cross start`，交叉轴结束的位置称为 `cross end`。
在使用 flex 的子元素中，占据的主轴空间叫做 `main size`，占据的交叉轴空间叫做 `cross size`。

![](https://user-gold-cdn.xitu.io/2017/8/20/7bc6f5073e763bdadba7b3d0b1b4165e?imageView2/0/w/1280/h/960/format/webp/ignore-error/1)

#### 父容器属性

父容器上有六个属性

- [flex-direction：主轴的方向。](#flex-direction)
- [flex-wrap：超出父容器子容器的排列样式。](https://link.juejin.cn/?target=flex-wrap)
- flex-flow：`flex-direction` 属性和 `flex-wrap` 属性的简写形式。
- justify-content：子容器在主轴的排列方向。
- align-items：子容器在交叉轴的排列方向。
- align-content：多根轴线的对齐方式。

#### 子容器属性

子容器也有 6 个属性：

- order：子容器的排列顺序
- flex-grow：子容器剩余空间的拉伸比例
- flex-shrink：子容器超出空间的压缩比例
- flex-basis：子容器在不伸缩情况下的原始尺寸
- flex：子元素的 `flex` 属性是 `flex-grow`,`flex-shrink` 和  `flex-basis` 的简写
- align-self： 允许单个项目有与其他项目不一样的对齐方式，可覆盖父容器 `align-items` 属性。默认值为 `auto`，表示继承父元素的 `align-items`属性，如果没有父元素，则等同于 `stretch`。 

### grid 网格布局

flex 布局虽然强大，但是只能是一维布局，如果要进行二维布局，那么我们还需要使用 grid。

grid 布局又称为“网格布局”，可以实现二维布局方式，和之前的 表格`table`布局差不多，然而，这是使用 CSS 控制的，不是使用 HTML 控制的，同时还可以依赖于媒体查询根据不同的上下文得新定义布局。

> 网格布局还可以让我们摆脱现在布局中存在的文档流限制，换句话说，你的结构不需要根据设计稿从上往上布置了。这也意味着您可以自由地更改页面元素位置。这最适合你在不同的断点位置实现你最需要的布局，而不再需要为响应你的设计而担心HTML结构的问题。

和 `table` 布局不同的是，`grid` 布局不需要在 HTML 中使用特定的标签布局，所有的布局都是在 CSS 中完成的，你可以随意定义你的 grid 网格。

> 没有 HTML 结构的网格布局有助于使用流体、调整顺序等技术管理或更改布局。通过结合 CSS 的媒体查询属性，可以控制网格布局容器和他们的子元素，使用页面的布局根据不同的设备和可用空间调整元素的显示风格与定位，而不需要去改变文档结构的本质内容。

#### grid 网格布局中的基本概念

##### 网格线(Grid Lines)

网格线组成了网格，他是网格的水平和垂直的分界线。一个网格线存在行或列的两侧。我们可以引用它的数目或者定义的网格线名称。

![](https://user-gold-cdn.xitu.io/2017/8/20/9bc9d5224b3d0d2970b2f62dc990456c?imageView2/0/w/1280/h/960/format/webp/ignore-error/1)

##### 网格轨道(Grid Track)

网格轨道是就是相邻两条网格线之间的空间，就好比表格中行或列。所在在网格中其分为grid column和grid row。每个网格轨道可以设置一个大小，用来控制宽度或高度。

![](https://user-gold-cdn.xitu.io/2017/8/20/a2d49458713678dea41afe1b4a190a87?imageView2/0/w/1280/h/960/format/webp/ignore-error/1)

##### 网格单元格(Grid Cell)

网格单元格是指四条网格线之间的空间。所以它是最小的单位，就像表格中的单元格。

![](https://user-gold-cdn.xitu.io/2017/8/20/e41c9e0e7d472e0906a9a7c339476d29?imageView2/0/w/1280/h/960/format/webp/ignore-error/1)

##### 网格区域(Grid Area)

网格区域是由任意四条网格线组成的空间，所以他可能包含一个或多个单元格。相当于表格中的合并单元格之后的区域。

![](https://user-gold-cdn.xitu.io/2017/8/20/d2e76b9a3878f766d976d060152087a5?imageView2/0/w/1280/h/960/format/webp/ignore-error/1)

#### 使用 grid 布局

使用 grid 布局很简单，通过display属性设置属性值为 grid 或 inline-grid 或者是 subgrid（该元素父元素为网格，继承父元素的行和列的大小） 就可以了。

网格容器中的所有子元素就会自动变成网格项目（grid item），然后设置列（grid-template-columns）和 行（grid-template-rows）的大小，设置 `grid-template-columns` 有多少个参数生成的 grid 列表就有多少个列。

**注：当元素设置了网格布局，column、float、clear、vertical-align属性无效。**

如果没有设置 `grid-template-columns`，那么默认只有一列，宽度为父元素的 100%，例如

比如我们设置如下的 HTML，

```html
<div class="grid-container">
  <div class="item item1">1</div>
  <div class="item item2">2</div>
  <div class="item item3">3</div>
  <div class="item item4">4</div>
  <div class="item item5">5</div>
  <div class="item item6">6</div>
</div>
```

#### 行或列最小和最大尺寸

`minmax()` 函数来创建行或列的最小或最大尺寸，第一个参数定义网格轨道的最小值，第二个参数定义网格轨道的最大值。可以接受任何长度值，也接受 `auto` 值。`auto` 值允许网格轨道基于内容的尺寸拉伸或挤压。

```css
.grid-container{
 	padding: 20px;
 	display: grid;
 	grid-template-rows: minmax(100px,200px) minmax(50px,200px);
 	grid-template-columns: 1fr 1fr 2fr;
 	background: pink;
 	height: 300px;
}
```

#### 重复行或者列

`repeat()` 属性可以创建重复的网格轨道。这个适用于创建相等尺寸的网格项目和多个网格项目。

`repeat()` 也接受两个参数：第一个参数定义网格轨道应该重复的次数，第二个参数定义每个轨道的尺寸。

```css
.grid-container{
  padding: 20px;
  display: grid;
  grid-template-columns: repeat(2,100px);
  grid-template-rows: repeat(3,100px);
  background: pink;
}
```

#### 间距

`grid-column-gap`：创建列与列之间的距离。
`grid-row-gap`：行与行之间的距离。

```css
.grid-container{
  padding: 20px;
  display: grid;
  grid-template-columns: repeat(2,100px);
  grid-template-rows: repeat(3,100px);
  grid-column-gap: 50px;
  grid-row-gap: 15px;
  background: pink;
}
```

#### 通过网格线定位 grid item

我们可以通过表格线行或者列来定位 grid item。比如：

```html
<div class="grid-container">
  <div class="item item1">1</div>
  <div class="item item2">2</div>
  <div class="item item3">3</div>
  <div class="item item4">4</div>
  <div class="item item5">5</div>
  <div class="item item6">6</div>
</div>
```

```css
.grid-container{
  padding: 20px;
  display: grid;
  grid-template-columns: repeat(2,100px);
  grid-template-rows: repeat(3,100px);
  grid-column-gap: 50px;
  grid-row-gap: 15px;
  background: pink;
}
.item{
  border: 2px solid palegoldenrod;
  color: #fff;
  text-align: center;
  font-size: 20px;
}
.item1{
  grid-row-start: 2;
  grid-row-end: 3;
  grid-column-start: 2;
  grid-column-end: 3;
  background: #fffa90;
  color: #000;
}
```

#### 合并单元行与合并单元列

这个就和 excel 中的合并单元行/列是相同的（**这个需要设置在 grid item 中**），

```css
  grid-column-start: 1;
  grid-column-end: 3;
  grid-row-start: 2;
  grid-row-end: 4;
  grid-row-end: 4;复制代码
```

也可以使用 `grid-row` 和 `grid-column` 简写的形式，关键词 `span` 后面紧随数字，表示合并多少个列或行，`/` 前面是从第几行/列开始。

```css
  grid-row: 2 / span 3; 
  grid-column: span 2;
```

```css
.grid-container{
  padding: 20px;
  display: grid;
  grid-template-columns: repeat(4,100px);
  grid-template-rows: repeat(3,100px);
  grid-column-gap: 50px;
  grid-row-gap: 15px;
  background: pink;

}
.item{
  border: 2px solid palegoldenrod;
  color: #fff;
  text-align: center;
  font-size: 20px;

}
.item1{
  grid-column-start: 1;
  grid-column-end: 3;
  grid-row-start: 2;
  grid-row-end: 4;
}
```

#### 自定义网格线名称

在 grid 中，是可以自定义网格线的名称的，然后使用定义好的网格线来进行布局，**`[col1-start]` 网格线名称一定要使用 `[]` 括住**。

```html
<div class="grid-container">
  <div class="item a">a</div>
  <div class="item b">b</div>
  <div class="item c">c</div>
  <div class="item d">d</div>
  <div class="item e">e</div>
  <div class="item f">f</div>
  <div class="item g">g</div>
  <div class="item h">h</div>
  <div class="item i">i</div>
  <div class="item j">j</div>
</div>
```

```css
.grid-container{
  text-align: center;
  height: 400px;
  padding: 100px;
  display: grid;
  grid-column-gap: 5px;
  grid-row-gap: 5px;
  background: pink;
  grid-template-columns: [col1-start] 100px [col1-end] 5px [col2-start] 100px [col2-end] 5px [col3-start]
  100px [col3-end] 5px [col4-start] 100px [col4-end];
  grid-template-rows: [row1-start] auto [row1-end] 5px [row2-start] auto [row2-end] 5px [row3-start] auto
  [row3-end] 5px [row4-start] auto [row4-end] 5px [row5-start] auto [row5-end];

}

.a { grid-column: col1-start / col3-end; grid-row: row1-start;background: #ffffff;}
.b { grid-column: col4-start / col4-end; grid-row: row1-start / row5-end; background: orange; }
.c { grid-column: col1-start; grid-row: row2-start; background: #ffffff;}
.d { grid-column: col2-start; grid-row: row2-start; background: #ffffff;}
.e { grid-column: col3-start; grid-row: row2-start; background: #ffffff;}
.f { grid-column: col1-start / col2-end; grid-row: row3-start; background: #ffffff;}
.g { grid-column: col3-start; grid-row: row3-start; background: #ffffff;}
.h { grid-column: col1-start; grid-row: row4-start; background: #ffffff;}
.i { grid-column: col2-start / col3-end; grid-row: row4-start; background: #ffffff;}
.j { grid-column: col1-start / col3-end; grid-row: row5-start; background: #ffffff;}
```

#### 通过网格区域命名和定位网格项目

##### 什么是网格区域：

> 网格区域(grid-area)是一个逻辑空间，主要用来放置一个或多个网格单元格（Grid Cell）。他是由四条网格线(Grid line)，网格区域每边一条，四边相交组织的网格轨道(Grid Track)。简单点理解，网格区域是有四条网格线交织组成的网格空间，这个空间中可能是一个网格单元格，也可能是多个网格单元格。

##### 定义网格区域

在CSS Grid Layout中定义网格区域有两种方式，一种是通过网格线来定义，另一种是通过grid-template-areas来定义。接下来看看两种定义网格区域的方法在具体使用过程中有何不同。

##### 网格线定义网格区域

使用网格线定义网格区域的方法非常的简单，首先依赖于 `grid-template-columns` 和 `grid-template-rows` 显式定义网格线，甚至是由浏览器隐式创建网格线，然后通过 `grid-area` 属性通过取网格线，组成网格线交织区域，那么这个区域就是所讲的网格区域。在使用 `grid-area` 属性调用网格线，其遵循的规则是 `grid-area: row-start`/ `column-start` / `row-end` / `column-end`。

##### `grid-template-areas` 定义网格区域

除了使用网格线的交组来定义网格区域之外，在 CSS Grid Layout 中还可以通过 `grid-template-areas` 属性来定义网格区域的名称，然后需要放在对应网格区域的元素，可以通过 `grid-area` 属性来指定。而且重复区域可以使用同一个名称来实现跨区域。另外对于空的轨道区域，可以使用点号 `.` 来代表

```html
<div class="grid-container">
  <div class="header ">header</div>
  <div class="content ">content</div>
  <div class="sidebar ">sidebar</div>
  <div class="footer ">footer</div>
</div>
```

```css
.grid-container{
  text-align: center;
  padding: 20px;
  display: grid;
  grid-column-gap: 5px;
  grid-row-gap: 5px;
  background: pink;
  grid-template-areas: "header header header header header"
                        "sidebar content content content content"
                        "footer footer footer footer footer";

  grid-template-rows: 50px 150px 50px;
  grid-template-columns: 200px 200px 200px;

}

.header { grid-area:header; background: #fff}
.content { grid-area: content; background: #fffa90}
.sidebar { grid-area: sidebar; background: #5bc0de}
.footer { grid-area: footer; background: #ffff00}
```

### 元素居中方式

#### 水平居中

##### (1)文本/行内元素/行内块级元素

 原理：text-align只控制行内内容(文字、行内元素、行内块级元素)如何相对他的块父元素对齐

```css
#parent{
    text-align: center;
}
```

优缺点

- 优点：简单快捷，容易理解，兼容性非常好
- 缺点：只对行内内容有效；属性会继承影响到后代行内内容；如果子元素宽度大于父元素宽度则无效，只有后代行内内容中宽度小于设置text-align属性的元素宽度的时候，才会水平居中

##### (2)单个块级元素

原理：根据[规范](https://link.juejin.cn/?target=https%3A%2F%2Fwww.w3.org%2FTR%2FCSS21%2Fvisudet.html%23Computing_widths_and_margins)介绍得很清楚了，有这么一种情况：在margin有节余的同时如果左右margin设置了auto，将会均分剩余空间。另外，如果上下的margin设置了auto，其计算值为0

```css
#son{
    width: 100px; /*必须定宽*/
    margin: 0 auto;
}
```

优缺点

- 优点：简单；兼容性好
- 缺点：必须定宽，并且值不能为auto；宽度要小于父元素，否则无效

##### (3)多个块级元素 

原理：text-align只控制行内内容(文字、行内元素、行内块级元素)如何相对他的块父元素对齐

```css
#parent{
    text-align: center;
}
.son{
    display: inline-block; /*改为行内或者行内块级形式，以达到text-align对其生效*/
}
```

优缺点

- 优点：简单，容易理解，兼容性非常好
- 缺点：只对行内内容有效；属性会继承影响到后代行内内容；块级改为inline-block换行、空格会产生元素间隔

##### (4)使用绝对定位实现▲

原理：子绝父相，top、right、bottom、left的值是相对于父元素尺寸的，然后margin或者transform是相对于自身尺寸的，组合使用达到水平居中的目的

```css
#parent{
    height: 200px;
    width: 200px;  /*定宽*/
    position: relative;  /*父相*/
    background-color: #f00;
}
#son{
    position: absolute;  /*子绝*/
    left: 50%;  /*父元素宽度一半,这里等同于left:100px*/
    transform: translateX(-50%);  /*自身宽度一半,等同于margin-left: -50px;*/
    width: 100px;  /*定宽*/
    height: 100px;
    background-color: #00ff00;
}
```

优缺点

- 优点：使用margin-left兼容性好；不管是块级还是行内元素都可以实现
- 缺点：代码较多；脱离文档流；使用margin-left需要知道宽度值；使用transform兼容性不好（ie9+）

##### (5)任意个元素(flex) 

原理：就是设置当前主轴对齐方式为居中。说不上为什么，flex无非就是主轴侧轴是重点，然后就是排列方式的设置，可以去看看文末的flex阅读推荐

```css
#parent{
    display: flex;
    justify-content: center;
}
```

优缺点

- 优点：功能强大；简单方便；容易理解
- 缺点：PC端[兼容性不好](https://link.juejin.cn/?target=https%3A%2F%2Fcaniuse.com%2F%23search%3Dflex)，移动端（Android4.0+）

#### 本章小结：

- 对于水平居中，我们应该先考虑，哪些元素有自带的居中效果，最先想到的应该就是 `text-align:center` 了，但是这个只对行内内容有效，所以我们要使用 `text-align:center` 就必须将子元素设置为 `display: inline;` 或者 `display: inline-block;` ；
- 其次就是考虑能不能用`margin: 0 auto;` ，因为这都是一两句代码能搞定的事，实在不行就是用绝对定位去实现了。
- 移动端能用flex就用flex，简单方便，灵活并且功能强大，无愧为网页布局的一大利器！

#### 垂直居中

##### (1)单行文本/行内元素/行内块级元素▲ 

原理：line-height的最终表现是通过inline box实现的，而无论inline box所占据的高度是多少（无论比文字大还是比文字小），其占据的空间都是与文字内容公用水平中垂线的。

```css
#parent{
    height: 150px;
    line-height: 150px;  /*与height等值*/
}
```

优缺点

- 优点：简单；兼容性好
- 缺点：只能用于单行行内内容；要知道高度的值

##### (2)多行文本/行内元素/行内块级元素 

原理同上

```css
#parent{  /*或者用span把所有文字包裹起来，设置display：inline-block转换成图片的方式解决*/
    height: 150px;
    line-height: 30px;  /*元素在页面呈现为5行,则line-height的值为height/5*/
}
```

优缺点

- 优点：简单；兼容性好
- 缺点：只能用于行内内容；需要知道高度和最终呈现多少行来计算出line-height的值，建议用span包裹多行文本

##### (3)图片▲ 

原理：[vertical-align和line-height的基友关系](https://link.juejin.cn/?target=http%3A%2F%2Fwww.zhangxinxu.com%2Fwordpress%2F2015%2F08%2Fcss-deep-understand-vertical-align-and-line-height%2F)

```css
#parent{
    height: 150px;
    line-height: 150px;
    font-size: 0;
}
img#son{vertical-align: middle;} /*默认是基线对齐，改为middle*/
```

优缺点

- 优点：简单；兼容性好
- 缺点：需要添加font-size: 0; 才可以完全的垂直居中；不过需要主要，html#parent包裹img之间需要有换行或空格

##### (4)单个块级元素 

html代码:

```html
<div id="parent">
    <div id="son"></div>
</div>
```

######  (4-1) 使用tabel-cell实现: 

 原理：CSS Table，使表格内容对齐方式为middle 

```css
#parent{
    display: table-cell;
    vertical-align: middle;
}
```

优缺点

- 优点：简单；宽高不定；兼容性好（ie8+）
- 缺点：设置tabl-cell的元素，宽度和高度的值设置百分比无效，需要给它的父元素设置display: table; 才生效；table-cell不感知margin，在父元素上设置table-row等属性，也会使其不感知height；设置float或position会对默认布局造成破坏，可以考虑为之增加一个父div定义float等属性；内容溢出时会自动撑开父元素

 **(4-2) 使用绝对定位实现:▲** 

```css
/*原理：子绝父相，top、right、bottom、left的值是相对于父元素尺寸的，然后margin或者transform是相对于自身尺寸的，组合使用达到水平居中的目的*/
#parent{
    height: 150px;
    position: relative;  /*父相*/
}
#son{
    position: absolute;  /*子绝*/
    top: 50%;  /*父元素高度一半,这里等同于top:75px;*/
    transform: translateY(-50%);  /*自身高度一半,这里等同于margin-top:-25px;*/
    height: 50px;
}

/*优缺点
- 优点：使用margin-top兼容性好；不管是块级还是行内元素都可以实现
- 缺点：代码较多；脱离文档流；使用margin-top需要知道高度值；使用transform兼容性不好（ie9+）*/

或

/*原理：当top、bottom为0时,margin-top&bottom会无限延伸占满空间并且平分*/
#parent{position: relative;}
#son{
    position: absolute;
    margin: auto 0;
    top: 0;
    bottom: 0;
    height: 50px;
}

/*优缺点
- 优点：简单;兼容性较好(ie8+)
- 缺点：脱离文档流*/
```

###### (4-3) 使用flex实现:

原理：flex设置对齐方式罢了，请查阅文末flex阅读推荐

```css
#parent{
    display: flex;
    align-items: center;
}

或

#parent{display: flex;}
#son{align-self: center;}

或
/*原理：这个尚未搞清楚，应该是flex使margin上下边界无限延伸至剩余空间并平分了*/
#parent{display: flex;}
#son{margin: auto 0;}
```

优缺点

- 优点：简单灵活；功能强大
- 缺点：PC端[兼容性不好](https://link.juejin.cn/?target=https%3A%2F%2Fcaniuse.com%2F%23search%3Dflex)，移动端（Android4.0+）

###### (5)任意个元素(flex)

原理：flex设置对齐方式罢了，请查阅文末flex阅读推荐

```css
#parent{
    display: flex;
    align-items: center;
}

或

#parent{
    display: flex;
}
.son{
    align-self: center;
}

或 

#parent{
    display: flex;
    flex-direction: column;
    justify-content: center;
}
```

优缺点

- 优点：简单灵活；功能强大
- 缺点：PC端[兼容性不好](https://link.juejin.cn/?target=https%3A%2F%2Fcaniuse.com%2F%23search%3Dflex)，移动端（Android4.0+）

#### 本章小结：

- 对于垂直居中，最先想到的应该就是 `line-height` 了，但是这个只能用于行内内容；
- 其次就是考虑能不能用`vertical-align: middle;` ，不过这个一定要熟知原理才能用得顺手，建议看下[vertical-align和line-height的基友关系](https://link.juejin.cn/?target=http%3A%2F%2Fwww.zhangxinxu.com%2Fwordpress%2F2015%2F08%2Fcss-deep-understand-vertical-align-and-line-height%2F) ；
- 然后便是绝对定位，虽然代码多了点，但是胜在适用于不同情况；
- 移动端兼容性允许的情况下能用flex就用flex

#### 水平垂直居中

##### (1)行内/行内块级/图片▲ 

原理：`text-align: center;` 控制行内内容相对于块父元素水平居中,然后就是`line-height`和`vertical-align`的基友关系使其垂直居中，`font-size: 0;` 是为了消除近似居中的bug

```css
#parent{
    height: 150px;
    line-height: 150px;  /*行高的值与height相等*/
    text-align: center;
    font-size: 0;   /*消除幽灵空白节点的bug*/
}
#son{
    /*display: inline-block;*/  /*如果是块级元素需改为行内或行内块级才生效*/
    vertical-align: middle;
}
```

优缺点

- 优点：代码简单；兼容性好（ie8+）
- 缺点：只对行内内容有效；需要添加`font-size: 0;` 才可以完全的垂直居中；不过需要注意html中#parent包裹#son之间需要有换行或空格；熟悉`line-height`和`vertical-align`的基友关系较难

##### (2)table-cell 

原理：CSS Table，使表格内容垂直对齐方式为middle,然后根据是行内内容还是块级内容采取不同的方式达到水平居中

```css
#parent{
    height: 150px;
    width: 200px;
    display: table-cell;
    vertical-align: middle;
    /*text-align: center;*/   /*如果是行内元素就添加这个*/
}
#son{
    /*margin: 0 auto;*/    /*如果是块级元素就添加这个*/
    width: 100px;
    height: 50px;
}
```

优缺点

- 优点：简单；适用于宽度高度未知情况；兼容性好（ie8+）
- 缺点：设置tabl-cell的元素，宽度和高度的值设置百分比无效，需要给它的父元素设置`display: table;` 才生效；table-cell不感知margin，在父元素上设置table-row等属性，也会使其不感知height；设置float或position会对默认布局造成破坏，可以考虑为之增加一个父div定义float等属性；内容溢出时会自动撑开父元素

##### (3)button作为父元素 

 原理：button的默认样式，再把需要居中的元素表现形式改为行内或行内块级就好 

```css
button#parent{  /*改掉button默认样式就好了,不需要居中处理*/
    height: 150px;
    width: 200px;
    outline: none;  
    border: none;
}
#son{
    display: inline-block; /*button自带text-align: center,改为行内水平居中生效*/
}
```

优缺点

- 优点：简单方便，充分利用默认样式
- 缺点：只适用于行内内容；需要清除部分默认样式；水平垂直居中兼容性很好，但是ie下点击会有凹陷效果！

##### (4)绝对定位 

原理：子绝父相，top、right、bottom、left的值是相对于父元素尺寸的，然后margin或者transform是相对于自身尺寸的，组合使用达到几何上的水平垂直居中

```css
#parent{
    position: relative;
}
#son{
    position: absolute;
    top: 50%;
    left: 50%;
    /*定宽高时等同于margin-left:负自身宽度一半;margin-top:负自身高度一半;*/
    transform: translate(-50%,-50%); 
}
```

优缺点

- 优点：使用margin兼容性好；不管是块级还是行内元素都可以实现
- 缺点：代码较多；脱离文档流；使用margin需要知道宽高；使用transform兼容性不好（ie9+）

##### (5)绝对居中 

原理：当top、bottom为0时,margin-top&bottom设置auto的话会无限延伸占满空间并且平分；当left、right为0时,margin-left&right设置auto的话会无限延伸占满空间并且平分

```css
#parent{
    position: relative;
}
#son{
    position: absolute;
    margin: auto;
    width: 100px;
    height: 50px;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
}
```

优缺点

- 优点：无需关注宽高；兼容性较好(ie8+)
- 缺点：代码较多；脱离文档流

##### (6)flex 

 原理：flex设置对齐方式罢了，请查阅文末flex阅读推荐 

```css
#parent{
    display: flex;
}
#son{
    margin: auto;
}

或

#parent{
    display: flex;
    justify-content: center;
    align-items: center;
}

或

#parent{
    display: flex;
    justify-content: center;
}
#son{
    align-self: center;
}
```

优缺点

- 优点：简单灵活；功能强大
- 缺点：PC端[兼容性不好](https://link.juejin.cn/?target=https%3A%2F%2Fcaniuse.com%2F%23search%3Dflex)，移动端（Android4.0+）

##### (7)视窗居中 

原理：vh为视口单位，视口即文档可视的部分，50vh就是视口高度的50/100，设置50vh上边距再

```css
#son{
	/*0如果去掉，则会多出滚动条并且上下都是50vh的margin。如果去掉就给body加上overflow:hidden;*/
    margin: 50vh auto 0;  
    transform: translateY(-50%);
}
```

优缺点

- 优点：简单；容易理解；两句代码达到屏幕水平垂直居中
- 缺点：兼容性不好（ie9+，Android4.4+）

#### ★本章小结：

- 一般情况下，水平垂直居中，我们最常用的就是绝对定位加负边距了，缺点就是需要知道宽高，使用transform倒是可以不需要，但是兼容性不好（ie9+）；
- 其次就是绝对居中，绝对定位设置top、left、right、bottom为0，然后`margin:auto;` 让浏览器自动平分边距以达到水平垂直居中的目的；
- 如果是行内/行内块级/图片这些内容，可以优先考虑`line-height`和`vertical-align` 结合使用，不要忘了还有`text-align` ，这个方法代码其实不多，就是理解原理有点困难，想要熟练应对各种情况还需好好研究；
- 移动端兼容性允许的情况下能用flex就用flex

### 圣杯布局

 圣杯布局是挺常见的三栏式布局。两边顶宽，中间自适应的三栏布局。 

![](https://user-gold-cdn.xitu.io/2017/8/20/00913c0a5f49e94f13dd4a0bf5eea826?imageView2/0/w/1280/h/960/format/webp/ignore-error/1)

 这个布局方式的关键是怎么样才能使得在伸缩浏览器窗口的时候让中间的子元素宽度改变。可以适应浏览器的宽度变化使用百分比设置宽度再合适不过，所以我们要将中间子元素的宽度设置为 `100%`，左边和右边的子元素设置为固定的宽度。 

 HTML 文件就很普通： 

```html
<div class="container">
    <div class="middle">测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试</div>
    <div class="left">left</div>
    <div class="right">right</div>
</div>
```

 **这里我们要注意的是，中间栏要在放在文档流前面以优先渲染。** 

#### 给出每个子元素的样式

然后我们写 CSS，我们现将其三个元素的宽度和高度设置好，然后都设置为 `float:left`:

```css
  .middle{
      width: 100%;
      background: paleturquoise;
      height: 200px;
      float: left;
  }
  .left{
      background: palevioletred;
      width: 200px;
      height: 200px;
      float: left;
      font-size: 40px;
      color: #fff;
  }
  .right{
      width: 200px;
      height: 200px;
      background: purple;
      font-size: 40px;
      float: left;
      color: #fff;
  }
```

 这时的效果如下： 

![](https://user-gold-cdn.xitu.io/2017/8/20/42def5aa9d3b4df14c230506074b7ee0?imageView2/0/w/1280/h/960/format/webp/ignore-error/1)

#### 使子元素在同一行显示

我们可以看出，现在三个子元素是在一排显示的，因为我们给中间的子元素设置的宽度是 `100%`，并且中间的子元素在文档流的最前面，最先被渲染。

那么我们要使得三个元素在同一排显示。接下来我们要将 `.left` 和 `.right` 向上提。实际上我们是使用 `margin-left` 为 负值来实现的，我们将 `.left` 的 `margin-left` 设置为 `-100%`（负的中间子元素的宽度），这样，左边的元素就会被“提升”到上一层。

然后就是右边子元素了，只需要设置 `margin-left` 设置为负的自身的宽度。

结果如下：

![](https://user-gold-cdn.xitu.io/2017/8/20/929b5b13e3a9396bc4b43c8daaf275c4?imageView2/0/w/1280/h/960/format/webp/ignore-error/1)

#### 使得中间子元素不被遮盖

从上一张截图显示中显示中间的子元素被遮挡了，所以说我们要解决这个问题，要怎么解决呢？嗯... 只要使得中间的子元素显示的宽度刚好为左边元素和右边元素显示中间的宽度就可以。同时我们还必须保证是使用的半分比的布局方式。

这样的话有一种方式可以即使中间的宽度减少，又可以使中间的宽度仍然使用 `100%`，那就是设置父元素的 `padding` 值，将父元素的 `padding-left` 设置为左边子元素的宽度，将父元素的 `padding-right` 设置为右边子元素的宽度。

显示效果如下：

![](https://user-gold-cdn.xitu.io/2017/8/20/f4fbde95e4aa19f9ac021138e0106fdf?imageView2/0/w/1280/h/960/format/webp/ignore-error/1)

#### 将左边和右边的子元素像两边移动

嗯... 这貌似也不是我们想要的效果，但是，中间的子元素确实是在中间了，那么我们只需要设置相对位置，将左边的子元素和右边的子元素向两边移动就好。

最终的 CSS 代码如下：

```css
  .container{
      padding: 0 200px;
  }
  .middle{
      width: 100%;
      background: paleturquoise;
      height: 200px;
      float: left;
  }
  .left{
      background: palevioletred;
      width: 200px;
      height: 200px;
      float: left;
      font-size: 40px;
      color: #fff;
      margin-left:-100%;


  }
  .right{
      width: 200px;
      height: 200px;
      background: purple;
      font-size: 40px;
      float: left;
      color: #fff;
      margin-left:-200px;

  }
```

最终效果如下

![](https://user-gold-cdn.xitu.io/2017/8/20/5cca9436df9669d9abebdf7f8fd49c94?imageView2/0/w/1280/h/960/format/webp/ignore-error/1)

### 双飞翼布局

其实双飞翼布局是为了解决圣杯布局的弊端提出的，你就会发现一个问题，当你将浏览器宽度缩短到一定程度的时候，会使得中间子元素的宽度比左右子元素宽度小的时候，这时候布局就会出现问题。所以首先，这提示了我们在使用圣杯布局的时候一定要设置整个容器的最小宽度。

<img src="https://user-gold-cdn.xitu.io/2017/8/20/f83bca0c0e71b7dfb497853f0f5035ad?imageView2/0/w/1280/h/960/format/webp/ignore-error/1" alt="asdsa" style="zoom:50%;" />

#### 双飞翼和圣杯布局区别

圣杯布局和双飞翼布局解决问题的方案在前一半是相同的，也就是三栏全部float浮动，但左右两栏加上负margin让其跟中间栏div并排，以形成三栏布局。

不同在于解决”中间栏div内容不被遮挡“问题的思路不一样：圣杯布局，为了中间div内容不被遮挡，将中间div设置了左右padding-left和padding-right后，将左右两个div用相对布局position: relative并分别配合right和left属性，以便左右两栏div移动后不遮挡中间div。

双飞翼布局，为了中间div内容不被遮挡，直接在中间div内部创建子div用于放置内容，在该子div里用margin-left和margin-right为左右两栏div留出位置。

 所以只是一个小小的改动 

```html
<div class="container">
  <div class="middle-container">
    <div class="middle">测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试</div>
  </div>
  <div class="left">left</div>
  <div class="right">right</div>
</div>
```

```css
  .middle-container{
      width: 100%;
      background: paleturquoise;
      height: 200px;
      float: left;

  }

  .middle{
      margin-left: 200px;
      margin-right: 200px;
  }
  .left{
      background: palevioletred;
      width: 200px;
      height: 200px;
      float: left;
      font-size: 40px;
      color: #fff;
      margin-left:-100%;


  }
  .right{
      width: 200px;
      height: 200px;
      background: purple;
      font-size: 40px;
      float: left;
      color: #fff;
      margin-left:-200px;

  }
```

 这样，在我们将中间元素宽度调到比两边元素小的时候，也是可以正常显示，但是如果总宽度小于左边元素或者右边元素的时候，还是会有问题。 

![](https://user-gold-cdn.xitu.io/2017/8/20/61d393d131af1b12351d76dd2e2c288c?imageView2/0/w/1280/h/960/format/webp/ignore-error/1)

