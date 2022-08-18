export {}
// Object with Properties
// Code
import LogOptions = GreetingLib.LogOptions;
import AlertOptions = GreetingLib.AlertOptions;

let result = myLib.makeGreeting("hello, world")
console.log("The computed greeting is: " + result)

let count = myLib.numberOfGreetings;
// Declaration
declare namespace myLib {
  function makeGreeting(s: string): string;
  // 注意：这里有let
  let numberOfGreetings: number;
}

// Overloaded Functions
// Code
// let x: Widget = getWidget(43);

// let arr: Widget[] = getWidget("all of them");

// Declaration
// declare function getWidget(n: number): Widget;
// declare function getWidget(s: string): Widget[];

// Reusable Types (Interfaces)
// Code
greet({
  greeting: 'hello, world',
  duration: 4000
})
// Declaration
// 使用 interface 定义有属性的类型
interface GreetingSettings {
  greeting: string;
  duration?: number;
  color?: string;
}
declare function greet(setting: GreetingSettings):void;

// Reusable Types (Type Aliases)
// Code
function getGreeting() {
  return 'howdy'
}
class MyGreeter extends Greeter {}
greet1("hello")
greet1(getGreeting)
// greet1(new MyGreeter())

// Declaration
// 可以使用类型别名来简化类型
type GreetingLike = string | (() => string) | MyGreeter;
declare function greet1(g: GreetingLike): void;

// Organizing Types
/* greeter 对象可以输出日志到文件或展示报警提示。
可以传递 LogOptions 给 .log(...) 或传递 AlertOptions 给 .alert(...) */

// Code
// const g = new Greeter("Hello")
// g.log({
//   verbose: true
// })
// g.alert({
//   modal: false,
//   title: 'Current Greeting'
// })

// Declaration
// 使用命名空间来组织类型
declare namespace GreetingLib {
  interface LogOptions {
    verbose?: boolean;
  }
  interface AlertOptions {
    modal: boolean;
    title?: string;
    color?: string;
  }
}

// 也可以在一个声明中使用嵌套命名空间
declare namespace GreetingLib.Options {
  interface Log {
    verbose?: boolean;
  }
  interface Alert {
    modal: boolean;
    title?: string;
    color?: string;
  }
}

// Classes
// 可以通过实例化 Greeter 来创建一个 greeter，或者通过继承它创建一个自定义greeter
// Code
const myGreeter = new Greeter('hello, world')
myGreeter.greeting = 'howdy'
myGreeter.showGreeting();

class SpecialGreeter extends Greeter {
  constructor() {
    super("Very special greetings");
  }
}

// Declaration
// 使用 declare class 来描述一个类或类类的对象。类可以有属性和方法以及构造器。
declare class Greeter {
  constructor(greeting: string);

  greeting: string;
  showGreeting():void;
}

// Global Variables
// 全局变量 foo 包含了widgets的数量。
console.log("Half the number of widgets is " + foo /2);
// Declaration
/*使用 declare var 来描述变量。
如果变量是只读的，可以使用 declare const。
也可以使用 declare let，如果是块级作用域。*/
/** The number of widgets present */
declare var foo: number;

// Global Functions
/* 可以传递一个字符串给 greet 函数，来显示问好 */
// Code
greet2('hello, world')
// Declaration
/* 使用 declare function 来声明函数 */
declare function greet2(greeting: string):void;
