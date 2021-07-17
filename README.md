# Serverless-Kubeless Template for NodeJs

## 简介
此项目为 Serverless Framework 在 Kubeless 环境下的 NodeJs 模板。

使用此模板您可以快速地使用 NodeJs 开发无服务器云函数。

## 快速入门
> 在此之前您必须拥有 Kubernetes 集群，以及在集群部署了 Kubeless 组件。
> 
> 开发环境要求安装 NodeJs。

### 准备
安装 **Serverless Framework** ：

```npm install -g serverless```

克隆项目：

```git clone https://codeup.aliyun.com/60af7c922c5969c370c5a518/serverless/nodejs-template.git```

### 安装依赖

在项目根目录执行：

```npm install```

### 运行调试

在项目根目录执行：

```npm run dev```

打开浏览器，输入地址：

```http://localhost:3000/hello```

### 打包部署

在项目根目录执行：

```npm run deploy```

打开浏览器，输入地址：

```http://functions.wgv/hello?xx=xx```

## 目录结构

* 待完善


