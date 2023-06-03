<!--
 * @Description: 
 * @Version: 3.0
 * @Autor: 冯帅
 * @Date: 2021-08-19 00:00:10
 * @LastEditors: fengshuai
 * @LastEditTime: 2023-06-03 16:56:54
     -->
# node

## node介绍

能够在服务端运行的JavaScript可开放源代码、跨平台JavaScript运行环境

node采用GoogleV8引擎运行js代码，使用事件驱动、非阻塞和异步/io模型等技术来提高性能，可优化引用的传输量和规模

node大部分基本模块都用JavaScript编写，在node出现前，js通常作为客户端程序设计语言使用，以js写出的程序常在用户的浏览器上运行

* node的服务是单线程的，但是在后台拥有一个i/0线程池

## node用途

* web服务API，比如REST
* 实时多人游戏
* 后端web服务，例如跨域、服务器端的请求
* 基于web的应用
* 多客户端通信，如即时通信

## ECMAScropt标准缺陷

* 没有模块系统
* 标准库较少
* 没有标准接口
* 缺乏管理系统

node模块化

* 在node中，一个js就是一个模块
* 每一个js文件中的js代码都是独立运行在一个函数中，而不是全局作用域，所以一个模块中的变量和函数在其他模块中无法访问
* 可以通过exports来向外暴露变量和方法，只需要将需要暴露给外部的变量或方法设置为exports的属性即可

## module.export 和 require

通过exports只能使用.的方式来向外暴露内部变量

```js
// test.js
exports.xxx = xxx
```

通过module.exports既可以通过点的形式，也可以直接赋值

```js
// test.js
const name = 'hello'
const getName = function() {
  console.log(123)
}
module.exports.name === name
module.exports = { getName }
```

引入模块

```js
var md = require('../test.js')
var { getName } = require('../test.js')
```

## 引入其他模块

在node中，通过require（）函数来引入外部模块，require（）可以传递一个文件的路径作为参数，node将会自动genuine该路径引入外部模块，路径使用.或..开头

使用require（）引入模块后，该函数会返回一个对象，这个对象代表是引入的模块

使用require（）引入外部模块时，使用的就是i模块标识，我们可以通过模块表示来找到模块

**模块分类**：

1. 核心模块

* 有node引擎提供的模块

2. 文件模块

* 由用户自己创建的模块

## global

node有一个全局变量global，通网页中的window类似

全局中创建的变量会作为global的属性保存

全局中创建的方法会作为global的方法保存

node在执行模块中的代码时，它首先在代码的最顶部添加如下代码

function (exports, require, module, \_filename,\_dirname) {

在代码的最底部添加如下代码

}

实际上模块中的代码都是包裹在一个函数中执行的，并且在函数执行时，同事传递了5个实参

exports: 该对象用来将变量或函数暴露到外部

require：函数，用来引入外部模块

module：代表当前模块本身，exports就是module的属性，可以使用exports导出，也可以使用module.exports导出（module.exports === exports）

filename：当前模块的完整路径

dirname: 当前模块所在文件夹的完整路径

## 包 package

* commonjs的包规范允许我们将一组相关的模块组合到一起，形成一个完整的工具

* commonjs的包规范由**包结构**和**包描述文件**二个部分组成
* 包结构
  * 用于组织包中的各个文件
* 包描述文件
  * 描述报的相关信息，以供外部读取分析

### 包结构

包实际上就是一个压缩文件，解压以后还原为目录，符合规范的目录，应该包含一下文件

* package.json 描叙文件
* bin 可执行二进制文件
* lib js代码
* doc 文档
* test 测试单元

### 包描述文件

包描述文件用来表达非代码的信息，他是一个json格式的文件-package.json，位于包的根目录下，是包的重要组成成分

package.json中的字段：name，description，version，可以words，maintainers，contributors，bugs，licences，repository，dependencies，homepage，OS，CPU，engine，builtin，directories，implements，scripts，author，bin，main，devDependencies.

## NPM (Node Package Manager)

* commonjs包规范的理论，NPM是其中一种实践
* 对于node二言，NPM帮助其完成了第三方模块的发布，安装和依赖等。借助NPM，Node与第三方模块之间形成了一个很好地生态系统

### npm命令

npm -v：查看版本

npm :帮助说明

npm init 名： 创建一个package.json

npm search 包名：搜索模块包

npm install/i 包名：在当前目录安装包

npm install/i 包名 -g: 全局模式安装包

npm remove/r：删除包

npm install 包名 --save：安装包并添加到依赖中

npm install：下载项目依赖包

## Node模块查找顺序

当前node_modules  - 上一层 node_modules - 上一层 node_modules -直到磁盘的根目录，如果依然没有，则报错
## Buffer

 如果没有提供编码格式，文件操作以及很多网络操作就会将数据作为 Buffer 类型返回 

## 流

流是基于事件的 API，用于管理和处理数据。

- 流是能够读写的
- 是基于事件实现的一个实例

### 流的类型

- 内置：许多核心模块都实现了流接口，如 `fs.createReadStream`
- HTTP：处理网络技术的流
- 解释器：第三方模块 XML、JSON 解释器
- 浏览器：Node 流可以被拓展使用在浏览器
- Audio：流接口的声音模块
- RPC（远程调用）：通过网络发送流是进程间通信的有效方式
- 测试：使用流的测试库

## 文件系统

### fs 模块交互

- POSIX 文件 I/O
- 文件流
- 批量文件 I/O
- 文件监控

### 读写流

```
const fs = require('fs');
const readable = fs.createReadStream('./original.txt');
const writeable = fs.createWriteStream('./copy.txt');
readable.pipe(writeable);
```

### 文件监控

`fs.watchFile` 比 `fs.watch` 低效，但更好用

## 网络

### TCP 客户端

NodeJS 使用 `net` 模块创建 TCP 连接和服务

### HTTP 客户端

使用 `http.createServer` 和 `http.createClient` 运行 HTTP 服务

#### 重定向

HTTP 标准定义了标识重定向发生时的状态码，它也指出了客户端应该检查无限循环。

- 300：多重选择
- 301：永久移动到新位置
- 302：找到重定向跳转
- 303：参见其他信息
- 304：没有改动
- 305：使用代理
- 307：临时重定向

### DNS 请求

使用 `dns` 模块创建 DNS 请求。

- A：`dns.resolve`，A 记录存储 IP 地址
- TXT：`dns.resulveTxt`，文本值可以用于在 DNS 上构建其他服务
- SRV：`dns.resolveSrv`，服务记录定义服务的定位数据，通常包含主机名和端口号
- NS：`dns.resolveNs`，指定域名服务器
- CNAME：`dns.resolveCname`，相关的域名记录，设置为域名而不是 IP 地址

```js
const dns = require('dns');

dns.resolve('www.chenng.cn', function (err, addresses) {
  if (err) {
    console.error(err);
  }

  console.log('Addresses:', addresses);
});
```

## 进程

## Node 多线程

### 单线程问题

- 对 cpu 利用不足
- 某个未捕获的异常可能会导致整个程序的退出

### Node 线程

- Node 进程占用了 7 个线程
- Node 中最核心的是 v8 引擎，在 Node 启动后，会创建 v8 的实例，这个实例是多线程的 
  - 主线程：编译、执行代码
  - 编译/优化线程：在主线程执行的时候，可以优化代码
  - 分析器线程：记录分析代码运行时间，为 Crankshaft 优化代码执行提供依据
  - 垃圾回收的几个线程
- JavaScript 的执行是单线程的，但 Javascript 的宿主环境，无论是 Node 还是浏览器都是多线程的

### 异步 IO

- Node 中有一些 IO 操作（DNS，FS）和一些 CPU 密集计算（Zlib，Crypto）会启用 Node 的线程池
- 线程池默认大小为 4，可以手动更改线程池默认大小

` process.env.UV_THREADPOOL_SIZE = 64 `

### 多进程 vs 多线程

进程是资源分配的最小单位，线程是CPU调度的最小单位

## 异常处理

### 处理未捕获的异常

- 除非开发者记得添加.catch语句，在这些地方抛出的错误都不会被 uncaughtException 事件处理程序来处理，然后消失掉。
- Node 应用不会奔溃，但可能导致内存泄露

```
process.on('uncaughtException', (error) => {
  // 我刚收到一个从未被处理的错误
  // 现在处理它，并决定是否需要重启应用
  errorManagement.handler.handleError(error);
  if (!errorManagement.handler.isTrustedError(error)) {
    process.exit(1);
  }
});

process.on('unhandledRejection', (reason, p) => {
  // 我刚刚捕获了一个未处理的promise rejection,
  // 因为我们已经有了对于未处理错误的后备的处理机制（见下面）
  // 直接抛出，让它来处理
  throw reason;
});
```

## 综合应用

### JWT

 JSON Web Token（缩写 JWT）是目前最流行的跨域认证解决方案。 

#### 原理

- 服务器认证以后，生成一个 JSON 对象，发回给用户
- 用户与服务端通信的时候，都要发回这个 JSON 对象，服务器完全只靠这个对象认定用户身份
- 防止篡改会加上签名

#### 一般流程

- 用户向服务器发送用户名和密码
- 服务器验证通过后，在当前对话（session）里面保存相关数据，比如用户角色、登录时间等等
- 服务器向用户返回一个 session_id，写入用户的 Cookie
- 用户随后的每一次请求，都会通过 Cookie，将 session_id 传回服务器
- 服务器收到 session_id，找到前期保存的数据，由此得知用户的身份

#### session 共享

在服务器集群，要求 session 数据共享，每台服务器都能够读取 session：

- 一种解决方案是 session 数据持久化，写入数据库或别的持久层。各种服务收到请求后，都向持久层请求数据。这种方案的优点是架构清晰，缺点是工程量比较大。另外，持久层万一挂了，就会单点失败。
- 另一种方案是服务器索性不保存 session 数据了，所有数据都保存在客户端，每次请求都发回服务器。JWT 就是这种方案的一个代表。

##### Header

```
{
  "alg": "HS256", // 签名的算法
  "typ": "JWT" // token 的类型
}
复制代码
```

##### Payload

```
{
  // 7 个官方字段
  "iss": "签发人",
  "exp": "过期时间",
  "sub": "主题",
  "aud": "受众",
  "nbf": "生效时间",
  "iat": "签发时间",
  "jti": "编号",
  // 定义私有字段
  "name": "Chenng" 
}
复制代码
```

##### Signature

```
HMACSHA256(
  base64UrlEncode(header) + "." +
  base64UrlEncode(payload),
  secret) # secret 秘钥只有服务器知道
```

#### 使用方式

- 客户端收到服务器返回的 JWT，可以储存在 Cookie 里面，也可以储存在 localStorage
- 放在 Cookie 里面自动发送，但是这样不能跨域，所以更好的做法是放在 HTTP 请求的头信息 Authorization 字段里面

#### 特点

- JWT 不仅可以用于认证，也可以用于交换信息。有效使用 JWT，可以降低服务器查询数据库的次数
- JWT 的最大缺点是，由于服务器不保存 session 状态，因此无法在使用过程中废止某个 token，或者更改 token 的权限。也就是说，一旦 JWT 签发了，在到期之前就会始终有效，除非服务器部署额外的逻辑
- JWT 本身包含了认证信息，一旦泄露，任何人都可以获得该令牌的所有权限。为了减少盗用，JWT 的有效期应该设置得比较短。对于一些比较重要的权限，使用时应该再次对用户进行认证





