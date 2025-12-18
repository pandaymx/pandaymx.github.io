---
title: Java 简介
sidebar_position: 1
---

# Java 简介

## Java 基本介绍

### Java 是什么

Java 是一门广泛使用的编程语言，具有跨平台特性。Java 语言由 Sun Microsystems 公司于 1995 年发布，现由 Oracle 公司维护和发展。Java 语言的设计目标是“一次编写，到处运行”，这意味着用 Java 编写的程序可以在任何支持 Java 的平台上运行，而无需重新编译。

### Java 的主要特点

- **跨平台性**：Java 程序通过 Java 虚拟机（JVM）运行，使得同一份代码可以在不同操作系统上执行。
- **面向对象**：Java 是一种纯面向对象的编程语言，支持封装、继承和多态等面向对象的特性。
- **丰富的标准库**：Java 提供了丰富的标准类库，涵盖了数据结构、网络编程、图形用户界面等多个方面，极大地方便了开发者。
- **自动内存管理**：Java 具有垃圾回收机制，自动管理内存，减少了内存泄漏和指针错误的风险。
- **多线程支持**：Java 内置对多线程编程的支持，使得开发并发应用程序更加容易。
- **安全性**：Java 提供了多层次的安全机制，包括字节码验证、类加载器和安全管理器，保障应用程序的安全运行。
- **丰富的生态系统**：Java 拥有庞大的开发者社区和丰富的第三方库、框架，支持各种应用开发需求。
- **高性能**：通过即时编译（JIT）技术，Java 程序在运行时可以达到接近本地代码的性能。
- **广泛应用**：Java 被广泛应用于企业级应用、移动应用（如 Android）、大数据处理、云计算等领域。

### Java 应用场景

- **企业级应用**：Java EE（现为 Jakarta EE）广泛用于构建大型企业级应用程序。
- **移动应用**：Android 平台主要使用 Java 进行应用开发，但目前 Google 正在逐步转向 Kotlin。
- **Web 应用**：Java 提供了多种框架（如 Spring、JavaServer Faces）用于开发动态 Web 应用。
- **大数据处理**：Hadoop 等大数据技术栈中大量使用 Java。
- **嵌入式系统**：Java ME 曾用于嵌入式设备开发，尽管现在已被淘汰。
- **科学计算**：Java 在科学计算和数值分析领域也有一定应用。
- **游戏开发**：虽然不是主流，但 Java 也被用于一些游戏开发，尤其是独立游戏，例如 Minecraft。

### Java 平台规范

- **Java SE（Standard Edition）**：Java 标准版，适用于桌面和服务器应用程序开发。
- **Java EE（Enterprise Edition）**：Java 企业版，扩展了 Java SE，现更名为 Jakarta EE，主要用于构建大型企业级应用。
- **~~Java ME（Micro Edition）~~**：Java 微型版，已经淘汰。

## Java 历史走向

### Sun Microsystems 时代

- 1995 年，Sun Microsystems 发布了 Java 语言，最初的版本是 Java 1.0。Java 的跨平台特性和面向对象设计迅速吸引了开发者的关注。
- 1996 年，Java 1.1 发布，引入了内部类、JavaBeans 和 JDBC 等新特性。
- 1998 年，Java 2（J2SE 1.2）发布，带来了 Swing GUI 库和集合框架，显著提升了 Java 的功能和性能。
- 2004 年，Java 5（曾用名 JDK 1.5）发布，引入了泛型、增强的 for 循环、自动装箱等重要特性。

### Oracle 时代

- 2010 年，Oracle 公司收购了 Sun Microsystems，开始接管 Java 的开发和维护工作。
- 2011 年，Java 7 发布，引入了 try-with-resources 语句、NIO.2 文件系统 API 和 Fork/Join 框架等新特性。
- 2014 年，Java 8 发布，带来了 Lambda 表达式、Stream API 和新的日期时间 API，极大地提升了 Java 的函数式编程能力，该版本被广泛认为是 Java 语言发展的重要里程碑。
- 2017 年，Java 9 发布，引入了模块化系统（Project Jigsaw），使得 Java 平台更加灵活和可维护，并以后每六个月发布一个新版本的时间表开始实施。

### 现代 Java

- 2018 年，Java 10 发布，引入了局部变量类型推断（var 关键字）。
- LTS 概念被确立，Java 11 成为下一个长期支持版本，带来了新的 HTTP 客户端 API 和垃圾回收器改进。
- 性能飞跃：随着每个新版本的发布，Java 在性能和内存管理方面持续改进，确保其在现代应用中的竞争力。

## Java 版本

### Java 发行版

- **Oracle JDK**：由 Oracle 提供的官方 Java 开发工具包，包含完整的 Java 运行时环境和开发工具。
- **OpenJDK**：一个开源的 Java 开发工具包，是 Oracle JDK 的参考实现，广泛用于各种操作系统和平台。
- **其他发行版**：包括 AdoptOpenJDK、Amazon Corretto、Azul Zulu 等，基于 OpenJDK 提供不同的支持和优化，满足不同用户需求。

对个人和企业用户来说，选择合适的 Java 发行版取决于具体需求，如支持周期、性能优化和商业支持等，但学习来讲各个发行版的差异不像 Linux 发行版那样大，可以任选其一进行学习和使用。

### JDK 版本

**LTS 版本**

- **Java 8**、**Java 11**：早期 LTS 版本，仍被一些企业使用
- **Java 17**、**Java 21**：目前企业应用最主流的 LTS 版本，强烈推荐用于生产环境
- **Java 25**：预期 LTS 版本（根据 Oracle 发布节奏），提供长期支持

对于新项目建议优先选择 **Java 21** 或更新的 LTS 版本。

**非 LTS 版本**

其余版本为快速发布版本，适合尝试新技术进行使用。


### Java 体系结构

**JDK（Java Development Kit）**

JDK 是 Java 开发工具包，包含了编译器（javac）、Java 运行时环境（JRE）、标准类库和各种开发工具。JDK 是开发 Java 应用程序的基础。

**JRE（Java Runtime Environment）**

JRE 是 Java 运行时环境，包含了 JVM、核心类库和支持文件。JRE 允许用户运行 Java 应用程序，但不包含开发工具。

**JVM（Java Virtual Machine）**

JVM 是 Java 虚拟机，是 Java 程序运行的核心组件。JVM 负责将 Java 字节码转换为机器码，并在不同平台上执行。JVM 提供了内存管理、垃圾回收和安全性等功能。

## Java 安装

### Windows（支持 ARM）

由于 JDK 发行版众多，可以任意选择一种进行安装，如果是 exe 安装，直接安装即可，如果是 zip 包，解压后配置环境变量即可。

1. 找到 JDK 安装路径，例如 **`C:\Program Files\Java\jdk-25`**
2. 右键点击"此电脑"->"属性"->"高级系统设置"->"环境变量"
3. 点击系统变量中的"新建"，变量名填写 **`JAVA_HOME`**，变量值填写 JDK 安装路径
4. 在系统变量中找到 **`Path`**，点击"编辑"，然后点击"新建"，添加 **`%JAVA_HOME%\bin`**，点击"确定"保存

### Linux 

Linux 可以通过包管理器安装，但一般只能安装 OpenJDK，也可以下载 tar.gz 包解压后配置环境变量。

```sh
# 以 Ubuntu 为例安装 OpenJDK 25
sudo apt update
sudo apt install openjdk-25-jdk
```

解压压缩包配置环境变量：

```sh
# 以解压 OpenJDK 25 为例
tar -xzf openjdk-25_linux-x64_bin.tar.gz -C /opt/java-25
# 打开终端，编辑 bash 配置文件
vim ~/.bashrc
# 添加以下内容到文件末尾
export JAVA_HOME=/opt/java-25
export PATH=$JAVA_HOME/bin:$PATH
# 保存并退出后，执行以下命令使配置生效
source ~/.bashrc
```

### macOS

编辑配置文件 `.zshrc` 或 `.bash_profile`，添加以下内容：

```sh
export JAVA_HOME=$(/usr/libexec/java_home)
export PATH=$JAVA_HOME/bin:$PATH
```

`Ctrl + O` 加 `Ctrl + X` 保存并退出后，执行以下命令使配置生效：

```sh
source ~/.zshrc  # 或 source ~/.bash_profile
```

### 验证安装

打开终端或命令提示符，输入以下命令：

```sh
java -version
```

如果显示 Java 版本信息，说明安装成功。例如：

```plaintext
java version "25.0.1" 2024-04-16
Java(TM) SE Runtime Environment (build 25.0.1+10-44)
Java HotSpot(TM) 64-Bit Server VM (build 25.0.1+10-44, mixed mode)
```

## 快速入门

### 编写第一个 Java 程序

创建一个名为 `HelloWorld.java` 的文件，内容如下：

```java
public class HelloWorld {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}
```

### 编译和运行 Java 程序

打开终端或命令提示符，导航到 `HelloWorld.java` 文件所在的目录，执行以下命令进行编译：

```sh
javac HelloWorld.java
```

编译成功后，会生成一个名为 `HelloWorld.class` 的字节码文件。接下来，运行该程序：

```sh
java HelloWorld
```

如果使用的是 JDK 11 及以上版本，也可以使用以下命令直接运行 Java 源文件：

```sh
java HelloWorld.java
```

输出结果应为：Hello, World!

### 新版本优化

由于 Java 21 以后引入了对单文件源代码运行的优化，可以直接运行包含 `main` 方法的 Java 文件，而无需显式编译为字节码文件。这使得快速测试和脚本编写更加方便。

Java 23 无需静态导入即可执行函数。

```java
void main() {
    println("Hello, World!");
}
```

Java 21 中运行需要开启 `java --source 21 --enable-preview HelloWorld.java` 来运行。
