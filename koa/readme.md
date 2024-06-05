## 1.基本路由
@koa/router
### AllowedMethods
- 返回 OPTIONS 请求：
    它自动返回包含允许的方法的 Allow 头部，这样客户端就知道服务器支持哪些方法。
- 处理不被支持的方法：
    如果收到一个不被路由支持的 HTTP 方法请求，例如对一个只注册了 GET 方法的路由发送 POST 请求，它将返回 405 Method Not Allowed。
- 处理未实现的方法：
    如果服务器不支持某个方法，例如 TRACE，它可以返回 501 Not Implemented。
- 自定义错误处理：
    你可以通过传递 options 对象来自定义错误处理逻辑，例如使用 throw 选项使得中间件抛出错误而不是设置状态码和响应头。

## 2.路由前缀

## 3.路由参数

## 4.嵌套路由

## 5.路由拦截

官网文档：
https://github.com/koajs/router/blob/HEAD/API.md