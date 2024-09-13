### 通过 pnpm  monorepo 的方式来实现 BFF

#### 目录结构

apps

- client

- server

#### 打包

client 和 server 分别打包

server 端打包时需要将 server 的 pckage.json 拷贝到 dist 中，上线时安装 server 的包

开发环境将前后端代码打包到 server 子工程中的 dist 下

上线环境将前后端代码打包到主工程根目录中的 dist 下

#### 打包修改配置文件修改

打包路径修改

删除 dist

修改打包命令

拷贝 server 子工程的 package.json

#### pnpm 的几个核心命令

pnpm install xxx --filter client

pnpm  add xxx -r/-w
