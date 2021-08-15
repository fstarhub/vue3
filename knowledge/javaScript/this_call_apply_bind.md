<!--
 * @Description: 
 * @Version: 3.0
 * @Autor: 冯帅
 * @Date: 2021-07-13 15:35:24
 * @LastEditors: 冯帅
 * @LastEditTime: 2021-07-13 18:56:30
-->
## this
### 什么是this
在传统面向对象的语言中，比如Java，this关键字用来表示当前对象本身，或当前对象的一个实例，通过this关键字可以获得当前对象的属性和调用方法。

在JavaScript中，this似乎表现地略有不同，这也是让人“讨厌”的地方~

ECMAScript规范中这样写：
> this 关键字执行为当前执行环境的 ThisBinding。

MDN上这样写：
> In most cases, the value of this is determined by how a function is called.
在绝大多数情况下，函数的调用方式决定了this的值。

### 调用位置
首先需要理解调用位置，调用位置就是函数在代码中被调用的位置，而不是声明的位置。

通过分析调用栈（到达当前执行位置所调用的所有函数）可以找到调用位置。

```js
  function baz(){
    console.log("baz");
    bar();
  }
  function bar(){
    console.log("bar");
    foo();
  }
  function foo(){
    console.log("foo");
  }
  baz();
```
当我们调用baz()时，它会以此调用baz()→bar()→foo()。

对于foo()：调用位置是在bar()中。
对于bar()：调用位置是在baz()中。
而对于baz()：调用位置是全局作用域中。

可以看出，调用位置应该是当前正在执行的函数的前一个调用中

### 全局上下文
在全局执行上下文中this都指代全局对象。
* this等价于window对象
* var === this. === winodw.

  ```js
    console.log(window === this); // true
    var a = 1;
    this.b = 2;
    window.c = 3;
    console.log(a + b + c); // 6
  ```
在**浏览器里面this等价于window对象，如果你声明一些全局变量，这些变量都会作为this的属性**。

### 函数上下文
在函数内部，this的值取决于函数被调用的方式。

#### 1. 直接调用
**this指向全局变量**
  ```js
    function foo(){
      return this;
    }
    console.log(foo() === window); // true
  ```

#### 2. call()、apply()
**this指向绑定的对象上。**
  ```js
    var person = {
      name: "axuebin",
      age: 25
    };
    function say(job){
      console.log(this.name+":"+this.age+" "+job);
    }
    say.call(person,"FE"); // axuebin:25 FE
    say.apply(person,["FE"]); // axuebin:25 FE
  ```
可以看到，定义了一个say函数是用来输出name、age和job，其中本身没有name和age属性，我们将这个函数绑定到person这个对象上，输出了本属于person的属性，说明此时this是指向对象person的。

如果传入一个原始值（字符串、布尔或数字类型）来当做this的绑定对象， 这个原始值会被转换成它的对象形式（new String()），这通常被称为“**装箱**”。

call和apply从this的绑定角度上来说是一样的，唯一不同的是它们的第二个参数。

#### 3. bind()
**this将永久地被绑定到了bind的第一个参数。**
bind和call、apply有些相似。
  ```js
    var person = {
      name: "axuebin",
      age: 25
    };
    function say(){
      console.log(this.name+":"+this.age);
    }
    var f = say.bind(person);
    console.log(f());
  ```
#### 4. 箭头函数
先看箭头函数和普通函数的重要区别：

> 1、没有自己的this、super、arguments和new.target绑定。
2、不能使用new来调用。 
3、没有原型对象。 
4、不可以改变this的绑定。 
5、形参名称不能重复。

**箭头函数中没有this绑定，必须通过查找作用域链来决定其值。 如果箭头函数被非箭头函数包含，则this绑定的是最近一层非箭头函数的this，否则this的值则被设置为全局对象**，比如：
  ```js
    var name = 'window';
    var student = {
        name: '若川',
        doSth: function(){
            // var self = this;
            var arrowDoSth = () => {
                // console.log(self.name);
                console.log(this.name);
            }
            arrowDoSth();
        },
        arrowDoSth2: () => {
            console.log(this.name);
        }
    }
    student.doSth(); // '若川'
    student.arrowDoSth2(); // 'window'
  ```
其实就是相当于箭头函数外的this是缓存的该箭头函数上层的普通函数的this。如果没有普通函数，则是全局对象（浏览器中则是window）。
也就是说无法通过call、apply、bind绑定箭头函数的this(它自身没有this)。而call、apply、bind可以绑定缓存箭头函数上层的普通函数的this。
比如：

  ```js
    var student = {
      name: '若川',
      doSth: function(){
          console.log(this.name);
          return () => {
              console.log('arrowFn:', this.name);
          }
      }
    }
    var person = {
        name: 'person',
    }
    student.doSth().call(person); // '若川'  'arrowFn:' '若川'
    student.doSth.call(person)(); // 'person' 'arrowFn:' 'person'
  ```

**所有的箭头函数都没有自己的this，都指向外层。**
MDN中对于箭头函数这一部分是这样描述的：
> An arrow function does not create its own this, the this value of the enclosing execution context is used.
箭头函数会捕获其所在上下文的this值，作为自己的this值。

  ```js
    function Person(name){
      this.name = name;
      this.say = () => {
        var name = "xb";
        return this.name;
      }
    }
    var person = new Person("axuebin");
    console.log(person.say()); // axuebin
  ```
箭头函数常用语回调函数中，例如定时器中：
  ```js
    function foo() {  
      setTimeout(()=>{
        console.log(this.a);
      },100)
    }
    var obj = {
      a: 2
    }
    foo.call(obj);
  ```

[附上MDN关于箭头函数this的解释](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Functions/Arrow_functions#%E4%B8%8D%E7%BB%91%E5%AE%9A_this)

#### 作为对象的一个方法
**this指向调用函数的对象。**
  ```js
    var person = {
      name: "axuebin",
      getName: function(){
        return this.name;
      }
    }
    console.log(person.getName()); // axuebin
  ```
这里有一个需要注意的地方。。。
  ```js
    var name = "xb";
    var person = {
      name: "axuebin",
      getName: function(){
        return this.name;
      }
    }
    var getName = person.getName;
    console.log(getName()); // xb
  ```
发现this又指向全局变量了，这是为什么呢？

还是那句话，**this的指向得看函数调用时。**

#### 作为一个构造函数
**this被绑定到正在构造的新对象。**
通过构造函数创建一个对象其实执行这样几个步骤：
1. 创建新对象
2. 将this指向这个对象
3. 给对象赋值（属性、方法）
4. 返回this

使用new操作符调用函数，会自动执行以下步骤。
1. 创建了一个全新的对象。
2. 这个对象会被执行[[Prototype]]（也就是__proto__）链接。
3. 生成的新对象会绑定到函数调用的this。
4. 通过new创建的每个对象将最终被[[Prototype]]链接到这个函数的prototype对象上。
5. 如果函数没有返回对象类型Object(包含Functoin, Array, Date, RegExg, Error)，那么new表达式中的函数调用会自动返回这个新的对象。

由此可以知道：new操作符调用时，this指向生成的新对象。 **特别提醒一下，new调用时的返回值，如果没有显式返回对象或者函数，才是返回生成的新对象。**

所以this就是指向创建的这个对象上

  ```js
    function Person(name){
      this.name = name;
      this.age = 25;
      this.say = function(){
        console.log(this.name + ":" + this.age);
      }
    }
    var person = new Person("axuebin");
    console.log(person.name); // axuebin
    person.say(); // axuebin:25
  ```

#### 作为一个DOM事件处理函数
**this指向触发事件的元素，也就是始事件处理程序所绑定到的DOM节点。**

  ```js
    var ele = document.getElementById("id");
    ele.addEventListener("click",function(e){
      console.log(this);
      console.log(this === e.target); // true
    })
  ```

#### HTML标签内联事件处理函数
**this指向所在的DOM元素**
`<button onclick="console.log(this);">Click Me</button>
`
#### jQuery的this
**在许多情况下JQuery的this都指向DOM元素节点。**
  ```js
    $(".btn").on("click",function(){
      console.log(this); 
    });
  ```

## 总结
如果要判断一个函数的this绑定，就需要找到这个函数的直接调用位置。然后可以顺序按照下面四条规则来判断this的绑定对象：
1. 由new调用：绑定到新创建的对象
2. 由call或apply、bind调用：绑定到指定的对象
3. 由上下文对象调用：绑定到上下文对象
4. 默认：全局对象

\* 注意：箭头函数不使用上面的绑定规则，根据外层作用域来决定this，继承外层函数调用的this绑定。

如果要判断一个运行中函数的 this 绑定， 就需要找到这个函数的直接调用位置。

1. new 调用：绑定到新创建的对象，注意：显示return函数或对象，返回值不是新创建的对象，而是显式返回的函数或对象。
2. call 或者 apply（ 或者 bind） 调用：严格模式下，绑定到指定的第一个参数。非严格模式下，null和undefined，指向全局对象（浏览器中是window），其余值指向被new Object()包装的对象。
3. 对象上的函数调用：绑定到那个对象。
4. 普通函数调用： 在严格模式下绑定到 undefined，否则绑定到全局对象。

ES6 中的箭头函数：不会使用上文的四条标准的绑定规则， 而是根据当前的词法作用域来决定this， 具体来说， 箭头函数会继承外层函数，调用的 this 绑定（ 无论 this 绑定到什么），没有外层函数，则是绑定到全局对象（浏览器中是window）。 这其实和 ES6 之前代码中的 self = this 机制一样。

DOM事件函数：一般指向绑定事件的DOM元素，但有些情况绑定到全局对象（比如IE6~IE8的attachEvent）。

一定要注意，有些调用可能在无意中使用普通函数绑定规则。 如果想“ 更安全” 地忽略 this 绑
定， 你可以使用一个对象， 比如 ø = Object.create(null)， 以保护全局对象。

**面试官考察this指向就可以考察new、call、apply、bind，箭头函数等用法。从而扩展到作用域、闭包、原型链、继承、严格模式等。这就是面试官乐此不疲的原因。**

****

## 扩展:[装箱与拆箱](https://blog.csdn.net/DLGDark/article/details/100836377)
**装箱操作**：把基本数据类型转换为对应的引用类型的操作
**拆箱操作**： 把引用类型转换为基本数据类型的操作
### 装箱操作：
首先我们要知道在js中有三个基本包装类型：
* number
* string
* Boolean

  ```js
    var str="hello world";
    var strRes=str.split(" ");
    console.log(strRes)		//["hello", "world"]
  ```
如上面代码所示，变量str是一个基本类型值，不是一个对象，就不存在方法，但上面代码却显示可以正常调用方法。实际上这一切都是js内部做了以下处理：
**（1）创建String类型的一个实例；**
**（2）在实例上调用指定的方法；**
**（3）销毁这个实例；**
转换为对应代码就是：
  ```js
    var str=new String("hello world");
    var strRes=str.split(" ");
    str=null;
  ```
其实，说白了就是临时创建了一个对象，然后去调用方法。下面这句话引用自《javascript高级程序设计》一书中
> 每当读取一个基本类型的时候，后台就会创建一个对应的基本包装类型对象，从而让我们能够调用一些方法来操作这些数据

### 拆箱操作：
拆箱操作中主要有两个方法，valueOf()方法和toString()方法。这两个方法主要用来检测你返回的是不是一个基本类型的值。一般是先用valueOf()来检测，如果返回的不是一个基本类型的值，是对象自身，则会继续用toString()来检测，如果检测结果不是一个基本类型的值，则会报错(Uncaught SyntaxError: Invalid or unexpected token)。以下是两个方法的具体描述，引用自MDN。

* valueOf
> 1.valueOf() 方法返回指定对象的原始值。
2.JavaScript调用valueOf方法将对象转换为原始值。你很少需要自己调用valueOf方法；当遇到要预期的原始值的对象时，JavaScript会自动调用它。
3.默认情况下，valueOf方法由Object后面的每个对象继承。 每个内置的核心对象都会覆盖此方法以返回适当的值。如果对象没有原始值，则valueOf将返回对象本身。
4.JavaScript的许多内置对象都重写了该函数，以实现更适合自身的功能需要。因此，不同类型对象的valueOf()方法的返回值和返回值类型均可能不同

* toString
> 1.toString() 方法返回一个表示该对象的字符串。
2.每个对象都有一个 toString() 方法，当该对象被表示为一个文本值时，或者一个对象以预期的字符串方式引用时自动调用。
3.默认情况下，toString() 方法被每个 Object 对象继承。如果此方法在自定义对象中未被覆盖，toString() 返回 “[object type]”，其中 type 是对象的类型。

下面通过代码来分析具体什么叫做拆箱操作：
  ```js
    []+[]	//""
    {}+{}	//"[object Object][object Object]"
    []+{}	//"[object Object]"
    {}+[]	//0
  ```
如上面代码所示，右边注释的是其对应的结果，下面逐个分析其中的原理：

（1）[]+[],[]自身是一个空数组，即是一个对象，[]会先被valueOf()检测返回自身,还是[],然后使用toString()检测返回空字符""，实际最终是""+""，所以最终结果还是一个""。
（2）{}+{}，在js中{}可以表示一个代码块，也可以表示一个对象。在此处作为一个对象来运算，({}).valueOf()检测结果为自身，继续检测，({}).toString()检测结果为"[object Object]"，所以{}+{}相当于"[object Object]"+"[object Object]"，故结果为"[object Object][object Object]"。
（3）[]+{},从上面分析可以知道，这个相当于""+"[object Object]"，所以结果为"[object Object]"。
（4）{}+[],上面三个或许大多数人都能明白，但这个估计就会有人有疑问了，为什么会是0呢？首先，这里的{}被当做了代码块，由于编译原理底层一些机制，会涉及到词法分析、语法分析、语义分析、代码生成这些知识，这里+[]相当于+""，因为运算符+的原因，会将+""隐式转换为+0，所以结果最终为0

思考：`([][[]]+[])[+!![]]+([]+{})[!+[]+!![]]	//"nb"
`
> !! 一般用来将后面的表达式强制转换为布尔类型的数据(boolean)，只能是true or false.
例：!![] //true,[]自身就是对象，会先转换成true，![]会将其转换为false，!![]再将其转换为true，实际上就是自身的布尔值.
