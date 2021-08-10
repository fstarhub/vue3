<!--
 * @Description: 
 * @Version: 3.0
 * @Autor: 冯帅
 * @Date: 2021-08-09 23:36:27
 * @LastEditors: fengshuai
 * @LastEditTime: 2021-08-10 17:31:45
-->

# html

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

防抖：高频触发事件后n秒内函数只会执行一次，如果n秒内事件再次被触发，则重新计时



# vue

## watch和computed

1. 加载时先computed在watch
2. 触发某一事件，先methods在再watch

**watch**：支持异步（不支持缓存），数据变化会直接触发相应操作（immediate，deep）

**computed**：支持缓存（不支持异步），依赖数据发生变化，才会重新计算（get，set）

## hash与history区别

hash：地址栏中有#符号，#号不会被包含在http请求中，对后端无影响

history：用于浏览器的记录栈，go,back,forward,他提供对历史记录修改功能，执行修改时，虽修改当前URL，但浏览器不会立即向后端发送请求，可用history。pushState API来完成

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

### 1. 代理

1. 正向代理：Nginx
2. 正向代理：webpack配置解决开发环境跨域问题

### 2.cors

1. 通过ajax引擎允许单签域资源进来
2. cors需要服务器端设置响应头（Access-Control-Allow-Origin：’xxxx‘）
3. cors能处理get，post
4. cors存在兼容性，IE8以上

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

包括：模块化，组件化，性能优化，前段目录规范化，前端规范化，自动化测试，发布等



# 前端安全问题

## 1. XSS

XSS攻击：跨站脚本攻击，它允许恶意web用户将代码植入到提供给其他用户使用的页面中

常见SXX攻击：DOM-based型，反射型，存储型

## 2. CRSF（跨站请求伪造）

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

