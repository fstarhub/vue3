## mixin
      解释：混合类型，糅合，米心
      目的：高效实现组件内容的复用
 1. **组件,mixins,vuex区别**
    > 组件:在引用之后相当于在父组件内开辟了一块单独的空间，来根据父组件props过来的值进行相应的操作 
    > 单纯组件引用： 父组件 + 子组件 >>> 父组件 + 子组件

    > mixins:是在引入组件之后，则是将组件内部的内容如data等方法、method等属性与父组件相应内容进行合并。相当于在引入后，父组件的各种属性方法都被扩充了。
    > mixins: 父组件 + 子组件 >>> new父组件

    > vuex:用来做状态管理的，里面定义的变量在每个组件中均可以使用和修改，在任一组件中修改此变量的值之后，其他组件中此变量的值也会随之修改。



****
  2. **作用**
  多个组件可以共享数据和方法，在使用mixin的组件中引入后，mixin中的方法和属性也就并入到该组件中，可以直接使用。钩子函数会两个都被调用，mixin中的钩子首先执行。 

****
  3. **mixin使用介绍**   
    1 定义一个js文件(mixin.js)
        ```js
        export default {
          data() {
            return {
            name: 'mixin---我是米心中的数据'
            }
          },
          created() {
            console.log('mixin...', this.name);
          },
          mounted() {
            getCount(num) {
              return num * num
            }
          },
          methods: {}
          }
      ```

      2 在vue组件中使用mixin
        ```js
          import mixin from '@/mixin'; // 引入mixin文件
          export default {
            mixins: [mixin]
          }
        ```
      3 全局引入（**不推荐在应用代码中使用**）
        ```js
          import mixin from './mixin'
          Vue.mixin(mixin)
        ```
****
  4. **组合规则**
    当组件和混入对象含有同名选项时，这些选项将以恰当的方式进行“合并”
      > 1 同名钩子函数将合并为一个数组，因此都将被调用。另外，混入对象的钩子将在组件自身钩子之前调用,Mixin 钩子按照传入顺序依次调用，并在调用组件自身的钩子之前被调用。
      ```js
        //都有 created 钩子函数
        var mixin = {
          created: function () { console.log(1) }
        }
        var vm = new Vue({
          mixins: [mixin],
          created: function () { console.log(2) }
        })
        // => 1
        // => 2
      ```
      > 2 数据对象在内部会进行递归合并，并在发生冲突时以组件数据优先
      ```js
        var mixin = {
          data: function () {
            return {
              message: 'hello',
              foo: 'abc'
            }
          }
        }

        new Vue({
          mixins: [mixin],
          data: function () {
            return {
              message: 'goodbye',
              bar: 'def'
            }
          },
          created: function () {
            console.log(this.$data)
            // => { message: "goodbye", foo: "abc", bar: "def" }
          }
        })
      ```
      > 3 值为对象的选项，例如 methods、components 和 directives，将被合并为同一个对象。两个对象键名冲突时，取组件对象的键值对
      ```js
        var mixin = {
          methods: {
            foo: function () {
              console.log('foo')
            },
            conflicting: function () {
              console.log('from mixin')
            }
          }
        }

        var vm = new Vue({
          mixins: [mixin],
          methods: {
            bar: function () {
              console.log('bar')
            },
            conflicting: function () {
              console.log('from self')
            }
          }
        })

        vm.foo() // => "foo"
        vm.bar() // => "bar"
        vm.conflicting() // => "from self"
      ```
      * props，data，自定义方法，计算属性，监听
      * 生命周期钩子
      * 资源类

## extend
  > 用法：使用基础 Vue 构造器，创建一个“子类”。参数是一个包含组件选项的对象。data 选项是特例，需要注意 - 在 Vue.extend() 中它必须是函数  

  `<div id="mount-point"></div>`

  ```js
    //创建构造器
    var Profile = Vue.extend({   
      template: '<p>{{firstName}} {{lastName}} aka {{alias}}</p>',
      data: function () {
        return {
          firstName: 'Walter',
          lastName: 'White',
          alias: 'Heisenberg'
        }
      }
    })
    //创建 Profile 实例，并挂载到一个元素上。
    new Profile().$mount('#mount-point')
  ```
  结果如下：

  `<p>Walter White aka Heisenberg</p>`

  \*注意：
            
  - 只能使用一个extends对象，多个无效，extends会先于mixins执行

  ## 总结
  1. 使用方法与作用：都是通过外部增加对象的形式，它接收的参数是简单的选项对象或构造函数。对使用vue组件时进行扩展
  2. mixin使用方式简单，extend相对比较繁琐（用的少）
  3. mixin中的方法和参数再组件中不共享（其他组件无法从当前组件中获取mixins中的数据和方法）
  4. mixin合并冲突是，组件选项优先
  5. 优先顺序：extend触发优先级较mixin高

