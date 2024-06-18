## 1\. 路由

### 1.1 基本路由

@koa/router

#### AllowedMethods

- 返回 OPTIONS 请求：  
  它自动返回包含允许的方法的 Allow 头部，这样客户端就知道服务器支持哪些方法。
- 处理不被支持的方法：  
  如果收到一个不被路由支持的 HTTP 方法请求，例如对一个只注册了 GET 方法的路由发送 POST 请求，它将返回 405 Method Not Allowed。
- 处理未实现的方法：  
  如果服务器不支持某个方法，例如 TRACE，它可以返回 501 Not Implemented。
- 自定义错误处理：  
  你可以通过传递 options 对象来自定义错误处理逻辑，例如使用 throw 选项使得中间件抛出错误而不是设置状态码和响应头。

### 2.路由前缀

### 3.路由参数

### 4.嵌套路由

### 5.路由拦截

官网文档：  
https://github.com/koajs/router/blob/HEAD/API.md

## 2.渲染模版

ejs, @ladjs/koa-views

### 2.1 基本功能

- 变量（自动转义，避免 xss）
- 支持 JS 代码：条件语句，循环语句，函数
- 父子组件

### 2.2 基本用法

#### 基本标签

- \<% 和 %>：在这对标签中间的代码会被执行，但不会被输出到 HTML 中。
- \<%= 和 %>：用于输出内容到 HTML 中，内容会被自动转义，以防止跨站脚本攻击（XSS）。
- \<%- 和 %>：也用于输出内容，但不会进行 HTML 转义，需要谨慎使用以防 XSS 攻击。

#### 条件语句和循环

EJS 允许在模板中直接使用 JavaScript 的控制结构，如条件语句和循环。

示例：条件语句

```javascript
&lt;% if (user.isAdmin) { %&gt;
  <h1>Welcome, administrator!</h1>
&lt;% } else { %&gt;
  <h1>Welcome, user!</h1>
&lt;% } %&gt;
```

示例：循环

```javascript
<ul>
  &lt;% for(var i = 0; i &lt; users.length; i++) { %&gt;
    <li>&lt;%= users[i].name %&gt;</li>
  &lt;% } %&gt;
</ul>
```

#### 包含子模板

EJS 支持通过 include 语句包含其他模板文件，这有助于模板的重用和组织。

```javascript
<div>
  &lt;% include('./views/header') %&gt;
  <p>Welcome to our website!</p>
</div>
```

#### 自定义函数和代码重用

可以在 EJS 模板中定义函数，用于执行复杂的逻辑或代码重用。

示例：

```javascript
&lt;%
function fullName(user) {
  return user.firstName + ' ' + user.lastName;
}
%&gt;
<p>Name: &lt;%= fullName(user) %&gt;</p>
```

这个例子中定义了一个 fullName 函数，用于输出完整的用户名。

### 3\. 静态资源

#### 3.1 koa-send

用于从 Koa 中间件中发送文件。它可以作为响应某个特定请求时发送单个文件的方法。通常不直接用于提供一个目录下的静态服务，而是在需要精确控制文件发送逻辑时使用，如基于请求的不同发送不同的文件。

示例代码如下：

```javascript
const Koa = require("koa");
const send = require("koa-send");
const app = new Koa();

app.use(async (ctx) => {
  await send(ctx, ctx.path, { root: __dirname + "/public" });
});

app.listen(3000);
```

#### 3.2 koa-static

基于 `koa-send` 来实现，可以将一个目录作为静态资源的根目录来提供服务。`koa-static` 更适合用于为整个目录下的文件提供静态文件服务，比如图片、JavaScript 文件、CSS 文件等。

示例代码如下：

```javascript
const Koa = require("koa");
const serve = require("koa-static");
const app = new Koa();
app.use(serve("public"));
app.listen(3000);
```

### 4\. 请求重定向

koa2-connect-history-api-fallback

主要功能包括：404 页面重定向；白名单

示例代码

```plaintext
app.use(history({
    index: '/',
    whiteList: ['api', 'server']
}))
```

核心代码

```plaintext
// white list check
if (options.whiteList) {
   let isFlag = false
   options.whiteList.forEach((item) => {
     if (!isFlag) isFlag = new RegExp(item).test(ctx.url)
   })
   if (isFlag) return next()
 }
```
