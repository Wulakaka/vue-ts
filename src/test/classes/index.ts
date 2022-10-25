export class Point {
  // 字段声明
  x: number;
  y: number;
  constructor() {
    this.x = 0;
    this.y = 0;
  }
}

class Point1 extends Point {}

const pt = new Point1();
console.log(pt.x);

// class Base {
//   k = 4;
// }
//
// class Derived extends Base {
//   constructor() {
//     super();
//     console.log(this.k);
//   }
// }
// Getters / Setters
class C {
  _length = 0;
  get length() {
    return this._length;
  }
  set length(value) {
    this._length = value;
  }
}

// 不同类型的 get 和 set
class Thing {
  _size = 0;

  get size(): number {
    return this._size;
  }

  set size(value: number | string | boolean) {
    let num = Number(value);
    // Don't allow NaN, Infinity, etc
    if (!Number.isFinite(num)) {
      this._size = 0;
      return;
    }
    this._size = num;
  }
}

// Index Signatures
class MyClass {
  [s: string]: boolean | ((s: string) => boolean);

  check(s: string) {
    return this[s] as boolean;
  }
}

// implements clauses
interface Pingable {
  ping(): void;
}

class Sonar implements Pingable {
  ping() {
    console.log("ping");
  }
}

// class Ball implements Pingable {
//   pong() {
//     console.log("pone");
//   }
// }

// interface Checkable {
//   check(name: string): boolean;
// }
//
// class NameChecker implements Checkable {
//   check(s) {
//     return s.toLowerCase() === "ok";
//   }
// }

// interface A {
//   x: number;
//   y?: number;
// }
//
// class B implements A {
//   x = 0;
// }
// const b = new B();
// b.y = 10;

// extends Clauses
class Animal {
  move() {
    console.log("Moving along!");
  }
}
class Dog extends Animal {
  woof(times: number) {
    for (let i = 0; i < times; i++) {
      console.log("woof!");
    }
  }
}

const dog = new Dog();
dog.move();
dog.woof(3);

class Base {
  greet() {
    console.log("Hello, world!");
  }
}
class Derived extends Base {
  greet(name?: string) {
    if (name === undefined) {
      super.greet();
    } else {
      console.log(`Hello, ${name.toUpperCase()}`);
    }
  }
}
const d = new Derived();
d.greet();
d.greet("reader");
// Alias the derived instance through a base class reference
// 通过基类来别名派生实例，因为派生类遵循基类合约，所以派生类的实例可以使用基类的类型
// const b: Base = d;
// d.greet();

// class NotFollow extends Base {
//   greet(name: string) {
//     console.log(`Hello, ${name.toUpperCase()}`);
//   }
// }

// Type-only Field Declarations
interface Animal {
  dateOfBirth: any;
}

interface Dog extends Animal {
  breed: any;
}

class AnimalHouse {
  resident: Animal;
  constructor(animal: Animal) {
    this.resident = animal;
  }
}

class DogHouse extends AnimalHouse {
  // Does not emit JavaScript code,
  // only ensures the types are correct
  declare resident: Dog;
  constructor(dog: Dog) {
    super(dog);
  }
}

// Initialization Order
class BaseOrder {
  name = "base";
  constructor() {
    console.log("My name is " + this.name);
  }
}

class DerivedOrder extends BaseOrder {
  name = "derived";
}

// Print "base", not "derived"
const derivedOrder = new DerivedOrder();

// protected member
class Greeter {
  public greet() {
    console.log("Hello," + this.getName());
  }
  protected getName() {
    return "hi";
  }
}
class SpecialGreeter extends Greeter {
  public howdy() {
    // OK to access protected member here
    console.log("Howdy", +this.getName());
  }
}
const g = new SpecialGreeter();
g.greet();
// g.getName();

// Cross-hierarchy protected access
class BaseA {
  protected x: number = 1;
}
class Derived1 extends BaseA {
  protected x: number = 5;
}

class Derived2 extends BaseA {
  f1(other: Derived2) {
    other.x = 10;
  }
  // f2(other: BaseA) {
  //   other.x = 10;
  // }
}

// private member
// class BaseB {
//   private x = 0;
// }
//
// class DerivedB extends BaseB {
//   x = 1;
// }

// cross-instance private access
class A {
  private x = 10;
  public sameAs(other: A) {
    // No Error
    return other.x === this.x;
  }
}

declare function loadLastInstances(): any[];

class Foo {
  static #count = 0;

  get count() {
    return Foo.#count;
  }

  static {
    try {
      const lastInstances = loadLastInstances();
      Foo.#count += lastInstances.length;
    } catch {}
  }
}

// Generic Classes
// class Box<Type> {
//   contents: Type;
//   constructor(value: Type) {
//     this.contents = value;
//   }
// }
// const box = new Box("Hello!");

// this Type
// class Box {
//   contents: string = "";
//   set(value: string) {
//     this.contents = value;
//     return this;
//   }
// }
//
// class ClearableBox extends Box {
//   clear() {
//     this.contents = "";
//   }
// }
//
// const a = new ClearableBox();
// const b = a.set("hello");

class Box {
  content: string = "";
  sameAs(other: this) {
    return other.content === this.content;
  }
}
class DerivedBox extends Box {
  otherContent: string = "?";
}

const base = new Box();
const derived = new DerivedBox();
// derived.sameAs(base);
