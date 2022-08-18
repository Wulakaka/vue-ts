export {}
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
// const notOK = longest(10, 100);

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
// declare function f(x?: number): void;
// f(10);

function myForEach(arr: any[], callback: (arg: any, index: number) => void) {
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

// declare const getDB: () => DB;
//
// interface DB {
//   filterUser(filter: (this: User) => boolean): User[];
// }
// const db = getDB();
// const admins = db.filterUser(function (this: User) {
//   return this.admin;
// });

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

// readonly properties
interface ReadonlyPerson {
  readonly name: string;
  readonly age: number;
}

interface Person {
  name: string;
  age: number;
}

const person: ReadonlyPerson = {
  name: "agv",
  age: 12,
};

const otherPerson: Person = person;
otherPerson.name = "123";

// index signature
interface NumberOrStringDictionary {
  [index: string]: number | string;
  length: number; // ok, length is a number
  name: string; // ok, name is a string
}

interface BasicAddress {
  name?: string;
  street: string;
  city: string;
  country: string;
  postalCode: string;
}

interface AddressWithUnit extends BasicAddress {
  unit: string;
  // postalCode: number;
}

const address: AddressWithUnit = {
  name: "a",
  street: "a",
  city: "a",
  country: "a",
  postalCode: "asfd1",
  unit: "a",
};

interface Colorful {
  color: string;
}

interface Circle {
  radius: number;
  // color: number;
}

type ColorfulCircle = Colorful & Circle;

function draw(circle: Colorful & Circle) {
  console.log(`Color was ${circle.color}`);
  console.log(`Radius was ${circle.radius}`);
}

draw({ color: "red", radius: 42 });

interface Box<Type> {
  contents: Type;
}

let box: Box<string>;

interface Apple {
  color: string;
}
type AppleBox = Box<Apple>;

function setContents<Type>(box: Box<Type>, newContents: Type) {
  box.contents = newContents;
}

type NewBox<Type> = {
  contents: Type;
};

type OrNull<Type> = Type | null;
type OneOrMany<Type> = Type | Type[];
type OneOrManyOrNull<Type> = OrNull<OneOrMany<Type>>;
type OneOrManyOrNullString = OneOrManyOrNull<string>;

// function doSomething(value: Array<string>) {
//   //.
// }
// const myArray: string[] = ["hello", "world"];
// doSomething(myArray);
// doSomething(["hello", "world"]);

function doStuff(values: ReadonlyArray<string>) {
  // We can read from 'values'
  const copy = values.slice();
  console.log(`The first Value is ${values[0]}`);
  // but we can't mutate 'values'
  // values.push("hello");
}

// let x: readonly string[] = [];
// let y: string[] = [];
// x = y;
// x = ["1", "2"];
// y.push("123");
// y = x;

type StringNumberPair = [string, number];

function doSomething(stringHash: [string, number]) {
  const [inputString, hash] = stringHash;
  console.log(inputString);
  console.log(hash);
}

type StringNumberBooleans = [string, number, ...boolean[]];
type StringBooleansNumber = [string, ...boolean[], number];
type BooleansStringNumber = [...boolean[], string, number];

const a1: StringNumberBooleans = ["hello", 1];

const point = [3, 4] as const;
function distanceFromOrigin([x, y]: readonly [number, number]) {
  return Math.sqrt(x ** 2 + y ** 2);
}
distanceFromOrigin(point);

// 泛型函数
function identity<Type>(arg: Type): Type {
  return arg;
}

// const myIdentity: <Type>(arg: Type) => Type = identity;
// 调用签名
// const myIdentity: { <Type>(arg: Type): Type } = identity;
// 泛型接口
// interface GenericIdentityFn {
//   <Type>(arg: Type): Type;
// }
// const myIdentity: GenericIdentityFn = identity;
// 泛型接口-带参数
interface GenericIdentityFn<Type> {
  (arg: Type): Type;
}
// 会有错误
type Gen<Type> = {
  (arg: Type): Type;
};

const myIdentity: GenericIdentityFn<number> = identity;

// 泛型类
// class GenericNumber<NumType> {
//   zeroValue: NumType;
//   add: (x: NumType, y: NumType) => NumType;
// }
//
// const myGenericNumber = new GenericNumber<number>();
// myGenericNumber.zeroValue = 0;
// myGenericNumber.add = function (x, y) {
//   return x + y;
// };
//
// const stringNumeric = new GenericNumber<string>();
// stringNumeric.zeroValue = "";
// stringNumeric.add = function (x, y) {
//   return x + y;
// };

// 泛型接口约束
interface LengthWise {
  length: number;
}
function loggingIdentity<Type extends LengthWise>(arg: Type): Type {
  console.log(arg.length);
  return arg;
}

// 在泛型约束上使用类型参数
function getProperty<Type, Key extends keyof Type>(obj: Type, key: Key) {
  return obj[key];
}
//
// const x = { a: 1 };
// getProperty(x, "a");
// getProperty(x, "b");

// 在泛型中使用类的类型
function create<Type>(c: { new (): Type }): Type {
  return new c();
}

// 在泛型中使用类类型
class BeeKeeper {
  hasMask = true;
}

class ZooKeeper {
  nametag = "Mikle";
}

class Animal {
  numLegs = 4;
}

class Bee extends Animal {
  keeper: BeeKeeper = new BeeKeeper();
}

class Lion extends Animal {
  keeper: ZooKeeper = new ZooKeeper();
}

function createInstance<A extends Animal>(c: new () => A): A {
  return new c();
}

createInstance(Lion).keeper.nametag;
createInstance(Bee).keeper.hasMask;

// keyof 类型操作符
type Point = { x: number; y: number };
type P = keyof Point;

type Arrayish = { [n: number]: unknown; length: number };
type A = keyof Arrayish;

type Mapish = { [k: string]: boolean };
type M = keyof Mapish;

// typeof 操作符
function f() {
  return { x: 10, y: 3 };
}
type P1 = ReturnType<typeof f>;

// 索引访问类型
// type Age = Person["age"];

type key = "age";
type Age = Person[key];
