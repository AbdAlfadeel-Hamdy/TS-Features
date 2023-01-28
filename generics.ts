class ArrayOfNumbers {
  constructor(public collection: number[]) {}
  get(index: number): number {
    return this.collection[index];
  }
}
class ArrayOfStrings {
  constructor(public collection: string) {}
  get(index: number): string {
    return this.collection[index];
  }
}
class ArrayOfAnyThing<T> {
  constructor(public collection: T[]) {}
  get(index: number): T {
    return this.collection[index];
  }
}

const s1 = new ArrayOfAnyThing(["ans", "shgs"]);

console.log(s1.get(1));

const printStrings = (arr: string[]): void => {
  for (const ele of arr) console.log(ele);
};
const printNumbers = (arr: number[]): void => {
  for (const ele of arr) console.log(ele);
};
const printAnyThing = <T>(arr: T[]): void => {
  for (const ele of arr) console.log(ele);
};

printStrings(["a", "b", "c"]);
printAnyThing<string>(["a", "b", "c"]);
printAnyThing(["a", "b", "c"]);

class Car {
  print() {
    console.log("I am a Car");
  }
}

class House {
  print() {
    console.log("I am a House");
  }
}

interface Printable {
  print(): void;
}
const printCarOrHouse = <T extends Printable>(arr: T[]) => {
  for (const ele of arr) ele.print();
};

// printCarOrHouse([1, 2, 3]);
printCarOrHouse<House | Car>([new Car(), new House()]);
