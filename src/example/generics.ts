//泛型

// const getArray = <T, U>(arg1: T, arg2: U, times: number): [T, U][] => {
//   return new Array(times).fill([arg1, arg2]);
// };

// console.log(getArray(1, "a", 3));

// getArray(1, "a", 3).forEach(item => {
//   console.log(item[0]);
//   console.log(item[1]);
// });

// let getArray1: <T>(arg: T, times: number) => T[];

// getArray1 = (arg: any, times: number) => {
//   return new Array(times).fill(arg);
// };

// console.log(getArray1("123", 5));

// type getArray = <T>(arg: T, times: number) => T[];

// // 泛型约束
// interface Value {
//   length: number; //约束
// }
// const getArray = <T extends Value>(arg: T, times: number): T[] => {
//   return new Array(times).fill(arg);
// };

// console.log(getArray([1, 3], 3));
// // console.log(getArray(123, 3));
