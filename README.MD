# A Tiny DSL To Extract data from js object

# 一个简单的用于提取对象属性的 DSL

> 背景：在写前端业务的时候，经常遇到这么一个问题，我从后端拿到的数据只用了 1/10 的字段,其他的都浪费了；或者很多字段我在这个业务中并不想暴露出来。这个问题需要我每次都处理下业务返回的数据，非常繁琐。专门写一个 dsl 用来过滤提取所需要对象的属性变得十分必要了。

> 思路： 我构建一个字符串，这个字符串大概长这个样子："{prop1{propInner} prop2[arrayProps]}",来告诉程序我需要什么样子的数据。程序根据我的 dsl 来对原有对象做提取。

> 实现

-   设计好 dsl 的 token，简单选取{}[] 这四个符号，其他字符构成的字符认为是属性名称。
-   把 dsl 字符串作为输入，将字符串 tokenize 化,这个函数在 lexuer 中。输入 " {\_041d \_e2bd \_7f66 } " 得到：[ '{', '_041d', '_e2bd', '_7f66', '}' ]
-   用得到的字符数组构建一个 ast 树.
    ```
    输入： ['{','name','{','person','{','id','age','parent','{','friend','[','name',']','}','region','}','}','}']
    得到： { name: { person: { id: {}, age: {}, parent:{friend:{name:{}}}, region: {} } } }
    ```
-   将生产的 ast 直接用于 js 对象，来实现萃取 js 对象的属性。

#### 使用方法

```javascript
# With tnpm
tnpm install @tencent/tulip
//demo.js
import tulip from '@tencent/tulip'
const result= tulip(`{person{name age parent{friend}}`,JSONOBJ)
# Load as ScriptFile
// <script src="./tx-tulip.1.0.0.js"></script>
// 全局注册了一个 TX_TULIP  对象。
const tulip= TX_TULIP.default
// .... do some thing.
```
