### 1\. 初始化项目

### 2.项目环境配置

开发环境和生产环境配置

### 3.路由

@koa/router

### 4.页面渲染

swig,koa-swig,co

### 5.静态资源

koa-static

### 6.真假路由

koa2-connect-history-api-fallback

### 7.容错处理，错误日志

log4js

### 8.ES6 模块化

@babel/cli, @babel/core, @babel/plugin-transform-modules-systemjs

### 9.SafeRequest 封装

### 10.项目结构优化

### 11.打包

#### node.js 打包

#### gulp **gulp-if** gulp-swc core-js gulp-uglify

#### views 打包

html: gulp-htmlmin, gulp-rev, gulp-rev-replace

css: postcss gulp-postcss autoprefixer postcss-preset-env cssnano postcss-import

js: 如果需要打包为 System.js 直接配置 swc，不需要再单独装包

#### assets

直接拷贝

### 12.打包梳理

按找前后端工程架构：前端打包、 node 端打包

按照开发环境：开发环境、 生产环境

问题如下：

- 改为 ESM 模块后，第三方 commonjs 模块处理
- html 打包目录问题
- 将 node 打包成 common.js 后，ESM 环境（type: “module”）下无法启动打包后的 node 的服务
- node 源码启动服务，代码中 views、components 等页面组件相关的 js,css 无法作为静态资源进行引用

解决打包后项目启动问题

### 13\. 工程优化

通过名称来插入 js 和 css

命令 scripty npm-run-all

重复代码 jscpd

tree-shaking，环境变量判断相关代码删除（gulp-replace）

yargv 取环境变量

glob 匹配文件

layouts

热更新 gulp-watch hmr

prepack

### 14.前后端路由

vue-router

### 15.单测
