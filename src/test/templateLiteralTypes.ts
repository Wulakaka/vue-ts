type PropEventSource<Type> = {
  on<Key extends string & keyof Type>(eventName: `${Key}Changed`, callback: (newValue: Type[Key]) => void): void;
};

declare function makeWatchedObject<Type>(obj: Type): Type & PropEventSource<Type>;

const person1 = makeWatchedObject({
  firstName: "Saoirse",
  lastName: "Ronan",
  age: 26
});

person1.on("firstNameChanged", (newName) => {
  console.log(newName.toUpperCase());
});
person1.on("ageChanged", (newAge) => {
  if (newAge < 0) {
    console.log('warning! negative age');
  }
});
