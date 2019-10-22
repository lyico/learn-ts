// function add(arg1: number, arg2: number): number {
//   return arg1 + arg2;
// }

// const add2 = (arg1: number, arg2: number): number => arg1 + arg2;

// 函数类型
let add: (x: number, y: number) => number;

// add = (arg1: number, arg2: number) => arg1 + arg2;
// add = (arg1: number, arg2: number) => arg1 + arg2 + "123";

type Add = (x: number, y: number) => number;

let cc: Add;

cc = (num1: number, num2: number) => num1 + num2;

// 可选参数
type AddFunction = (x: number, y: number, z?: number) => number;

let testFun: AddFunction;
//默认值
testFun = (x: number = 5, y: number) => x + y;

// const handleData = (arg1: number, ...args: number[]) => {
//   //...
// };

//函数的重载
// function handleData(x: string): string[];
// function handleData(x: number): number[];
// function handleData(x: any): any {
//   if (typeof x === "string") return x.split("");
//   return x
//     .toString()
//     .split("")
//     .map((item: any) => Number(item));
// }

// console.log(handleData("abc"));
