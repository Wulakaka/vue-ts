/* greeter 对象可以输出日志到文件或展示报警提示。
可以传递 LogOptions 给 .log(...) 或传递 AlertOptions 给 .alert(...) */


// Code
const g3 = new Greeter3("Hello")
g3.log({
  verbose: true
})
g3.alert({
  modal: false,
  title: 'Current Greeting'
})

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

declare class Greeter3{
  constructor(s:string);
  log(option: GreetingLib.LogOptions): void;
  alert(option: GreetingLib.AlertOptions): void;
}
