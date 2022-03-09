

## Array常用方法

检测：instanceof isArray

转换：toLocalString toString valueOf

栈(改变原数组)：push pop

队列(改变原数组)：shift unshift

重排序 (改变原数组) ：sort reverse

操作：concat slice splice(改)

位置：index lastIndex

迭代：every filter forEach map some

归并：reduce reduceRight

其他：

find(满足测试函数的值或undefined）

findindex(满足测试函数的下标或-1）

flat(指定深度遍历数组，将遍历的数组元素合并为一个新数组)

flatMap

forEach：返回undefined（不会直接改变调用它的对象，但那个对象可能会被callback改变，除抛异常外，无法终止或跳出forEach）

includes：数组是否包含指定值

indexOf：找到指定元素的一大个索引，否者返回-1

join：将数组元素连接成一个字符串

keys：返回数组每个键的iterator对象

lastIndexOf：指定元素在数组中的最后一个索引

toLocalString：数组中每个元素调用这个方法转成字符串

toString：返回指定数组及其元素的字符串

values：返回一个Array Iterator对象，包含数组每个索引的值