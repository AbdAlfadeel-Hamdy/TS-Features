@classDecorator
class Boat {
  @testDecorator
  color: string = "red";
  @testDecorator
  get fotmattedColor(): string {
    return `The boat's color is ${this.color}`;
  }
  @logError("Oops the boat sunk")
  pilot(@parameterDecorator speed: string): void {
    if (speed === "fast") console.log("stop");
    else console.log("move");
  }
}

function classDecorator(constructor: typeof Boat) {
  console.log(constructor);
}
function parameterDecorator(target: any, key: string, index: number) {
  console.log(key, index);
}

function testDecorator(target: any, key: string) {
  console.log(key);
}

function logError(errorMessage: string) {
  return function (target: any, key: string, desc: PropertyDescriptor): void {
    const method = desc.value;

    desc.value = () => {
      try {
        method();
      } catch (err) {
        console.log(errorMessage);
      }
    };
  };
}
