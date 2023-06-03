

## express中间件

中间件的功能包括：

* 执行任何代码。
* 修改请求和响应对象。
* 终结请求-响应循环。
* 调用堆栈中的下一个中间件。

如果我的get、post回调函数中，没有next参数，那么就匹配上第一个路由，就不会往下匹配了。如果想往下匹配的话，那么需要写next()

### Express应用可使用如下几种中间件：

1. 应用级中间件

```js
app.use((req, res, next) => {
  console.log(new Date())
  // res.send("shouyye")
  next() // 调用next（）向下继续匹配
})
```

2. 路由中间件（用的比较少）

```js
app.get("/news/add", (req, res, next) => {
  console.log('new中间件add')
  next() // 调用next（）向下继续匹配
})
```

3. 错误处理中间件

```js
app.use((req, res, next) => {
  res.status(404).send(404)
  next()
})
```

4. 内置中间件(匹配静态资源文件)

```js
app.use(express.static("static"))
```

5. 第三方中间件

body-parser：常用处理请求数据的

## Cookie

* cookie是存储于访问者的计算机中的变量。可以让我们用同一个浏览器访问同一个域名不同页面的时候共享cookie数据。 
*  HTTP是无状态协议。简单地说，当你浏览了一个页面，然后转到同一个网站的另一个页面，服务器无法认识到这是同一个浏览器在访问同一个网站。每一次的访问，都是没有任何关系的。 
*  Cookie是一个简单到爆的想法：当访问一个页面的时候，服务器在下行HTTP报文中，命令浏览器存储一个字符串;浏览器再访问同一个域的时候，将把这个字符串携带到上行HTTP请求中。第一次访问一个服务器，不可能携带cookie。必须是服务器得到这次请求，在下行响应报头中，携带cookie信息，此后每一次浏览器往这个服务器发出的请求，都会携带这个cookie。 

### cookie 特点

* cookie保存在浏览器本地
*  正常设置的cookie是不加密的，用户可以自由看到
*  用户可以删除cookie，或者禁用它 
*  cookie可以被篡改 
*  cookie可以用于攻击 
*  cookie存储量很小。未来实际上要被localStorage替代，但是后者IE9兼容 

### cookie 属性说明

1. maxAge： 最大失效时间（毫秒），设置在多少后失效 
2. domain： 域名name=value：键值对，可以设置要保存的Key/Value，注意这里的name不能和其他属性项的名字一样 
3. expires：过期时间（秒），在设置的某个时间点后该Cookie就会失效，如expires=Wednesday,09-Nov-9923:12:40GMT 
4. source： 当secure值为true时，cookie在HTTP中是无效，在HTTPS中才有效 
5. path： 表示cookie影响到的路路径，如path=/。如果路径不能匹配时，浏览器则不发送这个Cookie 
6. singed： 表示是否签名cookie,设为true会对这个cookie签名，这样就需要用res.signedCookies而不是res.cookies访问它。被篡改的签名cookie会被服务器拒绝，并且cookie值会重置为它的原始值 
7. httpOnly： 是微软对COOKIE做的扩展。如果在COOKIE中设置了“httpOnly”属性，则通过程序（JS脚本、applet等）将无法读取到COOKIE信息，防止XSS攻击产生 

**设置cookie**

```js
res.cookie('rememberme','1',{maxAge:900000,httpOnly:true})
res.cookie('name','tobi',{domain:'.example.com',path:'/admin',secure:true});
res.cookie('rememberme','1',{expires: newDate(Date.now()+900000),httpOnly:true});
```

**获取cookie**

```js
res.cookies.name
```

**删除cookie**

```js
res.cookie('rememberme','',{expires:new Date()})
res.cookie('username','zhangsan',{domain:'.beigjing.com',maxAge:0,httpOnly:true})
```

### cookie 加密

1. 配置中间件是需要传参

```js
app.use(cookieParser("12345"))
```

2. 设置cookie的时候配置signed属性

```js
res.cookie("userInfo","zhangsan",{maxAge: 1000*60*60,signed:true})
```

3. signedCookies获取加密cookie

```js
console.log(req.signedCookies.userInfo)
```

## Session

session是另一种记录客户状态的机制，不同的是Cookie保存在客户端浏览器中，而session保存在服务器上。 

Cookie数据存放在客户的浏览器上，Session数据放在服务器上。Session相比Cookie要更安全一些。由于Session保存到服务器上，所以当访问量增多的时候，会比较占用服务器的性能。单个cookie保存的数据大小不能超过4K，很多浏览器都限制一个站点最多保存20个cookie。Session没有这方面的限制。Session是基于Cookie进行工作的。 

### Session工作流程

当浏览器访问服务器并发送第一次请求时，服务器端会创建一个session对象，生成一个类似于key,value的键值对，然后将key(cookie)返回到浏览器(客户)端，浏览器下次再访问时，携带key(cookie)，找到对应的session(value)。

### express-session使用

1. 安装express-session

```js
npm install express-session --save
```

2. 引入express-session

```js
var session = require("express-session")
```

3. 中间件使用expres-session

```js
app.use(session({
  secret: 'this is session', // 服务端生成 session 的签名（随便写）
  resave: false, // 强制保存 session 即使它并没有变化
  saveUninitialized: true, // 强制将未初始化的 session 存储
  cookie: {
    maxAge: 1000*60,
    secure: false, // true表示只有https才能访问cookie
  }
}))
```

4. 使用

```js
// 设置值
req.session.username = "张三";
// 获取值
req.session.username
```

### 常用参数

```js
app.use(session({
  secret:'12345',
  name:'name',
  cookie:{maxAge:60000},
  resave:false,
  saveUninitialized:true
}));
```

参数 | 作用
--- | ---
secret | 一个String类型的字符串，作为服务器端生成session的签名。 
name | 返回客户端的key的名称，默认为connect.sid,也可以自己设置。
resave | 强制保存session即使它并没有变化。默认为false。don't save session if unmodified
saveUninitialized | 强制将未初始化的session存储。当新建了一个session且未设定属性或值时，它就处于未初始化状态。在设定一个cookie前，这对于登陆验证，减轻服务端存储压力，权限控制是有帮助的。（默认：true）。建议手动添加。
cookie | 设置返回到前端key的属性，默认值为{path:'/',httpOnly:true,source:false,maxAge:null}
rolling | 在每次请求时强行设置cookie，这将重置cookie过期时间（默认：false）

### 常用方法

```js
// 销毁session
req.session.destroy(function(err){
    
})
//设置session
req.session.username='张三';
//获取session
req.session.username
//重新设置cookie的过期时间
req.session.cookie.maxAge=0;
```

### 负载均衡,session存入数据里

```js
// 1.需要安装express-session和connect-mongo模块
// 2.引入模块
var session = require("express-session");
const MongoStore = require('connect-mongo')(session);
// 3.配置中间件
app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true,
  rolling: true,
  cookie:{
    maxAge:100000
  },
  store: new MongoStore({
    url: 'mongodb://127.0.0.1:27017/student',
    touchAfter: 24*3600 // time period in seconds
  })
}))
```

