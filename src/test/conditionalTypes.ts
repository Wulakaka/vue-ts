export {}

interface Animal {
  live(): void;
}

interface Dog extends Animal {
  woof(): void;
}

type Example1 = Dog extends Animal ? number : string;

type Example2 = RegExp extends Animal ? number : string;

interface IdLabel {
  id: number;
}
interface NameLabel {
  name: string;
}

// function createLabel(id: number): IdLabel;
// function createLabel(name: string): NameLabel;
// function createLabel(nameOrId: string | number): IdLabel | NameLabel;
// function createLabel(nameOrId: string | number): IdLabel | NameLabel {
//   throw "unimplemented";
// }
// 使用条件类型简化重载
type NameOrId<T extends number | string> = T extends number ? IdLabel : NameLabel;

function createLabel<T extends number | string>(nameOrId: T): NameOrId<T> {
  throw "unimplemented";
}

const a = createLabel("typescript");
const b = createLabel(2.5);
const c = createLabel(Math.random() ? "hello" : 42);

type MessageOf<T> = T extends { message: unknown } ? T["message"] : never;
interface Email {
  message: string;
}
interface Dog {
  bark(): void;
}
type EmailMessageContent = MessageOf<Email>;

type DogMessageContents = MessageOf<Dog>;

// type Flatten<T> = T extends any[] ? T[number] : T;
// 使用 infer 声明泛型变量Item
// type Flatten<Type> = Type extends Array<infer Item> ? Item : Type;
// type Str = Flatten<string[]>;
// type Num = Flatten<number>;

type GetReturnType<Type> = Type extends (...args: never[]) => infer Return ? Return : never;
type Num = GetReturnType<() => number>;
type Str = GetReturnType<(x: string) => string>;
type Bools = GetReturnType<(a: string, b: string) => boolean[]>;

declare function stringOrNum(x: string): number;
declare function stringOrNum(x: number): string;
declare function stringOrNum(x: string | number): string | number;
type T1 = ReturnType<typeof stringOrNum>;

type ToArray<Type> = Type extends any ? Type[] : never;
type ToArrayNonDist<Type> = [Type] extends [any] ? Type[] : never;
type StrArrOrNumArr = ToArrayNonDist<string | number>;
