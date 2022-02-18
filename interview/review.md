<!--

 * @Description: 
 * @Version: 3.0
 * @Autor: 冯帅
 * @Date: 2021-08-09 23:36:27
 * @LastEditors: fengshuai
 * @LastEditTime: 2022-02-18 16:07:27
-->

# html

## 语义化

语义化优点：

- 易于用户阅读，样式丢失的时候能让页面呈现清晰的结构。
- 有利于SEO，搜索引擎根据标签来确定上下文和各个关键字的权重。
- 方便其他设备解析，如盲人阅读器根据语义渲染网页
- 有利于开发和维护，语义化更具可读性，代码更好维护，与CSS3关系更和谐。

## 盒子模型

盒子模型，英文即box model。无论是div、span、还是a都是盒子。

但是，图片、表单元素一律看作是文本，它们并不是盒子。这个很好理解，比如说，一张图片里并不能放东西，它自己就是自己的内容

### 盒子中的区域

一个盒子中主要的属性就5个：width、height、padding、border、margin。如下：

- width和height：**内容**的宽度、高度（不是盒子的宽度、高度）。
- padding：内边距。
- border：边框。
- margin：外边距。

### 标准盒模型和IE盒模型

#### 标准盒模型

标准W3C盒模型的方位包括：margin,border,padding,content,**content部分不包含其他部分**

#### IE盒子模型

IE盒子模型范围包括;margin,border,padding,content,和标准盒子模型不同的是：**IE盒子模型的content部分包含border和padding**

#### CSS盒模型和IE盒模型的区别：

- 在 **标准盒子模型**中，**width 和 height 指的是内容区域**的宽度和高度。增加内边距、边框和外边距不会影响内容区域的尺寸，但是会增加元素框的总尺寸。
- **IE盒子模型**中，**width 和 height 指的是内容区域+border+padding**的宽度和高度。



## 表现与数据分离

第一种是前端与后台分离，所有数据都是通过请求（AJAX）从后台获取，前端处理数据展现页面，不需要后台在页面中插入变量。

第二种前端展现与数据分离。也就是说在前端处理数据的过程中，处理DOM的代码与处理数据的代码要区分开，不能混在一起，这样改起来不会牵连太多，泾渭分明

## HTML5 新特性

### 1.语义化标签

header,nav,section,artical,aside,footer,detail,dialog,figure,figcation

### 2.新增input输入类型（提供输入控制和验证）

1. 输入类型：color,data,datatime,datatime-local,e-mail,month,number,rang,search,tel,url,week
2. 新增表单元素：datalist,keygen,output
3. 新增表单属性：autocomplete,autofacus,form,formaction,placeholder,required,pattern,nultiple,min,max,height,width,step

### 3.音频和视频

audo,video

### 4.canvas

该标签只是图形容器，必须使用脚本来绘制图形（svg与canvas区别）

### 5.地理位置

geolacation定位用户位置信息

### 6.webStorage

本地存储，存储在客户端，包含localStorage和sessionStorage

存：localStorage.setItem(key,value)

读：localStorage.getItem(key)

删：localStorage.removeItem(key)

删除所有：localStorage.clean()

得到某个索引得key：localStorage.key(index)

### 7.webSocket

单个TCP连接上进行全双工通讯协议，，webSocket API中浏览器和服务器只需要做一个握手动作，然后浏览器和服务器端就形成了一个快速通道，二者之间就可以数据互相传递

当webSocket连接后，可以通过**send()**方法向服务器发送数据，**onmessage**事件来接受服务器返回的数据

## SEO优化

>  搜索引擎优化（Search Engine Optimization）,简称SEO。是按照搜索引擎给出的优化建议，以增强网站核心价值为目标，从网站结构、内容建设方案、用户互动传播等角度进行合理规划，以改善网站在搜索引擎中的表现，吸引更多搜索引擎用户访问网站。SEO与搜索引擎，互相促进，互利互助 

>  做SEO是为了提高网站的权重，增强搜索引擎友好度，以达到提高排名，增加流量，改善用户体验，促进销售的作用 

#### 那些事项有助提高SEO

1. 提高页面加载速度

   能用css解决的不用背景图片，背景图片也尽量压缩大小，可以几个icons放在一个图片上，采用css精灵(css sprite)，使用background-position找到需要的图片位置。减少HTTP请求数，提高网页加载速度 

2. 结构，表现和行为的分离

   不要把css和js放在同一个页面，采用外链的方式能大大加快网页加载速度 

3. 优化网站分级结构

   在每个内页加面包屑导航

4. 集中网站权重

   由于蜘蛛分配到每个页面的权重是一定的，这些权重也将平均分配到每个a链接上，那么为了集中网站权重，可以使用”rel=nofollow”属性，它告诉蜘蛛无需抓取目标页,可以将权重分给其他的链接 

5. 文本强调标签的使用

   使用strong标签加粗文字 

6. a标签的title属性的使用

   在不影响页面功能的情况下，可以尽量给a标签加上title属性，可以更有利于蜘蛛抓取信息 

7. 图片alt属性的使用

   这个属性可以在图片加载不出来的时候显示在页面上相关的文字信息 

8. H标签的使用

   主要是H1标签的使用需要特别注意，因为它自带权重，一个页面有且最多只能有一个H1标签，放在该页面最重要的标题上面，如首页的logo上可以加H1标签

9. 图片大小申明

10. 页面布局调整

#### 前端SEO

1. 对网站的标题、关键字、描述精心设置，反映网站的定位，让搜索引擎明白网站是做什么的；
2. 网站内容优化：内容与关键字的对应，增加关键字的密度；
3. 生成针对搜索引擎友好的网站地图；
4. 增加外部链接，到各个网站上宣传；
5. 代码优化

**HTML**：

1. 标签的有开有合。
2. 避免冗余代码，例如去除空格字符。
3. 合理利用标签语义化。
4. 合理的嵌套规则，避免行元素内嵌套块元素。
5. img标签内需要添加title属性和alt属性。
6. a标签内需要添加title属性。
7. Meta标签的优化（过去搜索引擎优化的重要手法，现在已经不是关键因素，但仍不可忽略）主要包括： Meta description、Meta keywords的设置　　关键字密度要适度，通常为2%-8%，也就是说你的关键字必须在页面中出现若干次，或者在搜索引擎允许的范围内，要避免堆砌关键字。
8. `<title>`页面标题，必须列出信息的标题、网站的名称以及相关关键字，避免堆关键字。
9. 合理使用注释。
10. 尽量少使用iframe框架,因为“蜘蛛”一般不会读取其中的内容
11. 文本缩进不要使用特殊符号  应当使用CSS进行设置。版权符号不要使用特殊符号 © 可以直接使用输入法，拼“banquan”，选择序号5就能打出版权符号©



**CSS**：

1. 避免将css代码写在标签内。
2. 如果css代码量少，可直接写在头部。否则请使用外部引入的方式。
3. 请不要使用通配符选择器 *{margin:0;padding:0;} 这不仅仅因为它是缓慢和低效率的方法，而且还会导致一 些不必要的元素也重置了外边距和内边距。
4. css代码缩写可以提高你写代码的速度，精简你的代码量，包括margin，padding，border ，font， background和颜色值等。
5. 利用css继承，如果一个父元素内有多个子元素拥有相同的样式，可将相同的样式定义在元素上。
6. 如果多个元素拥有相同的样式，可定义一个通用的class或使用群组选择器。
7. 使用背景图合并技术。
8. 适当的代码注释。
9. 谨慎使用 display：none ：对于不想显示的文字内容，应当设置z-index或设置到浏览器显示器之外。因为搜索引擎会过滤掉display:none其中的内容

**js**：

1. 采用外部引入的方法。

2. 合理合并JS代码，可减少服务器的压力。

3. 良好的JS代码习惯。例如：减少页面重绘，减少作用域链上的查找次数

# css

## CSS3新特性

1. 选择器
   * 子元素
   * 相邻元素
   * 群组
   * 属性
   * 伪元素
1. 边框圆角
2. 盒阴影
3. 背景
4. 渐变
5. 过渡
6. 变化
7. 动画
8. 伸缩盒
9. 多列

### 选择器

css选择器

1. 标签选择器（如：body,div,p,ul,li）
2. id选择器（如：id="name",id="name_txt"）
3. 类选择器（如：class="name",class="name_txt"）
4. 属性选择器（[title='mytitle']）
5. 后代选择器（如：#head .nav ul li 从父集到子孙集的选择器）
6. 兄弟选择器（元素 + / 元素~）
7. 子元素选择器（如：div>p ,带大于号>）
8. 伪类选择器（如：就是链接样式,a元素的伪类，4种不同的状态：link、visited、active、hover。）
9. 伪元素选择器 （::fater,::before）
10. 否定选择器（父元素 :not(span))

选择器权重

* 行内样式（1000）> ID选择器（100）>类，属性选择器和伪类选择器（10）> 元素选择器和伪元素选择器（1）>通配符选择器（0）

### 边框圆角

Border-radius  

### 盒阴影

Box-shadow  

### 背景

background-cilp：指定背景的绘制区域

background-origin：设置背景图像的原始起始位置  

background-size：指定背景图像的大小

background-image: url('1.jpg),url('2.jpg') ... 使用逗号把图片分开

### 渐变

#### 线性渐变

background-image：是沿着一根轴线改变颜色，从起点到终点进行顺序渐变

**方向**

background-image:linear-gradient(方向，开始颜色，结束颜色)

1) 从上到下（默认）：background: linear-gradient(red,blue);

2) 从左到右：background: linear-gradient(to right,red,blue);

3) 对角：background: linear-gradient(to right bottom,red,blue);

**颜色节点**

1) background: linear-gradient(red 10%,blue 20%,green 30%,yellow 40%);

从0%到10%，为红色，从10%到20%为红色到蓝色的渐变，从20%到30%为蓝色到绿色的渐变，从30%到40%，为绿色到黄色的渐变

2) background: linear-gradient(red 50%,blue);

  从0%到50%，为红色，从50%到100%为红色到蓝色的渐变，最后如果不写具体数值，默认到100%

3) background: linear-gradient(red,blue 30%);

从0%到30%，为红色到蓝色的渐变，如果第一个不写，默认数值是 0%

4) background: linear-gradient(rgba(255,0,0,0),rgba(255,0,0,1));

 由透明色变为不透明色

**重复渐变**

background: repeating-linear-gradient(90deg,red 0%,blue 20%);

或者 

background: repeating-linear-gradient(90deg,red 0%,blue 10%,red 20%);

#### 径向渐变

background-image：从起点到终点，颜色从内向外进行圆形渐变

background:radial-gradient(形状尺寸，开始颜色，结束颜色)

**形状分类**

1) 圆形circle

2) 椭圆形ellipse 

3) 注意：当元素的高和宽一样时，参数无论设置谁，都是圆形

**颜色节点**

background: radial-gradient(circle,red 30% ,blue 70%);

注意：此时的百分比,指的是圆心到元素最远端的距离（角度）

**尺寸**

1) closest-side最近边 

background: radial-gradient(closest-side circle,red , blue);

2) farthest-side 最远边

background: radial-gradient(farthest-side circle,red , blue);

3) closest-corner最近角

background: radial-gradient(closest-corner circle,red , blue);

4) farthest-corner最远角

background: radial-gradient(farthest-corner circle,red , blue);

**重复渐变**

background: repeating-radial-gradient(red 0%,blue 20%);

background: repeating-radial-gradient(red 0%,blue 10%,red 20%);

### 过度

* transition-property  设置对象中的参与过渡的属性  

​         语法：transition-property：none | all | property  

* transition-duration  设置对象过渡的持续时间  

​         语法：transition-duration：time  

* transition-timing-function   设置对象中过渡的动画类型  

​         语法：transition-timing-function：动画类型（只能使用一种）  

​		参数说明：

​		linear:线性过渡（匀速）cubic-bezier(0,0,1,1)

​		ease:平滑过渡（慢--快--慢），默认值 cubic-bezier(0.25,0.1,0.25,1)

​		ease-in:慢--快 cubic-bezier(0.42,0,1,1)

​		ease-out:快--慢 cubic-bezier(0,0,0.58,1)

​		ease-in-out:慢--快--慢 cubic-bezier(0.42,0,0.58,1)

贝塞尔曲线

* transition-delay 设置对象延迟的过渡时间  

​         语法：transition-delay：time  

* transitiion  设置对象变换时的过渡  

​         语法：transition：property duration timing-function delay；  

​		参数说明：

​		时间顺序不能乱，其他参数位置不限

​		如果想给多个属性添加不同的过度，参数之间使用逗号分开

### 变换

#### 2D变换

1. 旋转

​         语法：transform：rotate(angle) 单位deg  

​         注意：angle指旋转角度，正数表示顺时针旋转，负数表示逆时针旋转  

2. 平移

   语法：

   transform：translateX() --- 仅水平方向移动

   transform：translateY() --- 仅垂直方向移动

   transform：translate( X, Y) --- 水平方向和垂直方向同时移动

   单位px

   注意：如果只写一个参数，第二个默认是0，也就是只设置了水平方向上的位移

3. 缩放

   语法：

   transform：scaleX() --- 仅水平方向缩放

   transform：scaleY() --- 仅垂直方向缩放

   transform：scale(x,y) --- 使元素垂直和水平方向同时缩放

   没有单位

   注意：如果只写一个参数，元素垂直和水平方向同时缩放

4. 扭曲/倾斜

   语法：

   transform：skewX() --- 仅使元素在水平方向上扭曲变形

   transform：skewY() --- 仅使元素在垂直方向上扭曲变形

   transform：skew(x,y) --- 使元素在水平方向和垂直方向上扭曲变形

   单位deg

   注意：0deg与180deg 效果一样

5. 变换基点

   语法：

   transform-origin：水平方向 垂直方向  

   默认值：

   rotate  几何中心点

   skew 几何中心点

   scale 几何中心点

   translate 本身位置

#### 3D变换

1. 开启3D空间

   transform-style: preserve-3d（一般对父元素设置）

2. 3D变换设置

   rotateX()：指对象在X轴上的旋转角度（变换基点： 50% 50% 0）

   rotateY()：指对象在Y轴上的旋转角度（变换基点： 50% 50% 0）

   rotateZ()：指对象在Z轴上的旋转角度（变换基点： 50% 50% 0）

   translateZ()：指对象在Z轴上面的平移（变换基点： 50% 50% 0）

   scaleZ():指对象在Z轴上面的缩放（变换基点： 50% 50% 0）

3. 景深设置

   设置：

   父元素设置景深：perspective: 300px;

   子元素设置景深：transform:perspective(300px) translateZ(-200px);

4. 变换基点

   语法使用：可以使用关键字（top,bottom,left,right）,百分比，具体像素值等  

5. 景深中心点

   语法使用：

   perspective-origin: top right;

6. 元素背面是否可见

   backface-visibility:visible ;（默认值：可见）

   backface-visibility: hidden; 不可见

### 动画

语法：keyframes关键帧，用来决定动画变化的关键位置  

@keyframes animationname{

​         keyframes-selector{

​           cssStyles;

​                }

  }

参数说明：

animationname：必写项，定义动画的名称

keyframes-selector：必写项，动画持续时间的百分比

0% - 100%之间， 或者使用from和to关键字也可以设置，from代表0%，to代表100%

1. animation-name  设置对象所应用的动画名称  

   语法：animation-name：keyframename | none 

   参数说明：

   keyframename：指定要绑定到选择器的关键帧的名称 

2. animation-duration  设置对象动画的持续时间  

​         语法：animation-duration：time

​		参数说明：

​		指定对象播放完成需要花费的时间，默认值是0

3. animation-timing-function  设置对象动画的过渡类型  

   参数说明：

   linear:线性过渡（匀速）

   ease:平滑过渡（0--慢--快--慢），默认值

   ease-in:慢--快

   ease-out:快--慢

   ease-in-out:慢--快--慢

   贝塞尔曲线

   Steps():运动按步数进行

4. animation-delay  设置对象动画的延迟时间  

​         语法：animation-delay：time  

​		参数说明：

​		可选值，定义动画开始前等待的时间，以秒或者毫秒数计数，默认值是0

5.  animation-iteration-count   设置对象动画的循环次数  

​         语法：animation-iteration-count ： infinite | number  

​		参数说明：

​		number为数字，其默认值是1

​		infinite：无限循环次数

6. animation-direction   设置对象动画是否反向运动  

   语法：

   animation-direction：normal , reverse , alternate , alternate-reverse

   参数说明：

   Normal:正常方向

   reverse :反向运动

   Alternate:先正常运动在反向运动，并持续交替运行， 需要配合循环属性使用

   alternate-reverse:先反向运动在正常运动，并持续交替运行， 需要配合循环属性使用

7. animation-play-state   设置对象是否正在运行或已暂停  

​         语法：animation-play-state：paused | running  

​		参数说明：

​		paused ： 指定暂停动画

​		running : 默认值，制定正在运行的动画

8. animation-fill-mode  设置对象动画外的状态  

​         语法：animation-fill-mode：backwards | both | forwards  

​		参数说明：

​		backwards ： 让元素一开始与 form 状态保持一致

​		both : 让元素一开始与 from 状态保持一致,结束时候与to状态保持一致

​		forwards: 结束时候与to状态保持一致

9. animation  设置对象所应用的动画特效  

   语法：

   animation ： name duration timing-function delay iteration-count direction play-state  

   ```css
   /* 动画代码 */
   @keyframes example {
     0%   {background-color:red; left:0px; top:0px;}
     25%  {background-color:yellow; left:200px; top:0px;}
     50%  {background-color:blue; left:200px; top:200px;}
     75%  {background-color:green; left:0px; top:200px;}
     100% {background-color:red; left:0px; top:0px;}
   }
   
   /* 应用动画的元素 */
   div {
     width: 100px;
     height: 100px;
     position: relative;
     background-color: red;
     animation-name: example;
     animation-duration: 4s;
   }
   ```



## position

1. static：

    默认值。没有定位，元素出现在正常的流中（忽略 top, bottom, left, right 或者 z-index 声明

2. relative：

    生成相对定位的元素，相对于其正常位置进行定位。因此，"left:20" 会向元素的 LEFT 位置添加 20 像素

3. absolute：

    生成绝对定位的元素，相对于 static 定位以外的第一个父元素进行定位。元素的位置通过 "left", "top", "right" 以及 "bottom" 属性进行规定

4. fixed：

    生成固定定位的元素，相对于浏览器窗口进行定位。元素的位置通过 "left", "top", "right" 以及 "bottom" 属性进行规定

5. sticky：

    粘性定位，该定位基于用户滚动的位置。它的行为就像 position:relative; 而当页面滚动超出目标区域时，它的表现就像 position:fixed;，它会固定在目标位置。**注意:** Internet Explorer, Edge 15 及更早 IE 版本不支持 sticky 定位。 Safari 需要使用 -webkit- prefix

6. inherit:

    规定应该从父元素继承 position 属性的值 

## display

1. block：元素呈现为块级元素 

2. compact：元素呈现为块级元素或内联元素，取决于上下文 

3. inherit：display 属性的值从父元素继承 

4. inline：默认。元素呈现为内联元素

5. inline-block：元素呈现为内联盒子内的块盒子

6.  inline-table：元素呈现为内联表格（类似 <table>），表格前后没有换行符

7.  list-item：元素呈现为列表

8. marker：该值在盒子前后设置内容作为标记（与 :before 和 :after 伪元素一起使用，否则该值与 "inline" 是相同的） 

9.  none：元素不会被显示

10. run-in：元素呈现为块级或内联元素，取决于上下文

11. table：元素呈现为块级表格（类似 `<table>`），表格前后带有换行符

12. table-caption：元素呈现为表格标题（类似 `<caption>`）

13. table-cell：元素呈现为表格单元格（类似 `<td>` 和 `<th>`）

14. table-column：元素呈现为单元格的列（类似 `<col>`）

15. table-column-group：元素呈现为一个或多个列的分组（类似 `<colgroup>` ）

16. table-footer-group：元素呈现为表格页脚行（类似 `<tfoot>`）

17. table-header-group：元素呈现为表格页眉行（类似 `<thead>`）

18. table-row：元素呈现为表格行（类似 `<tr>`）

19. table-row-group：元素呈现为一个或多个行的分组（类似 `<tbody>`）


## 水平垂直居中

1. text-align：center , linght-height

2. position(元素已知宽度) + margin

   ```css
   position: absolute;
   left: 50%;
   top: 50%;
   margin: -50px 0 0 -50px;
   ```

   

3. flex(元素未知宽度)

4. absolute + relative

   ```css
   position:absolute;
   left:0;
   right:0;
   top:0;
   bottom:0;
   margin:auto;
   ```

5. transform + position

   ```css
    position:absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%)
   ```

6. table-cell布局

## 清除浮动

产生原因： 一个盒子里使用了CSS float浮动属性，导致父级对象盒子不能被撑开

1. 父级定义伪类：after和zoom
2. 父级：clear：both
3. 父级：定义高度
4. 父级：overflow：hidder/auto
5. 父级：浮动
6. 父级：display：table
7. 结尾处加br标签clear：both

## 伪类和伪元素

### 伪类分类和作用

![](https://images0.cnblogs.com/i/613712/201406/011913555563267.png)

### 伪元素的分类和作用

![](https://images0.cnblogs.com/i/613712/201406/042055205362355.png)

# js

## 节流/防抖

节流：高频触发事件，n秒内只执行一次，稀释执行频率

**原理**：用时间戳判断是否已到回调该执行时间；记录上次执行的时间戳，每次触发事件执行回调，回调中判断当前时间戳距离上次执行时间戳的间隔是否已经到达规定时间段，如果是，则执行，并更新上次执行的时间戳，如此循环

```js
function throttle(fn, delay) {
  // 记录上一次函数触发的时间
  var lastTime = 0;
  return function() {
    // 记录当前函数触发的时间
    var nowTime = Date.now();
    if (nowTime - lastTime > delay) {
      // 修正this指向问题
      fn.call(this);
      // 同步时间
      lastTime = nowTime;
    }
  }
}
document.onscroll = throttle(function() { 
  console.log('scroll事件被触发了' + Date.now()) 
}, 200)
```

```js
function throttlePro(delay, action) {
  var tId;
  return function () {
    var context = this;
    var arg = arguments;
    if (tId) return;
    tId = setTimeout(function () {
      action.apply(context, arg);
      clearTimeout(tId);
      // setTimeout 返回一个整数，clearTimeout 之后，tId还是那个整数,setInterval同样如此
      tId = null;
    }, delay);
  }
}
```

**函数节流的应用场景**

1. 需要间隔一定时间触发回调来控制函数调用频率：
2. DOM 元素的拖拽功能实现（mousemove）
3. 搜索联想（keyup）
4. 计算鼠标移动的距离（mousemove）
5. Canvas 模拟画板功能（mousemove）
6. 射击游戏的 mousedown/keydown 事件（单位时间只能发射一颗子弹）
7. 监听滚动事件判断是否到页面底部自动加载更多：给 scroll 加了 debounce 后，只有用户停止滚动后，才会判断是否到了页面底部；如果是 throttle 的话，只要页面滚动就会间隔一段时间判断一次

防抖：高频触发事件后n秒内函数只会执行一次，如果n秒内事件再次被触发，则重新计时

**原理：**第一次调用函数，创建一个定时器，在指定的时间间隔之后运行代码。当第二次调用该函数时，它会清除前一次的定时器并设置另一个。如果前一个定时器已经执行过了，这个操作就没有任何意义。然而，如果前一个定时器尚未执行，其实就是将其替换为一个新的定时器，然后延迟一定时间再执行

```js
<button id='btn'>按钮</button>
<script type="text/javascript">
function debounce(fn, delay) {
    // 记录上一次的延时器
    var timer = null;
    return function() {
        // 清除上一次延时器
        clearTimeout(timer)
        timer = setTimeout(function() {
            fn.apply(this)
        }, delay)
    }
}
document.getElementById('btn').onclick = debounce(function() {
    console.log('点击事件被触发' + Date.now())
}, 1000)
</script>
```

**上面用到了闭包的特性--可以使变量timer的值长期保存在内存中。**
**函数防抖的应用场景**

1. 对于连续的事件响应我们只需要执行一次回调：
2. 每次 resize/scroll 触发统计事件
3. 文本输入的验证（连续输入文字后发送 AJAX 请求进行验证，验证一次就好）

## ES6 暴露方式

1. 多行暴露

   ```js
   // a.js
   export function a1() {
       console.log('导出1')
   }
   export function a2() {
       console.log('导出2')
   }
   ```

   ```js
   // index.js
   // 解构赋值
   import {a1, a2} from 'a.js'
   ```

2. 统一暴露

   ```js
   // b.js
   function b1() {
       console.log('导出1')
   }
   function b2() {
       console.log('导出2')
   }
   export {b1,b2}
   ```

   ```js
   // index.js
   import {b1, b2} from 'b.js'
   ```

3. 默认暴露

   ```js
   // c.js
   export default function c() {
       console.log('默认导出')
   }
   ```

   ```js
   // index.js
   import c from 'c.js'
   c.c()
   ```


## ajax和axios、fetch的区别

**1.jQuery ajax**

```jsx
$.ajax({
   type: 'POST',
   url: url,
   data: data,
   dataType: dataType,
   success: function () {},
   error: function () {}
});
```

传统 Ajax 指的是 XMLHttpRequest（XHR）， 最早出现的发送后端请求技术，隶属于原始js中，核心使用XMLHttpRequest对象，多个请求之间如果有先后关系的话，就会出现**回调地狱**。
 JQuery ajax 是对原生XHR的封装，除此以外还增添了对**JSONP**的支持。经过多年的更新维护，真的已经是非常的方便了，优点无需多言；如果是硬要举出几个缺点，那可能只有：
 1.本身是针对MVC的编程,不符合现在前端**MVVM**的浪潮
 2.基于原生的XHR开发，XHR本身的架构不清晰。
 3.JQuery整个项目太大，单纯使用ajax却要引入整个JQuery非常的不合理（采取个性化打包的方案又不能享受CDN服务）
 4.不符合关注分离（Separation of Concerns）的原则
 5.配置和调用方式非常混乱，而且基于事件的异步模型不友好

**2.axios**

```jsx
axios({
    method: 'post',
    url: '/user/12345',
    data: {
        firstName: 'Fred',
        lastName: 'Flintstone'
    }
})
.then(function (response) {
    console.log(response);
})
.catch(function (error) {
    console.log(error);
});
```

Vue2.0之后，尤雨溪推荐大家用axios替换JQuery ajax，想必让axios进入了很多人的目光中。
 axios 是一个基于Promise 用于浏览器和 nodejs 的 HTTP 客户端，本质上也是对原生XHR的封装，只不过它是Promise的实现版本，符合最新的ES规范，它本身具有以下特征：
 1.从浏览器中创建 XMLHttpRequest
 2.支持 Promise API
 3.客户端支持防止CSRF
 4.提供了一些并发请求的接口（重要，方便了很多的操作）
 5.从 node.js 创建 http 请求
 6.拦截请求和响应
 7.转换请求和响应数据
 8.取消请求
 9.自动转换JSON数据

PS:防止CSRF:就是让你的每个请求都带一个从cookie中拿到的key, 根据浏览器同源策略，假冒的网站是拿不到你cookie中得key的，这样，后台就可以轻松辨别出这个请求是否是用户在假冒网站上的误导输入，从而采取正确的策略

**3.fetch**

```jsx
try {
  let response = await fetch(url);
  let data = response.json();
  console.log(data);
} catch(e) {
  console.log("Oops, error", e);
}
```

fetch号称是AJAX的替代品，是在ES6出现的，使用了ES6中的promise对象。Fetch是基于promise设计的。Fetch的代码结构比起ajax简单多了，参数有点像jQuery ajax。但是，一定记住**fetch不是ajax的进一步封装，而是原生js，没有使用XMLHttpRequest对象**。
 fetch的优点：
 1.符合关注分离，没有将输入、输出和用事件来跟踪的状态混杂在一个对象里
 2.更好更方便的写法
 坦白说，上面的理由对我来说完全没有什么说服力，因为不管是Jquery还是Axios都已经帮我们把xhr封装的足够好，使用起来也足够方便，为什么我们还要花费大力气去学习fetch？
 我认为fetch的优势主要优势就是：

```jsx
1.  语法简洁，更加语义化
2.  基于标准 Promise 实现，支持 async/await
3.  同构方便，使用 [isomorphic-fetch](https://github.com/matthew-andrews/isomorphic-fetch)
4.更加底层，提供的API丰富（request, response）
5.脱离了XHR，是ES规范里新的实现方式
```

最近在使用fetch的时候，也遇到了不少的问题：
 fetch是一个低层次的API，你可以把它考虑成原生的XHR，所以使用起来并不是那么舒服，需要进行封装。
 例如：

```css
1）fetch只对网络请求报错，对400，500都当做成功的请求，服务器返回 400，500 错误码时并不会 reject，只有网络错误这些导致请求不能完成时，fetch 才会被 reject。
2）fetch默认不会带cookie，需要添加配置项： fetch(url, {credentials: 'include'})
3）fetch不支持abort，不支持超时控制，使用setTimeout及Promise.reject的实现的超时控制并不能阻止请求过程继续在后台运行，造成了流量的浪费
4）fetch没有办法原生监测请求的进度，而XHR可以
```

**总结：axios既提供了并发的封装，也没有fetch的各种问题，而且体积也较小，当之无愧现在最应该选用的请求的方式**

# vue

## watch和computed

1. 加载时先computed在watch
2. 触发某一事件，先methods在再watch

**watch**：支持异步（不支持缓存），数据变化会直接触发相应操作（immediate，deep）

**computed**：支持缓存（不支持异步），依赖数据发生变化，才会重新计算（get，set）

## v-if vs v-show

`v-if` 是“真正”的条件渲染，因为它会确保在切换过程中条件块内的事件监听器和子组件适当地被销毁和重建。

`v-if` 也是**惰性的**：如果在初始渲染时条件为假，则什么也不做——直到条件第一次变为真时，才会开始渲染条件块。

相比之下，`v-show` 就简单得多——不管初始条件是什么，元素总是会被渲染，并且只是简单地基于 CSS 进行切换。

一般来说，`v-if` 有更高的切换开销，而 `v-show` 有更高的初始渲染开销。因此，如果需要非常频繁地切换，则使用 `v-show` 较好；如果在运行时条件很少改变，则使用 `v-if` 较好

## v-if vs v-for

> **不推荐**同时使用 `v-if` 和 `v-for`。请查阅[风格指南](https://cn.vuejs.org/v2/style-guide/#避免-v-if-和-v-for-用在一起-必要)以获取更多信息。

当 `v-if` 与 `v-for` 一起使用时，`v-for` 具有比 `v-if` 更高的优先级。请查阅[列表渲染指南](https://cn.vuejs.org/v2/guide/list.html#v-for-with-v-if)以获取详细信息。

当它们处于同一节点，`v-for` 的优先级比 `v-if` 更高，这意味着 `v-if` 将分别重复运行于每个 `v-for` 循环中。当你只想为*部分*项渲染节点时，这种优先级的机制会十分有用，如下：

```
<li v-for="todo in todos" v-if="!todo.isComplete">
  {{ todo }}
</li>
```

上面的代码将只渲染未完成的 todo。

而如果你的目的是有条件地跳过循环的执行，那么可以将 `v-if` 置于外层元素 (或 [`](https://cn.vuejs.org/v2/guide/conditional.html#在-lt-template-gt-中配合-v-if-条件渲染一整组)) 上。如：

```html
<ul v-if="todos.length">
  <li v-for="todo in todos">
    {{ todo }}
  </li>
</ul>
<p v-else>No todos left!</p>
```

## v-for key的作用

当 Vue 正在更新使用 `v-for` 渲染的元素列表时，它默认使用“就地更新”的策略。如果数据项的顺序被改变，Vue 将不会移动 DOM 元素来匹配数据项的顺序，而是就地更新每个元素，并且确保它们在每个索引位置正确渲染。这个类似 Vue 1.x 的 `track-by="$index"`。

这个默认的模式是高效的，但是**只适用于不依赖子组件状态或临时 DOM 状态 (例如：表单输入值) 的列表渲染输出**。

为了给 Vue 一个提示，以便它能跟踪每个节点的身份，从而重用和重新排序现有元素，你需要为每项提供一个唯一 `key` attribute：

```
<div v-for="item in items" v-bind:key="item.id">
  <!-- 内容 -->
</div>
```

建议尽可能在使用 `v-for` 时提供 `key` attribute，除非遍历输出的 DOM 内容非常简单，或者是刻意依赖默认行为以获取性能上的提升。

因为它是 Vue 识别节点的一个通用机制，`key` 并不仅与 `v-for` 特别关联。后面我们将在指南中看到，它还具有其它用途。

不要使用对象或数组之类的非基本类型值作为 `v-for` 的 `key`。请用字符串或数值类型的值。

## nextTick()

> Vue 实现响应式并**不是数据发生变化之后 DOM 立即变化**，而是按一定的策略进行 DOM 的更新。

可能你还没有注意到，Vue 在更新 DOM 时是**异步**执行的。只要侦听到数据变化，Vue 将开启一个队列，并缓冲在同一事件循环中发生的所有数据变更。如果同一个 watcher 被多次触发，只会被推入到队列中一次。这种在缓冲时去除重复数据对于避免不必要的计算和 DOM 操作是非常重要的。然后，在下一个的事件循环“tick”中，Vue 刷新队列并执行实际 (已去重的) 工作。Vue 在内部对异步队列尝试使用原生的 `Promise.then`、`MutationObserver` 和 `setImmediate`，如果执行环境不支持，则会采用 `setTimeout(fn, 0)` 代替 

![](https://segmentfault.com/img/bV17xC?w=423&h=512)

> 事件循环：

第一个 tick（图例中第一个步骤，即'本次更新循环'）：

1. 首先修改数据，这是同步任务。同一事件循环的所有的同步任务都在主线程上执行，形成一个执行栈，此时还未涉及 DOM 。
2. Vue 开启一个异步队列，并缓冲在此事件循环中发生的所有数据改变。如果同一个 watcher 被多次触发，只会被推入到队列中一次。

第二个 tick（图例中第二个步骤，即'下次更新循环'）：

同步任务执行完毕，开始执行异步 watcher 队列的任务，更新 DOM 。Vue 在内部尝试对异步队列使用原生的 Promise.then 和 MessageChannel 方法，如果执行环境不支持，会采用 setTimeout(fn, 0) 代替。

第三个 tick（图例中第三个步骤）：

此时就是文档所说的

> 下次 DOM 更新循环结束之后

此时通过 Vue.nextTick 获取到改变后的 DOM 。通过 setTimeout(fn, 0) 也可以同样获取到。

**在组件内使用 `vm.$nextTick()` 实例方法特别方便，因为它不需要全局 `Vue`，并且回调函数中的 `this` 将自动绑定到当前的 Vue 实例上**

**因为 `$nextTick()` 返回一个 `Promise` 对象，所以你可以使用新的 [ES2017 async/await](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Statements/async_function) 语法完成相同的事情**

------

简单总结事件循环：

同步代码执行 -> 查找异步队列，推入执行栈，执行Vue.nextTick[事件循环1] ->查找异步队列，推入执行栈，执行Vue.nextTick[事件循环2]...

总之，异步是单独的一个tick，不会和同步在一个 tick 里发生，也是 DOM 不会马上改变的原因。

## [对于数组](https://cn.vuejs.org/v2/guide/reactivity.html#对于数组)

Vue 不能检测以下数组的变动：

1. 当你利用索引直接设置一个数组项时，例如：`vm.items[indexOfItem] = newValue`
2. 当你修改数组的长度时，例如：`vm.items.length = newLength`

## 导航守卫

> “导航”表示路由正在发生改变。

正如其名，`vue-router` 提供的导航守卫主要用来通过跳转或取消的方式守卫导航。有多种机会植入路由导航过程中：全局的, 单个路由独享的, 或者组件级的。

 记住**参数或查询的改变并不会触发进入/离开的导航守卫**。你可以通过[观察 `$route` 对象](https://router.vuejs.org/zh/guide/essentials/dynamic-matching.html#响应路由参数的变化)来应对这些变化，或使用 `beforeRouteUpdate` 的组件内守卫。 

### 全局前置守卫

你可以使用 `router.beforeEach` 注册一个全局前置守卫：

```js
const router = new VueRouter({ ... })

router.beforeEach((to, from, next) => {
  // ...
})
```

当一个导航触发时，全局前置守卫按照创建顺序调用。守卫是异步解析执行，此时导航在所有守卫 resolve 完之前一直处于 **等待中**。

每个守卫方法接收三个参数：

- **`to: Route`**: 即将要进入的目标 [路由对象](https://router.vuejs.org/zh/api/#路由对象)
- **`from: Route`**: 当前导航正要离开的路由
- **`next: Function`**: 一定要调用该方法来 **resolve** 这个钩子。执行效果依赖 `next` 方法的调用参数。
  - **`next()`**: 进行管道中的下一个钩子。如果全部钩子执行完了，则导航的状态就是 **confirmed** (确认的)。
  - **`next(false)`**: 中断当前的导航。如果浏览器的 URL 改变了 (可能是用户手动或者浏览器后退按钮)，那么 URL 地址会重置到 `from` 路由对应的地址。
  - **`next('/')` 或者 `next({ path: '/' })`**: 跳转到一个不同的地址。当前的导航被中断，然后进行一个新的导航。你可以向 `next` 传递任意位置对象，且允许设置诸如 `replace: true`、`name: 'home'` 之类的选项以及任何用在 [`router-link` 的 `to` prop](https://router.vuejs.org/zh/api/#to) 或 [`router.push`](https://router.vuejs.org/zh/api/#router-push) 中的选项。
  - **`next(error)`**: (2.4.0+) 如果传入 `next` 的参数是一个 `Error` 实例，则导航会被终止且该错误会被传递给 [`router.onError()`](https://router.vuejs.org/zh/api/#router-onerror) 注册过的回调。

**确保 `next` 函数在任何给定的导航守卫中都被严格调用一次。它可以出现多于一次，但是只能在所有的逻辑路径都不重叠的情况下，否则钩子永远都不会被解析或报错**。这里有一个在用户未能验证身份时重定向到 `/login` 的示例：

```js
// BAD
router.beforeEach((to, from, next) => {
  if (to.name !== 'Login' && !isAuthenticated) next({ name: 'Login' })
  // 如果用户未能验证身份，则 `next` 会被调用两次
  next()
})
// GOOD
router.beforeEach((to, from, next) => {
  if (to.name !== 'Login' && !isAuthenticated) next({ name: 'Login' })
  else next()
})
```

###  全局后置钩子

你也可以注册全局后置钩子，然而和守卫不同的是，这些钩子不会接受 `next` 函数也不会改变导航本身：

```js
router.afterEach((to, from) => {
  // ...
})
```

### 路由独享的守卫

你可以在路由配置上直接定义 `beforeEnter` 守卫：

```js
const router = new VueRouter({
  routes: [
    {
      path: '/foo',
      component: Foo,
      beforeEnter: (to, from, next) => {
        // ...
      }
    }
  ]
})
```

这些守卫与全局前置守卫的方法参数是一样的。

### 组件内的守卫

最后，你可以在路由组件内直接定义以下路由导航守卫：

- `beforeRouteEnter`
- `beforeRouteUpdate` (2.2 新增)
- `beforeRouteLeave`

```js
const Foo = {
  template: `...`,
  beforeRouteEnter(to, from, next) {
    // 在渲染该组件的对应路由被 confirm 前调用
    // 不！能！获取组件实例 `this`
    // 因为当守卫执行前，组件实例还没被创建
  },
  beforeRouteUpdate(to, from, next) {
    // 在当前路由改变，但是该组件被复用时调用
    // 举例来说，对于一个带有动态参数的路径 /foo/:id，在 /foo/1 和 /foo/2 之间跳转的时候，
    // 由于会渲染同样的 Foo 组件，因此组件实例会被复用。而这个钩子就会在这个情况下被调用。
    // 可以访问组件实例 `this`
  },
  beforeRouteLeave(to, from, next) {
    // 导航离开该组件的对应路由时调用
    // 可以访问组件实例 `this`
  }
}
```

`beforeRouteEnter` 守卫 **不能** 访问 `this`，因为守卫在导航确认前被调用，因此即将登场的新组件还没被创建。

不过，你可以通过传一个回调给 `next`来访问组件实例。在导航被确认的时候执行回调，并且把组件实例作为回调方法的参数。

```js
beforeRouteEnter (to, from, next) {
  next(vm => {
    // 通过 `vm` 访问组件实例
  })
}
```

注意 `beforeRouteEnter` 是支持给 `next` 传递回调的唯一守卫。对于 `beforeRouteUpdate` 和 `beforeRouteLeave` 来说，`this` 已经可用了，所以**不支持**传递回调，因为没有必要了。

```js
beforeRouteUpdate (to, from, next) {
  // just use `this`
  this.name = to.params.name
  next()
}
```

这个离开守卫通常用来禁止用户在还未保存修改前突然离开。该导航可以通过 `next(false)` 来取消。

```js
beforeRouteLeave (to, from, next) {
  const answer = window.confirm('Do you really want to leave? you have unsaved changes!')
  if (answer) {
    next()
  } else {
    next(false)
  }
}
```

### 完整的导航解析流程

1. 导航被触发。
2. 在失活的组件里调用 `beforeRouteLeave` 守卫。
3. 调用全局的 `beforeEach` 守卫。
4. 在重用的组件里调用 `beforeRouteUpdate` 守卫 (2.2+)。
5. 在路由配置里调用 `beforeEnter`。
6. 解析异步路由组件。
7. 在被激活的组件里调用 `beforeRouteEnter`。
8. 调用全局的 `beforeResolve` 守卫 (2.5+)。
9. 导航被确认。
10. 调用全局的 `afterEach` 钩子。
11. 触发 DOM 更新。
12. 调用 `beforeRouteEnter` 守卫中传给 `next` 的回调函数，创建好的组件实例会作为回调函数的参数传入

## vuex常用API

Vuex 是一种状态管理模式。state：驱动应用的数据源；view：以声明方式将 state 映射到视图；actions: 响应在 view 上的用户输入导致的状态变化。

1.State: 提供一个响应式数据

* this.$store.state.xxx / mapState 取值

2.Getter：借助 Vue 的计算属性 computed 来实现缓存

* this.$store.getters.xxx / mapGetters 取值

3.Mutation：更改 state 方法

* this.$store.commit('xxx') / mapMutations 赋值

4.Action：触发 mutation 方法

* this.$store.dispatch('xxx') / mapActions 赋值

5.Module：Vue.set 动态添加 state 到响应式数据中

（1）开启命名空间 namespaced: true

（2）嵌套模块不用过深，尽量扁平化

（3）灵活应用 createNamespacedHelpers

## 缓存路由

**1.全部缓存**

```vue
<keep-alive>
  <router-view></router-view>
</keep-alive>
```

**2、缓存单个指定路由**

```vue
<keep-alive include="该路由的name名称">
  <router-view></router-view>
</keep-alive>
```

**3、缓存多个指定路由**

```vue
<keep-alive>
  <router-view v-if="$route.meta.keepAlive"></router-view>
</keep-alive>
<router-view v-if="!$route.meta.keepAlive"></router-view>
```

使用两个 **router-view** 标签分别作为缓存和不缓存的路由出口，在路由配置的时候，只需要给要缓存的页面加上 **meta** 属性，然后添加 **keepAlive** 属性设置为 **true** 即可。例如：

```js
{
 path:'/test',
 name:'Test',
 component: Test,
 meta: {keepAlive: true} //true缓存 false不缓存
}
```

## hash与history区别

hash：地址栏中有#符号，#号不会被包含在http请求中，对后端无影响。**即使没做到路由覆盖，也不会返回404错误**

history：用于浏览器的记录栈，go,back,forward,他提供对历史记录修改功能，执行修改时，虽修改当前URL，但浏览器不会立即向后端发送请求，可用history.pushState API来完成。**history模式下，前端URL向后端发起的URL一致，否则返回404错误**

# 浏览器

## 浏览器渲染步骤

1. 处理HTML标记并构建DOM树
2. 处理CSS并构建CSSOM树
3. 将DOM树和CSSOM树合并成一个渲染树
4. 根据渲染树来布局，计算每个节点的布局信息
5. 将各个节点绘制到屏幕上
6. 如果DOM或者CSS被修改，重新执行上面步骤

## 首屏加载优化

1. 尽可能的缩小webpack或缩小打包工具生成的包的大小
2. 使用服务端渲染方式
3. 使用预渲染的方式
4. 使用gzip减少网络传输的流量大小
5. 按照页面或组件分块懒加载

## 跨域

### **什么是同源策略？**
同源策略/SOP（Same origin policy）是一种约定，由Netscape公司1995年引入浏览器，它是浏览器最核心也最基本的安全功能，如果缺少了同源策略，浏览器很容易受到XSS、CSFR等攻击。所谓同源是指"协议+域名+端口"三者相同，**即便两个不同的域名指向同一个ip地址，也非同源**

#### 同源策略限制内容有：

- Cookie、LocalStorage、IndexedDB 等存储性内容
- DOM 节点
- AJAX 请求发送后，结果被浏览器拦截了

但是有三个标签是允许跨域加载资源：

- `<img src=xxx>`
- `<link href=xxx>`
- `<script src=xxx>`

特别说明两点：

**第一：如果是协议和端口造成的跨域问题“前台”是无能为力的。**

**第二：在跨域问题上，仅仅是通过“URL的首部”来识别而不会根据域名对应的IP地址是否相同来判断。“URL的首部”可以理解为“协议, 域名和端口必须匹配”**。

### 解决跨域的方法（[详情](https://juejin.cn/post/6844903767226351623)）

#### 一. JSONP跨域

##### 1. JSONP原理

**利用 `<script>` 标签没有跨域限制的漏洞，网页可以得到从其他来源动态产生的 JSON 数据。JSONP请求一定需要对方的服务器做支持才可以。**

##### 2. JSONP优缺点

JSONP优点是简单兼容性好，可用于解决主流浏览器的跨域数据访问的问题。**缺点是仅支持get方法具有局限性,不安全可能会遭受XSS攻击**

##### 3. JSONP的实现流程

- 声明一个回调函数，其函数名(如show)当做参数值，要传递给跨域请求数据的服务器，函数形参为要获取目标数据(服务器返回的data)。
- 创建一个``标签，把那个跨域的API数据接口地址，赋值给script的src,还要在这个地址中向服务器传递该函数名（可以通过问号传参:?callback=show）。
- 服务器接收到请求后，需要进行特殊的处理：把传递进来的函数名和它需要给你的数据拼接成一个字符串,例如：传递进去的函数名是show，它准备好的数据是`show('我不爱你')`。
- 最后服务器把准备的数据通过HTTP协议返回给客户端，客户端再调用执行之前声明的回调函数（show），对返回的数据进行操作

#### 二. cors跨域

**CORS 需要浏览器和后端同时支持。IE 8 和 9 需要通过 XDomainRequest 来实现**。

浏览器会自动进行 CORS 通信，实现 CORS 通信的关键是后端。只要后端实现了 CORS，就实现了跨域。

服务端设置 Access-Control-Allow-Origin 就可以开启 CORS。 该属性表示哪些域名可以访问资源，如果设置通配符则表示所有网站都可以访问资源

虽然设置 CORS 和前端没什么关系，但是通过这种方式解决跨域问题的话，会在发送请求时出现两种情况，分别为**简单请求**和**复杂请求**

##### 1.简单请求

只要同时满足以下两大条件，就属于简单请求

条件1：使用下列方法之一：

- GET
- HEAD
- POST

条件2：Content-Type 的值仅限于下列三者之一：

- text/plain
- multipart/form-data
- application/x-www-form-urlencoded

请求中的任意 XMLHttpRequestUpload 对象均没有注册任何事件监听器； XMLHttpRequestUpload 对象可以使用 XMLHttpRequest.upload 属性访问

##### 2.复杂请求

不符合以上条件的请求就肯定是复杂请求了。 复杂请求的CORS请求，会在正式通信之前，增加一次HTTP查询请求，称为"预检"请求,该请求是 option 方法的，通过该请求来知道服务端是否允许跨域请求。

#### 三. postMessage跨域

postMessage是HTML5 XMLHttpRequest Level 2中的API，且是为数不多可以跨域操作的window属性之一，它可用于解决以下方面的问题：

- 页面和其打开的新窗口的数据传递
- 多窗口之间消息传递
- 页面与嵌套的iframe消息传递
- 上面三个场景的跨域数据传递

**postMessage()方法允许来自不同源的脚本采用异步方式进行有限的通信，可以实现跨文本档、多窗口、跨域消息传递** 

> otherWindow.postMessage(message, targetOrigin, [transfer]);

- message: 将要发送到其他 window的数据。
- targetOrigin:通过窗口的origin属性来指定哪些窗口能接收到消息事件，其值可以是字符串"*"（表示无限制）或者一个URI。在发送消息的时候，如果目标窗口的协议、主机地址或端口这三者的任意一项不匹配targetOrigin提供的值，那么消息就不会被发送；只有三者完全匹配，消息才会被发送。
- transfer(可选)：是一串和message 同时传递的 Transferable 对象. 这些对象的所有权将被转移给消息的接收方，而发送一方将不再保有所有权。

接下来我们看个例子： `http://localhost:3000/a.html`页面向`http://localhost:4000/b.html`传递“我爱你”,然后后者传回"我不爱你"

```js
// a.html
  <iframe src="http://localhost:4000/b.html" frameborder="0" id="frame" onload="load()"></iframe> //等它加载完触发一个事件
  //内嵌在http://localhost:3000/a.html
    <script>
      function load() {
        let frame = document.getElementById('frame')
        frame.contentWindow.postMessage('我爱你', 'http://localhost:4000') //发送数据
        window.onmessage = function(e) { //接受返回数据
          console.log(e.data) //我不爱你
        }
      }
    </script>
```

```js
// b.html
  window.onmessage = function(e) {
    console.log(e.data) //我爱你
    e.source.postMessage('我不爱你', e.origin)
 }
```

#### 四. webSocket协议跨域

Websocket是HTML5的一个持久化的协议，它实现了浏览器与服务器的全双工通信，同时也是跨域的一种解决方案。WebSocket和HTTP都是应用层协议，都基于 TCP 协议。但是 **WebSocket 是一种双向通信协议，在建立连接之后，WebSocket 的 server 与 client 都能主动向对方发送或接收数据**。同时，WebSocket 在建立连接时需要借助 HTTP 协议，连接建立好了之后 client 与 server 之间的双向通信就与 HTTP 无关了。

原生WebSocket API使用起来不太方便，我们使用`Socket.io`，它很好地封装了webSocket接口，提供了更简单、灵活的接口，也对不支持webSocket的浏览器提供了向下兼容。

```js
// socket.html
<script>
    let socket = new WebSocket('ws://localhost:3000');
    socket.onopen = function () {
      socket.send('我爱你');//向服务器发送数据
    }
    socket.onmessage = function (e) {
      console.log(e.data);//接收服务器返回的数据
    }
</script>
```

```js
// server.js
let express = require('express');
let app = express();
let WebSocket = require('ws');//记得安装ws
let wss = new WebSocket.Server({port:3000});
wss.on('connection',function(ws) {
  ws.on('message', function (data) {
    console.log(data);
    ws.send('我不爱你')
  });
})
```

#### 五. node js中间件代理(二次跨域）

实现原理：**同源策略是浏览器需要遵循的标准，而如果是服务器向服务器请求就无需遵循同源策略。** 代理服务器，需要做以下几个步骤：

- 接受客户端请求 。
- 将请求 转发给服务器。
- 拿到服务器 响应 数据。
- 将 响应 转发给客户端。

```js
// index.html(http://127.0.0.1:5500)
 <script src="https://cdn.bootcss.com/jquery/3.3.1/jquery.min.js"></script>
    <script>
      $.ajax({
        url: 'http://localhost:3000',
        type: 'post',
        data: { name: 'xiamen', password: '123456' },
        contentType: 'application/json;charset=utf-8',
        success: function(result) {
          console.log(result) // {"title":"fontend","password":"123456"}
        },
        error: function(msg) {
          console.log(msg)
        }
      })
     </script>
```

```js
// server1.js 代理服务器(http://localhost:3000)
const http = require('http')
// 第一步：接受客户端请求
const server = http.createServer((request, response) => {
  // 代理服务器，直接和浏览器直接交互，需要设置CORS 的首部字段
  response.writeHead(200, {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': '*',
    'Access-Control-Allow-Headers': 'Content-Type'
  })
  // 第二步：将请求转发给服务器
  const proxyRequest = http
    .request(
      {
        host: '127.0.0.1',
        port: 4000,
        url: '/',
        method: request.method,
        headers: request.headers
      },
      serverResponse => {
        // 第三步：收到服务器的响应
        var body = ''
        serverResponse.on('data', chunk => {
          body += chunk
        })
        serverResponse.on('end', () => {
          console.log('The data is ' + body)
          // 第四步：将响应结果转发给浏览器
          response.end(body)
        })
      }
    )
    .end()
})
server.listen(3000, () => {
  console.log('The proxyServer is running at http://localhost:3000')
})
```

```js
// server2.js(http://localhost:4000)
const http = require('http')
const data = { title: 'fontend', password: '123456' }
const server = http.createServer((request, response) => {
  if (request.url === '/') {
    response.end(JSON.stringify(data))
  }
})
server.listen(4000, () => {
  console.log('The server is running at http://localhost:4000')
})
```

#### 六. nginx反向代理

实现原理类似于Node中间件代理，需要你搭建一个中转nginx服务器，用于转发请求。

使用nginx反向代理实现跨域，是最简单的跨域方式。只需要修改nginx的配置即可解决跨域问题，支持所有浏览器，支持session，不需要修改任何代码，并且不会影响服务器性能。

实现思路：通过nginx配置一个代理服务器（域名与domain1相同，端口不同）做跳板机，反向代理访问domain2接口，并且可以顺便修改cookie中domain信息，方便当前域cookie写入，实现跨域登录。

先下载[nginx](https://link.juejin.cn?target=http%3A%2F%2Fnginx.org%2Fen%2Fdownload.html)，然后将nginx目录下的nginx.conf修改如下:

```js
// proxy服务器
server {
    listen       81;
    server_name  www.domain1.com;
    location / {
        proxy_pass   http://www.domain2.com:8080;  #反向代理
        proxy_cookie_domain www.domain2.com www.domain1.com; #修改cookie里域名
        index  index.html index.htm;

        # 当用webpack-dev-server等中间件代理接口访问nignx时，此时无浏览器参与，故没有同源限制，下面的跨域配置可不启用
        add_header Access-Control-Allow-Origin http://www.domain1.com;  #当前端只跨域不带cookie时，可为*
        add_header Access-Control-Allow-Credentials true;
    }
}
```

 最后通过命令行`nginx -s reload`启动nginx 

```js
// index.html
var xhr = new XMLHttpRequest();
// 前端开关：浏览器是否读写cookie
xhr.withCredentials = true;
// 访问nginx中的代理服务器
xhr.open('get', 'http://www.domain1.com:81/?user=admin', true);
xhr.send();
```

```js
// server.js
var http = require('http');
var server = http.createServer();
var qs = require('querystring');
server.on('request', function(req, res) {
    var params = qs.parse(req.url.substring(2));
    // 向前台写cookie
    res.writeHead(200, {
        'Set-Cookie': 'l=a123456;Path=/;Domain=www.domain2.com;HttpOnly'   // HttpOnly:脚本无法读取
    });
    res.write(JSON.stringify(params));
    res.end();
});
server.listen('8080');
console.log('Server is running at port 8080...');
```

#### 七. window.name + iframe

window.name属性的独特之处：name值在不同的页面（甚至不同域名）加载后依旧存在，并且可以支持非常长的 name 值（2MB）。

其中a.html和b.html是同域的，都是`http://localhost:3000`;而c.html是`http://localhost:4000`

```js
 // a.html(http://localhost:3000/b.html)
  <iframe src="http://localhost:4000/c.html" frameborder="0" onload="load()" id="iframe"></iframe>
  <script>
    let first = true
    // onload事件会触发2次，第1次加载跨域页，并留存数据于window.name
    function load() {
      if(first){
      // 第1次onload(跨域页)成功后，切换到同域代理页面
        let iframe = document.getElementById('iframe');
        iframe.src = 'http://localhost:3000/b.html';
        first = false;
      }else{
      // 第2次onload(同域b.html页)成功后，读取同域window.name中数据
        console.log(iframe.contentWindow.name);
      }
    }
  </script>
```

b.html为中间代理页，与a.html同域，内容为空。

```js
 // c.html(http://localhost:4000/c.html)
  <script>
    window.name = '我不爱你'  
  </script>
```

总结：通过iframe的src属性由外域转向本地域，跨域数据即由iframe的window.name从外域传递到本地域。这个就巧妙地绕过了浏览器的跨域访问限制，但同时它又是安全操作。

#### 八. location.hash + iframe

实现原理： a.html欲与c.html跨域相互通信，通过中间页b.html来实现。 三个页面，不同域之间利用iframe的location.hash传值，相同域之间直接js访问来通信。

具体实现步骤：一开始a.html给c.html传一个hash值，然后c.html收到hash值后，再把hash值传递给b.html，最后b.html将结果放到a.html的hash值中。 同样的，a.html和b.html是同域的，都是`http://localhost:3000`;而c.html是`http://localhost:4000`

```js
 // a.html
  <iframe src="http://localhost:4000/c.html#iloveyou"></iframe>
  <script>
    window.onhashchange = function () { //检测hash的变化
      console.log(location.hash);
    }
  </script>
```

```js
 // b.html
  <script>
    window.parent.parent.location.hash = location.hash 
    //b.html将结果放到a.html的hash值中，b.html可通过parent.parent访问a.html页面
  </script>
```

```js
// c.html
 console.log(location.hash);
  let iframe = document.createElement('iframe');
  iframe.src = 'http://localhost:3000/b.html#idontloveyou';
  document.body.appendChild(iframe);
```

#### 九. document.domain + iframe

**该方式只能用于二级域名相同的情况下，比如 `a.test.com` 和 `b.test.com` 适用于该方式**。 只需要给页面添加 `document.domain ='test.com'` 表示二级域名都相同就可以实现跨域。

实现原理：两个页面都通过js强制设置document.domain为基础主域，就实现了同域。

我们看个例子：页面`a.zf1.cn:3000/a.html`获取页面`b.zf1.cn:3000/b.html`中a的值

```js
// a.html
<body>
 helloa
  <iframe src="http://b.zf1.cn:3000/b.html" frameborder="0" onload="load()" id="frame"></iframe>
  <script>
    document.domain = 'zf1.cn'
    function load() {
      console.log(frame.contentWindow.a);
    }
  </script>
</body>
```

```js
// b.html
<body>
   hellob
   <script>
     document.domain = 'zf1.cn'
     var a = 100;
   </script>
</body>
```

### 总结

CORS支持所有类型的HTTP请求，是跨域HTTP请求的根本解决方案

JSONP只支持GET请求，JSONP的优势在于支持老式浏览器，以及可以向不支持CORS的网站请求数据。

不管是Node中间件代理还是nginx反向代理，主要是通过同源策略对服务器不加限制。

日常工作中，用得比较多的跨域方案是cors和nginx反向代理



# 前端性能优化

## 1. 减少请求数量

1. 合并请求
2. 图片处理
3. 减少重定向
4. 使用缓存
5. 不使用CSS@import
6. 避免空的src和href

## 2. 减少资源大小

1. 压缩（HTML，CSS，js，图片）
2. webp
3. 开启gzip

## 3. 优化网络连接

1. 使用CDN
2. 使用DNS预解析
3. 并行连接
4. 持久连接
5. 管道化连接

## 4. 优化资源加载

1. 资源加载位置
2. 资源加载时机
   * 异步script标签
   * 模块按需加载
   * 资源预加载preload和资源预读取prefetch
   * 资源懒加载/预加载

## 5.减少重绘回流

1. 样式设置
2. 渲染层
3. DOM优化
   * 缓存DOM
   * 减少DOM渲染及数量
   * 批量操作DOM
   * 批量操作CSS样式
   * 内存中操作DOM
   * DOM元素离线更新
   * DOM读写分离
   * 事件代理
   * 防抖与节流
   * 及时清理环境

## 6. 性能更好的API

## 7. webpack 优化

1. 打包公共代码
2. 动态引入和按需加载
3. 剔除无用代码
4. 长缓存优化
5. 公共代码内联

# 前端加密

base64，MD5，sha1

# 前端工程化

包括：模块化，组件化，性能优化，前端目录规范化，前端规范化，自动化测试，发布等



# 前端安全问题

## 1. XSS（跨站脚本攻击）

XSS攻击：它允许恶意web用户将代码植入到提供给其他用户使用的页面中

常见SXX攻击：DOM-based型，反射型，存储型

## 2. CSRF（跨站请求伪造）

通过在你的输入文本当中或者HTML标签中插入js脚本攻击

解决方法：

1. 使用token：表单提交携带token，验证有效则允许访问，否则拒绝访问
2. Referer验证：Referer指页面请求来源

## 3. ifream安全隐患问题

有可能携带第三方插件或不安全的脚本

## 4. 本地存储数据问题

容易被黑客拿到用户信息

解决：做加密处理

## 5. 第三方依赖安全

## 6. HTTPS加密传输数据

# 网络

## [url回车问题](https://zhuanlan.zhihu.com/p/78677852)

输入url回车后发生了以下过程

1. 输入地址。
2. DNS解析。
3. TCP连接。
4. 发送http请求。
5. 返回http响应。
6. 浏览器解析渲染页面。
7. 断开连接。

### 1.输入地址

当我们在浏览器输入地址的时候，浏览器已经在只能匹配到可能得到的url了，他会从历史记录，书签等地方，找到已经输入的字符串可能对应的 url，然后给出智能提示，让你可以补全url地址 

### 2.DNS解析

DNS解析的过程就是寻找哪台机器上有你需要资源的过程。当你在浏览器中输入一个地址时，例如[http://www.baidu.com](https://link.zhihu.com/?target=http%3A//www.baidu.com)，其实不是百度网站真正意义上的地址。互联网上每一台计算机的唯一标识是它的IP地址，但是IP地址并不方便记忆。用户更喜欢用方便记忆的网址去寻找互联网上的其它计算机，也就是上面提到的百度的网址。所以互联网设计者需要在用户的方便性与可用性方面做一个权衡，这个权衡就是一个网址到IP地址的转换，这个过程就是DNS解析。 

### 3.TCP连接

主机浏览器通过DNS解析得到了目标服务器的IP地址后，与服务器建立TCP连接。

**TCP三次握手**：

第一次握手：客户端将标志位SYN置为1,随机产生一个值为seq=J（J的取值范围为=1234567）的数据包到服务器，客户端进入SYN_SENT状态，等待服务端确认；

第二次握手：服务端收到数据包后由标志位SYN=1知道客户端请求建立连接，服务端将标志位SYN和ACK都置为1，ack=J+1，随机产生一个值seq=K，并将该数据包发送给客户端以确认连接请求，服务端进入SYN_RCVD状态。

第三次握手：客户端收到确认后，检查ack是否为J+1，ACK是否为1，如果正确则将标志位ACK置为1，ack=K+1，并将该数据包发送给服务端，服务端检查ack是否为K+1，ACK是否为1，如果正确则连接建立成功，完成三次握手，随后客户端A与服务端B之间可以开始传输数据了。

为什么需要三次握手：

三次握手的目的是“为了防止已失效的连接请求报文段突然又传送到了服务端，因而产生错误

### 4.发送HTTP请求

建立了TCP连接之后，发起一个http请求。一个典型的 http request header 一般需要包括请求的方法，例如 GET 或者 POST 等，不常用的还有 PUT 和 DELETE 、HEAD、OPTION以及 TRACE 方法。 

### 5.返回HTTP响应

服务器接受并处理完请求，返回 HTTP 响应，一个响应报文格式基本等同于请求报文，由响应行、响应头、空行、实体组成 

### 6.浏览器解析渲染页面

浏览器是一个边解析边渲染的过程。首先浏览器解析HTML文件构建DOM树，然后解析CSS文件构建渲染树，等到渲染树构建完成后，浏览器开始布局渲染树并将其绘制到屏幕上。这个过程比较复杂，涉及到两个概念: reflow(回流)和repain(重绘)。DOM节点中的各个元素都是以盒模型的形式存在，这些都需要浏览器去计算其位置和大小等，这个过程称为relow;当盒模型的位置,大小以及其他属性，如颜色,字体,等确定下来之后，浏览器便开始绘制内容，这个过程称为repain。页面在首次加载时必然会经历reflow和repain。reflow和repain过程是非常消耗性能的，尤其是在移动设备上，它会破坏用户体验，有时会造成页面卡顿。所以我们应该尽可能少的减少reflow和repain。

浏览器两种渲染方式

webkit的主要流程：

![img](https://pic2.zhimg.com/80/v2-ad2b8a9617646bb212b70c556cdb5759_720w.jpg)

Geoko的主要流程：

![img](https://pic4.zhimg.com/80/v2-2eb78d456d03dcf2e02f78a1bd81896f_720w.jpg)



### 7.断开连接

TCP四次挥手：

第一次挥手：Client发送一个FIN，用来关闭Client到Server的数据传送，Client进入FIN_WAIT_1状态。

第二次挥手：Server收到FIN后，发送一个ACK给Client，确认序号为收到序号+1（与SYN相同，一个FIN占用一个序号），Server进入CLOSE_WAIT状态。

第三次挥手：Server发送一个FIN，用来关闭Server到Client的数据传送，Server进入LAST_ACK状态。

第四次挥手：Client收到FIN后，Client进入TIME_WAIT状态，接着发送一个ACK给Server，确认序号为收到序号+1，Server进入CLOSED状态，完成四次挥手

## HTTP

### HTTP协议：（默认端口：80）

**HTTP1.0**：规定浏览器与服务器只能保持短暂链接，浏览器的每次请求都需要与服务器经历一个TCP连接，服务器完成请求处理后立即断开TCP协议，服务器不跟踪也不记录过去的请求（**确定：请求无法复用**）

**HTTP1.1**：

1. 持久性连接，一个TCP可传送多个HTTP请求和响应。
2. 客户端不用等待上一次请求结果返回就可以发出下一次请求，服务器必须按照客户端接受到的请求的先后顺序一次回送响应结果。
3. 增加Host请求头
4. 提供身份认证、状态管理和Cache缓存等机制相关请求头和响应头。
5. 支持断点续传

**HTTP2.0**：多路复用，二进制分帧，服务端推送

### HTTPS协议：（默认端口443）

用的TCS协议

### HTTPS握手：

- 首先客户端发起请求到服务端，服务端处理后发送一个公钥给客户端

- 客户端进行验证公钥，看公钥是否有效和是否过期

- 客户端验证通过会产生随机值key，然后用公钥进行加密回传给服务端

- 服务端用私钥解密后获得客户端的随机值key

- 利用随机值key加密数据后传输给客户端

- 客户端利用key值进行解密数据

- 客户端获取真正的数据

### http的特点

基于tcp/ip、一种网络应用层协议、超文本传输协议HyperText Transfer Protocol

工作方式：客户端请求服务端应答的模式

快速：无状态连接

灵活：可以传输任意对象，对象类型由Content-Type标记

客户端请求request消息包括以下格式：请求行（request line）、请求头部（header）、空行、请求数据

![](https://pic3.zhimg.com/80/v2-f88e6f562ee595fc8c67c4f7039d8662_720w.jpg)

  服务端响应response也由四个部分组成，分别是：响应行、响应头、空行、响应体 

![](https://www.pianshen.com/images/386/1647503d01dd2b34f74e0c517333ad62.png)



### 请求方法

HTTP协议定义了多种请求方式，具体如下：
GET：**获取资源**，用来请求访问已被URI（统一资源标志符，和URL是包含和被包含的关系）识别的资源。
POST：用来**传输实体的主体**，虽然GET也可以实现，但是一般不用。
PUT：**传输文件**。但是鉴于PUT方法自身不带验证机制，任何人都可以上传文件，存在安全性问题，因此一般网站都不采用该方法。
HEAD:**获得报文首部**。和GET请求一样，只是不返回报文主体部分。
DELETE：**删除文件**。同样不带验证机制，存在安全性问题。
OPTIONS:**询问指定的请求URI支持哪些方法**。
TRACE:**追踪路径**，让Web服务器将之前的请求通信环回给客户端的方法。
CONNECT：要求在**与代理服务器通信时建立隧道**，实现隧道协议进行TCP通信 

### POST和GET请求区别的常见误区

**1 请求参数长度限制：GET请求长度最多1024kb，POST对请求数据没有限制**

关于此点，在HTTP协议中没有对URL长度进行限制，这个限制是**不同的浏览器及服务器**由于有不同的规范而带来的限制。

**2 GET请求一定不能用request body传输数据**

GET**可以带request body，但不能保证一定能被接收到**。如果你用GET服务，在request body偷偷藏了数据，不同服务器的处理方式也是不同的，有些服务器会帮你读出数据，有些服务器直接忽略。

**3 POST比GET安全性要高**

这里的安全是相对性，通过GET提交的数据都将显示到URL上，页面会被浏览器缓存，其他人查看历史记录会看到提交的数据，而POST不会。另外GET提交数据还可能会造成CSRF攻击。

**4 GET产生一个TCP数据包，POST产生两个TCP数据包**

对于GET方式的请求，浏览器会把http header和data一并发送出去，服务器响应200 OK(返回数据);
而对于POST，浏览器先发送header，服务器响应100 continue，浏览器再发送data，服务器响应200 OK(返回数据)。注意，尽管POST请求会分两次，但body 是紧随在 header 后面发送的，根本不存在『等待服务器响应』一说

### GET和POST区别

**请求参数**：GET请求参数是通过URL传递的，多个参数以&连接，POST请求放在request body中。
**请求缓存**：GET请求会被缓存，而POST请求不会，除非手动设置。
**收藏为书签**：GET请求支持，POST请求不支持。
**安全性**：POST比GET安全，GET请求在浏览器回退时是无害的，而POST会再次请求。
**历史记录**：GET请求参数会被完整保留在浏览历史记录里，而POST中的参数不会被保留。
**编码方式**：GET请求只能进行url编码，而POST支持多种编码方式。
**对参数的数据类型**：GET只接受ASCII字符，而POST没有限制 
**幂等性**：  GET请求有幂等性，但是POST请求没有，就是说我们如果使用GET请求做增删改查的时候，遇到网络不好可能会多次操作，造成数据库的混乱  但是使用POST就不会有这种情况 


## 状态码

### 状态码系列

**1XX：通知**

1XX系列响应代码仅在与HTTP服务器沟通时使用

**2xx：成功**

 2XX系列响应代码表明操作成功了 

**3XX：重定向**

3XX系列响应代码表明：客户端需要做些额外工作才能得到所需要的资源。它们通常用于GET请求。他们通常告诉客户端需要向另一个URI发送GET请求，才能得到所需的表示。那个URI就包含在Location响应报头里 

**4XX：客户端错误**

这些响应代码表明客户端出现错误。不是认证信息有问题，就是表示格式或HTTP库本身有问题。客户端需要自行改正

**5XX：服务端错误**

这些响应代码表明服务器端出现错误。一般来说，这些代码意味着服务器处于不能执行客户端请求的状态，此时客户端应稍后重试。有时，服务器能够估计客户端应在多久之后重试。并把该信息放在Retry-After响应报头里。

5XX系列响应代码在数量上不如4XX系列多，这不是因为服务器错误的几率小，而是因为没有必要如此详细--对于服务器方面的问题，客户端是无能为力的

### 常见状态码

* 301 (Moved Permanently)   永久性重定向，表示请求的资源被分配了新的URL，之后应使用更改的URL 
* 302 (Found/找到)  临时性重定向，表示请求的资源被分配了新的URL，希望本次访问使用新的URL 
* 303 (See Other/参见其他信息)  临时重定向，必须使用get方式的请求
* 400 (Bad Request)  表示请求报文中存在语法错误； 
* 401 (Unauthorized/未授权)   未经许可，需要通过HTTP认证 协议格式出现了问题
*  403 (Forbidden/禁止)  服务器拒绝了你的请求
*  404 (Not Found/未找到)  找不到系统资源
*  500 (Internal Server Error/内部服务器错误)  服务器读取信息之中出错
*  503 (Service Unavailable/服务无法获得) 表示服务器由于在维护或已经超载而无法响应

# [数据结构与算法](https://blog.csdn.net/ityqing/article/details/82838524)

最常用的数据结构与算法:

- 数据结构：**数组、链表、栈、队列、散列表、二叉树、堆、跳表、图、Tire树**
- 算法： **递归、排序、二分查找、搜索、哈希算法、贪心算法、分治算法、回溯算法、动态规划、字符串匹配算法**

## 1. 算法复杂度

### 1.1 大O复杂度表示法

公式： **T(n) = O(f(n))**

T(n)表示代码执行的时间; n表示数据规模的大小; f(n) 表示每行代码执行的次数总和。因为这是一个公式， 所以用f(n)来表示。公式中的O,表示代码的执行时间T(n)与f(n)表达式成正比 

### 1.2 复杂度量级

- 常数阶O(1)
- 线性阶O(n)
- 平方阶O(n²)
- 对数阶O(logn)
- 线性对数阶O(nlogn)

**多项式阶**：随着数据规模的增长，算法的执行时间和空间占用，按照多项式的比例增长。包括，
O(1)（常数阶）、O(logn)（对数阶）、O(n)（线性阶）、O(nlogn)（线性对数阶）、O(n^2)（平方阶）、O(n^3)（立方阶）
**非多项式阶**：随着数据规模的增长，算法的执行时间和空间占用暴增，这类算法性能极差。包括，
O(2^n)（指数阶）、O(n!)（阶乘阶）

### 1.3 复杂度分析法则

1）单段代码看高频：比如循环。
2）多段代码取最大：比如一段代码中有单循环和多重循环，那么取多重循环的复杂度。
3）嵌套代码求乘积：比如递归、多重循环等
4）多个规模求加法：比如方法有两个参数控制两个循环的次数，那么这时就取二者复杂度相加 

### 1.4 空间复杂度

表示算法的存储空间与数据规模之间的增长关系 

```js
void print(int n) {
    inti=0;
    int[] a = new int[n];
    for (i; i <n; ++i) {
        a[i] =i* i;
    }
    for(i=n-1;i>=0;--i){
        print out a[i]
    }
}
```

跟时间复杂度分析一样，我们可以看到，第2行代码中，我们申请了一个空间存储变量i,但是它是常最阶的，跟数据规模n没有关系，所以我们可以忽略。第3行申请了一个大小为n的int类型数组，除此之外，剩下的代码都没有占用更多的空间，所以整段代码的空间复杂度就是O(n) 

我们常见的空间复杂度就是O(1)、O(n)、 O(n2), 像O(logn)、O(nlogn) 这样的对数阶复杂度平时都用不到。而且，空间复杂度分析比时间复杂度分析要简单很多。所以，对于空间复杂度，掌握刚我说的这些内容已经足够了

## 2. 常见的数据结构

数据结构研究的内容：就是如何按一定的逻辑结构，把数据组织起来，并选择适当的存储表示方法把逻辑结构组织好的数据存储到计算机的存储器里

- **栈（Stack）：**栈是一种特殊的线性表，它只能在一个表的一个固定端进行数据结点的插入和删除操作。
- **队列（Queue）：**队列和栈类似，也是一种特殊的线性表。和栈不同的是，队列只允许在表的一端进行插入操作，而在另一端进行删除操作。
- **数组（Array）：**数组是一种聚合数据类型，它是将具有相同类型的若干变量有序地组织在一起的集合。
- **链表（Linked List）：**链表是一种数据元素按照链式存储结构进行存储的数据结构，这种存储结构具有在物理上存在非连续的特点。
- **树（Tree）：**树是典型的非线性结构，它是包括，2 个结点的有穷集合 K。
- **图（Graph）：**图是另一种非线性数据结构。在图结构中，数据结点一般称为顶点，而边是顶点的有序偶对。
- **堆（Heap）：**堆是一种特殊的树形数据结构，一般讨论的堆都是二叉堆。
- **散列表（Hash table）：**散列表源自于散列函数(Hash function)，其思想是如果在结构中存在关键字和T相等的记录，那么必定在F(T)的存储位置可以找到该记录，这样就可以不用进行比较操作而直接取得所查记录。

### 2.1 数组

线性表:  线性表就是数据排成像一条线一样的结构.每个现行表上的数据最多只有前和后两个方向.常见的线性表结构：数组，链表、队列、栈等 

1.  数组（Array）是一种线性表数据结构。它用一组连续的内存空间，来存储一组具有相同类型的数据。
2.  连续的内存空间和相同类型的数据(随机访问的前提)
3. 优点：两限制使得具有随机访问的特性缺点：删除，插入数据效率低

### 2.2 链表

1. 和数组一样，链表也是一种线性表。
2. 从内存结构来看，链表的内存结构是不连续的内存空间，是将一组零散的内存块串联起来，从而进行数据存储的数据结构。
3. 链表中的每一个内存块被称为节点Node。节点除了存储数据外，还需记录链上下一个节点的地址，即后继指针next 

链表特点：

1.  插入、删除数据效率高O(1)级别（只需更改指针指向即可），随机访问效率低O(n)级别（需要从链头至链尾进行遍历） 
2.  和数组相比，内存空间消耗更大，因为每个存储数据的节点都需要额外的空间存储后继指针 

**常用链表**

1. 单链表：

   1）每个节点只包含一个指针，即后继指针。
   2）单链表有两个特殊的节点，即首节点和尾节点。为什么特殊？用首节点地址表示整条链表，尾节点的后继指针指向空地址null。
   3）性能特点：插入和删除节点的时间复杂度为O（1），查找的时间复杂度为O(n)。 

2. 循环列表：

   1）除了尾节点的后继指针指向首节点的地址外均与单链表一致。
   2）适用于存储有循环特点的数据，比如约瑟夫问题。 

3. 双向链表：

   1）节点除了存储数据外，还有两个指针分别指向前一个节点地址（前驱指针prev）和下一个节点地址（后继指针next）。
   2）首节点的前驱指针prev和尾节点的后继指针均指向空地址。 

   3）性能特点：
   和单链表相比，存储相同的数据，需要消耗更多的存储空间。
   插入、删除操作比单链表效率更高O(1)级别。以删除操作为例，删除操作分为2种情况：给定数据值删除对应节点和给定节点地址删除节点。对于前一种情况，单链表和双向链表都需要从头到尾进行遍历从而找到对应节点进行删除，时间复杂度为O(n)。对于第二种情况，要进行删除操作必须找到前驱节点，单链表需要从头到尾进行遍历直到p->next = q，时间复杂度为O(n)，而双向链表可以直接找到前驱节点，时间复杂度为O(1)

   [选择数组还是列表](https://blog.csdn.net/ityqing/article/details/82838524)

### 2.3 栈

**数据结构栈：**栈的特点是先进后出，只有push和pop两个函数可以操作栈，分别进行压栈和弹栈，还有top函数查看栈顶元素。栈的一个典型应用是做开闭符号的处理，如构建DOM 

**内存栈：** 函数执行的时候会把局部变量压到一个栈里面

### 2.4 堆

数据结构里的堆通常是指用数组表示的二叉树，如大堆排序和小堆排序。内存里的堆是指存放new出来动态创建变量的地方，和栈相对。

### 2.5 队列

队列是一种受限的线性表数据结构, 最基本的操作也是两个:入队enqueue(),放一个数据到队列尾部;出队dequeue(),从队列头部取一个元素。 

特点:

1.  队列跟栈一样,也是一种抽象的数据结构。

2. 具有先进先出的特性,支持在队尾插入元素,在队头删除元素。

实现: 队列可以用数组来实现,也可以用链表来实现

## 3. [常用算法](https://www.cnblogs.com/onepixel/articles/7674659.html)

算法研究的目的是为了更有效的处理数据，提高数据运算效率。数据的运算是定义在数据的逻辑结构上，但运算的具体实现要在存储结构上进行。一般有以下几种常用运算：

- **检索：**检索就是在数据结构里查找满足一定条件的节点。一般是给定一个某字段的值，找具有该字段值的节点。
- **插入：**往数据结构中增加新的节点。
- **删除：**把指定的结点从数据结构中去掉。
- **更新：**改变指定节点的一个或多个字段的值。
- **排序：**把节点按某种指定的顺序重新排列。例如递增或递减

### 3.1 冒泡排序(Bubble Sort)

冒泡排序只会操作相邻的两个数据。每次冒泡操作都会对相邻的两个元素进行比较，看是否满足大小关系要求，如果不满足就让它俩互换。 

```java
public int[] bubbleSort(int[] a) {
  int n = a.length;
  if (n<=1) {
    return a;
  }
  for (int i = 0; i < n; i++) {
    //提前退出冒泡循环的标志
    boolean flag = false;
    for (int j = 0; j < n-i-1; j++) {
      if (a[j]>a[j+1]) {
        int temp = a[j];
        a[j] = a[j+1];
        a[j+1] = temp;

        flag = true;//表示有数据交换
      }
      if (!flag) {
        break; //没有数据交换(说明已排好序无需再进行冒泡),提前退出
      }
    }
  }
  return a;
}
```

```js
function bubbleSort(arr) {
  var len = arr.length;
  for (var i = 0; i < len - 1; i++) {
      for (var j = 0; j < len - 1 - i; j++) {
          if (arr[j] > arr[j+1]) {// 相邻元素两两对比
              var temp = arr[j+1];// 元素交换
              arr[j+1] = arr[j];
              arr[j] = temp;
          }
      }
  }
  return arr;
}
```

### 3.2 插入排序(Insertion Sort)

插入排序将数组数据分成已排序区间和未排序区间。初始已排序区间只有一个元素，即数组第一个元素。在未排序区间取出一个元素插入到已排序区间的合适位置，直到未排序区间为空。 

```java
public int[] insertionSort(int[] a) {
  int n = a.length;
  if (n<=1) return a;
  
  for (int i = 1; i < n; i++) {
    int value = a[i];
    int j = i-1;
    for (; j >=0; j--) {
      if (a[j] > value) {
        a[j+1] = a[j];//移动数据
      }else {
        break;
      }
    }
    a[j+1] = value;//插入数据
  }
  
  return a;
}
```

```js
function insertionSort(arr) {
  var len = arr.length;
  var preIndex, current;
  for (var i = 1; i < len; i++) {
      preIndex = i - 1;
      current = arr[i];
      while (preIndex >= 0 && arr[preIndex] > current) {
        arr[preIndex + 1] = arr[preIndex];
        preIndex--;
      }
      arr[preIndex + 1] = current;
  }
  return arr;
}
```

```java
for (int i = 1; i < insetArr.length; i++) {
  for (int j = i; j > 0; j--) {
    if (insetArr[j] < insetArr[j-1]) {
      int temp;
      temp = insetArr[j-1];
      insetArr[j-1] = insetArr[j];
      insetArr[j] = temp;
    } else {
      break;
    }
  }
}
```

### 3.3 选择排序(Selection Sort)

首先在未排序序列中找到最小（大）元素，存放到排序序列的起始位置，然后，再从剩余未排序元素中继续寻找最小（大）元素，然后放到已排序序列的末尾。以此类推，直到所有元素均排序完毕 

```java
public int[] selectionSort(int[] a) {
  int n = a.length;
  
  for (int i = 0; i < a.length - 1; i++) {
    for (int j = i+1; j < a.length; j++) {
      //交换
      if (a[i] > a[j]) {
        int temp = a[i];
        a[i] = a[j];
        a[j] = temp;
      }
    }
  }
  
  return a;
}
```

```js
function selectionSort(arr) {
  var len = arr.length;
  var minIndex, temp;
  for (var i = 0; i < len - 1; i++) {
    minIndex = i;
    for (var j = i + 1; j < len; j++) {
      if (arr[j] < arr[minIndex]) {     // 寻找最小的数
        minIndex = j;                 // 将最小数的索引保存
      }
    }
    temp = arr[i];
    arr[i] = arr[minIndex];
    arr[minIndex] = temp;
  }
  return arr;
} 
```

```java
int[] selectArr = {2, 4, 9, 5, 1, 6, 3};

for (int i = 0; i < selectArr.length - 1; i ++) {
  int min = i;
  for (int j = i + 1; j < selectArr.length; j++) {
    if (selectArr[j] < selectArr[min]) {
        min = j;
    }
  }
  if (i != min) {
    int temp = selectArr[min];
    selectArr[min] = selectArr[i];
    selectArr[i] = temp;
  }
}
```

### 3.4 希尔排序(Shell Sort)

1959年Shell发明，第一个突破O(n2)的排序算法，是简单插入排序的改进版。它与插入排序的不同之处在于，它会优先比较距离较远的元素。希尔排序又叫**缩小增量排序**。 

```js
// 修改于 2019-03-06
function shellSort(arr) {
  var len = arr.length;
  for (var gap = Math.floor(len / 2); gap > 0; gap = Math.floor(gap / 2)) {
    // 注意：这里和动图演示的不一样，动图是分组执行，实际操作是多个分组交替执行
    for (var i = gap; i < len; i++) {
      var j = i;
      var current = arr[i];
      while (j - gap >= 0 && current < arr[j - gap]) {
        arr[j] = arr[j - gap];
        j = j - gap;
      }
      arr[j] = current;
    }
  }
  return arr;
}
```

### 3.5 归并排序(Merge Sort)

归并排序是建立在归并操作上的一种有效的排序算法。该算法是采用分治法（Divide and Conquer）的一个非常典型的应用。将已有序的子序列合并，得到完全有序的序列；即先使每个子序列有序，再使子序列段间有序。若将两个有序表合并成一个有序表，称为2-路归并 

```js
function mergeSort(arr) {
  var len = arr.length;
  if (len < 2) {
    return arr;
  }
  var middle = Math.floor(len / 2),
    left = arr.slice(0, middle),
    right = arr.slice(middle);
  return merge(mergeSort(left), mergeSort(right));
}
 
function merge(left, right) {
  var result = [];

  while (left.length>0 && right.length>0) {
    if (left[0] <= right[0]) {
        result.push(left.shift());
    } else {
        result.push(right.shift());
    }
  }

  while (left.length)
    result.push(left.shift());

  while (right.length)
    result.push(right.shift());

  return result;
}
```

### 3.6 快速排序(Quick Sort)

快速排序的基本思想：通过一趟排序将待排记录分隔成独立的两部分，其中一部分记录的关键字均比另一部分的关键字小，则可分别对这两部分记录继续进行排序，以达到整个序列有序 

```js
function quickSort(arr, left, right) {
  var len = arr.length,
    partitionIndex,
    left = typeof left != 'number' ? 0 : left,
    right = typeof right != 'number' ? len - 1 : right;

  if (left < right) {
    partitionIndex = partition(arr, left, right);
    quickSort(arr, left, partitionIndex-1);
    quickSort(arr, partitionIndex+1, right);
  }
  return arr;
}
 
function partition(arr, left ,right) {     // 分区操作
  var pivot = left,                      // 设定基准值（pivot）
    index = pivot + 1;
  for (var i = index; i <= right; i++) {
    if (arr[i] < arr[pivot]) {
      swap(arr, i, index);
      index++;
    }       
  }
  swap(arr, pivot, index - 1);
  return index-1;
}
 
function swap(arr, i, j) {
  var temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}
```

### 3.7 堆排序(Heap Sort)

堆排序（Heapsort）是指利用堆这种数据结构所设计的一种排序算法。堆积是一个近似完全二叉树的结构，并同时满足堆积的性质：即子结点的键值或索引总是小于（或者大于）它的父节点 

```js
var len;    // 因为声明的多个函数都需要数据长度，所以把len设置成为全局变量
 
function buildMaxHeap(arr) {   // 建立大顶堆
  len = arr.length;
  for (var i = Math.floor(len/2); i >= 0; i--) {
      heapify(arr, i);
    }
}
 
function heapify(arr, i) {     // 堆调整
  var left = 2 * i + 1,
    right = 2 * i + 2,
    largest = i;

  if (left < len && arr[left] > arr[largest]) {
    largest = left;
  }

  if (right < len && arr[right] > arr[largest]) {
    largest = right;
  }

  if (largest != i) {
    swap(arr, i, largest);
    heapify(arr, largest);
  }
}
 
function swap(arr, i, j) {
  var temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}
 
function heapSort(arr) {
  buildMaxHeap(arr);

  for (var i = arr.length - 1; i > 0; i--) {
    swap(arr, 0, i);
    len--;
    heapify(arr, 0);
  }
  return arr;
}
```

### 3.8 计数排序(Counting Sort)

计数排序不是基于比较的排序算法，其核心在于将输入的数据值转化为键存储在额外开辟的数组空间中。 作为一种线性时间复杂度的排序，计数排序要求输入的数据必须是有确定范围的整数。 

```js
function countingSort(arr, maxValue) {
  var bucket = new Array(maxValue + 1),
  sortedIndex = 0;
  arrLen = arr.length,
  bucketLen = maxValue + 1;

  for (var i = 0; i < arrLen; i++) {
    if (!bucket[arr[i]]) {
      bucket[arr[i]] = 0;
    }
    bucket[arr[i]]++;
  }

  for (var j = 0; j < bucketLen; j++) {
    while(bucket[j] > 0) {
      arr[sortedIndex++] = j;
      bucket[j]--;
    }
  }

  return arr;
}
```

### 3.9 桶排序(Bucket Sort)

桶排序是计数排序的升级版。它利用了函数的映射关系，高效与否的关键就在于这个映射函数的确定。桶排序 (Bucket sort)的工作的原理：假设输入数据服从均匀分布，将数据分到有限数量的桶里，每个桶再分别排序（有可能再使用别的排序算法或是以递归方式继续使用桶排序进行排） 

```js
function bucketSort(arr, bucketSize) {
  if (arr.length === 0) {
    return arr;
  }

  var i;
  var minValue = arr[0];
  var maxValue = arr[0];
  for (i = 1; i < arr.length; i++) {
    if (arr[i] < minValue) {
      minValue = arr[i];                // 输入数据的最小值
    } else if (arr[i] > maxValue) {
      maxValue = arr[i];                // 输入数据的最大值
    }
  }

  // 桶的初始化
  var DEFAULT_BUCKET_SIZE = 5;            // 设置桶的默认数量为5
  bucketSize = bucketSize || DEFAULT_BUCKET_SIZE;
  var bucketCount = Math.floor((maxValue - minValue) / bucketSize) + 1;  
  var buckets = new Array(bucketCount);
  for (i = 0; i < buckets.length; i++) {
    buckets[i] = [];
  }

  // 利用映射函数将数据分配到各个桶中
  for (i = 0; i < arr.length; i++) {
    buckets[Math.floor((arr[i] - minValue) / bucketSize)].push(arr[i]);
  }

  arr.length = 0;
  for (i = 0; i < buckets.length; i++) {
    insertionSort(buckets[i]);                      // 对每个桶进行排序，这里使用了插入排序
    for (var j = 0; j < buckets[i].length; j++) {
      arr.push(buckets[i][j]);                     
    }
  }

  return arr;
}
```

### 3.10 基数排序(Radix Sort)

基数排序是按照低位先排序，然后收集；再按照高位排序，然后再收集；依次类推，直到最高位。有时候有些属性是有优先级顺序的，先按低优先级排序，再按高优先级排序。最后的次序就是高优先级高的在前，高优先级相同的低优先级高的在前 

```js
var counter = [];
function radixSort(arr, maxDigit) {
  var mod = 10;
  var dev = 1;
  for (var i = 0; i < maxDigit; i++, dev *= 10, mod *= 10) {
    for(var j = 0; j < arr.length; j++) {
      var bucket = parseInt((arr[j] % mod) / dev);
      if(counter[bucket]==null) {
        counter[bucket] = [];
      }
      counter[bucket].push(arr[j]);
    }
    var pos = 0;
    for(var j = 0; j < counter.length; j++) {
      var value = null;
      if(counter[j]!=null) {
        while ((value = counter[j].shift()) != null) {
          arr[pos++] = value;
        }
      }
    }
  }
  return arr;
}
```
