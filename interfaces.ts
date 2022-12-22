// interface Vehicle {
//   name: string;
//   year: number;
//   broken: boolean;
//   dateOfMake: Date;
//   summary(): string;
//   details: () => string;
// }
interface Reoprtable {
  // name: string;
  // year: number;
  // broken: boolean;
  // dateOfMake: Date;
  summary(): string;
  // details: () => string;
}

type vehicle = {
  name: string;
  year: number;
  broken: boolean;
  dateOfMake: Date;
};
const oldToyota = {
  name: "Toyota",
  year: 2000,
  broken: true,
  dateOfMake: new Date(),
  summary(): string {
    return `Name: ${this.name}`;
  },
  details(): string {
    return `Name: ${this.name}, Year: ${this.year}`;
  },
};

// const printCar = (car: {
//   name: string;
//   year: number;
//   broken: boolean;
// }): void => {
//   console.log(`Name: ${car.name}`);
//   console.log(`Year: ${car.year}`);
//   console.log(`Broken: ${car.broken}`);
// };
// const printCar_1 = (car: Vehicle): void => {
//   console.log(car.summary());
//   console.log(car.details());
// };
const drink = {
  name: "Pepsi",
  color: "black",
  sugar: 60,
  summary(): string {
    return `${this.name} has ${this.sugar} of sugar`;
  },
};
const printReport = (item: Reoprtable): void => {
  console.log(item.summary());
  // console.log(item.details());
};
const printCar_2 = (car: vehicle): void => {
  console.log(`Name: ${car.name}`);
  console.log(`Year: ${car.year}`);
  console.log(`Broken: ${car.broken}`);
};

printReport(oldToyota);
printReport(drink);
printCar_2(oldToyota);
