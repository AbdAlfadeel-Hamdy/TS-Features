let apples = 5;
let userName: string = "Adham";
let hasMobile: boolean = true;
let nothing: null = null;
let date: Date = new Date();
let colors: string[] = ["red", "blue", "green"];
class Player {}
let playerOne = new Player();
// playerOne = new Date();
let point: {
  x: number;
  y: number;
} = {
  x: 3,
  y: 4,
};
const printNumber: (i: number) => void = (i: number) => {
  console.log(i);
};

printNumber(5);

const json = '{"x": 10, "y": 20, "z":30}';
const coords: { x: number; y: number } = JSON.parse(json);
console.log(coords);
const random: (string | number)[] = ["3", 3];
