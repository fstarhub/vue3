<!--

 * @Description: 
 * @Version: 3.0
 * @Autor: 冯帅
 * @Date: 2021-08-09 23:36:27
 * @LastEditors: fengshuai
 * @LastEditTime: 2021-08-16 17:48:01
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

   

# vue

## watch和computed

1. 加载时先computed在watch
2. 触发某一事件，先methods在再watch

**watch**：支持异步（不支持缓存），数据变化会直接触发相应操作（immediate，deep）

**computed**：支持缓存（不支持异步），依赖数据发生变化，才会重新计算（get，set）

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
同源策略/SOP（Same origin policy）是一种约定，由Netscape公司1995年引入浏览器，它是浏览器最核心也最基本的安全功能，如果缺少了同源策略，浏览器很容易受到XSS、CSFR等攻击。所谓同源是指"协议+域名+端口"三者相同，即便两个不同的域名指向同一个ip地址，也非同源 

### 1. 解决跨域的方法

1. 正向代理：Nginx代理跨域
2. webpack配置解决开发环境跨域问题

3. cors:
   1. 通过ajax引擎允许单签域资源进来
   2. cors需要服务器端设置响应头（Access-Control-Allow-Origin：’xxxx‘）
   3. cors能处理get，post
   4. cors存在兼容性，IE8以上
4. jsonp跨域
5. document.domain + iframe跨域
6. window.name + iframe跨域
7. location.hash + iframe跨域
8. postMessage跨域
9. node js中间件代理跨域
10. webSocket协议跨域

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

## 1. XSS

XSS攻击：跨站脚本攻击，它允许恶意web用户将代码植入到提供给其他用户使用的页面中

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

* 301 (Moved Permanently)  重定向 ，  览器会自动连接到新的URL

* 302  (Found/找到) 临时重定向

* 303  (See Other/参见其他信息)  临时重定向，必须使用get方式的请求

* 404  (Not Found/未找到)  找不到系统资源

* 401：(Unauthorized/未授权)  协议格式出现了问题
*  403： (Forbidden/禁止)  服务器拒绝了你的请求
*  500  (Internal Server Error/内部服务器错误)  服务器读取信息之中出错
*  503： (Service Unavailable/服务无法获得) 表示服务器由于在维护或已经超载而无法响应