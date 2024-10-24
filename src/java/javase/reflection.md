--- 
title: 反射
icon: /assets/icon/reflect.svg
order: 9
category: 
  - Java
  - JavaSE
tag:
  - 反射
isOriginal: true
---

## 简介
### 什么是 Java 反射？

反射是 Java 提供的一种能力，允许程序在运行时发现和操作对象、类、方法和属性。通过反射，程序可以动态地创建对象、调用方法以及访问和修改属性。反射为灵活和动态的编程提供了强大的支持。

### 反射的作用

- 获取任意类的名称、package信息、所有属性、方法、注解、类型、类加载器等
- 获取任意对象的属性，并且能改变对象的属性
- 调用任意对象的方法
- 判断任意一个对象所属的类
- 实例化任意一个类的对象
- 通过反射我们可以实现动态装配，降低代码的耦合度,动态代理等。

### 反射的基本组件

- Class 类：每个类都有一个 Class 对象，通过它可以获取类的完整信息。
- Field 类：表示类的成员变量。
- Method 类：表示类的方法。
- Constructor 类：表示类的构造函数。

## Class 类

### 获取 Class 对象

**使用 `.class` 语法**

```java
Class<?> clazz = String.class;
```

**使用 `getClass()` 方法**

```java
String str = "hello";
Class<?> clazz = str.getClass();
```

### 创建对象

Java 中已经弃用 `Class.newInstance()` 方法，因为只可以调用无参构造方法，推荐使用 `Constructor.newInstance()`。

```java
Class<?> clazz = Class.forName("java.lang.String");
Object str =  clazz.newInstance();// [!code error]
Constructor<?> constructor = clazz.getConstructor();
Object o = constructor.newInstance();
```

## 对象

### 构造方法

| 方法名 | 描述 |
|---------|------|
| `getConstructor(Class<?>... parameterTypes)` | 获取指定参数类型的公共构造方法。 |
| `getDeclaredConstructor(Class<?>... parameterTypes)` | 获取指定参数类型的构造方法，包括私有构造方法。 |
| `getConstructors()` | 获取所有公共构造方法。 |
| `getDeclaredConstructors()` | 获取所有构造方法，包括私有构造方法。 |

```java
Class<?> clazz = Class.forName("java.lang.String");
Constructor<?> constructor = clazz.getConstructor();
System.out.println(constructor);
```


### 成员变量

| 方法名 | 描述 |
|---------|------|
| `getField(String name)` | 获取指定名称的公共成员变量。 |
| `getDeclaredField(String name)` | 获取指定名称的成员变量，包括私有成员变量。 |
| `getFields()` | 获取所有公共成员变量，包括从父类继承的成员变量。 |
| `getDeclaredFields()` | 获取所有成员变量，包括私有成员变量，但不包括从父类继承的成员变量。|

```java
Field[] declaredFields = clazz.getDeclaredFields();
for (Field declaredField : declaredFields) {
    System.out.println(declaredField);
}
```

### 成员方法

| 方法名 | 描述 |
|---------|------|
| `getMethod(String name, Class<?>... parameterTypes)` | 获取指定名称和参数类型的公共方法。 |
| `getDeclaredMethod(String name, Class<?>... parameterTypes)` | 获取指定名称和参数类型的方法，包括私有方法。 |
| `getMethods()` | 获取所有公共方法，包括从父类和接口继承的方法。 |
| `getDeclaredMethods()` | 获取所有方法，包括私有方法，但不包括从父类和接口继承的方法。 |

```java
Class<?> clazz = Class.forName("java.lang.String");
Method[] declaredMethods = clazz.getDeclaredMethods();
for (Method declaredMethod : declaredMethods) {
    System.out.println(declaredMethod);
}
```

## 反射的原理

1. 每个 Java 文件都会编译为 Class 字节码文件。
2. 在程序运行时被 ClassLoader 加载到 JVM 中，当类被加载后，JVM 会在内存中自动产生一个 Class 对象。
3. 通过 Class 对象获取成员变量、构造方法和成员方法。

默认创建对象的方法需要明确指定类名，属于硬编码实现，在使用反射后，只需要传入类名参数，就可以生成对象，降低了耦合性。

大部分的框架都会使用反射技术。