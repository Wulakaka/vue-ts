class TestBase {
  name = "base";
  constructor() {
    console.log(this.name);
  }
}

class TestDerived extends TestBase {
  name = "derived";
}

const derived = new TestDerived();

class MyClassA {
  name = "MyClass";
  getName = () => {
    return this.name;
  };
}
const myClass = new MyClassA();

console.log(myClass.getName());
