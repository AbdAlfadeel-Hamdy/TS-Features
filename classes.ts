class Vehicle {
  // color: string;
  // drive(): void {
  //   console.log("Go forward!");
  // }
  // private honk(): void {
  //   console.log("Peeb");
  // }
  constructor(public color: string) {
    // this.color = color;
  }
  protected honk(): void {
    console.log("Peeb");
  }
}

class Car extends Vehicle {
  constructor(public wheels: number, color: string) {
    super(color);
  }
  private drive(): void {
    console.log("Go Faster");
  }
  startDriving(): void {
    this.drive();
  }
  startHonking(): void {
    this.honk();
  }
}

const vehicle = new Vehicle("red");
const car = new Car(5, "red");
// vehicle.drive();
// vehicle.honk();
// car.drive();
car.startDriving();
// car.honk();
car.startHonking();
console.log(car.color);
console.log(car.wheels);
