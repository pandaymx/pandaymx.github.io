---
slug: microsoft-jplusplus-event
title: 镀金的牢笼：微软 Visual J++ 的兴衰、Java 战争与 .NET 的诞生
authors: [ppmb]
tags: [Java, 微软, 诉讼, 历史]
date: 2025-12-19
---

1990 年代中期，微软（Microsoft）处于个人计算帝国权力的巅峰，Windows 95 的成功确立了其操作系统领域的绝对统治。开发者围绕 Win32 API 构建软件，这一生态壁垒成为微软最坚固的护城河。然而，1995 年 Sun Microsystems 推出的 Java 语言，以 JVM 抽象层承诺“一次编写，到处运行”（WORA），试图将应用从操作系统中解耦——这对微软而言是一场由“中间件”发起的降维打击。

<!-- truncate -->

## 风暴前夕——中间件的威胁与操作系统的护城河

### 霸权的黄昏与新星的升起

Java 通过 JVM 让应用不再绑定底层平台，成为跨操作系统的统一层。对于长期受跨平台移植之苦的开发者，它是福音；对于微软，它可能让 Windows 贬为众多“运行 JVM 的设备驱动程序”之一。

### 中间件威胁论与 Ben Slivka 的预警

微软高层敏锐地意识到中间件接管的风险。1995 年 5 月，Ben Slivka 在《Web 是下一个平台》（The Web is the Next Platform）中警示：Web 技术（HTML、Java）正演化为独立平台，若微软不主导这一层，Windows 的价值将被稀释。他建议“尽可能用微软技术扩展 Web，即使这意味着以非设计者初衷的方式修改这些技术”。这一思想演化为“拥抱、扩展、消灭”（Embrace, Extend, Extinguish）。比尔·盖茨在 1997 年的内部邮件中直言需要遏制 Java，并询问“我们是否有明确的计划让 Apple 破坏 Sun 的 Java？”这表明微软从一开始并不打算做一个安分的 Java 授权者。

### 1996 年技术许可与分发协议（TLDA）的签署

1996 年 3 月，微软与 Sun 签署 TLDA：微软每年支付 375 万美元以获得 Java 技术使用权，且可“制作、修改、调整并创建源代码形式技术的衍生作品”，并分发产品。作为交换，微软承诺在 Sun 发布重大升级后六个月内推出兼容实现，并且只能提供兼容实现。协议表面上是 Java 的胜利（IE 预装 JVM），但“兼容性”定义的模糊与微软对“衍生作品”的激进解读，为后续法律战争埋下伏笔。对微软而言，TLDA 更像是合法拆解并重组 Java 的入场券。

## 特洛伊木马——Visual J++ 的技术架构与诱惑

### 极致的开发体验与市场降维打击

1996 年 10 月，微软发布 Visual J++ 1.0。彼时 Java 开发工具仍显简陋，Sun 的 JDK 基于命令行，Symantec 的 Visual Café 稳定性不足。Visual J++ 延续 Visual Studio 家族的长处：

- 编译器速度极快，被誉为“每分钟编译一百万行代码”。
- 智能感知（IntelliSense）显著降低学习曲线并提升效率。
- 图形化调试器支持断点、变量监视，甚至跨语言调试。
  它迅速成为 Windows 上最受欢迎的 Java IDE 之一。

### 扩展（Extend）：构建镀金的牢笼

Visual J++ 6.0 引入专有技术——J/Direct 与 WFC（Windows Foundation Classes），打造“金手铐”。AWT 的“最小公分母”导致跨平台 UI 体验糟糕，微软给出答案：让 Java 直接利用 Windows 的强大功能。

#### J/Direct：打通任督二脉

J/Direct 允许 Java 绕过 JVM 的安全沙箱与抽象层，直接调用 Win32 API。标准 Java 的 JNI 繁琐且易错，而在 Visual J++ 中只需简单声明即可使用 Windows DLL。

示例（概念性）：

```java
/** @dll.import("USER32") */
private static native int MessageBox(int hwnd, String text, String title, int style);
```

这一便利让开发者如获至宝，但代价是代码永远无法在 Linux 或 macOS 上运行，彻底锁死在 Windows 平台。

#### Windows Foundation Classes (WFC)：安德斯·海尔斯伯格的杰作

WFC 是面向对象的 Java 类库，封装 Win32 与 DHTML 对象模型。其首席架构师是 Anders Hejlsberg（Turbo Pascal、Delphi 之父）。WFC 将 Delphi 的组件化理念带入 Java，构建“属性、方法、事件”模型，让 Windows 桌面开发像 VB 一样简单。

关键特性：

- 与 Win32 深度绑定：控件直接映射为原生控件，外观与性能均优于 AWT/Swing。
- 可视化设计器：所见即所得的窗体设计器与事件代码生成，具备“双向工程”能力。

### 语言层面的“异端”：委托（Delegates）与属性（Properties）

为支持 WFC 的模型，微软修改 Java 语言，引入标准中不存在的语法特性，使 Visual J++ 的“Java”代码无法被标准 `javac` 编译。

#### 委托（Delegates）

Java 1.1 的事件处理依赖内部类与接口，海尔斯伯格认为繁琐，于是引入 `delegate`：类型安全的函数指针，用于事件处理。例如 `button.addOnClick(new EventHandler(this.button_Click));`。但其字节码依赖微软特有的 `com.ms.*`，无法在非微软 JVM 上运行。

#### 属性（Properties）

微软引入类似 Delphi 的属性语法，通过 `get_`/`set_` 方法模拟字段访问，进一步偏离 Java 标准。

### “污染”战略的实施与开发者困境

一份被 DOJ 披露的 1998 年内部备忘录明确提出“污染 Java”（Pollute Java）：“通过增长受污染的 Java 市场来扼杀跨平台 Java”。策略是以最佳工具与性能诱导开发者使用 J/Direct 与 WFC，一旦采用即锁定 Windows，从而削弱 Java 的跨平台承诺。许多企业开发者在交付压力下选择了 Visual J++，证明微软策略奏效。

## 法律的重锤——Sun Microsystems v. Microsoft Corp.

### 诉讼的爆发与核心指控

1997 年 10 月，Sun 起诉微软违反 TLDA、侵犯商标与版权并不正当竞争，指控包括：

- 不兼容的编译器：Visual J++ 生成的不兼容字节码无法通过 JCK。
- 移除核心组件：微软 JVM 中移除了 JNI 与 RMI，迫使使用 RNI 与 J/Direct。
- 误导性营销：产品宣称“Java Compatible”，却分发不兼容实现。

### 法律理论的博弈：版权侵权 vs. 违约

焦点在于微软行为是否构成“版权侵权”还是“违约”。

- Sun：兼容性是许可前提；不兼容即越权使用，构成侵权，可申请初步禁令且推定不可弥补损害。
- 微软：兼容性是独立契约；不兼容只是违约，Sun 只能索赔经济损失，无权禁售。并称其 JVM 可在兼容模式运行，只是默认未开启。

### 关键裁决与初步禁令

1998 年 11 月，法官 Ronald Whyte 支持 Sun，认定微软技术与营销均制造不兼容与误导：

- 发布初步禁令：微软须在通过兼容测试前，不得分发不兼容 Java 技术；必须支持 JNI，并默认关闭导致不兼容的编译器扩展。
- 虽上诉法院以程序性理由撤销部分禁令，但地方法院随后依据《不正当竞争法》恢复禁令，认定微软滥用操作系统优势分发不兼容 JVM，构成不正当竞争。

### DOJ 反垄断案的联动效应

在“世纪审判”（United States v. Microsoft Corp.）中，微软围绕 Java 的行为成为非法垄断的核心证据之一。内部邮件显示其非“仅为创新”，而是策略性控制与破坏。最终，法院认定微软在 Java 问题上的行为构成非法垄断。

## 休战与赔偿——2001 与 2004 年的和解协议

### 2001 年：初步和解与 J++ 的物理死亡

2001 年 1 月，微软与 Sun 初步和解：

- 赔偿 2000 万美元。
- 终止 1996 年 TLDA，微软失去继续开发 Visual J++ 或升级 MSJVM 的权利。
- 永久禁用“Java Compatible”商标。
- 允许在未来 7 年继续分发基于 Java 1.1.4 的 MSJVM 以支持遗留，但必须停止开发新的 Java 功能并逐步淘汰。
  此举宣布了 Visual J++ 的终结。随后 Visual Studio .NET 不再包含 J++，取而代之的是 J#（迁移工具）与全新的 C#。

### 2004 年：19.5 亿美元的最终谢幕

2004 年 4 月，微软与 Sun 达成全面和解：

- 反垄断赔偿：7 亿美元。
- 专利和解：9 亿美元，建立交叉许可机制。
- 技术授权费：3.5 亿美元（未来使用 Sun 服务器技术）。
  总计约 19.5 亿美元。微软承诺在 2007-12-31 之后彻底停止对 MSJVM 的所有支持。双方在互操作性上合作，但 J++ 至此正式落幕。

## 浴火重生——从 Project COOL 到 C# 的诞生

### 痛定思痛：必须拥有自己的语言

J++ 的失败不是技术失败，而是授权模式失败。微软意识到：构建在他人标准（Java）之上将受制于人。无法控制 Java，则必须“替代”。1998 年底，法院禁令下达后，微软启动绝密项目——Project COOL（C-like Object Oriented Language）。

### 灵魂人物：安德斯·海尔斯伯格的救赎

海尔斯伯格以 C++ 为基础，吸收 Java 的优点（GC、强类型、虚拟机），并融入 Delphi 的组件化思想，重塑新语言。命名从 COOL 演变为 C#（C Sharp），寓意“比 C 高半个音”，也暗示是 C++ 的进阶。

### 基因传承：J++ 如何活在 C# 中

对比 Visual J++ 与 C# 1.0，二者高度相似，J++ 的灵魂在 .NET 中延续：

- 事件处理：J++ 的 `delegate` → C# 的 `delegate` 与 `event`。
- UI 框架：WFC → Windows Forms（WinForms），继承控件与布局思想。
- 互操作性：J/Direct → P/Invoke（Platform Invoke）。
- 属性：`get_Foo`/`set_Foo` → C# 的 `{ get; set; }` 属性语法。
- 运行时：MSJVM → CLR（Common Language Runtime），统一多语言。

### 临时桥梁：Visual J# 的短暂一生

为安抚 J++ 投入者，微软推出 Visual J#：语法与 Java 一致，但运行于 .NET CLR，帮助迁移到 .NET。J# 于 2007 年停止主要支持，完成“撤退掩护”。

## 深层洞察与历史评价

### “拥抱、扩展、消灭”的双刃剑效应

战术成功：微软扰乱了 Java 在桌面端的统一进程，直到今天 Java 在桌面 GUI 领域表现不佳。
战略反噬：付出法律与声誉代价，背负反垄断枷锁，影响随后的互联网浪潮应对速度。

### 平台经济学的博弈：控制权与创新

Sun 以标准统一为目标，导致演进缓慢与体验牺牲；微软通过扩展提升性能与效率，海尔斯伯格认为不少扩展是对缺陷的修复，代价是牺牲跨平台性。

### 现代回响：二十年后的和解

微软在纳德拉时代拥抱开源与跨平台，发布自家 OpenJDK 构建，Azure 成为运行 Java 的一流平台；同时 .NET Core（.NET 5/6/7+）实现真正跨平台。Android 在 API 版权与语言实现上的争议也呼应了当年的博弈（Oracle v. Google）。

## 结论

Visual J++ 是微软试图将 Java 私有化的失败尝试，但这一失败催生了 C# 与 .NET，并定义了此后二十年 Windows 平台开发的范式。今天我们在 VS Code 编写 C# 或在 Azure 部署 Java 微服务，事实上站在那场“咖啡杯战争”的余烬之上。Visual J++ 的 DNA——对开发者体验的极致追求、对原生性能的执着、组件化理念——已深植现代软件开发的骨髓。
