---
title: 青龙面板刷京豆
icon: /assets/icon/jd.svg
order: -1
category: 
  - 实用技术
  - Docker
tag:
  - 薅羊毛
isOriginal: true
---

## 青龙面板安装

### Docker 

```sh
docker run -dit \
  -p 5701:5700 \
  --name qinglongmianban \
  --hostname qinglongmianban \
  --restart unless-stopped \
  whyour/qinglong:latest
```

### Docker-compose

```sh
mkdir qinglong
wget https://raw.githubusercontent.com/whyour/qinglong/master/docker/docker-compose.yml
docker-compose up -d
docker-compose down
```

## 获取京东环境变量

点击 [京东手机版官网](https://m.jd.com/) 进入官网地址。

点击右下角的 `我的` 进行登录，输入手机号和验证码登录。

登录后按下 `f12` 打开浏览器开发者工具，点击网络，将请求清空后刷新网页，选择名称为 `my.m.jd.com` 的请求，拉到 `请求标头` &rarr; `Cookie` 中将 pt_key 和 pt_pin 复制。

![获取京东 Cookie](./assets/%E8%8E%B7%E5%8F%96%20JD_COOKIE.png)

## 青龙面板配置

### 登录

在浏览器地址栏输入 `localhost:5700` 进入青龙面板，首次进入需要进行初始化配置，点击开始安装

![初始化配置](./assets/%E9%9D%92%E9%BE%99%E9%9D%A2%E6%9D%BF%E5%88%9D%E5%A7%8B%E5%8C%96%E9%85%8D%E7%BD%AE.png)

你可以选择需要的通知方式，具体的通知方式不做详解，第一次可以选择跳过

![青龙面板通知方式](./assets/%E9%9D%92%E9%BE%99%E9%9D%A2%E6%9D%BF%E9%80%9A%E7%9F%A5%E6%96%B9%E5%BC%8F.png)

设置用户名和密码后进行提交。

![设置用户名和密码](./assets/%E8%AE%BE%E7%BD%AE%E7%94%A8%E6%88%B7%E5%90%8D%E5%92%8C%E5%AF%86%E7%A0%81.png)

初始化完成，点击去登陆

![安装完成](./assets/%E5%88%9D%E5%A7%8B%E5%8C%96%E5%AE%8C%E6%88%90.png)

输入用户名和密码进行登录

![登录](./assets/%E7%99%BB%E5%BD%95.png)

### 配置环境变量

点击侧边栏的环境变量，选择创建变量，将名称填写为 `JD_COOKIE`，如果你有多个京东号的话，则可以选择自动拆分，将 `pt_key` 和 `pt_pin` 写到值中，类似于 `pt_key=***;pt_pin=***;` 的格式。

### 拉取脚本库

点击侧边栏的订阅管理，单击创建订阅，在创建订阅中的名称栏中，粘贴下方的命令，将定时规则加上，推荐定时规则为 `0 0 * * * *`，表示每天的整点运行任务。

![创建脚本库](./assets/%E5%88%9B%E5%BB%BA%E8%84%9A%E6%9C%AC%E5%BA%93.png)

![创建订阅](./assets/%E5%88%9B%E5%BB%BA%E8%AE%A2%E9%98%85.png)

```sh
# 如果该命令出现问题，可以将 https://ghproxy.com/ 去除进行访问
ql repo https://ghproxy.com/https://github.com/ZhengchaoCao/faker3.git "jd_|jx_|gua_|jddj_|getJDCookie" "activity|backUp" "^jd[^_]|USER|function|utils|sendnotify|ZooFaker_Necklace.js|JDJRValidator_Pure|sign_graphics_validate|ql"
# zero205
ql repo https://github.com/zero205/JD_tencent_scf.git "jd_|jx_|jdCookie"  "backUp|icon""^jd[^_]|USER|utils|function|sendNotify|sign_graphics_validate|JDJR|JDSign|ql" "main"
# jdpro
ql repo https://github.com/6dylan6/jdpro.git "jd_|jx_|jddj_" "backUp" "^jd[^_]|USER|JD|function|sendNotify|utils"
ql repo https://github.com/HarbourJ/HarbourToulu.git "jd_" "activity|backUp|jd_sign" "^jd[^_]|USER|utils|ql|JD|sendNotify" "main"
ql repo https://github.com/feverrun/my_scripts.git "jd_|jx_|jddj_|getCookie|getJDCookie" "backUp" "^(jd|JD|JS)[^_]|USER|sendNotify|ql|utils"
```

### 安装依赖

选择依赖管理，选择自己的依赖，比如 NodeJS、Python3 或 Linux，点击创建依赖，选择自动拆分，将下方的依赖直接全部复制粘贴上去，点击确定即可。

![安装依赖](./assets/%E5%88%9B%E5%BB%BA%E4%BE%9D%E8%B5%96.png)

#### Linux 依赖

```md
gcc g++ make libffi-dev openssl-dev
lxml
bizMsg
bizCode
gcc
python-devel
aiohttp
```

### python 依赖

```md
dailycheckin
ping3
canvas
requests
jieba
PyExecJS
```

### Node.js 依赖

```md
ds
ts-md5
@types/node
prettytable
node-telegram-bot-api
tslib
ql
common
fs
typescript
axios
png-js
axios
ws@7.4.3
crypto-js
jieba
global-agent
jsdom -g
moment
form-data
date-fns
node-jsencrypt
require
js-base64
tough-cookie
json5
jsdom
dotenv
```

### 运行脚本

选择定时任务，可以选择需要的任务批量进行运行。

![脚本执行](./assets/%E9%80%89%E4%B8%AD%E8%84%9A%E6%9C%AC.png)

## 常见问题

### 京东 Cookie 过期问题

京东 Cookie 的问题应该是京东设置了 Cookie 过期时间，因此只能期待京东将 Cookie 过期时间来延长。

### 如何迁移

将镜像进行打包，打包之后重新构建使用即可。