## 开发环境安装

### 1.安装 Node.js

安装 Node.js 非常简单，只要到 Node 官网下载一个最新版本就可以了：<https://nodejs.org/zh-cn/>在 windows 上的安装方法和安装 QQ 一样。我这里就不重复描述了。 安装好后，可以打开命令行工具，同时按下 win+R，然后输入 cmd 就可以打开，打开后输入

```javascript
node - v;
npm - v;
```

### 2.安装 TypeScript 包

在刚才的命令行窗口继续输入如下命令：

```javascript
   npm install typescript -g
   tsc --version
```

需要注意的是：如果你是 mac 电脑，要使用<kbd>sudo npm install typescript -g</kbd>指令进行安装

### 3.简单测试，编写 HelloWorld

1. 初始化项目：进入你的编程文件夹后，可以使用<kbd>npm init -y</kbd>来初始化项目，生成 package.json 文件。

2. 创建 tsconfig.json 文件，在终端中输入<kbd>tsc --init：</kbd>它是一个 TypeScript 项目的配置文件，可以通过读取它来设置 TypeScript 编译器的编译参数。

3. 安装@types/node,使用<kbd>npm install @types/node --dev-save</kbd>进行安装。这个主要是解决模块的声明文件问题。

4. 编写 HelloWorld.ts 文件，然后进行保存，代码如下。

```
  var a:string = "HelloWorld"
  console.log(a)
```

5. 在当前的目录下<kbd>tsc 当前 ts 文件</kbd> 或者 在 Vscode 的任务菜单下，打开运行生成任务，然后选择 tsc：构建-tsconfig.json，这时候就会生成一个 helloWorld.js 文件

在终端中输入 node helloWorld.js 就可以看到结果了。

注：tsconfig.json 是如何去编译 ts 文件的一些配置

```
{
  "compilerOptions": {
    "allowSyntheticDefaultImports": true, // 允许从没有设置默认导出的模块中默认导入。这并不影响代码的显示，仅为了类型检查。
    "allowUnreachableCode": true, // 不报告执行不到的代码错误。
    "allowUnusedLabels": false,	// 不报告未使用的标签错误
    "alwaysStrict": false, // 以严格模式解析并为每个源文件生成 "use strict"语句
    "baseUrl": ".", // 工作根目录
    "experimentalDecorators": true, // 启用实验性的ES装饰器
    "esModuleInterop": true, //
    "jsx": "preserve", // 在 .tsx文件里支持JSX,jsx 的编译方式
    "jsxFactory": "React.createElement", // 定义 jsx 工厂方法，React.createElement 还是 h（2.1 以上）
    "sourceMap": true, // 是否生成map文件
    "module": "commonjs", // 指定生成哪个模块系统代码，选项有["commonjs", "amd", "umd", "system", "es6", "es2015", "esnext", "none"]
    "moduleResolution": "node", 决定如何处理模块。或者是"Node"对于Node.js/io.js，或者是"Classic"（默认）
    "noImplicitAny": false, // 是否默认禁用 any
    "removeComments": true, // 是否移除注释
    "importHelpers": true, // 从tslib导入辅助工具函数（比如__extends，__rest等）
    "types": [ //指定引入的类型声明文件，默认是自动引入所有声明文件，一旦指定该选项，则会禁用自动引入，改为只引入指定的类型声明文件，如果指定空数组[]则不引用任何文件
      "node", // 引入 node 的类型声明
    ],
    "paths": { // 指定模块的路径，和baseUrl有关联，和webpack中resolve.alias配置一样
      "src": [ //指定后可以在文件之直接 import * from 'src';
        "./src"
      ],
    },
    "target": "ESNext", // 编译的目标是什么版本的
    "outDir": "./dist", // 输出目录
    "declaration": true, // 是否自动创建类型声明文件
    "declarationDir": "./lib", // 类型声明文件的输出目录
    "allowJs": false, // 允许编译javascript文件。
    "lib": [ // 编译过程中需要引入的库文件的列表,可以是["es5", "es6", "es2015", "es7", "es2016", "es2017", "esnext", "dom", "dom.iterable", "webworker", "scripthost", "es2015.core", "es2015.collection", "es2015.generator", "es2015.iterable", "es2015.promise", "es2015.proxy", "es2015.reflect", "es2015.symbol", "es2015.symbol.wellknown", "es2016.array.include", "es2017.object", "es2017.sharedmemory", "esnext.asynciterable"]（2.0 以上）
      "es5",
      "es2015",
      "es2016",
      "es2017",
      "es2018",
      "dom"
    ]
  },
  // 指定一个匹配列表（属于自动指定该路径下的所有ts相关文件）
  "include": [
    "src/**/*"
  ],
  // 指定一个排除列表（include的反向操作）
  "exclude": [
    "demo.ts"
  ],
  // 指定哪些文件使用该配置（属于手动一个个指定文件）
  "files": [
    "demo.ts"
  ]
}
```
