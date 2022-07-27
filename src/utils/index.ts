function firstElement<Type>(arr: Type[]): undefined | Type {
  return arr[0];
}

// s is of type 'string'
const s = firstElement(["a", "b", "c"]);
// n is of type 'number'
const n = firstElement([1, 2, 3]);
// u is of type undefined
const u = firstElement([]);

function map<Input, Output>(arr: Input[], func: (args: Input) => Output): Output[] {
  return arr.map(func);
}

// Parameter 'n' is of type 'string'
// 'parsed' is of type 'number[]'
const parsed = map(["1", "2", "3"], (n) => parseInt(n));

function longest<Type extends { length: number }>(a: Type, b: Type): Type {
  if (a.length > b.length) {
    return a;
  } else {
    return b;
  }
}

// longerArray is of type 'number[]'
const longerArray = longest([1, 2], [1, 2, 3]);
// longerString is of type 'alice' | 'bob'
const longerString = longest("alice", "bob");
// Error! Numbers don't have a 'length' property
const notOK = longest(10, 100);

// function minimumLength<Type extends { length: number }>(obj: Type, minimum: number): Type {
//   if (obj.length > minimum) {
//     return obj;
//   } else {
//     return {
//       length: minimum,
//     };
//   }
// }

function combine<Type>(arr1: Type[], arr2: Type[]): Type[] {
  return arr1.concat(arr2);
}
// 传递类型参数
const arr = combine<string | number | boolean>([1, 2, 3], ["hello"]);

// 函数中的可选参数
declare function f(x?: number): void;
f(10);

function myForEach(arr: any[], callback: (arg: any, index?: number) => void) {
  for (let i = 0; i < arr.length; i++) {
    callback(arr[i], i);
  }
}

myForEach([1, 2, 3], (a, i) => console.log(i.toFixed()));
myForEach([1, 2, 3], (a) => console.log(a));

function makeDate(timestamp: number): Date;
function makeDate(m: number, d: number, y: number): Date;
function makeDate(mOrTimestamp: number, d?: number, y?: number): Date {
  if (d !== undefined && y !== undefined) {
    return new Date(y, mOrTimestamp, d);
  } else {
    return new Date(mOrTimestamp);
  }
}

// const d1 = makeDate(12345678);
// const d2 = makeDate(5, 5, 5);
// const d3 = makeDate(1, 3);
//
// function fn(x: string | boolean): void;
// function fn() {
//   // ...
// }
// fn();

// 指定this类型
interface User {
  id: number;
  admin: boolean;
}

declare const getDB: () => DB;

interface DB {
  filterUser(filter: (this: User) => boolean): User[];
}
const db = getDB();
const admins = db.filterUser(function (this: User) {
  return this.admin;
});

// unknown类型
function safeParse(s: string): unknown {
  return JSON.parse(s);
}
const obj = safeParse("123");

// never类型
function fn(x: string | number) {
  if (typeof x === "string") {
    // do something
  } else if (typeof x === "number") {
    // do something else
  } else {
    x; // has type 'never'!
  }
}

// Function 类型
// function doSomething(f: Function) {
//   return f(1, 2, 3);
// }
